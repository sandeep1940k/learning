import React from "react";
import { Link } from "react-router-dom";

interface HeaderProps {
    showSideBar: boolean;
    handleShowSideBar: () => void;
}

const Header: React.FC<HeaderProps> = ({showSideBar, handleShowSideBar}) => {
    return (
        <nav className="bg-green-100 top-0 sticky flex">
            <div className="px-2">
                <i onClick={handleShowSideBar} className={`${showSideBar ? 'ri-bar-chart-fill' : 'ri-bar-chart-horizontal-fill'} cursor-pointer side-bar-button`}></i>
            </div>
            <div>
                <Link to="/dashboard">Dashboard</Link>
            </div>
        </nav>
    )
}

export default Header;