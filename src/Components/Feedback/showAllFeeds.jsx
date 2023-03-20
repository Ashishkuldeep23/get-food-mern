import React, { useState } from 'react'

import done from "./done.mp3"

import "./style.css"

import IndividualFeed from './IndividualFeed'


const ShowAllFeeds = () => {

    const [listOfAllFeeds, setListOfAllFeeds] = useState([])


    // // // useRef hook for scrool down when somthing done.
    // const reftoAllFeed = useRef(null);
    // const refFeedClickBtn = useRef(null)

    // // // to check network ---------->
    const network = navigator.onLine




    // // // Show all feed handler function ----->
    async function showAllFeedBack() {


        if (network === false) {
            // alertBoxValue = 1
            // return showAlertBox("Please connect with network.\nBecause network connection needed for DB call.", false)

            return alert("Please connect with network.\nBecause network connection needed for DB call.")
        }



        let prrocessAllFeed = document.getElementById("process_all_feeds")
        prrocessAllFeed.style.visibility = "visible"
        // prrocessAllFeed.style.display = "block";


        let data = await fetch("https://feedback-hzwx.onrender.com/getFeedback/smallReact1")

        let a = await data.json()


        if (a.status === false) {
            prrocessAllFeed.style.display = "hidden"
            prrocessAllFeed.style.display = "none"

            return alert(a.message)

        }


        if (a.status === true) {
            // // // Process hide and already shown value ---->
            prrocessAllFeed.style.visibility = "hidden"


            // // // Make display block to see ---------->

            // document.querySelector(".user_feeds_are").style.display = "block"

            // // // Experiment here (Worked well) --------->
            let data = a.data
            setListOfAllFeeds(data)

            new Audio(done).play()



            // // // After successfull fetched data scrolling window till div --->
            // // // Experiment(worked) ================>
            // // // Window scrool to output div ----->

            // // // Not Working in seprate 
            // reftoAllFeed.current?.scrollIntoView({ behavior: "smooth" })
            // reftoAllFeed.current?.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" })


            let periviousFeedBack = localStorage.getItem("FeedBackForSmallRaectAK")
            if (periviousFeedBack !== "yes") {
                alert("Please Give your valuable feedback for this Small React app.\nMy apology for Alert.")
            }


        }

    }




    return (
        <>

            <div className="show_all_feeds_topmost_div " >

                <div className="show_All_FeedBack_main">
                    <h1>Click on Show Button to see all Feedbacks</h1>
                    <input type="button" value="Show All Feedbacks" onClick={() => { showAllFeedBack() }} id="show_all_feed_btn" />

                    <div id="process_all_feeds"></div>

                    {/* Experiment -----------> */}

                    <div id="all_feedback">


                        {


                            listOfAllFeeds.map((item, index) => {

                                return (<IndividualFeed
                                    key={index}
                                    feedbackName={item.feedbackName}
                                    feedbackType={item.feedbackType}
                                    feedbackMsg={item.feedbackMsg}
                                    reply={item.reply}
                                    whenCreated={item.whenCreated}
                                    index={index}
                                />)
                            })



                        }



                    </div>


                </div>

            </div>


        </>
    )
}

export default ShowAllFeeds
