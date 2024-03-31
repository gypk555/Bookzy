import React, { useState } from "react";
import img from "./bookshelf.jpg";
import "./login.css";
import { useNavigate } from "react-router-dom";






function Login(){
    const Navigate=useNavigate();
    const [credentials, update_credentials]=useState({
        username:"",
        password:"",
    });

    function handle_logdetails(event){
        const {name, value}=event.target;

        update_credentials((previous)=>{
            return ({...previous,[name]:value})
        });

    }

    function check_logdetails(event){
        if(credentials.username==="pavan"&&credentials.password==="pavan"){
            event.preventDefault();
            Navigate("/",{state:{uid:"pavan"}});
        }
    }


    return (
        <div className="Login_page" style={{"backgroundImage":`url(${img})` }}>
            <div className="note" >
               
            </div>
            <div className="Login_details" >
                <h2 style={{color:'rgb(228, 238, 228)'}}>LOGIN</h2>
                <p >Please enter your credentials to login</p>
                <input name="username" placeholder="username" onChange={handle_logdetails} type="text"></input>
                <input name="password" placeholder="password" onChange={handle_logdetails} type="password"></input>
                <button className="login_button button_in_loginpage" onClick={check_logdetails}> LOGIN </button>
                <button className="button_in_loginpage" style={{"backgroundColor":"transparent","border":"none"}} onClick={(event)=>{
                    event.preventDefault();
                    Navigate("/forgot");
                }}>Forgot Password</button>
                <button className="button_in_loginpage" style={{"backgroundColor":"transparent","border":"none"}}  onClick={(event)=>{
                    event.preventDefault();
                    Navigate("/register");
                }}>
                Not registered? create an account</button>
            </div>
            
            
          
            
        </div>
    );
}

export default Login;