import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, ChevronDown, MapPin, Calendar } from "lucide-react";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <section id="inicio" className="w-full h-screen relative overflow-hidden bg-black select-none">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover contrast-[1.15] saturate-[1.6] brightness-[1.05]"
      >
        <source src="/input_file_0.mp4" type="video/mp4" />
        {/* Secondary fallback video just in case */}
        <source src="https://assets.mixkit.co/videos/preview/mixkit-clouds-and-sun-seen-from-an-airplane-window-43093-large.mp4" type="video/mp4" />
      </video>

      {/* Dark tint overlay */}
      <div className="absolute inset-0 bg-black/25 z-0" />

      {/* Navigation Bar */}
      <Navbar />

      {/* Central Emblem Decorative Frame */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-[45vh] h-[45vh] md:w-[60vh] md:h-[60vh] rounded-full border border-white/40 flex items-center justify-center relative shadow-[0_0_100px_rgba(255,255,255,0.05)] -translate-y-[10%]"
        >
          {/* Animated rotation outline */}
          <div className="absolute inset-0 rounded-full border-[0.5px] border-white/10 scale-110 animate-[spin_60s_linear_infinite]" />
          <div className="absolute inset-0 rounded-full border border-dashed border-white/20 animate-[spin_120s_linear_infinite]" />
        </motion.div>
      </div>

      {/* Hero Grid Content */}
      <div className="relative z-10 w-full h-full flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center w-full max-w-7xl mx-auto">
          
          {/* Left Content Column */}
          <div className="col-span-1 flex flex-col items-center lg:items-start text-center lg:text-left text-white space-y-6 md:space-y-8">
            <div className="flex flex-col items-center lg:items-start">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="w-16 h-[2px] bg-white origin-left"
              />
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-display font-extrabold leading-[0.9] tracking-tighter text-shadow text-white mt-4"
              >
                DESCUBRE <br className="hidden lg:block" /> VIAJANDO
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.4 }}
              className="text-white/80 text-sm md:text-base max-w-md leading-relaxed font-light"
            >
              Explora destinos increíbles, vive experiencias únicas y descubre paisajes cinematográficos alrededor del mundo.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
            >
              <button
                id="hero-explore-btn"
                className="px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-opacity-90 transition-all uppercase text-xs tracking-widest shadow-xl cursor-pointer"
              >
                Explorar más
              </button>
              <button
                id="hero-blog-btn"
                className="px-8 py-3 glass rounded-full font-medium text-white hover:bg-white hover:text-black transition-all uppercase text-xs tracking-widest cursor-pointer"
              >
                Nuestro blog
              </button>
            </motion.div>

            {/* Navigation Arrows */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="flex items-center gap-4 pt-4"
            >
              <button
                id="hero-arrow-left-btn"
                className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-black hover:border-white transition-all duration-300 cursor-pointer"
                aria-label="Anterior"
              >
                <ArrowLeft size={20} />
              </button>
              <button
                id="hero-arrow-right-btn"
                className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-black hover:border-white transition-all duration-300 cursor-pointer"
                aria-label="Siguiente"
              >
                <ArrowRight size={20} />
              </button>
            </motion.div>
          </div>

          {/* Middle Spacer */}
          <div className="hidden lg:block col-span-1" />

          {/* Right Column: Booking Form */}
          <div className="col-span-1 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="glass p-10 rounded-2xl w-full max-w-[400px] shadow-2xl relative z-10"
            >
              <h2 className="text-xl font-display font-medium mb-10 text-shadow text-white">
                ¿A dónde quieres viajar?
              </h2>

              <form onSubmit={(e) => e.preventDefault()} className="space-y-8">
                {/* Destination Dropdown */}
                <div className="space-y-2 group cursor-pointer">
                  <label className="text-[10px] uppercase tracking-widest text-white/50 block font-medium">
                    Destino :
                  </label>
                  <div className="flex items-center justify-between pb-3 border-b border-white/20 group-hover:border-white/50 transition-colors">
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-primary-orange" />
                      <span className="text-sm font-medium text-white/90">ciudad / país</span>
                    </div>
                    <ChevronDown size={16} className="text-white/50" />
                  </div>
                </div>

                {/* Date Selection */}
                <div className="space-y-2 group cursor-pointer">
                  <label className="text-[10px] uppercase tracking-widest text-white/50 block font-medium">
                    Fecha :
                  </label>
                  <div className="flex items-center justify-between pb-3 border-b border-white/20 group-hover:border-white/50 transition-colors">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-primary-orange" />
                      <span className="text-sm font-medium text-white/90 font-sans">seleccionar fecha</span>
                    </div>
                    <ChevronDown size={16} className="text-white/50" />
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  id="hero-submit-btn"
                  type="submit"
                  className="w-full bg-[#f5a300] hover:bg-[#e09500] text-white font-display font-bold py-5 rounded-lg uppercase tracking-widest text-sm transition-all duration-300 shadow-lg active:scale-[0.98] cursor-pointer"
                >
                  VER PAQUETES
                </button>
              </form>

              {/* Bottom text link */}
              <a 
                href="#destinos" 
                className="font-mono text-[10px] text-white/50 text-center block mt-6 tracking-wider uppercase hover:text-white/80 transition-colors duration-300"
              >
                o revisa nuestras recomendaciones aquí &gt;&gt;
              </a>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Slider progress Indicator bars at the bottom */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-4 z-20">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="h-[2px] w-12 bg-white/30 rounded-full overflow-hidden relative"
          >
            {i === 0 && (
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                className="h-full w-full bg-[#f5a300] absolute inset-0"
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
