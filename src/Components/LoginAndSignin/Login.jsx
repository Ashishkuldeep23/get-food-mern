import React , {useState} from 'react'
import {useNavigate} from "react-router-dom"
import './style.css'


const Login = () => {

  const navigate = useNavigate();

  const [ logInData , setLogInData ] = useState({
    email:"",
    password:""
  })

  
  function onChangeHandler(e){
    const {name , value} = e.target
    setLogInData( (preData)=>{
      return({...preData , [name] : value})
    })
  }


  async function onClickHandler(e){
    e.preventDefault()

    const option = {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(logInData)
    }

    let logInUser = await fetch("http://localhost:3001/logIn" , option)
    let data = await logInUser.json()


    if(data.status === false){
      return alert(data.message)
    }

    
    if(data.status === true){
      setLogInData({email:"",password:""})

      localStorage.setItem("getFoodToken" , JSON.stringify(data.token))

      navigate("/")

      return alert("LogIn successfull")

    }

  }





  return (
    <>
      <div id='log_in_div' className="log_sing_main" style={{background:"url('https://img.delicious.com.au/nnzbvV91/w1200/del/2018/05/green-and-gold-rice-bowls-80254-2.jpg')" , backgroundSize: "cover"}}>

        <div className="log_sing_second border border-info  rounded rounded-3 p-5 bg-dark">

          <form>
            <h1 className='text-center text-info'>LogIn</h1>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Email Address</label>
              <input type="email" className="form-control bg-dark" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={logInData.email} onChange={onChangeHandler} />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label fw-bold">Password</label>
              <input type="password" className="form-control bg-dark" id="exampleInputPassword1" name="password" value={logInData.password} onChange={onChangeHandler} />
            </div>
            <button type="submit" className="btn btn-success m-1" onClick={onClickHandler}>LogIn</button>
            <button type="submit" className="btn btn-primary m-1" onClick={ ()=>{navigate("/signIn")}} >New User</button>
          </form>
        </div>

        <button className=' btn btn-dark btn-lg fw-bold home_btn' onClick={()=>{navigate("/")}}><i className="fa-solid fa-house"></i></button>


      </div>

    </>
  )
}

export default Login