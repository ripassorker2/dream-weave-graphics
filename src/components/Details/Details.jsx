import ReactCompareImage from "react-compare-image";
import Commitment from "../Commitment/Commitment";
import ContactUs from "../../pages/Contact/ContactUs";
import {Link, useLoaderData} from "react-router-dom";

const Details = () => {
    const service = useLoaderData()[0];
    console.log(service);
    return (
        <div className="mt-6">
            <div className="-mb-14">
                <div className="container">
                    <div className="relative flex items-center justify-center md:w-[70%] mx-auto">
                        <ReactCompareImage
                            hover={true}
                            leftImage={service?.imgAfter}
                            rightImage={service?.imgBefore}
                        />
                    </div>
                    <div className=" mt-2">
                        <h4
                            data-aos="fade-up-"
                            className="block font-semibold opacity-100 text-gray-100 mb-1 md:text-3xl text-2xl">
                            {service.title}
                        </h4>
                    </div>
                    <div data-aos="fade-up" className="leading-3">
                        {service?.description?.map((ser, i) => (
                            <p key={i} className="text-gray-100 text-lg pb-1.5">
                                {ser.disc}
                            </p>
                        ))}
                    </div>
                    <div className="text-gray-100">
                        <h3
                            data-aos="fade-right"
                            className="block font-semibold opacity-100 text-gray-50 md:text-3xl text-2xl mt-6 ">
                            Pricing{" "}
                        </h3>
                        <div className="grid md:grid-cols-3 gap-10 pt-4">
                            <div
                                data-aos="fade-up"
                                className="border min-h-[150px] border-gray-700 rounded-lg p-6 flex text-lg  justify-center items-center text-center">
                                <p className="font-semibold">
                                    For bulk order we provide upto 40% discount{" "}
                                </p>
                            </div>
                            <div
                                data-aos="fade-up"
                                className="border min-h-[150px] border-gray-700 rounded-lg p-6">
                                {service?.pricing?.map((p, i) => (
                                    <div
                                        key={i}
                                        className="flex text-lg justify-between items-center">
                                        <p>{p.name}</p>
                                        <p className="font-semibold">
                                            ${p.price.toFixed(2)}
                                        </p>
                                    </div>
                                ))}
                            </div>
                            <div
                                data-aos="fade-up"
                                className="border min-h-[150px] border-gray-700 rounded-lg p-6 flex text-lg  justify-center items-center text-center">
                                <p className="font-semibold">
                                    We can deliver 5000 images/day.
                                </p>
                            </div>
                        </div>
                    </div>
                    {service?.work?.length > 0 && (
                        <div>
                            <h3
                                data-aos="fade-left"
                                className="block font-semibold opacity-100 text-gray-50 mb-1 md:text-3xl text-2xl mt-6">
                                Some work demo
                            </h3>
                            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 mt-6">
                                {service?.work?.map((d, i) => (
                                    <div key={i}>
                                        <div
                                            data-aos={d?.animation}
                                            className="border border-gray-700  p-3 rounded-lg">
                                            <div className="relative flex items-center justify-center">
                                                <ReactCompareImage
                                                    hover={true}
                                                    leftImage={d?.after}
                                                    rightImage={d?.before}
                                                />
                                            </div>
                                            <div className=" mt-2">
                                                <h4 className="block  opacity-100 text-gray-800 mb-1 md:text-3xl text-xl hover:underline underline-offset-0">
                                                    <Link
                                                        to={`/details/${d.searviceId}`}>
                                                        {" "}
                                                        {d?.title}
                                                    </Link>
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <Commitment />
            <ContactUs />
        </div>
    );
};

export default Details;
