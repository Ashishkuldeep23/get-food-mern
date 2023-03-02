import React from 'react'
import "../Body/style.css"

const Card = (props) => {

    const { image, name, price, size=["Regular" , "Special"], quantitiy=[1,2,3,4,5] } = props.data


    const orderFunc = (foodName, foodPrice) => {
        alert([foodName, foodPrice])
    }



    const about_more_func = (clickedEle) => {
        // console.log(clickedEle)

        // // // Not working (bad way for do about more ----> (below))
        // const {name , category , description , image , price} = clickedEle
        // document.getElementById("mainHolderOfAll").innerHTML = `<div><h1>Name : ${name}</h1> <div><span>${category}</span> <span>${price}</span></div> <img src="${image}" alt="" /> <p>${description}</p></div>`

        // alert(clickedEle.id+"."+clickedEle.name)

        props.dataOfShowMoreAbout(clickedEle)
        props.setShowMoreAboutBtn(true)

    }



    return (
        <>
            <div className="bg-warning border border-warning cardAk" >

                <div className='border border-warning darkCardInnerAk'>
                    <img className='foodImage' src={image} alt={name} />
                    <h3 className='animate__animated animate__zoomInDown checkAk '>{name}</h3>
                    <div className='d-flex  justify-content-between mb-1'>

                        <div>

                        <select className='bg-dark text-white h-100 rounded-start'>
                           {
                            size.map( (item , i)=>{return  <option key={i} value={item}>{item}</option>} )
                           }
                        </select>
                        <select className='bg-dark text-white h-100 rounded-end'>
                           {
                            quantitiy.map( (item , i)=>{return  <option key={i} value={item}>{item}</option>} )
                           }
                        </select>
                        </div>

                        <h4>₹{price}/-</h4>
                    </div>
                    <hr />
                    <button className='btn btn-outline-primary mx-2 card_btn_Ak' onClick={() => { about_more_func(props.data) }}>About</button>
                    <button className='btn btn-outline-success ms-5 card_btn_Ak' onClick={() => { orderFunc(name, price) }}>Add</button>
                </div>

            </div>
        </>
    )
}

export default Card