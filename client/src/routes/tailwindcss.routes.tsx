import React, { useState } from "react";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Introduction from "../pages/courses/tailwindcss/Introduction";
import TAILWIND_CSS from "../constant/tailwind-css/tailwind-css.constant";
import BackgroundColor from "../pages/courses/tailwindcss/Background";
import List from "../pages/courses/tailwindcss/List";
import SideBar from "../pages/common/SideBar";

const Tailwindcss: React.FC = () => {
    const [showSideBar, setShowSideBar] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const handleTailwindCss = (id: string) => {
        navigate(`/TCSS${id}`);
    };

    const handleShowSideBar = () => {
        setShowSideBar(!showSideBar);
    }

    return (
        <>
            <nav className="bg-green-100 top-0 sticky flex">
                <div className="px-2">
                    <i onClick={handleShowSideBar} className={`${showSideBar ? 'ri-bar-chart-fill' : 'ri-bar-chart-horizontal-fill'} cursor-pointer side-bar-button`}></i>
                </div>
                <div>
                    <Link to="/dashboard">Dashboard</Link>
                </div>
            </nav>
            <div className="flex">
                {/* <div className="w-80"> */}
                    <SideBar list={TAILWIND_CSS} showSideBar={showSideBar} handleProperty={handleTailwindCss}/>
                {/* </div> */}
                <section className="w-full p-10 containt">
                    {location.pathname === '/TCSS' && <Introduction />}
                    {location.pathname === '/TCSS/BACKGROUND' && <BackgroundColor />}
                    {location.pathname === '/TCSS/LIST' && <List />}
                </section>
            </div>
        </>
    );
};

export default Tailwindcss;
