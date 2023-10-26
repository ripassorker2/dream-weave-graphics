import {useEffect, useState} from "react";
import ReactCompareImage from "react-compare-image";
import {Link} from "react-router-dom";

const PhotoServices = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(
            "https://portfoliyo-server-5v4neu5hj-ripassorker2.vercel.app/services"
        )
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);

    return (
        <div className="mb-8">
            <div className="flex justify-center items-center">
                <h3 data-aos="fade-right" className="heading text-white">
                    Our services
                </h3>
            </div>
            {data.length > 0 ? (
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 mt-8">
                    {data?.map((data, i) => (
                        <div key={i}>
                            <div
                                data-aos="fade-up"
                                className=" hover:shadow-2xl   border-gray-900   hover:border-gray-800 duration-500 border-2 relative overflow-hidden rounded-lg shadow-lg">
                                <div className="relative pt-5 px-5 flex items-center justify-center">
                                    <ReactCompareImage
                                        hover={true}
                                        handleSize={35}
                                        leftImage={data?.imgAfter}
                                        rightImage={data?.imgBefore}
                                    />
                                </div>
                                <div className="text-gray-100 px-5 pb-6 mt-2">
                                    <div className="flex justify-between">
                                        <span className="block font-semibold opacity-100 text-gray-100 mb-1 text-lg">
                                            {data.title}
                                        </span>
                                    </div>
                                    <p>
                                        {data?.description[0]?.disc.length > 130
                                            ? `${data?.description[0]?.disc.slice(
                                                  0,
                                                  130
                                              )}....`
                                            : data?.description[0].disc}
                                    </p>
                                    <Link to={`/details/${data._id}`}>
                                        <button className="inline-block w-full md:px-6 px-4 md:py-3 py-2 mt-1 text-gray-100 bg-primary hover:bg-teal-500  md:text-base text-sm font-semibold rounded-md duration-300 ">
                                            Details
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 my-8 mt-20">
                    <div
                        data-aos="fade-down"
                        className=" rounded-lg shadow-md animate-pulse border-2 border-gray-700">
                        <div className="pt-5 px-5">
                            <div className="h-52  rounded-t dark:bg-gray-500"></div>
                        </div>
                        <div className=" px-2 py-8 space-y-4 sm:p-5 ">
                            <div className="w-[60%] h-6 rounded dark:bg-gray-500"></div>
                            <div className=" w-full h-6 rounded dark:bg-gray-500 mt-2"></div>{" "}
                            <div className="w-full h-8 rounded dark:bg-gray-500"></div>
                        </div>
                    </div>
                    <div
                        data-aos="fade-down"
                        className=" rounded-lg shadow-md animate-pulse border-2 border-gray-700">
                        <div className="pt-5 px-5">
                            <div className="h-52  rounded-t dark:bg-gray-500"></div>
                        </div>
                        <div className=" px-2 py-8 space-y-4 sm:p-5 ">
                            <div className="w-[60%] h-6 rounded dark:bg-gray-500"></div>
                            <div className=" w-full h-6 rounded dark:bg-gray-500 mt-2"></div>{" "}
                            <div className="w-full h-8 rounded dark:bg-gray-500"></div>
                        </div>
                    </div>
                    <div
                        data-aos="fade-down"
                        className=" rounded-lg shadow-md animate-pulse border-2 border-gray-700">
                        <div className="pt-5 px-5">
                            <div className="h-52  rounded-t dark:bg-gray-500"></div>
                        </div>
                        <div className=" px-2 py-8 space-y-4 sm:p-5 ">
                            <div className="w-[60%] h-6 rounded dark:bg-gray-500"></div>
                            <div className=" w-full h-6 rounded dark:bg-gray-500 mt-2"></div>{" "}
                            <div className="w-full h-8 rounded dark:bg-gray-500"></div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PhotoServices;
