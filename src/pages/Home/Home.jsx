import { useLocation } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import ColorExpert from "../../components/ColorExpert/ColorExpert";
import Commitment from "../../components/Commitment/Commitment";
import Work from "../../components/Work/Work";
import ContactUs from "../Contact/ContactUs";
import Services from "../Services/Services";
import { useEffect } from "react";

const Home = () => {
    const path = useLocation().pathname;
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [path]);
    return (
        <div>
            <Banner />
            <ColorExpert />
            <Services />

            <Commitment />
            <Work />
            <ContactUs />
        </div>
    );
};

export default Home;
