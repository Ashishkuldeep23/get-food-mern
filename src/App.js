import React, { useEffect, useState } from "react";

import Navbar from "./Components/Navbar/navbar";
import ResturentMain from "./Components/Resturent/ResturentMain";

import Login from "./Components/LoginAndSignin/Login";
import Signin from "./Components/LoginAndSignin/Signin";


import { Navigate, Route, Routes } from "react-router-dom";


import { CartProvider } from "./Components/ContextReducer"



// // // Main UI function -------------->
function App() {


  const [allDataOfApi, setAllDataOfApi] = useState([ [] , [] ])

  const [items, setItems] = useState(allDataOfApi[0])

  const [menuList, setmenuList] = useState([])

  const [foodCat, setFoodCat] = useState(allDataOfApi[1])



  // // // Below function is used in show item by category ----->
  const findFood = (category) => {
    if (category === "All") {
      return setItems(allDataOfApi[0])
    }

    // // // In below line apply filter on Api file (becz api file is a arr so we can use filter over there)
    const searchByMenu = allDataOfApi[0].filter((curEle) => {
      return curEle.category === category
    })

    setItems(searchByMenu)
  }



  async function loadData() {
    // alert("ok Called")

    let options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }

    let loadFoodData = await fetch(`${process.env.REACT_APP_BACKEND}/getfoodData`, options)
    let data = await loadFoodData.json()

    if (data.status === false) {
      return alert(data.message)
    }



    if (data.status === true) {
      setAllDataOfApi(data.data)
      setItems(data.data[0])
      setFoodCat(data.data[1])

      // // // Below is used for menu (very first horizontal)
      const allListOfCategory = [...new Set(data.data[0].map((item) => {
        return item.category
      })), "All"
      ]

      setmenuList(allListOfCategory)
    }

  }


  useEffect(() => {
    loadData()
  }, [])


  return (
    <div>
      <CartProvider>
        <Routes>
          <Route path="/" element={
            <div>
              <Navbar />
              <ResturentMain
                allDataOfApi={allDataOfApi}
                items={items}
                menuList={menuList}
                foodCat={foodCat}
                findFood={findFood} />
            </div>}
          />
          <Route path="/logIn" element={<Login />} />
          <Route path="/signIn" element={<Signin />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>

      </CartProvider>
    </div>
  );
}

export default App;