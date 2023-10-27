import "./ShopItem.css";


export default function ShopItem(props){
    return (
    <div className="shopItem">
         <i class="fa-solid fa-bolt"></i>
            <h2>{props.h}</h2>
            <p>{props.p}</p>
    </div>
    )
}