import React, { useState } from 'react'
import { Link } from "react-router-dom";


import Modal from '../Modal/Modal';

import Cart from "../Cart/Cart"


import "./style.css"

const Navbar = () => {

    // // // Below these state var is used in show modal(react createPortal div).
    const [viewModalCart, setViewModalCart] = useState(false)
    const [viewModalMyOrders, setViewModalMyOrders] = useState(false)

    // // // Below state var is used to check user is previously logedIn or not.
    const [isLogedIn , setIsLogedIn] = useState(localStorage.getItem("getFoodToken"))

    const [cartValue , setCartValue] = useState(2)

    return (
        <>

            <div>

                <nav className="navbar navbar-expand-sm bg-success">
                    <div className="container-fluid ">
                        <a className="navbar-brand fs-1 fw-bolder" id='brand_name' href="#">GetFood</a>
                        {/* <a className="nav-link active  text-white border border-white rounded p-2 ms-1 ms-sm-5" href="#">My Orders</a> */}

                        <div className='ms-auto'>
                            {/* Now i'm using two cart btn , one on rigth in sm and above and one on left of menu btn in below of sm  */}
                            {/* Cart 1st */}

                            {
                                (isLogedIn)
                                &&

                                <button className="rounded border border-2 border-white rounded m-1  p-2 bg-success d-sm-none" style={{ marginLeft: "80vh" }}>
                                    <Link className="nav-link active fw-bold text-white" to={"/"} onClick={() => { setViewModalCart(true) }}><i className="fa-solid fa-cart-shopping"></i> <span className="badge rounded-pill bg-danger">{cartValue}</span> </Link>
                                </button>
                            }

                            <button className="navbar-toggler m-1" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </div>


                        <div className="collapse navbar-collapse  " id="navbarNav">
                            {
                                (isLogedIn)

                                &&
                                <div className='d-sm-flex'>

                                    <a className="nav-link active text-white p-2 m-1 border border-2 border-white rounded fw-bold d-inline" onClick={() => { setViewModalMyOrders(true) }}>My Orders</a>
                                    <a className="nav-link active text-white p-2 m-1 fw-bold ">Welcome,{(localStorage.getItem("getFoodUserName")) || "Please LogOut and LogIn Again"}</a>
                                </div>
                            }



                            {/* Cart 2nd */}

                            {
                                (isLogedIn)

                                ?
                                <ul className="navbar-nav ms-auto d-inline-block d-sm-flex ">
                                    <li className="nav-item  border border-2 border-white rounded m-1 px-1 d-none d-sm-block">
                                        <Link className="nav-link active fw-bold" to={"/"} onClick={() => { setViewModalCart(true) }}><i className="fa-solid fa-cart-shopping"></i> <span className="badge rounded-pill bg-danger">{cartValue}</span> </Link>
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



                    </div>
                </nav>

                {/* Below is used in show cart */}
                {viewModalCart && <Modal onClose={() => { setViewModalCart(false) }} title="My Cart Items"> <Cart /> </Modal>}

                {/* Below is used in show My orders */}
                {viewModalMyOrders && <Modal onClose={() => { setViewModalMyOrders(false) }} title="My Orders"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nobis repellendus animi quae vel a ea non repellat tempora perspiciatis vero aliquam quas quaerat itaque perferendis dignissimos, doloremque reiciendis fugiat!  </Modal>}

            </div>


        </>
    )
}

export default Navbar