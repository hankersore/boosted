import "./Item.css";


export default function Item(props){
    return (
    <div className="item">
        <img src="/assets/media/shop2.png" alt=""/>
            <p>{props.title}</p>
            <p>{props.price}</p>
    </div>
    )
}