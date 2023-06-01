import CarouselComponent from "../components/CarouselComponent";
import MailComponent from "../components/MailComponent";
import ServicesComponent from "../components/ServicesComponent";
import ReviewComponent from "../components/ReviewComponent";
import IntroComponent from "../components/IntroComponent";

function HomePage() {
    return (
        <>
            <IntroComponent />
            <ServicesComponent />
            <CarouselComponent />
            <ReviewComponent />
            <MailComponent />
        </>
    );
}

export default HomePage;