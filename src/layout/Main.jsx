/* eslint-disable react/jsx-no-target-blank */
import {Outlet} from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Main = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
            <div className="fixed md:bottom-6 bottom-4 md:right-6 right-4 z-[99999999]">
                <a href="https://wa.me/+8801981600560" target="_blank">
                    <img
                        src={
                            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/2062095_application_chat_communication_logo_whatsapp_icon.svg/1200px-2062095_application_chat_communication_logo_whatsapp_icon.svg.png"
                        }
                        className="md:h-[52px] md:w-[52px] h-12 w-12 hover:scale-110 duration-500 rounded-full "
                        alt=""
                    />
                </a>
            </div>
        </>
    );
};

export default Main;
