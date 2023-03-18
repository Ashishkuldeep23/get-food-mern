
import React, { useReducer, useContext, createContext } from "react";


const CartStateContext = createContext();
const CartDispatchContext = createContext();


const reducer = (state, action) => {

    switch (action.type) {
        case "ADD":
            return [...state , { id : action.id , name : action.name , image : action.image , singlePrice : action.singlePrice , qut : action.qut , totalPrice : action.totalPrice , size : action.size}];

        default:
            console.log("Something breaks in reducer")
            return [];
    }

}




const CartProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, [])


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