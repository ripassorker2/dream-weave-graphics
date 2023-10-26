/* eslint-disable react/jsx-no-target-blank */
import {BiSupport, BiLogoCreativeCommons} from "react-icons/bi";
import {DiCodeigniter} from "react-icons/di";
import {AiOutlineDeliveredProcedure} from "react-icons/ai";
import {Link} from "react-router-dom";

const ColorExpert = () => {
    return (
        <div data-aos="fade-up" className="md:mt-16 mt-10 py-10 bg-gray-900">
            <div className="container md:grid md:grid-cols-2 gap-10 flex flex-col-reverse text-white">
                <div>
                    <h3 data-aos="fade-left" className="heading text-white">
                        Why choose us
                    </h3>
                    <div
                        data-aos="fade-up"
                        className="grid md:grid-cols-2 gap-7 mt-9">
                        <div className="text-center border border-gray-500  p-3 hover:border-blue-600">
                            <DiCodeigniter className="text-4xl text-rose-600 inline-block" />
                            <h3 className="text-2xl  font-semibold ">
                                10+ years{" "}
                            </h3>
                            <p className="text-lg ">
                                Professtional experience.
                            </p>
                        </div>
                        <div className="text-center border border-gray-500 hover:border-teal-600 p-3">
                            <BiLogoCreativeCommons className="text-4xl text-blue-600 inline-block" />
                            <h3 className="text-2xl  font-semibold ">
                                20+ Creative
                            </h3>
                            <p className="text-lg ">Designer.</p>
                        </div>
                        <div className="text-center border border-gray-500 hover:border-green-600  p-3">
                            <AiOutlineDeliveredProcedure className="text-4xl text-teal-600 inline-block" />
                            <h3 className="text-2xl  font-semibold ">
                                Delivery
                            </h3>
                            <p className="text-lg ">Fast delevery.</p>
                        </div>
                        <div className="text-center border border-gray-500 hover:border-rose-600 p-3">
                            <BiSupport className="text-4xl text-purple-600  inline-block" />
                            <h3 className="text-2xl  font-semibold ">24/7</h3>
                            <p className="text-lg ">Support.</p>
                        </div>
                    </div>

                    <a
                        href="https://wa.me/+8801981600560"
                        target="_blank"
                        data-aos="fade-up"
                        className="mt-6 w-full relative p-1 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md text-center">
                        <span className="w-full h-full bg-gradient-to-br from-cyan-600 via-[#ff5478] to-cyan-500 group-hover:from-cyan-500 group-hover:via-[#ff5478] group-hover:to-blue-600 absolute text-lg"></span>
                        <span className="relative px-5 py-2 transition-all ease-out w-full bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                            <span className="relative text-white">
                                Free trial
                            </span>
                        </span>
                    </a>
                </div>
                <div>
                    <h3 data-aos="fade-right" className="heading">
                        {" "}
                        Core Services
                    </h3>
                    <div
                        data-aos="fade-up"
                        className="grid md:grid-cols-2 gap-6 mt-6">
                        <Link
                            to={"/details/6539df79dbdef53a817b1907"}
                            className="bg-gradient-to-r hover:bg-gradient-to-l from-fuchsia-600  to-blue-600 flex justify-center p-3 items-center space-x-3 rounded">
                            <h3 className="text-2xl text-white font-semibold text-center">
                                Clipping path
                            </h3>
                            <img
                                src={
                                    "https://i.ibb.co/NW86bHL/Cycle-2021-11-24-1448-001.jpg"
                                }
                                className="w-[50%] max-h-28 m-auto rounded"
                                alt=""
                            />
                        </Link>
                        <Link
                            to={"/details/6539df79dbdef53a817b190c"}
                            className="bg-gradient-to-r hover:bg-gradient-to-l to-blue-600 from-rose-600 flex justify-center p-3 items-center space-x-3 rounded">
                            <h3 className="text-2xl text-white font-semibold text-center">
                                Image masking
                            </h3>
                            <img
                                src={
                                    "https://i.ibb.co/j8fzgbW/LG-SET-YOUR-MOVIES-FREE31291-HERO-TALENT.jpg"
                                }
                                className="w-[50%] max-h-28 m-auto rounded"
                                alt=""
                            />
                        </Link>
                        <Link
                            to={"/details/6539df79dbdef53a817b1906"}
                            className="bg-gradient-to-r  hover:bg-gradient-to-l from-teal-600 to-rose-600 flex justify-center p-3 items-center space-x-3 rounded ">
                            <h3 className="text-2xl text-white font-semibold text-center">
                                Beuty retouching
                            </h3>
                            <img
                                src={"https://i.ibb.co/bmPzxKq/Done.jpg"}
                                className="w-[50%] max-h-28 m-auto rounded"
                                alt=""
                            />
                        </Link>
                        <Link
                            to={"/details/6539df79dbdef53a817b190a"}
                            className="bg-gradient-to-r hover:bg-gradient-to-l from-blue-600 to-teal-600 flex justify-center p-3 items-center space-x-3 rounded">
                            <h3 className="text-2xl text-white font-semibold text-center">
                                Ghost Mannequin
                            </h3>
                            <img
                                src={
                                    "https://i.ibb.co/Bzncb78/KS101247-KALAMATA-1.jpg"
                                }
                                className="w-[50%] max-h-28 m-auto rounded"
                                alt=""
                            />
                        </Link>
                    </div>

                    <div
                        data-aos="fade-up"
                        className="relative w-full mt-4 rounded px-5 py-2.5 overflow-hidden group bg-gradient-to-r hover:bg-gradient-to-l from-blue-600 to-rose-600   hover:from-teal-600 hover:to-purple-600 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300 text-lg text-center">
                        <Link to={"/services"} className="w-full inline-block">
                            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                            <span className="relative">See More</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ColorExpert;
