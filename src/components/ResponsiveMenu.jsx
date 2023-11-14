import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { CiMenuBurger } from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";

export default function ResponsiveMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
      <button className="md:hidden absolute top-5 right-8" onClick={toggleMenu}>
        {isMenuOpen ? <TfiClose size={30} /> : <CiMenuBurger size={30} />}
      </button>
      <div className={`col-span-9 md:flex ${isMenuOpen ? 'flex' : 'hidden'} flex-col md:flex-row md:justify-between space-y-4 md:space-y-0 md:space-x-6`}>
        <div class="flex flex-col md:flex-row md:col-span-6 justify-start space-y-4 md:space-y-0 md:space-x-8">
          <a href="/about" class="menu-link">Sobre</a>
          <a href="/archi" class="menu-link">Arquitetura</a>
          <a href="/design" class="menu-link">Design</a>
        </div>
        <div class="flex flex-col md:flex-row md:col-span-3 justify-end space-y-4 md:space-y-0 md:space-x-8">
          <a href="/store" class="menu-link">Loja</a>
          <a href="/contact" class="menu-link">Contato</a>
        </div>
      </div>
    </>
  );
}
