import React, { useEffect, useState } from 'react'

import { useCart } from '../ContextReducer'


const Card = () => {

  const [totalPrice, setTotalPrice] = useState(0)


  const cartData = useCart()
  // console.log(cartData)


  useEffect(() => {

    let p = 0
    cartData.map((item, i) => {
      p += item.totalPrice
    })

    setTotalPrice(p)

  }, [])





  function handleCheckOut() {

  }




  return (

    <>

      <div className='container'>

        {/* This is used as heading  */}
        <div className='row'>

          <div className="col-1 d-none d-sm-block text-success fs-3 fw-bold">#</div>
          <div className="col text-success fs-3 fw-bold">Cart Item</div>
          <div className="col-4 text-success fs-3 fw-bold">Amount</div>
          <hr className="text-warning" />

        </div>


        {
          (cartData.length !== 0)
            ?
            cartData.map((data, i) => {
              return (

                <div key={i} className='row' >

                  <div className="col-1 d-none d-sm-block text-info fw-bold">{i + 1}.</div>
                  <div className="col ">
                    <div className='mx-1'>
                      <p className='d-sm-none text-info fw-bold'>{i + 1}.</p>
                      <p className='fs-4 fw-bold'>{data.name} <span className='fs-6 text-info' >({data.size})</span></p>
                      <p className='fs-5'>{data.qut} <span className='text-info'>*</span> ₹ {data.singlePrice}/-</p>
                    </div>
                    <div>
                      <img className='foodImage mb-3' src={data.image} alt={data.name} style={{ maxWidth: "40vh", maxHeight: "40vh", width: "70%", height: "70%" }} />
                    </div>
                  </div>
                  <div className="col-4 mt-auto mb-5">
                    <h5>₹ {data.totalPrice}/-</h5>
                    <button className='btn btn-outline-danger fw-bold'>Remove</button>
                  </div>

                  <hr className="text-warning" />
                </div>
              )
            })

            :

            <div>

              <h1>Your cart is empty😔</h1>
              <h2>Order something please...</h2>
            </div>
        }


        {/* Below div will go in loop or no item msg
        <div className='row'>

          <div className="col-1 d-none d-sm-block text-warning">1.</div>
          <div className="col ">
            <div className='mx-1'>
              <p className='d-sm-none text-warning'>1.</p>
              <p className='fs-4 fw-bold'>NonVeg Thali</p>
              <p className='fs-5'>2 <span className='text-info'>x</span> ₹ 220/-</p>
            </div>
            <div>
              <img className='foodImage mb-1' src="https://thumbs.dreamstime.com/z/indian-non-veg-thali-food-platter-consists-variety-veggies-chicken-meat-lentils-sweet-dish-snacks-etc-selective-focus-225928502.jpg" alt={name || "food"} style={{ width: "70%", height: "70%" }} />
            </div>
          </div>
          <div className="col-4 mt-auto mb-5">
            <h5>₹ 440/-</h5>
            <button className='btn btn-outline-danger fw-bold'>Remove</button>
          </div>

          <hr className="text-warning" />
        </div> */}


        {/* Below div will depend upon items in cart */}
        {
          (cartData.length !== 0)
          &&

          <div>

            <div className='d-flex'><h1 className='fs-2 ms-auto'>Total Price: {totalPrice}/-</h1></div>
            <div className='d-flex'>
              <button className='btn bg-success mt-5 fw-bold text-white ms-auto ' onClick={handleCheckOut} > Check Out </button>
            </div>
            <p>Please press Check Out and see all order in my order section.</p> 
              <h2>Thank you for using...</h2> 
          </div>

        }



      </div>


    </>

  )
}

export default Card