import CarouselComponent from "../components/CarouselComponent";
import ContactComponent from "../components/ContactComponent";
import FooterComponent from "../components/FooterComponent";
import HeaderComponent from "../components/HeaderComponent";
import LocationComponent from "../components/LocationComponent";
import MailComponent from "../components/MailComponent";
import ServicesComponent from "../components/ServicesComponent";
import ReviewComponent from "../components/ReviewComponent";
import IntroComponent from "../components/IntroComponent";

function HomePage() {
    return (
        <>
            <HeaderComponent />
            <IntroComponent />
            <ServicesComponent />
            <CarouselComponent />
            <ReviewComponent />
            <MailComponent />
            {/* <LocationComponent /> */}
            <FooterComponent />
        </>
    );
}

export default HomePage;