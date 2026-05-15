import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import Home from "../pages/Home";
import Treks from "../pages/Treks";
import TrekDetails from "../pages/TrekDetails";
import About from "../pages/About";
import Contact from "../pages/Contact";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/treks" element={<Treks />} />
                <Route path="/trek/:id" element={<TrekDetails />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;