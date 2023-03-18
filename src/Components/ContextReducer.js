
import React, { useReducer, useContext, createContext } from "react";


const CartStateContext = createContext();
const CartDispatchContext = createContext();


const reducer = (state, action) => {

    switch (action.type) {
        case "ADD":
            return [...state, { id: action.id, name: action.name, image: action.image, singlePrice: action.singlePrice, qut: action.qut, totalPrice: action.totalPrice, size: action.size }];

        case "ONE_DELETE":
            let newStateOneDel = []

            // state.filter((data, i) => {
            //     return ((data.id !== action.data.id) && (data.))
            // })

            state.map((item) => {

                if (item.id !== action.data.id) {
                    newStateOneDel.push(item)
                } else {
                    if (item.size !== action.data.size) {
                        newStateOneDel.push(item)
                    }
                }

            })

            return newStateOneDel;

        case "UPDATE":
            let preArr = [...state]
            preArr.find((item, index) => {
                if ((item.id === action.id) && (item.size === action.size)) {
                    // console.log(parseInt(item.qut) + parseInt(action.qut) , item.totalPrice + action.totalPrice)
                    preArr[index] = { ...item, qut: parseInt(item.qut) + parseInt(action.qut), totalPrice: item.totalPrice + action.totalPrice }
                }
            })

            return preArr;

        case "ALL_DELETE":
            return [];

        default:
            console.log("Something breaks in reducer")
            return [];
    }

}




const CartProvider = ({ children }) => {

    let cartArr = localStorage.getItem("cartItems")
    cartArr = JSON.parse(cartArr)

    const [state, dispatch] = useReducer(reducer , [...cartArr || []])


    return (
        <CartDispatchContext.Provider value={dispatch}>
            <CartStateContext.Provider value={state}>
                {children}
            </CartStateContext.Provider>
        </CartDispatchContext.Provider>
    )

}


const useCart = () => useContext(CartStateContext);
const useDispatchCart = () => useContext(CartDispatchContext);


export { CartProvider, useCart, useDispatchCart }