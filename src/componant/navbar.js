import { useState } from "react";


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-transparent ">

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-5">

        <div className="flex items-center justify-between">

          {/* Logo */}
         <a
            href="#home"
            className="font-serif text-3xl md:text-4xl font-semibold tracking-[0.15em] text-[#d6a756]"
            >
            THAMIZH
            </a>
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-7">

            <a href="#home" className="text-md font-serif font-bold text-white hover:text-[#d6a756]">
              Home
            </a>

            <a href="#heritagescroll" className="text-md font-serif font-bold text-white hover:text-[#d6a756]">
              Heritage
            </a>

            <a href="#templescroll" className="text-md font-serif font-bold text-white hover:text-[#d6a756]">
              Temple's
            </a>

            <a href="#statuescroll" className="text-md font-serif font-bold text-white hover:text-[#d6a756]">
              Statue
            </a>

            <a href="#musicscroll" className="text-md font-serif font-bold text-white hover:text-[#d6a756]">
              Music
            </a>

            <a href="#sportscroll" className="text-md font-serif font-bold text-white hover:text-[#d6a756]">
              Festivals & Games
            </a>

            <a href="#bookscroll" className="text-md font-serif font-bold text-white hover:text-[#d6a756]">
              Book
            </a>
            <a href="#foodscroll" className="text-md font-serif font-bold text-white hover:text-[#d6a756]">
              Food
            </a>

          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-3xl text-white"
          >
            {isOpen ? "✕" : "☰"}
          </button>

        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-5 bg-black/80 backdrop-blur-md rounded-lg p-5">

            <div className="flex flex-col gap-5">

              <a
                href="#home"
                onClick={() => setIsOpen(false)}
                className="text-white"
              >
                Home
              </a>

              <a
                href="#heritagescroll"
                onClick={() => setIsOpen(false)}
                className="text-white"
              >
                Heritage
              </a>

              <a
                href="#templescroll"
                onClick={() => setIsOpen(false)}
                className="text-white"
              >
                Temple's
              </a>

              <a
                href="#statuescroll"
                onClick={() => setIsOpen(false)}
                className="text-white"
              >
               Statue
              </a>

              <a
                href="#musicscroll"
                onClick={() => setIsOpen(false)}
                className="text-white"
              >
                Music
              </a>

              <a
                href="#sportscroll"
                onClick={() => setIsOpen(false)}
                className="text-white"
              >
                Festivals & Games
              </a>

              <a
                href="#bookscroll"
                onClick={() => setIsOpen(false)}
                className="text-white"
              >
                Book
              </a>
                <a
                href="#foodscroll"
                onClick={() => setIsOpen(false)}
                className="text-white"
              >
                Food
              </a>

            </div>

          </div>
        )}

      </div>

    </nav>
  );
}

export default Navbar;