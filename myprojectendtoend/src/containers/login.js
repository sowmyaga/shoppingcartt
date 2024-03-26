import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Modal from "../components/modal";
import Form from "../components/form";
import "./login.css";
 const LoginFrom =()=>{
    const[isLogin,setIsLogin]=useState(false);
  const handleLogin=()=>{
    setIsLogin(!isLogin)
  }
    return(
        <>
        <Button onClick={handleLogin}>Login</Button>
         {isLogin?<Modal/>:""}
        </>
    )
}
export default LoginFrom;