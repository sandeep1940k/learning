import React, { useState } from "react";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Introduction from "../pages/courses/typescript/Introduction";
import TYPESCRIPT from "../constant/typescript/typescript.constant";
import Arrays from "../pages/courses/typescript/Arrays";
import Advantages from "../pages/courses/typescript/Advantages";
import Disadvantages from "../pages/courses/typescript/Disadvantages";

const TypeScript: React.FC = () => {
    const [showSideBar, setShowSideBar] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const handleTypeScript = (id: string) => {
        navigate(`/TS${id}`);
    };

    const handleShowSideBar = () => {
        setShowSideBar(!showSideBar);
    }

    return (
        <>
            <nav className="bg-green-100 top-0 sticky flex">
                <div className="px-2">
                    <i onClick={handleShowSideBar} className={`${showSideBar ? 'ri-bar-chart-fill' : 'ri-bar-chart-horizontal-fill'} cursor-pointer hidden side-bar-button`}></i>
                </div>
                <div>
                    <Link to="/dashboard">Dashboard</Link>
                </div>
            </nav>
            <div className="flex">
                <nav className={`${showSideBar ? 'hidden' : 'block'} w-80 side-bar`}>
                    {TYPESCRIPT.map((property) => (
                        <div
                            key={property.id}
                            onClick={() => handleTypeScript(property.id)}
                            className="bg-sky-300 p-2  cursor-pointer border text-gray-600 flex justify-center rounded-xl text-xs"
                        >
                            {property.name}
                        </div>
                    ))}
                </nav>

                <section className="w-full p-10">
                    {location.pathname === '/TS' && <Introduction />}
                    {location.pathname === '/TS/ARRAYS' && <Arrays />}
                    {location.pathname === '/TS/ADVANTAGES' && <Advantages />}
                    {location.pathname === '/TS/DISADVANTAGES' && <Disadvantages />}
                </section>
            </div>
        </>
    );
};

export default TypeScript;
