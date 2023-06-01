import image from "../assets/swift fix-logos.jpeg";
import { BiUserCircle } from "react-icons/bi"
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
                        <BiUserCircle  className="text-white mt-[15px] ml-12 text-4xl"/>
                        <li className="ml-0 pl-0"><a href="/login" className="ml-0 pl-0">Raj</a></li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default HeaderComponent;