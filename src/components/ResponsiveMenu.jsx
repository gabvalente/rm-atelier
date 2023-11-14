import { useState } from 'react';
import { CiMenuBurger } from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";

export default function ResponsiveMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <>
            <button className="md:hidden absolute top-4 right-8" onClick={toggleMenu}>
                {isMenuOpen ? <TfiClose size={30} /> : <CiMenuBurger size={30} />}
            </button>
            <div className={`col-span-9 md:flex ${isMenuOpen ? 'flex' : 'hidden'} flex-col md:flex-row md:justify-between space-y-4 md:space-y-0 md:space-x-6`}>
                <div className="text-lg flex flex-col md:flex-row md:col-span-6 justify-start space-y-4 md:space-y-0 md:space-x-8">
                    <a href="/about" className="menu-link hover-underline">Sobre</a>
                    <a href="/archi" className="menu-link hover-underline">Arquitetura</a>
                    <a href="/design" className="menu-link hover-underline">Design</a>
                </div>
                <div className="text-lg flex flex-col md:flex-row md:col-span-3 justify-end space-y-4 md:space-y-0 md:space-x-8">
                    <a href="/store" className="menu-link hover-underline">Loja</a>
                    <a href="/contact" className="menu-link hover-underline">Contato</a>
                </div>
            </div>

            <style>
                {`
          .hover-underline {
            position: relative;
            overflow: hidden;
          }

          .hover-underline::after {
            content: '';
            position: absolute;
            width: 100%;
            transform: scaleX(0);
            height: 2px;
            bottom: 0;
            left: 0;
            background-color: #000;
            transform-origin: bottom right;
            transition: transform 0.3s ease-out;
          }

          .hover-underline:hover::after {
            transform: scaleX(1);
            transform-origin: bottom left;
          }
        `}
            </style>
        </>
    );
}
