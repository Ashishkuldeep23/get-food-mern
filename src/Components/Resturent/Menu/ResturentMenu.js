import React from 'react'

// import foodItems from "../foodItemsAPI"




// // // Menu Section starts here ------------------------->
const ResturentMenu = ({ findFood, menuList  }) => {


    return (


        <>

            <div id='navBarAk' className=' border border-success border-3 rounded rounded-pill px-4 py-2'>

                <ul className="nav nav-tabs justify-content-center">

                    <li className="nav-item" onClick={() => { findFood("All") }} >
                        <a className="nav-link active" aria-current="page" href="#">All</a>
                    </li>

                    {/* Two all coming becz left from li tag and right from in unique list  */}

                    {
                        menuList.map((ce, i) => {
                            return(
                                <li className="nav-item" onClick={() => { findFood(ce) }} key={i} >
                                    <a className="nav-link text-warning fw-bold" href="#">{ce}</a>
                                </li>
                            )
                        })
                    }


                    {/* <li className="nav-item" onClick={()=>{ findFood("breakfast") }}>
                        <a className="nav-link " aria-current="page" href="#">Breakfast</a>
                    </li>
                    <li className="nav-item" onClick={()=>{ findFood("lunch") }} >
                        <a className="nav-link" href="#">Lunch</a>
                    </li>
                    <li className="nav-item" onClick={()=>{ findFood("dinner") }} >
                        <a className="nav-link" href="#">Dinner</a>
                    </li>
                    <li className="nav-item" onClick={()=>{ findFood("evening") }} >
                        <a className="nav-link" href="#">evening</a>
                    </li>

                    <li className="nav-item" onClick={()=> setItems(foodItems)} >
                        <a className="nav-link" href="#">All</a>
                    </li> */}


                </ul>

            </div>


        </>
    )
}

export default ResturentMenu