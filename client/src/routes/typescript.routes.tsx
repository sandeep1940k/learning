import React, { useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import Introduction from "../pages/courses/typescript/Introduction";
import TYPESCRIPT from "../constant/typescript/typescript.constant";
import Arrays from "../pages/courses/typescript/Arrays";
import Advantages from "../pages/courses/typescript/Advantages";
import Disadvantages from "../pages/courses/typescript/Disadvantages";
import SideBar from "../pages/common/SideBar";
import Header from "../pages/common/Header";
import DeclareVariable from "../pages/courses/typescript/DeclareVariable";
import AccessModifiers from "../pages/courses/typescript/AccessModifiers";
import Loops from "../pages/courses/typescript/Loop";
import Config from "../pages/courses/typescript/Config";
import Methods from "../pages/courses/typescript/Methods";

const TypeScript: React.FC = () => {
    const [showSideBar, setShowSideBar] = useState(true);
    const location = useLocation();
    const navigate = useNavigate();

    const handleTypeScript = (id: string) => {
        navigate(`/TS${id}`);
        handleShowSideBar();
    };

    const handleShowSideBar = () => {
        setShowSideBar(!showSideBar);
    }

    return (
        <>
            <Header showSideBar={showSideBar} handleShowSideBar={handleShowSideBar} />
            <div className="flex">
                <SideBar list={TYPESCRIPT} showSideBar={showSideBar} handleProperty={handleTypeScript} />
                <section className="w-full p-10">
                    {location.pathname === '/TS' && <Introduction />}
                    {location.pathname === '/TS/ACCESS_MODIFIERS' && <AccessModifiers />}
                    {location.pathname === '/TS/ARRAYS' && <Arrays />}
                    {location.pathname === '/TS/LOOPS' && <Loops />}
                    {location.pathname === '/TS/DECLARE_VARIABLE' && <DeclareVariable />}
                    {location.pathname === '/TS/ADVANTAGES' && <Advantages />}
                    {location.pathname === '/TS/DISADVANTAGES' && <Disadvantages />}
                    {location.pathname === '/TS/CONFIG' && <Config />}
                    {location.pathname === '/TS/METHODS' && <Methods />}
                </section>
            </div>
        </>
    );
};

export default TypeScript;
