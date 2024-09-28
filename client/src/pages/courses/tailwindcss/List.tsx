import React from "react";
import LIST from "../../../constant/tailwind-css/list.constant";

const List: React.FC = () => {
    return (
        <>
            <div>
                <h1>Background Color</h1>
                <p>utilities for controlling an element's background color.</p>
                <div className="bg-sky-300 flex px-2">
                    <h2 className="p-2 w-[50%]">Class</h2>
                    <h2 className="p-2 w-[50%]">Example</h2>
                </div>
                {LIST.map(property => (
                    <div key={property.class} className="bg-red-100 flex px-2">
                        <ul className="p-2 w-[50%]">{property.class}</ul>
                        <ul className={`p-2 w-[50%] ${property.class}`}>
                            <li>{property.class}</li>
                        </ul>
                    </div>
                ))}
            </div>
            {LIST.map(property => (
                <>
                    <div className="bg-green-50 font-bold">{property.class}</div>
                    <div className="flex">
                        <div className="p-2 w-[25%]">
                            <ul className={`${property.class}`}>
                                <li>Example</li>
                            </ul>
                        </div>
                        <div className="bg-black p-2 w-[25%]">
                            <p className="text-blue-400">&lt;ul
                                <span className="text-blue-200 pl-2">className</span>
                                <span className="text-white">=</span>
                                <span className="text-orange-600">"{property.class}"</span>&gt;<br />
                                <span>&nbsp; &lt;li&gt;</span>Example
                                <span>&lt;/li&gt;</span><br />
                                <span>&lt;/ul&gt;</span>
                            </p>
                        </div>
                        <div className="p-2 w-[25%]">
                            <ul className={`${property.class} list-inside`}>
                                <li>Example</li>
                            </ul>
                        </div>
                        <div className="bg-black p-2 w-[25%]">
                            <p className="text-blue-400">&lt;ul
                                <span className="text-blue-200 pl-2">className</span>
                                <span className="text-white">=</span>
                                <span className="text-orange-600">"{property.class} list-inside"</span>&gt;<br />
                                <span>&nbsp; &lt;li&gt;</span>Example
                                <span>&lt;/li&gt;</span><br />
                                <span>&lt;/ul&gt;</span>
                            </p>
                        </div>
                       


                    </div>
                </>

            ))}
        </>
    )
}

export default List;