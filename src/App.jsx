import { RouterProvider } from "react-router-dom";
import { router } from "./Router/router";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    return (
        <div className="font-serif">
            <RouterProvider router={router}></RouterProvider>
        </div>
    );
};

export default App;
