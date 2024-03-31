import React, { useState } from "react";
// import Login from "../login";
import { useNavigate } from "react-router-dom";
import "./Form.css";



const Form = () =>{
    const Navigate=useNavigate();
    const [user_inputs,setinput]=useState({
        fname:"",
        lname:"",
        uname:"",
        mail:"",
        number:"",
        password:"",
        c_password:"",
    });

    const [user_data, setdata]=useState([]);
    const [sign_up_confirm,setsignup]=useState(false);

    function handle_submit(){
        console.log("called submit");
        setsignup(true);
        setdata((previous)=>{
            return ([...previous,user_inputs]);
        });
        console.log(user_data);
    }

    function handlechange(event){
        const {name,value}=event.target;
        setinput((pre)=>{
            return({
                ...pre,
                [name]:value
            })
        });
        // console.log(user_inputs);
    }

        return (
                        <center>
            <div className="form_page">
                {!sign_up_confirm?<form>
                    <table>
                        <tr><td>NAME</td><td>Last Name </td></tr>
                        <tr><td><input type="text" placeholder="surname" className="name" name="fname" onChange={handlechange} required></input></td><td><input type="text" placeholder="Ram" className="name" name="lname" onChange={handlechange}></input></td></tr>
                    </table>
                    <table>
                        <tr><td>username            </td></tr>
                        <tr><td><input type="text" placeholder="username" className="uname" name="uname" onChange={handlechange} required></input></td></tr>
                        <tr><td>Email</td></tr>
                        <tr><td><input type="mail" placeholder="user@Email.com" className="uname" name="mail" onChange={handlechange} required></input></td></tr>
                        <tr><td>Mobile No</td></tr>
                        <tr><td><input type="text" placeholder="9876543212" className="uname" name="number" onChange={handlechange} required></input></td></tr>
                        <tr><td>Password</td></tr>
                        <tr><td><input type="password" className="uname" name="password" onChange={handlechange} required ></input></td></tr>
                        <tr><td>Confirm Password</td></tr>
                        <tr><td><input type="password" className="uname" name="c_password" onChange={handlechange} required></input></td></tr>
                    </table>
                    <button  onClick={handle_submit}>sign up</button>
                    <br></br>
                    <button style={{"backgroundColor":"transparent","color":"black","border":"none"}} onClick={(Event)=>{
                        Event.preventDefault();
                        Navigate("/login");
                    }}>Already have account? Sign in</button>
                </form>
                :
                <div>
                <h1>Thanks for signing up</h1>
                <button onClick={(event)=>{
                    event.preventDefault();
                    Navigate("/login");
                }}>back to login</button>
                </div>}
            </div>
        </center>
        );
    }

export default Form;



// onClick={(event)=>{
//     event.preventDefault();
//     Navigate("/login");
// }}