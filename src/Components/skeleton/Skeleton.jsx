import React from 'react'

const Skeleton = () => {
    return (
        <>
            {/* <div className='d-flex ' > */}
 
                <div className='  border border-warning  rounded' style={{ width: "37vh" , display: "inline-block" , margin:"4vh 4vh 0 0" }}>
                    <img className='foodImage' />
                    <h3 className='animate__animated animate__zoomInDown checkAk '>Loading ...</h3>
                    <div className='d-flex  justify-content-between mb-1'>

                        <div>

                            <select className='bg-dark text-white h-100 rounded-start'>
                                <option value="loading">...</option>
                                <option value="loading">...</option>
                                <option value="loading">...</option>

                            </select>

                            <select className='bg-dark text-white h-100 rounded-end'>
                                <option value="loading">...</option>
                                <option value="loading">...</option>
                                <option value="loading">...</option>

                            </select>
                        </div>

                        <h4>₹ XXXX /-</h4>
                    </div>
                    <hr />
                    <button className='btn btn-outline-primary mx-2 card_btn_Ak' >About</button>
                    <button className='btn btn-outline-success ms-5 card_btn_Ak' >Add</button>
                </div>
            {/* </div> */}

        </>
    )
}

export default Skeleton