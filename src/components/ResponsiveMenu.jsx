import { useState } from 'react';
import { CiMenuBurger } from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";

export default function ResponsiveMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen);
    }

    const mobileMenuStyles = `
    .mobile-menu {
        background-color: white; 
        padding: 1rem;
        border-radius: 8px;
        box-shadow: 0 2px 12px rgba(0,0,0,0.1);
        transform-origin: top;
        transition: transform 0.3s ease-in-out;
    }
    .mobile-menu.hidden {
        transform: scaleY(0);
    }
    .mobile-menu.flex {
        transform: scaleY(1);
    }
`;

    return (
        <>
            <button className="md:hidden absolute top-5 right-8 focus:outline-none" onClick={toggleMenu}>
                {isMenuOpen ? <TfiClose size={30} /> : <CiMenuBurger size={30} />}
            </button>
            <div className={`col-span-9 md:flex ${isMenuOpen ? 'flex' : 'hidden'} flex-col md:flex-row md:justify-between space-y-4 md:space-y-0 md:space-x-6`}>
                <div className="flex flex-col md:flex-row md:col-span-6 justify-start space-y-4 md:space-y-0 md:space-x-8">
                    <a href="/about" className="menu-link mobile-hover">Sobre</a>
                    <a href="/archi" className="menu-link mobile-hover">Arquitetura</a>
                    <a href="/design" className="menu-link mobile-hover">Design</a>
                </div>
                <div className="flex flex-col md:flex-row md:col-span-3 justify-end space-y-4 md:space-y-0 md:space-x-8">
                    <a href="/store" className="menu-link mobile-hover">Loja</a>
                    <a href="/contact" className="menu-link mobile-hover">Contato</a>
                </div>
            </div>

            <style>
                {mobileMenuStyles}
                {`
                    .menu-link {
                        position: relative;
                        display: inline-block;
                        padding: 8px 0; // Increased padding for touch targets
                    }

                    /* Hover effect only for non-touch devices */
                    @media (hover: hover) {
                        .menu-link::after {
                            content: '';
                            position: absolute;
                            width: 100%;
                            transform: scaleX(0);
                            height: 2px;
                            bottom: 0;
                            left: 0;
                            background-color: #000; // Change as per theme
                            transform-origin: bottom right;
                            transition: transform 0.3s ease-out;
                        }

                        .menu-link:hover::after, .menu-link:focus::after {
                            transform: scaleX(1);
                            transform-origin: bottom left;
                        }
                    }

                    /* Touch/click effect for all devices */
                    .mobile-hover:active {
                        opacity: 0.7;
                    }
                `}
            </style>
        </>
    );
}
