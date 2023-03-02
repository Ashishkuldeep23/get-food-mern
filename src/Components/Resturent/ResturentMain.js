
import React, { useState } from 'react'
import "./style.css"

import ResturentBody from './Body/ResturentBody'
import ResturentMenu from './Menu/ResturentMenu'

import ShowMoreAboutBtn from './showMoreAboutBtn/ShowMoreAboutBtn'

import foodItemsApi from "./foodItemsAPI"



// // // To see all category of list 

const allListOfCategory = [ ...new Set(foodItemsApi[0].map((ce) => {
  return ce.category
})) , "All"
]

// // // In above line running map in a set object to get unique data only.(using spread operator also)
// console.log(allListOfCategory)  // // Getting all unique data that is set 




// // // <======================= Main Componant ===============================>
const ResturentMain = ({darkMode}) => {

  const [items, setItems] = useState(foodItemsApi[0])

  const [menuList , setmenuList] = useState(allListOfCategory)


  // // // Below both is used in show more data button clicked ---------->
  const [ showMoreAboutBtn , setShowMoreAboutBtn ] = useState( false )
  const [ showMoreAboutData , setShowMoreAboutData ] = useState( "")




  // // // Below function is used in show item by category ----->
  const findFood = (category) =>  {



    if(category === "All"){
      return setItems(foodItemsApi[0])
    }

    // // // In below line apply filter on Api file (becz api file is a arr so we can use filter over there)
    const searchByMenu = foodItemsApi[0].filter((curEle) => {
      return curEle.category === category
    })

    setItems(searchByMenu)
  }



  // const switchNow = false



  // // // Below function is used to hold data of clicked item ------------>

  function dataOfShowMoreAbout( value){
    let inStr = JSON.stringify(value)
    setShowMoreAboutData(inStr)
    return value
  }






  return (
    <div  id='resturentId' className=' min-vh-100 p-3 d-flex flex-column align-items-center'>


      {/* <ResturentMenu findFood ={findFood}  menuList={menuList}   color={darkMode} /> */}
      {/* <ResturentBody items={items} color={darkMode} /> */}
                        {/* value of darkmode set to color props name for further use*/}



      {/* Expperiment duing here ---------------> */}

      {
        !showMoreAboutBtn && <ResturentMenu findFood={findFood}  menuList={menuList}   color={darkMode} />
      }

      {
        !showMoreAboutBtn ? <ResturentBody items={items} color={darkMode} setShowMoreAboutBtn={setShowMoreAboutBtn}  dataOfShowMoreAbout={dataOfShowMoreAbout}/> : <ShowMoreAboutBtn setShowMoreAboutBtn={setShowMoreAboutBtn} color={darkMode} showMoreAboutData={showMoreAboutData} />
      }



    </div>
  )
}

export default ResturentMain