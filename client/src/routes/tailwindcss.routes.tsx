import React, { useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import Introduction from "../pages/courses/tailwindcss/Introduction";
import TAILWIND_CSS from "../constant/tailwind-css/tailwind-css.constant";
import BackgroundColor from "../pages/courses/tailwindcss/Background";
import List from "../pages/courses/tailwindcss/List";
import SideBar from "../pages/common/SideBar";
import Header from "../pages/common/Header";

const Tailwindcss: React.FC = () => {
    const [showSideBar, setShowSideBar] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const handleTailwindCss = (id: string) => {
        navigate(`/TCSS${id}`);
        handleShowSideBar();
    };

    const handleShowSideBar = () => {
        setShowSideBar(!showSideBar);
    }

    return (
        <>
            <Header showSideBar={showSideBar} handleShowSideBar={handleShowSideBar}/>
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
