import image from "../assets/swift fix-logos.jpeg";
function HeaderComponent() {
    return (
        <>
            <div class="item" id="navbar-1">
                <div class="left" id="left">
                    <ul>
                        <img src={image}></img>
                        <li><a href="/">Swift Fix</a></li>
                    </ul>
                </div>
                <div class="right" id="right">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <div class="vl"></div>
                        <li><a href="#">About Us</a></li>
                        <div class="vl"></div>
                        <li><a href="#contact">Contact Us</a></li>
                        <div class="vl"></div>
                        <li><a href="/login">Login</a></li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default HeaderComponent;
