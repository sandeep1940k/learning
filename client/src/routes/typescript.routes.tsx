import React from "react";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Introduction from "../pages/courses/typescript/Introduction";
import TYPESCRIPT from "../constant/typescript/typescript.constant";
import Arrays from "../pages/courses/typescript/Arrays";
import Advantages from "../pages/courses/typescript/Advantages";
import Disadvantages from "../pages/courses/typescript/Disadvantages";

const TypeScript: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleTypeScript = (id: string) => {
        navigate(`/TS${id}`);
    };

    return (
        <>
            <nav>
                <Link to="/dashboard">Dashboard</Link>
            </nav>
            <div className="flex">
                <nav className="w-80">
                    {TYPESCRIPT.map((property) => (
                        <div
                            key={property.id}
                            onClick={() => handleTypeScript(property.id)}
                            className="bg-sky-300 p-6 cursor-pointer border border-black"
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
