import React from "react";

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="header__logo">
                <img src="logo.png" alt="Logo" />
            </div>
            <div className="header__menu">
                <ul className="menu">
                    <li className="menu__item">
                        <a href="#" className="menu__link">Home</a>
                    </li>

                </ul>
            </div>
        </header>
    )
}

export default Header;