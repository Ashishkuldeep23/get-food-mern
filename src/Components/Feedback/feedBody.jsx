import React from "react";

import PostFeed from "./PostFeed"

import AboutMe from "./AboutMe"

import ShowAllFeeds from "./showAllFeeds"



import { Link } from "react-router-dom";


// import done from "./done.mp3"


const FeedBody = () => {









    // // // // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< UI Section >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    return (
        <>





            <div className="new_feed_container">

                <Link to="/" className="btn btn-dark fw-blod m-2 position-fixed top-0 left-0"><i className="fa-solid fa-house"></i></Link>


                <div className="d-md-flex justify-content-evenly">

                    {/* Main of post feed from */}
                    <PostFeed />


                    {/* Main for about me */}
                    <AboutMe /> 

                </div>



                {/* show all feedback div ----> */}

                {/* <div className=" d-flex justify-content-center "> */}

                    <ShowAllFeeds />
                {/* </div> */}



                <Link to="/" className="btn btn-dark fw-blod w-100 my-1"><i className="fa-solid fa-house"></i> Back to Home </Link>


            </div>








        </>
    )

}



export default FeedBody