import React from "react";
import BACKGROUND from "../../../constant/tailwind-css/background.constant";

const BackgroundColor: React.FC = () => {
    return (
        <>
            <div>
                <h1>Background Color</h1>
                <p>utilities for controlling an element's background color.</p>
                <div className="bg-sky-300 flex px-2">
                    <h2 className="p-2 w-[33.33%]">Class</h2>
                    <h2 className="p-2 w-[33.33%]">Properties</h2>
                    <h2 className="p-2 w-[33.33%]">Example</h2>
                </div>
                {BACKGROUND.map(color => (
                    <div key={color.class} className="bg-red-100 flex px-2">
                        <p className="p-2 w-[33.33%]">{color.class}</p>
                        <p className="p-2 w-[33.33%]">{color.properties}</p>
                        <p className={`p-2 w-[33.33%] ${color.class}`}></p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default BackgroundColor;