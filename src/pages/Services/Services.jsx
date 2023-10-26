import {useLocation} from "react-router-dom";

import {useEffect} from "react";
import PhotoServices from "./PhotoServices";

const Services = () => {
    const path = useLocation().pathname;
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [path]);
    return (
        <div className="">
            <div className="container">
                <div className="lg:mt-24 md:mt-16 mt-10">
                    <PhotoServices />
                </div>
            </div>
        </div>
    );
};

export default Services;
