import { useState } from "react";

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="relative md:hidden flex items-center ml-4">
      <button onClick={handleClick}>
        {isOpen ? (
          <img src="/menu_close.svg" alt="Close Menu" />
        ) : (
          <img src="/menu_open.svg" alt="Open Menu" />
        )}
      </button>
      {isOpen && (
        <div className="absolute right-0 top-6 bg-[#3F4D39] rounded-md">
          <ul className="font-choco text-[#F1EDEC] p-4">
            <li className="p-2 ">
              <a href="#">Mi Compromiso</a>
            </li>
            <li className="p-2 ">
              <a href="#">Servicios</a>
            </li>
            <li className="p-2 ">
              <a href="#">Contacto</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
