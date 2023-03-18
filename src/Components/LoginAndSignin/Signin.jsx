import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"
import './style.css'



const Signin = () => {

  const navigate = useNavigate();

  const [ formData , setFormData ] = useState({
    name : "",
    address : "",
    email:"",
    password:"",
    whenCreated:`${new Date()}`
  })


  function onChangeHandler(e){
    const {name , value} = e.target
    setFormData( (preData)=>{
      return({...preData , [name] : value})
    })
  }


  async function  clickHandler(event){
    event.preventDefault()

    if(!formData.email || !formData.password || !formData.name  || !formData.address){
      return alert("All feild should given")
    }


    const option = {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    }
    
    let createUser = await fetch(`${process.env.REACT_APP_BACKEND}/signIn` , option)

    let data = await createUser.json()

    if(data.status === false){
      return alert(data.message)
    }

    if(data.status === true){

      setFormData({name : "",address : "",email:"",password:"",whenCreated:""})

      localStorage.setItem("get-food-signin" , "done")

      navigate("/logIn")
      return alert("Data created successfull")


    }

  }



  return (
    <>
      <div id='sign_in_div' className="log_sing_main " style={{background:"url('https://images.news18.com/ibnlive/uploads/2022/04/sarso-ka-saag-and-makke-ki-roti-are-integral-to-punjab-and-punjabi-food-16498352053x2.jpg?impolicy=website&width=510&height=356')" , backgroundSize: "cover"}}>


        <div className="log_sing_second border border-info rounded rounded-3 p-5 bg-dark">

          <form>
            <h1 className='text-center text-info'>SingIn</h1>
            <div className="mb-3">
              <label htmlFor="name" className="form-label fw-bold">Name </label>
              <input  className="form-control bg-dark" id="name" name="name" value={formData.name} onChange={onChangeHandler} />
            </div>
            <div className="mb-3">
              <label htmlFor="Address" className="form-label fw-bold">Address </label>
              <input className="form-control bg-dark" id="Address" name="address" value={formData.address} onChange={onChangeHandler} />
              <button type="submit" className="btn btn-success m-1">Current Location</button>

            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Email Address</label>
              <input type="email" className="form-control bg-dark" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={formData.email} onChange={onChangeHandler}/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label fw-bold">Password</label>
              <input type="password" className="form-control bg-dark" id="exampleInputPassword1" name="password" value={formData.password} onChange={onChangeHandler} />
            </div>
            <button type="submit" className="btn btn-success m-1" onClick={clickHandler}>SingIn</button>
            <button type="submit" className="btn btn-primary m-1" onClick={ ()=>{navigate("/logIn")}}>Already a User</button>
          </form>
        </div>

        <button className=' btn btn-dark btn-lg fw-bold home_btn' onClick={()=>{navigate("/")}}><i className="fa-solid fa-house"></i></button>

      </div>

    </>
  )
}

export default Signin