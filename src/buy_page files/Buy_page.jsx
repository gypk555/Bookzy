import "./buy_page.css";


export default function Buy_page(props){

    // console.log(props);

    return (
        <div>
            <div><img src={props.src} alt="book_image" ></img></div>
            <div className="p" >{props.bookname} hello</div>
            <div className="p" >{props.author} {props.type}</div>
            <div className="grid-item-price" >{props.item_price}</div>
            <div className="grid-item-buy1" >
                <button className="button button1" ><b>Buy!</b></button>
            </div>
        </div>
    );
}