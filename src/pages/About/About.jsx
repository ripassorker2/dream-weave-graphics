/* eslint-disable react/no-unescaped-entities */
import {useEffect, useState} from "react";
import Commitment from "../../components/Commitment/Commitment";
import ContactUs from "../Contact/ContactUs";
import {Link, useLocation} from "react-router-dom";
import img from "../../assets/WhatsApp Image 2023-10-20 at 12.39.35 PM.jpeg";
import about from "../../assets/about-us-banner.jpg";

const About = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("data.json")
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);

    const path = useLocation().pathname;
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [path]);

    return (
        <div className="mb-10">
            <div data-aos="fade-up">
                <img src={about} className="w-full md:h-[450px]" alt="" />
            </div>
            <div data-aos="fade-down" className="container">
                <div className="">
                    <div className="mt-12 text-gray-100">
                        <h2 className="text-2xl mb-2">Dream Weave Graphics</h2>
                        <p>
                            <span className="text-primary text-4xl">D</span>{" "}
                            ream Weave Graphics (DWG) is becoming famous day by
                            day as a renowned image manipulation service
                            provider. We have been providing photo background
                            removal services, image manipulation services, 3D
                            modeling, Wrinkle Remove, Musking, Neck Join etc,,.
                        </p>
                        <p className="pt-2">
                            In today's visually-driven world, the importance of
                            captivating and flawless photos cannot be
                            overstated. Whether you are a professional
                            photographer, a social media enthusiast, or just
                            someone who loves to capture life's moments, having
                            access to a powerful and user-friendly photo editor
                            is essential. Enter "Dream Weave Graphics," your
                            ultimate photo editing solution.
                        </p>
                    </div>

                    <div className="md:flex justify-between items-center mt-12">
                        <div data-aos="fade-left" className="md:w-[50%]">
                            <img src={img} alt="" />
                        </div>
                        <div
                            data-aos="fade-right"
                            className="w-[50%] md:ml-12 text-yellow-50">
                            <h3 className="md:text-3xl text-xl md:mt-0 mt-6z inline-block border-b-2 pb-1 mb-3 border-primary font-sans">
                                Our all services
                            </h3>
                            <ul className="list-decimal ml-5 text-lg ">
                                {data?.map((d, i) => (
                                    <p key={i}>
                                        <Link
                                            to={`/details/${d.id}`}
                                            className="inline-block hover:border-b-primary border-b">
                                            {d.title}
                                        </Link>{" "}
                                        <br />
                                    </p>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Commitment />
            <ContactUs />
        </div>
    );
};

export default About;
