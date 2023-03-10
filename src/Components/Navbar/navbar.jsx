import React, { useState } from 'react'
import { Link } from "react-router-dom";


import Modal from '../Modal/Modal';

import Cart from "../Cart/Cart"


import "./style.css"

const Navbar = () => {

    const [viewModal , setViewModal] = useState(false)

    return (
        <>

            <div>

                <nav className="navbar navbar-expand-sm bg-success">
                    <div className="container-fluid ">
                        <a className="navbar-brand fs-1 fw-bolder" id='brand_name' href="#">GetFood</a>
                        {/* <a className="nav-link active  text-white border border-white rounded p-2 ms-1 ms-sm-5" href="#">My Orders</a> */}
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse  " id="navbarNav">
                            {
                                (localStorage.getItem("getFoodToken"))

                                &&
                                <div className='d-sm-flex'>

                                    <a className="nav-link active text-white p-2 m-1 border border-2 border-white rounded fw-bold d-inline ">My Orders</a>
                                    <a className="nav-link active text-white p-2 m-1 fw-bold ">Welcome,{ (localStorage.getItem("getFoodUserName")).toString() || "Please LogOut and LogIn Again"}</a>
                                </div>
                            }

                            {
                                (localStorage.getItem("getFoodToken"))

                                    ?
                                    <ul className="navbar-nav ms-auto d-inline-block d-sm-flex ">
                                        <li className="nav-item  border border-2 border-white rounded m-1  px-1">
                                            <Link className="nav-link active fw-bold" to={"/"} onClick={ ()=>{setViewModal(true)}}>Cart 2 </Link>
                                        </li>
                                        <li className="nav-item rounded bg-white m-1  px-1" onClick={() => { localStorage.removeItem("getFoodToken"); alert("LogOut Successful"); }}>
                                            <Link className="nav-link active text-danger fw-bold" to={"/"}>LogOut</Link>
                                        </li>
                                    </ul>

                                    :
                                    <ul className="navbar-nav ms-auto d-inline-block d-sm-flex ">
                                        <li className="nav-item  bg-white  rounded m-1  px-1">
                                            <Link className="nav-link active text-success fw-bold" to={"/logIn"} >LogIn</Link>
                                        </li>
                                        <li className="nav-item border border-2 border-white  rounded m-1  px-1">
                                            <Link className="nav-link active fw-bold" to={"/signIn"}>SignIn</Link>
                                        </li>
                                    </ul>

                            }
                        </div>


                        {viewModal && <Modal onClose={ ()=>{setViewModal(false)} }> <Cart /> </Modal>}
                    </div>
                </nav>

            </div>


        </>
    )
}

export default Navbar