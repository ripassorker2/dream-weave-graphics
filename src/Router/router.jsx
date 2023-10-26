import {Link, createBrowserRouter} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Contact from "../pages/Contact/Contact";
import About from "../pages/About/About";
import WhyChooseUs from "../pages/WhyChooseUs/WhyChooseUs";
import PhotoEditPricing from "../pages/Pricing/PhotoEditPricing";
import Services from "../pages/Services/Services";
import Details from "../components/Details/Details";
import Work from "../components/Work/Work";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: (
            <div className="flex items-center justify-center mt-60">
                <div>
                    <h2 className="text-4xl"> 404 Not found this page.</h2>
                    <Link
                        to={"/"}
                        className="underline text-center block text-xl">
                        Go to home.
                    </Link>
                </div>
            </div>
        ),
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/services",
                element: <Services />,
            },
            {
                path: "/portfolio",
                element: <Work />,
            },
            {
                path: "/details/:id",
                element: <Details />,
                loader: ({params}) =>
                    fetch(
                        `https://portfoliyo-server-5v4neu5hj-ripassorker2.vercel.app/service/${params.id}`
                    ),
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/why-choose-us",
                element: <WhyChooseUs />,
            },
            {
                path: "/pricing",
                element: <PhotoEditPricing />,
            },
        ],
    },
]);
