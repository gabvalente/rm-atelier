import { useState } from 'react';

export default function ResponsiveMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
      <button className="md:hidden" onClick={toggleMenu}>
        <svg viewBox="0 0 100 80" width="40" height="40">
          <rect width="100" height="20"></rect>
          <rect y="30" width="100" height="20"></rect>
          <rect y="60" width="100" height="20"></rect>
        </svg>
      </button>
      <div className={`col-span-9 md:flex ${isMenuOpen ? 'flex' : 'hidden'} justify-between space-x-6`}>
        <a href="/about" className="menu-link">Sobre</a>
        <a href="/archi" className="menu-link">Arquitetura</a>
        <a href="/design" className="menu-link">Design</a>
        <a href="/store" className="menu-link">Loja</a>
        <a href="/contact" className="menu-link">Contato</a>
      </div>
    </>
  );
}
