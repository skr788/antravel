import { motion } from "motion/react";
import { Plane, Ticket, CreditCard, Hotel, ArrowRight, Instagram, Youtube, Facebook } from "lucide-react";

export default function Destinations() {
  return (
    <section 
      id="destinos" 
      className="relative min-h-screen overflow-hidden bg-[#0084ff] py-20 px-6 md:px-12 lg:px-24 flex items-center select-none"
    >
      {/* Background Beach overlay */}
      <img
        src="https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&q=80&w=2000"
        alt="Playa paradisiaca"
        className="opacity-40 mix-blend-overlay w-full h-full object-cover absolute inset-0 z-0"
        referrerPolicy="no-referrer"
      />

      {/* Large custom elliptical back wave shape */}
      <div className="absolute right-0 bottom-0 w-[120%] h-[80%] sm:w-3/4 sm:h-3/4 bg-[#f5a300]/90 rounded-tl-[150px] sm:rounded-tl-[200px] transform translate-x-1/3 translate-y-1/3 -rotate-12 lg:translate-x-0 lg:translate-y-0 z-0" />

      {/* Social Media Header Top-Right */}
      <div className="absolute top-10 right-6 md:right-12 lg:right-24 z-20 flex items-center gap-4 text-white">
        <span className="font-display font-medium text-xs tracking-widest uppercase opacity-80">Siguenos</span>
        <div className="flex gap-2">
          <a href="#instagram" className="bg-white/20 p-2 rounded-full hover:bg-white hover:text-[#0084ff] transition-all duration-300" aria-label="Instagram">
            <Instagram size={16} />
          </a>
          <a href="#youtube" className="bg-white/20 p-2 rounded-full hover:bg-white hover:text-[#0084ff] transition-all duration-300" aria-label="Youtube">
            <Youtube size={16} />
          </a>
          <a href="#facebook" className="bg-white/20 p-2 rounded-full hover:bg-white hover:text-[#0084ff] transition-all duration-300" aria-label="Facebook">
            <Facebook size={16} />
          </a>
        </div>
      </div>

      {/* Content Grid */}
      <div className="relative z-10 w-full max-w-7xl mx-auto mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* COLUMN 1: INTRO & TITLE (5 cols) */}
          <div className="col-span-1 lg:col-span-5 text-white space-y-6 md:space-y-8">
            <div>
              <p className="font-display font-light italic text-2xl tracking-wide opacity-95">
                Es Tiempo De
              </p>
              <h2 className="text-6xl md:text-8xl xl:text-9xl font-display font-extrabold leading-[0.85] tracking-tighter text-white text-shadow mt-2">
                VIAJAR <br /> 
                <span className="text-[#f5a300]">AHORA</span>
              </h2>
            </div>

            <p className="font-display font-bold text-xs tracking-[0.4em] text-white/90">
              EL MUNDO CON NOSOTROS
            </p>

            {/* CTA Button */}
            <div>
              <button
                id="dest-cta-btn"
                className="group flex items-center gap-4 bg-[#f5a300] hover:bg-[#e09500] text-white font-display font-semibold px-8 py-4 rounded-full shadow-lg transition-all duration-300 cursor-pointer text-sm"
              >
                Reserva Ahora
                <div className="w-8 h-8 rounded-full bg-white text-[#f5a300] flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight size={16} />
                </div>
              </button>
            </div>

            {/* Contact details */}
            <div className="pt-6 border-t border-white/20 flex flex-wrap gap-8 font-display text-sm tracking-widest uppercase text-white/80">
              <div>
                <span className="text-[10px] text-white/50 block tracking-widest">TELÉFONO</span>
                <span className="font-medium">323-543-4145</span>
              </div>
              <div>
                <span className="text-[10px] text-white/50 block tracking-widest">SITIO WEB</span>
                <span className="font-medium">www.antravel.com.es</span>
              </div>
            </div>
          </div>

          {/* COLUMN 2: DECK OF INTERACTIVE PHOTOS (4 cols) */}
          <div className="col-span-1 lg:col-span-4 h-[500px] sm:h-[600px] flex items-center justify-center relative">
            {/* PHOTO 1: LEFT BEACH */}
            <motion.div
              whileHover={{ rotate: 0, scale: 1.1, zIndex: 30 }}
              className="absolute left-[-5%] sm:left-[-15%] z-20 w-44 sm:w-56 aspect-[3/4] p-3 bg-white shadow-2xl rotate-[-10deg] transition-all duration-300 cursor-pointer rounded-sm"
            >
              <div className="w-full h-full overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?auto=format&fit=crop&q=80&w=600"
                  alt="Playa turquesa"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>

            {/* PHOTO 2: CENTER COLISEUM */}
            <motion.div
              whileHover={{ rotate: 0, scale: 1.1, zIndex: 30 }}
              className="z-10 w-48 sm:w-64 aspect-[3/4] p-3 bg-white shadow-2xl rotate-[-3deg] transition-all duration-300 cursor-pointer rounded-sm"
            >
              <div className="w-full h-full overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&q=80&w=600"
                  alt="Coliseo de Roma"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>

            {/* PHOTO 3: RIGHT PALM BEACH */}
            <motion.div
              whileHover={{ rotate: 0, scale: 1.1, zIndex: 30 }}
              className="absolute right-[-5%] sm:right-[-10%] z-20 w-44 sm:w-56 aspect-[3/4] p-3 bg-white shadow-2xl rotate-[8deg] transition-all duration-300 cursor-pointer rounded-sm"
            >
              <div className="w-full h-full overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=600"
                  alt="Playa atardecer"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>

          {/* COLUMN 3: LIST OF PACKAGES & SALE BADGE (3 cols) */}
          <div className="col-span-1 lg:col-span-3 flex flex-col md:flex-row lg:flex-col items-center lg:items-start justify-between gap-12">
            
            {/* Packages benefits */}
            <div className="text-white space-y-6 w-full max-w-xs">
              <h3 className="font-display font-semibold text-xs tracking-widest uppercase border-b border-white/20 pb-2">
                NUESTROS PAQUETES INCLUYEN
              </h3>
              
              <ul className="space-y-4 font-display">
                <li className="flex items-center gap-4">
                  <div className="text-[#f5a300] text-xl font-black font-display min-w-[24px]">1.</div>
                  <Plane className="text-white/80 shrink-0" size={18} />
                  <span className="text-sm font-medium">Vuelo de Regreso</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="text-[#f5a300] text-xl font-black font-display min-w-[24px]">2.</div>
                  <Ticket className="text-white/80 shrink-0" size={18} />
                  <span className="text-sm font-medium">Boletos de Avión</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="text-[#f5a300] text-xl font-black font-display min-w-[24px]">3.</div>
                  <CreditCard className="text-white/80 shrink-0" size={18} />
                  <span className="text-sm font-medium">Servicios de Visa</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="text-[#f5a300] text-xl font-black font-display min-w-[24px]">4.</div>
                  <Hotel className="text-white/80 shrink-0" size={18} />
                  <span className="text-sm font-medium">Reserva de Hotel</span>
                </li>
              </ul>
            </div>

            {/* Circular Discount Stamp floating */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="w-48 h-48 bg-white rounded-full shadow-2xl relative flex flex-col justify-center items-center select-none"
            >
              <div className="text-center">
                <span className="text-[10px] uppercase font-display font-medium text-[#0084ff] tracking-widest block">
                  Obtén hasta
                </span>
                <span className="text-6xl font-black font-display text-[#0084ff] leading-none block my-1">
                  45%
                </span>
                <span className="text-xs uppercase font-display font-bold text-[#f5a300] tracking-wider block">
                  De Descuento
                </span>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
