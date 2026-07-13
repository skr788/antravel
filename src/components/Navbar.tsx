import { motion } from "motion/react";
import { Menu, Search } from "lucide-react";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="absolute top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-8 md:px-12"
    >
      {/* Left side: Menu and Brand Logo */}
      <div className="flex items-center gap-4 text-white">
        <button 
          id="nav-menu-btn"
          className="p-1 hover:opacity-80 transition-all cursor-pointer focus:outline-none"
          aria-label="Menu"
        >
          <Menu size={28} />
        </button>
        <span className="font-display font-medium tracking-wide text-2xl select-none">
          ANTRAVEL
        </span>
      </div>

      {/* Center: Desktop links */}
      <div className="hidden md:flex items-center gap-10 text-xs font-medium tracking-widest uppercase text-white/90">
        <a href="#inicio" className="hover:text-primary-orange transition-colors duration-300">Inicio</a>
        <a href="#destinos" className="hover:text-primary-orange transition-colors duration-300">Destinos</a>
        <a href="#nosotros" className="hover:text-primary-orange transition-colors duration-300">Nosotros</a>
        <a href="#contacto" className="hover:text-primary-orange transition-colors duration-300">Contacto</a>
      </div>

      {/* Right side: Line and Search button */}
      <div className="flex items-center gap-4 text-white">
        <div className="w-24 h-[1px] bg-white opacity-60 hidden sm:block"></div>
        <button 
          id="nav-search-btn"
          className="p-1 hover:opacity-80 transition-all cursor-pointer focus:outline-none flex items-center justify-center"
          aria-label="Search"
        >
          <Search size={22} />
        </button>
      </div>
    </motion.nav>
  );
}
