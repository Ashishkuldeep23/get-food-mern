import React, { useEffect, useRef, useState } from 'react'
import "../Body/style.css"


const Card = ({ data, dataOfShowMoreAbout, setShowMoreAboutBtn }) => {
    const { image, name, price, size = ["Regular", "Special"], quantitiy = [1, 2, 3, 4, 5] } = data

    const qutRef = useRef()
    const sizeRef = useRef()

    const [itemQut, setItemQut] = useState(1)
    const [itemSize, setItemSize] = useState("")

    useEffect(() => {
        setItemQut(qutRef.current.value)
        setItemSize(sizeRef.current.value)
    }, [])


    const orderFunc = (foodName, foodPrice) => {
        alert([foodName, foodPrice])
    }

    const totalPrice = () => {
        let p = itemQut * price
        if (itemSize === "Regular") {
            p += 0
        }
        else if (itemSize === "Special") {
            p += 50
        }
        else {
            p += 50
        }
        return p
    }



    const about_more_func = (clickedEle) => {
        // console.log(clickedEle)

        // // // Not working (bad way for do about more ----> (below))
        // const {name , category , description , image , price} = clickedEle
        // document.getElementById("mainHolderOfAll").innerHTML = `<div><h1>Name : ${name}</h1> <div><span>${category}</span> <span>${price}</span></div> <img src="${image}" alt="" /> <p>${description}</p></div>`

        // alert(clickedEle.id+"."+clickedEle.name)

        dataOfShowMoreAbout(clickedEle)
        setShowMoreAboutBtn(true)

    }



    return (
        <>
            <div className="bg-warning border border-warning cardAk" >

                <div className='border border-warning darkCardInnerAk'>
                    <img className='foodImage' src={image} alt={name} />
                    <h3 className='animate__animated animate__zoomInDown checkAk '>{name}</h3>
                    <div className='d-flex  justify-content-between mb-1'>

                        <div style={{ marginBottom: "1.5vh" }} >

                            <select className='bg-success text-white h-100 rounded-start' ref={sizeRef} value={itemSize} onChange={(e) => { setItemSize(e.target.value) }}>
                                {
                                    size.map((item, i) => { return <option key={i} value={item}>{item}</option> })
                                }
                            </select>
                            <select className='bg-success text-white h-100 rounded-end' ref={qutRef} value={itemQut} onChange={(e) => { setItemQut(e.target.value) }} >
                                {
                                    quantitiy.map((item, i) => { return <option key={i} value={item}>{item}</option> })
                                }
                            </select>
                        </div>

                        <h4 className='animate__animated  animate__rubberBand'>₹ {totalPrice()}/-</h4>
                    </div>
                    <hr />

                    <div className='d-flex justify-content-between'>
                        <button className='btn btn-outline-primary card_btn_Ak' onClick={() => { about_more_func(data) }}>About</button>
                        <button className='btn btn-outline-success card_btn_Ak' onClick={() => { orderFunc(name, price) }}>Add Cart</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Card