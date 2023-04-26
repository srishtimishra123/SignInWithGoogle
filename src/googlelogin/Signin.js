import React,{useEffect,useState} from "react";
import {auth,provider} from "./Config"
import {signInWithPopup} from "firebase/auth"
import Dashboard from "./Dashboard";
import google from "../images/google.png"

const Signin = ()=>{
    const[value,setValue]=useState('')
    const handleClick = ()=>{
        signInWithPopup(auth,provider).then((data)=>{
        setValue(data.user.email)
        localStorage.setItem("email",data.user.email)
        })
    }
    useEffect(()=>{
        setValue(localStorage.getItem('email'))
    })
    return(
<>
{value?<Dashboard/>:
<button onClick={handleClick} style={{border:'1px solid #DB4437', 
color:'#DB4437',padding:'10px',borderRadius:'5px',
marginTop:'50px'}}><span><img src={google} style={{width:'13px'}}/></span>&nbsp;&nbsp;SignIn With Google</button>
}
</>
    );
}

export default Signin