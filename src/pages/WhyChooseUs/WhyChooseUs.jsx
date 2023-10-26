/* eslint-disable react/no-unescaped-entities */
import {MdOutlineHighQuality} from "react-icons/md";
import ContactUs from "../Contact/ContactUs";
import {useEffect} from "react";
import {useLocation} from "react-router-dom";
import {AiOutlineDeliveredProcedure} from "react-icons/ai";
import {BiSupport} from "react-icons/bi";
import {MdOutlineSecurity} from "react-icons/md";
import img from "../../assets/why-choose-us.jpg";

const WhyChooseUs = () => {
    const path = useLocation().pathname;
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [path]);
    return (
        <div className="mb-14">
            <div>
                <img src={img} className="w-full md:h-[450px]" alt="" />
            </div>
            <div className="mt-10">
                <div className="grid md:grid-cols-2 gap-10 container text-gray-800 ">
                    <div
                        data-aos="fade-up"
                        className="hover:bg-teal-900  min-h-[300px] bg-teal-600 grid place-content-center p-6 rounded-md text-center duration-500 text-white ">
                        <div className="flex items-center justify-center">
                            <MdOutlineHighQuality className="text-6xl block text-center" />
                        </div>
                        <h4 className="text-gray1 md:text-3xl text-2xl ">
                            100% Best Quality Service
                        </h4>
                        <p className="text-lg ">
                            "Dream Weave Graphics" is always committed to best
                            services. It is gaining huge popularity day by day
                            for our quality services. We always believe that
                            quality is more important than quantity. Your
                            ultimate satisfaction is our main goal.
                        </p>
                    </div>
                    <div
                        data-aos="fade-up"
                        className="hover:bg-teal-900  min-h-[300px] bg-teal-600 grid place-content-center p-6 rounded-md text-center duration-500 text-white ">
                        <div className="flex items-center justify-center">
                            <MdOutlineSecurity className="text-6xl block text-center" />
                        </div>
                        <h4 className="text-gray1 md:text-3xl text-2xl ">
                            100% Secure Ensure
                        </h4>
                        <p className="text-lg ">
                            We must ensure that your valuable file is 100% safe
                            to us. We never use any of your files or content for
                            our personal purposes and it is also against our
                            terms and policies.
                        </p>
                    </div>
                    <div
                        data-aos="fade-up"
                        className="hover:bg-teal-900  min-h-[300px] bg-teal-600 grid place-content-center p-6 rounded-md text-center duration-500 text-white ">
                        <div className="flex items-center justify-center">
                            <AiOutlineDeliveredProcedure className="text-6xl block text-center" />
                        </div>
                        <h4 className="text-gray1 md:text-3xl text-2xl ">
                            Timely Delivery
                        </h4>
                        <p className="text-lg ">
                            We strongly believe that time is more valuable than
                            money. We have dedicated team and they are always
                            ready to deliver your project on time.
                        </p>
                    </div>
                    <div
                        data-aos="fade-up"
                        className="hover:bg-teal-900  min-h-[300px] bg-teal-600 grid place-content-center p-6 rounded-md text-center duration-500 text-white ">
                        <div className="flex items-center justify-center">
                            <BiSupport className="text-6xl block text-center" />
                        </div>
                        <h4 className="text-gray1 md:text-3xl text-2xl ">
                            Lifetime Supports
                        </h4>
                        <p className="text-lg ">
                            Our first commitment is lifetime support until our
                            clients or customers are satisfied. You always have
                            support from us.
                        </p>
                    </div>
                </div>
            </div>
            <ContactUs />
        </div>
    );
};

export default WhyChooseUs;
