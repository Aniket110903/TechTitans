import logo from "../assets/swift fix-logos.jpeg";
import "./AboutUsComponent.css"
import HeaderComponent from "./HeaderComponent";
function AboutusComponent() {
    return (
        <>
<<<<<<< Updated upstream
            <HeaderComponent />
=======
>>>>>>> Stashed changes
            <div class="heading">
                <div class="main-heading">
                    <img src={logo}></img>
                    <h1>Welcome to Swift Fix..</h1>
                </div>
                <div class="p">
                    <p>
                        At Swift Fix, we believe in making home repairs effortless and efficient. Our platform connects users like you with trusted home repair shop owners, ensuring that your repair needs are met with convenience and reliability.
                    </p>
                </div>
                <div class="faq">
                    <h3 id="according">Our Mission and Vision..</h3>
                    <div class="pannel"><p class="p-1">Our mission is to revolutionize the home repair industry by providing a seamless and user-friendly platform that connects homeowners with skilled shop owners. We envision a world where every repair need is met with speed, quality, and exceptional customer service.</p></div>
                    <h3 id="according">Our Values..</h3>
                    <div class="pannel"><p class="p-1"> At Swift Fix, we pride ourselves on professionalism, transparency, and customer satisfaction. We are dedicated to delivering outstanding service and fostering positive relationships between users and shop owners. By upholding these values, we stand out from the competition and strive to exceed your expectations.</p></div>
                    <h3 id="according">Company History..</h3>
                    <div class="pannel"><p class="p-1">Swift Fix was founded in 2023 with a vision to transform the home repair industry. Since then, we have grown steadily, earning the trust of countless satisfied customers. We take pride in our journey and look forward to serving you with excellence.</p></div>
                    <h3 id="according">Benefits for Users..</h3>
                    <div class="pannel"><p class="p-1">With Swift Fix, you can say goodbye to the hassle of finding reliable repair services. Our platform simplifies the process, saving you time and ensuring high-quality workmanship. Rest assured that every repair request you make through Swift Fix is handled promptly and efficiently, so you can enjoy peace of mind.</p></div>
                    <h3 id="according">Benefits for Shop Owners..</h3>
                    <div class="pannel"><p class="p-1 mb-50px">For home repair shop owners, partnering with Swift Fix opens doors to a wider customer base and increased visibility. Our platform streamlines your business operations, helping you manage appointments, streamline communication, and maximize your reach. Join our network of trusted professionals today.</p></div>
                </div>
            </div>
        </>
    );
}

export default AboutusComponent;