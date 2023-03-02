import React, { useState } from 'react'
import "./style.css"

import foodItemApi from "../foodItemsAPI"

import Card from '../card/card'


const ResturentBody = ({ items, color, setShowMoreAboutBtn, dataOfShowMoreAbout }) => {

  const [foodCat, setFoodCat] = useState([foodItemApi[1]])

  // // // Below useState for show more button           
  const [showMoreDes, setShowMoreDes] = useState(false)

  // const [ itemsMain , setItemsMain ]=useState(null);
  // console.log(items)







  return (

    <div className='min-vh-100  d-flex justify-content-center ' id='mainHolderOfAll'  >


      {/* Main Div for Cards */}
      <div className='container '>

        <div className="row d-flex flex-wrap align-items-start darkCardHolderAk">

          {

            // foodItemApi[1].filter((item , i)=>{
            //   if(item.category === )
            // })

            (foodItemApi[1] !== []) ? foodItemApi[1].map((element, i) => {

              return (
                <div key={i} className="mt-5 mb-0" >

                  <div >
                    <p className='text-warning fs-3 '>{element.subcategory.toUpperCase()}</p>
                    <hr />
                  </div>




                  {
                    items !== []
                      ?
                      items.filter((data, i) => {
                        if ((data.subcategory === element.subcategory) && true) {
                          return data
                        }
                      }).map((curEle, i) => {
                        return (
                          <Card data={curEle} key={i} dataOfShowMoreAbout={dataOfShowMoreAbout} setShowMoreAboutBtn={setShowMoreAboutBtn} />
                        )
                      })

                      :
                      <div>No Such Data found</div>
                  }
                </div>
              )

            }) : ""



            // items.map((curEle, i) => {

            //   const { image, name, price, description } = curEle

            //   return(

            //     <div className="bg-warning border border-warning  cardAk" key={i}>

            //       <div className='border border-warning darkCardInnerAk'>
            //         <img className='foodImage' src={image} alt={name} />
            //         <h3 className='animate__animated animate__zoomInDown checkAk '>{name}</h3>
            //         <h4>{price}</h4>
            //         {/* <p className=' text-primary text-end border rounded  border-primary  border-start-0 border-end-0 '>Read</p>
            //         <div className='description_div'>

            //           <p className='d-inline'>
            //             { (showMoreDes) ? description : `${description.substring(0,215)}` }
            //           </p>

            //           {
            //            ( description.length>215)  &&
            //             <span className='more_btn' onClick={()=>{setShowMoreDes(!showMoreDes)}}>{ (!showMoreDes)? " ...more": " ...less" }</span>
            //           }
            //         </div> */}
            //         <button className='btn btn-outline-success card_btn_Ak' onClick={() => { orderFunc(name, price) }}>Order Now</button>
            //         <button className='btn btn-outline-primary mx-2 card_btn_Ak' onClick={() => { about_more_func(curEle) }}>About</button>
            //       </div>

            //     </div>


            //   )


            // })

          }






        </div>

      </div>

    </div>
  )
}

export default ResturentBody