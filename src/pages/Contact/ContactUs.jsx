import {useEffect} from "react";
import {Link, useLocation} from "react-router-dom";

const ContactUs = () => {
    const path = useLocation().pathname;
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [path]);
    return (
        <div className="flex items-center justify-center w-full h-[260px] bg-gradient-to-l from-primary to-teal-500 my-10">
            <div className="p-9">
                <h3
                    data-aos="fade-up"
                    className="md:text-4xl text-2xl pb-1 text-center  text-white">
                    If you have any queries? Feel free to conatct us.
                </h3>
                <Link
                    to={`/contact`}
                    className="flex items-center justify-center">
                    <button className="mt-1 bg-black px-6 py-3 text-sm font-bold uppercase tracking-wide text-gray-200 ">
                        Contact us
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ContactUs;
