import {AiOutlineDeliveredProcedure} from "react-icons/ai";
import {MdOutlineHighQuality} from "react-icons/md";
import satisfactions from "../../assets/9746636.png";
import {useLocation} from "react-router-dom";

const Commitment = () => {
    const path = useLocation().pathname;
    return (
        <div
            className={`${
                path == "/"
                    ? "bg-gradient-to-r from-primary to-teal-800 lg:mt-16 "
                    : ""
            }  md:mt-12 mt-10  py-14`}>
            <div className="container">
                <div className="flex justify-center items-center text-white">
                    <h3
                        data-aos="fade-left"
                        className={`text-gray-100 heading`}>
                        Why you will choose us?
                    </h3>
                </div>
                <div
                    data-aos="fade-up"
                    className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 text-gray-100 mt-6">
                    <div className="bg-teal-500 hover:bg-teal-700   grid place-content-center p-6 rounded-md text-center  duration-500">
                        <div className="flex items-center justify-center">
                            <MdOutlineHighQuality className="text-6xl block text-center" />
                        </div>
                        <h4 className="text-gray1 md:text-3xl text-2xl  ">
                            100% Quality services
                        </h4>
                    </div>
                    <div className="bg-teal-500 hover:bg-teal-700  grid place-content-center p-6 rounded-md text-center duration-500">
                        <div className="flex items-center justify-center">
                            <AiOutlineDeliveredProcedure className="text-6xl block text-center" />
                        </div>
                        <h4 className="text-gray1 md:text-3xl text-2xl  ">
                            Fast delivary
                        </h4>
                    </div>
                    <div className="bg-teal-500 hover:bg-teal-700  grid place-content-center p-6 rounded-md text-center duration-500">
                        <div className="flex items-center justify-center">
                            <img className="h-14" src={satisfactions} alt="" />
                        </div>
                        <h4 className="text-gray1 md:text-3xl text-2xl  ">
                            100% Satisfactions
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Commitment;
