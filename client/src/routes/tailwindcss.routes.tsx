import React from "react";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Introduction from "../pages/courses/tailwindcss/Introduction";
import TAILWIND_CSS from "../constant/tailwind-css/tailwind-css.constant";
import BackgroundColor from "../pages/courses/tailwindcss/Background";
import List from "../pages/courses/tailwindcss/List";

const Tailwindcss: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleTailwindCss = (id: string) => {
        navigate(`/TCSS${id}`);
    };

    return (
        <>
            <nav>
                <Link to="/dashboard">Dashboard</Link>
            </nav>
            <div className="flex">
                <nav className="w-80">
                    {TAILWIND_CSS.map((property) => (
                        <div
                            key={property.id}
                            onClick={() => handleTailwindCss(property.id)}
                            className="bg-sky-300 p-6 cursor-pointer border border-black"
                        >
                            {property.name}
                        </div>
                    ))}
                </nav>
                <section className="w-full p-10">
                    {location.pathname === '/TCSS' && <Introduction />}
                    {location.pathname === '/TCSS/BACKGROUND' && <BackgroundColor />}
                    {location.pathname === '/TCSS/LIST' && <List />}
                </section>
            </div>
        </>
    );
};

export default Tailwindcss;
