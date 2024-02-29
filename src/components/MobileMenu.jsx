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
        <div className="w-[300px] absolute right-0 top-10 bg-[#3F4D39] rounded-md">
          <ul className="font-choco font-extrabold text-xl text-[#F1EDEC]  p-4">
            <li className="p-2 ">
              <a className="smooth-scroll" href="#mi-compromiso">
                Mi Compromiso
              </a>
            </li>
            <li className="p-2 ">
              <a className="smooth-scroll" href="#servicios">
                Servicios
              </a>
            </li>
            <li className="p-2 ">
              <a className="smooth-scroll" href="#form">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
