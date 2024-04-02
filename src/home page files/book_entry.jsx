import React, { useState } from "react";
import "./new_home.css";
import Buy_page from "../buy_page files/Buy_page";
import { Navigate, useNavigate } from "react-router-dom";


function Book_entry(props){
    const [cart_value, setvalue]=useState(true);
    const Navigate=useNavigate();



    function To_buy_page(buy_page){

        // console.log(buy_page);
        return(
            <Buy_page 
                src={buy_page.src}
                bookname={buy_page.bookname}
                author={buy_page.author}
                type={buy_page.type}
                item_price={buy_page.item_price}
            />
        );
    }



    return <div className="main_homepage_books">
        <div className="homepage_books">
            <div className  ="image"><img src={props.src} alt="book"></img></div>
            <div>{props.bookname}</div>
            <div>{props.author}</div>
            <div>{props.type}</div>
            <div>{props.item_price}</div>
            <div className="buttons">

            <button className="button button1" style={{"color":"white"}} onClick={(event)=>{
                To_buy_page(Buy_page);
                event.preventDefault();
                Navigate("/buy_page");
            }} ><b>Buy!</b></button> {cart_value?
                <button onClick={()=>{
                    props.click(props);
                    setvalue((prev)=>{return(!prev);});
                    props.cart_inc();
                   }}>
                    <b>Add to Cart</b>
                </button>
                :
                <button onClick={()=>{
                    setvalue((prev)=>{return(!prev);});
                    props.cart_dec();
                    }}>
                    <b>remove from cart</b>
                </button>
                } 
            </div>
            
        </div>
    </div>;
}




export default Book_entry;