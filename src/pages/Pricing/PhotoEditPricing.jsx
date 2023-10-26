/* eslint-disable react/jsx-no-target-blank */
import "swiper/css";
import "swiper/css/pagination";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination, Autoplay} from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ReactCompareImage from "react-compare-image";
import ContactUs from "../Contact/ContactUs";
import Commitment from "../../components/Commitment/Commitment";
import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import Loader from "../../components/Loader/Loader";
const PhotoEditPricing = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const path = useLocation().pathname;
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [path]);

    useEffect(() => {
        setLoading(true);
        fetch(
            "https://portfoliyo-server-5v4neu5hj-ripassorker2.vercel.app/services"
        )
            .then((res) => res.json())
            .then((data) => {
                setData(data);
                setLoading(false);
            });
    }, []);
    if (loading) {
        return <Loader />;
    }
    return (
        <div className="my-14">
            <div className="flex justify-center items-center my-5 text-3xl text-gray-300 text-center">
                <h2 data-aos="fade-left">
                    For bulk order we provide upto 40% discount and <br /> We
                    can deliver 5000 images/day.
                </h2>
            </div>
            <div data-aos="fade-up" className="container">
                <div>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={20}
                        navigation={true}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        pagination={true}
                        modules={[Navigation, Pagination, Autoplay]}
                        breakpoints={{
                            380: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            667: {
                                slidesPerView: 2,
                                spaceBetween: 30,
                            },

                            980: {
                                slidesPerView: 3,
                                spaceBetween: 40,
                            },
                        }}
                        className="mySwiper">
                        {data?.map((d) => (
                            <SwiperSlide key={d.id}>
                                <div className="p-4 hover:shadow-2xl border-gray-900   hover:border-gray-800 duration-500 border-2  relative overflow-hidden rounded-lg shadow-lg">
                                    <div className="relative  flex items-center justify-center">
                                        <ReactCompareImage
                                            hover={true}
                                            leftImage={d?.imgAfter}
                                            rightImage={d?.imgBefore}
                                        />
                                    </div>

                                    <div className="text-gray-100  text-lg mt-3">
                                        <h3 className="text-3xl text-center">
                                            Start from ${" "}
                                            {d.pricing[0].price.toFixed(2)}
                                        </h3>
                                        <h3 className="text-xl font-semibold pb-2">
                                            {d.title}
                                        </h3>
                                        {d?.pricing?.map((pr, i) => (
                                            <div
                                                key={i}
                                                className="flex justify-between items-center">
                                                <p>{pr.name}</p>
                                                <p className="font-semibold">
                                                    ${pr.price.toFixed(2)}
                                                </p>
                                            </div>
                                        ))}

                                        <div className="relative w-full mt-4 rounded px-5 py-2.5 overflow-hidden group bg-gradient-to-r hover:bg-gradient-to-l from-blue-600 to-teal-800   hover:from-teal-600 hover:to-purple-600 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300 text-lg text-center">
                                            <a
                                                href="https://wa.me/+8801981600560"
                                                target="_blank"
                                                className="w-full inline-block">
                                                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                                                <span className="relative">
                                                    Free trial
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
            <Commitment />
            <ContactUs />
        </div>
    );
};

export default PhotoEditPricing;
