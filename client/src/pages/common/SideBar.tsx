import React from "react";

interface Property {
    id: string,
    name: string,
}

interface SideBarProps {
    list: Property[];
    showSideBar: boolean;
    handleProperty: (id: string) => void;
}

const SideBar: React.FC<SideBarProps> = ({ list, showSideBar, handleProperty }) => {
    return (
        <nav className={`${showSideBar ? 'hidden' : 'block'} w-80 side-bar`}>

            {
                list.map((property) => (
                    <div
                        key={property.id}
                        onClick={() => handleProperty(property.id)}
                        className="bg-sky-300 p-2  cursor-pointer border text-gray-600 flex justify-center rounded-xl text-xs"
                    >
                        {property.name}
                    </div>
                ))
            }
        </nav>
    )
}


export default SideBar;