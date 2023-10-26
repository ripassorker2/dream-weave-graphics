import {useEffect, useState} from "react";
import ReactCompareImage from "react-compare-image";
import Loader from "../Loader/Loader";
import {Link, useLocation} from "react-router-dom";

const Work = () => {
    const path = useLocation().pathname;
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true);
        fetch(
            "https://portfoliyo-server-5v4neu5hj-ripassorker2.vercel.app/demo"
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
        <div className="container">
            <div className="mb-8">
                <div className="lg:mt-24 md:mt-16 mt-10 ">
                    <div className="flex justify-center items-center">
                        <h3 data-aos="fade-left" className="heading text-white">
                            Some work demo
                        </h3>
                    </div>
                </div>

                {path === "/" ? (
                    <>
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 mt-6">
                            {data?.slice(0, 6)?.map((d, i) => (
                                <div
                                    key={i}
                                    data-aos={"fade-up"}
                                    className="border border-gray-700 p-3 rounded-lg">
                                    <div className="relative flex items-center justify-center">
                                        <ReactCompareImage
                                            hover={true}
                                            leftImage={d?.after}
                                            rightImage={d?.before}
                                        />
                                    </div>
                                    <div className=" mt-2">
                                        <h4 className="block  opacity-100 text-gray-100 mb-1 md:text-2xl text-xl">
                                            <Link
                                                to={`/details/${d.searviceId}`}>
                                                {" "}
                                                {d?.title}
                                            </Link>
                                        </h4>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="relative w-full mt-4 rounded px-5 py-2.5 overflow-hidden group bg-gradient-to-r hover:bg-gradient-to-l from-blue-600 to-rose-600   hover:from-teal-600 hover:to-purple-600 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300 text-lg text-center">
                            <Link
                                to={"/portfolio"}
                                className="w-full inline-block">
                                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                                <span className="relative">See More</span>
                            </Link>
                        </div>
                    </>
                ) : (
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 mt-6">
                        {data?.map((d, i) => (
                            <div
                                key={i}
                                data-aos={"fade-up"}
                                className="border border-gray-700  p-3 rounded-lg">
                                <div className="relative flex items-center justify-center">
                                    <ReactCompareImage
                                        hover={true}
                                        leftImage={d?.after}
                                        rightImage={d?.before}
                                    />
                                </div>
                                <div className=" mt-2">
                                    <h4 className="block  text-white mb-1 md:text-2xl text-xl hover:underline underline-offset-0">
                                        <Link to={`/details/${d.searviceId}`}>
                                            {d?.title}
                                        </Link>
                                    </h4>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Work;
