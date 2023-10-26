/* eslint-disable no-unused-vars */
import {useState, useMemo} from "react";
import countryList from "react-select-country-list";
import img from "../../assets/contact-us-scaled-1.jpg";
import {useLocation} from "react-router-dom";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Contact = () => {
    const [country, setCountry] = useState("");
    const [disable, setDisable] = useState(false);

    const options = useMemo(() => countryList().getData(), []);
    const path = useLocation().pathname;

    const handleSendMessage = (event) => {
        event.preventDefault();

        const form = event.target;

        const name = form.name?.value;
        const email = form.email?.value;
        const subject = form.subject?.value;
        const website = form.website?.value;
        const company = form.company?.value;
        const message = form.message?.value;

        const body = ` 
                    <p  style="font-size: medium; font-weight: 400;">Email : ${email}</p>
                    <p  style="font-size: medium; font-weight: 400;">Name : ${name}</p>
                    <p  style="font-size: medium; font-weight: 400;">Company Name : ${company}</p>
                    <p  style="font-size: medium; font-weight: 400;">Country : ${country}</p>
                    <p  style="font-size: medium; font-weight: 400;"> Websile Link : ${website}</p>
                    <p  style="font-size: medium; font-weight: 400;">Message : ${message} </p>
            `;

        setDisable(true);

        const config = {
            Host: import.meta.env.VITE_APP_HOST,
            Username: import.meta.env.VITE_APP_USER_NAME,
            Password: import.meta.env.VITE_APP_PASSWORD,
            Port: import.meta.env.VITE_APP_PORT,
            To: import.meta.env.VITE_APP_USER_NAME,
            From: import.meta.env.VITE_APP_USER_NAME,
            Subject: subject,
            Body: body,
        };
        if (window.Email) {
            window.Email.send(config)
                .then((data) => {
                    Swal.fire(
                        "Thank you!",
                        "Email send successfully.",
                        "success"
                    );
                    setDisable(false);
                    form.reset();
                })
                .catch((err) => {
                    console.log(err);
                    setDisable(false);
                });
        }
    };

    return (
        <div className="mb-10">
            {path === "/contact" && (
                <div data-aos="fade-up">
                    <img src={img} className="w-full md:h-[450px]" alt="" />
                    <p style={{fontSize: "30px"}}></p> <br />
                </div>
            )}

            <div
                data-aos="fade-up"
                className=" flex items-center justify-center my-10 mt-16">
                <div className="container">
                    <div className="">
                        <h3 className="md:text-2xl text-xl pb-2 text-gray-100">
                            If you have any query? Please fillup the form.
                        </h3>
                        <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                            <form
                                onSubmit={handleSendMessage}
                                className="lg:col-span-3 text-gray-100">
                                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                                    <div className="md:col-span-3">
                                        <label>Full name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            className="h-10 border mt-1 rounded px-4 w-full text-gray-900 border-gray-400 focus:outline-none focus:border focus:border-gray-700"
                                            placeholder="Your name..."
                                            required
                                        />
                                    </div>
                                    <div className="md:col-span-2">
                                        <label>Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            className="h-10 border mt-1 rounded px-4 w-full text-gray-900 border-gray-400 focus:outline-none focus:border focus:border-gray-700"
                                            placeholder="Your emial"
                                            required
                                        />
                                    </div>

                                    <div className="md:col-span-2">
                                        <label>Subject </label>
                                        <input
                                            type="text"
                                            name="subject"
                                            className="h-10 border mt-1 rounded px-4 w-full text-gray-900 border-gray-400 focus:outline-none focus:border focus:border-gray-700"
                                            placeholder="Your subject..."
                                        />
                                    </div>

                                    <div className="md:col-span-3 text-gray-900">
                                        <label>Country</label>
                                        <select
                                            name="country"
                                            value={country}
                                            onChange={(e) =>
                                                setCountry(e.target.value)
                                            }
                                            className="h-10 border mt-1 rounded px-4 w-full text-gray-900 border-gray-400 focus:outline-none focus:border focus:border-gray-700">
                                            <option
                                                defaultValue={
                                                    "Select your country"
                                                }
                                                disabled>
                                                Select your country
                                            </option>
                                            {options.map((op, i) => (
                                                <option key={i}>
                                                    {op.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="md:col-span-3">
                                        <label>Website (optional)</label>
                                        <input
                                            type="text"
                                            name="website"
                                            className="h-10 border mt-1 rounded px-4 w-full text-gray-900 border-gray-400 focus:outline-none focus:border focus:border-gray-700"
                                            placeholder="Your website link..."
                                        />
                                    </div>
                                    <div className="md:col-span-2">
                                        <label>Company (optional)</label>
                                        <input
                                            type="text"
                                            name="company"
                                            className="h-10 border mt-1 rounded px-4 w-full text-gray-900 border-gray-400 focus:outline-none focus:border focus:border-gray-700"
                                            placeholder="Your company..."
                                        />
                                    </div>
                                    <div className="md:col-span-5">
                                        <label>Message</label>
                                        <div className=" border-gray-400 rounded items-center mt-1">
                                            <textarea
                                                className="h-14 border mt-1 rounded px-4 pt-1 w-full border-gray-400 focus:outline-none focus:border focus:border-gray-700 text-gray-900"
                                                name="message"
                                                placeholder="Write your message...."
                                                required></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-end items-end mt-3">
                                    <button
                                        type="submit"
                                        disabled={disable}
                                        className={`${
                                            disable
                                                ? "text-gray-100  px-5 py-1 text-lg bg-gray-500"
                                                : "text-gray-200  px-5 py-1 text-lg bg-primary"
                                        }`}>
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
