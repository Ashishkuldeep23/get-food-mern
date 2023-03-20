
import React from "react";

import "./style.css"

const AboutMe = () => {

    return (

        <>

     
            <div className="d-flex flex-column align-items-center justify-content-center right_content">

               <div className='row' >


                    <div className=" bg-success  border border-bottom-0 border-danger rounded aboutMeAk" >


                        <div className=' d-flex flex-column align-items-center text-center  text-white'>

                            <h1 className='text-danger p-1 border border-danger border-end-0 border-start-0 rounded-3'>About Me</h1>

                            <img src="https://i.pinimg.com/564x/72/6e/92/726e92a0ef5a07e46e0403ae36c0b228.jpg" id="about_img" alt="Ashish Pic" />

                            <h1>Ashish Kuldeep</h1>

                            <div>
                                <a href="https://www.linkedin.com/in/ashish-kuldeep-09b96018b" rel="noreferrer" target={"_blank".toString()} ><img src="https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Linkedin2_svg-512.png" className="logos" alt="Linkedin" />
                                </a>

                                <a href="https://github.com/Ashishkuldeep23" rel="noreferrer" target={"_blank".toString()} ><img src="https://cdn3.iconfinder.com/data/icons/social-media-2253/25/Group-512.png" className="logos" alt="Github" /></a>

                                <a href="https://mobile.twitter.com/ashishkuldeep23" rel="noreferrer" target={"_blank".toString()}><img src="https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Twitter5_svg-512.png" className="logos" alt="Tiwtter" /></a>

                                <a href="https://www.youtube.com/@ashishkuldeep2305" rel="noreferrer" target={"_blank".toString()} ><img src="https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Youtube3_svg-512.png" className="logos" alt="Youtube" /></a>
                            </div>


                            <div>
                                <h4>I am learning web development.</h4>
                                <h4>I am following MERN Stack.</h4>
                                <h4>Follow me on social media.</h4>
                            </div>


                        </div>

                    </div>

                </div>



            </div>






        </>

    )

}



export default AboutMe
