import { useState } from "react";
import { Menu, X } from "lucide-react";

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <button
        className="text-[#3F4D39] focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X className="w-8 h-8 font-semibold text-primary" />
        ) : (
          <Menu className="w-8 h-8 font-semibold text-highlight-white" />
        )}
      </button>

      <div
        className={`
          fixed top-0 left-0 z-40 flex flex-col p-6 space-y-4 text-lg bg-white
          h-screen w-full
          transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <button
          className="self-end"
          onClick={() => setIsOpen(false)}
          aria-label="Close menu"
        >
          <X className="w-8 h-8" />
        </button>
      {isOpen && (
          <ul className="font-choco font-extrabold text-xl text-[#3F4D39] p-4 hover:text-[#92A48B]">
            <li className="py-4 border-b-2">
              <a className="smooth-scroll" href="#mi-compromiso" onClick={() => setIsOpen(false)}>
                Mi Compromiso
              </a>
            </li>
            <li className="py-4 border-b-2">
              <a className="smooth-scroll" href="#servicios" onClick={() => setIsOpen(false)}>
                Servicios
              </a>
            </li>
            <li className="py-4 border-b-2">
              <a className="smooth-scroll" href="#contacto" onClick={() => setIsOpen(false)}>
                Contacto
              </a>
            </li>
            <li className="py-4">
              <div className="flex items-center max-w-36 h-9 bg-[#7e8c79] font-choco text-xl font-semibold text-[#F1EDEC] rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-opacity-80 hover:bg-[#3F4D39]">
                <a className="smooth-scroll px-6 py-1" href="#contacto" onClick={() => setIsOpen(false)}>
                  Hablemos
                </a>
              </div>
            </li>
          </ul>
      )}
      </div>
    </>
  );
};
