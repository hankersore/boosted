import "./Navbar.css"


export default function Navbar(props){
    return (
        <header>
            <nav>
            <div class="logo"><img src={'/assets/media/logo.png'} alt = 'img'/></div>
            <ul>
                <li><a href="#">electric skateboards</a></li>
                <li><a href="#">electric scooters</a></li>
                <li><a href="#">accessories</a></li>
                <li><a href="#">gift card</a></li>
                <li><a href="#">more info</a></li>
            </ul>
            <div class="cart">
                <i class="fa-regular fa-circle-user"></i>
                <i class="fa-solid fa-cart-shopping"></i>
            </div>
            </nav>
        </header>
    )
}