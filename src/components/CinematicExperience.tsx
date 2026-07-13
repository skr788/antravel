import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { motion } from "motion/react";
import { MapPin, ArrowRight } from "lucide-react";
import { PANELS_DATA } from "../types";

// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default function CinematicExperience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollSectionRef = useRef<HTMLDivElement>(null);
  const [activePanel, setActivePanel] = useState(0);

  // Generate deterministic particles to avoid React 19 hydration mismatch
  const panelParticles = [...Array(20)].map((_, i) => {
    const left = `${(i * 13) % 100}%`;
    const bottom = `${(i * 7) % 60 + 10}%`;
    const delay = (i * 0.4) % 4;
    const duration = 6 + ((i * 5) % 15);
    const scale = 0.5 + ((i * 0.1) % 0.8);
    const xMovement = (i % 2 === 0 ? 40 : -40);
    return { left, bottom, delay, duration, scale, xMovement };
  });

  useEffect(() => {
    // 1. Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
    });

    // Synchronize Lenis scrolling with ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // 2. Set up GSAP Horizontal Scroll pinning on Desktop
    const ctx = gsap.context(() => {
      const scrollSection = scrollSectionRef.current;
      if (!scrollSection) return;

      const mm = gsap.matchMedia();

      // DESKTOP: Match media for screens >= 1024px
      mm.add("(min-width: 1024px)", () => {
        const panels = gsap.utils.toArray(".cinematic-panel");
        const totalPanels = panels.length;

        const pinTween = gsap.to(scrollSection, {
          x: () => -(scrollSection.scrollWidth - window.innerWidth),
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            pin: true,
            scrub: 1.5,
            start: "top top",
            end: () => `+=${scrollSection.scrollWidth - window.innerWidth}`,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              // Calculate index correctly based on progress ratio
              const progress = self.progress;
              const computedIndex = Math.min(
                Math.floor(progress * totalPanels),
                totalPanels - 1
              );
              setActivePanel(computedIndex);
            },
          },
        });

        return () => {
          pinTween.kill();
        };
      });

      // MOBILE & TABLET: Vertical standard scroll with trigger index tracking
      mm.add("(max-width: 1023px)", () => {
        const panels = gsap.utils.toArray(".cinematic-panel");
        panels.forEach((panel: any, index: number) => {
          ScrollTrigger.create({
            trigger: panel,
            start: "top center",
            end: "bottom center",
            onEnter: () => setActivePanel(index),
            onEnterBack: () => setActivePanel(index),
          });
        });
      });

    }, containerRef);

    // Cleanup
    return () => {
      ctx.revert();
      lenis.destroy();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  // Handle manual navigation bar clicking
  const scrollToPanel = (index: number) => {
    if (window.innerWidth >= 1024 && containerRef.current) {
      // In pinned horizontal desktop layout, scroll down proportionally to trigger scrub
      const scrollSection = scrollSectionRef.current;
      if (!scrollSection) return;
      
      const totalWidth = scrollSection.scrollWidth - window.innerWidth;
      const targetScrollY = containerRef.current.offsetTop + (totalWidth * (index / (PANELS_DATA.length - 1)));
      
      window.scrollTo({
        top: targetScrollY,
        behavior: "smooth"
      });
    } else {
      // Mobile vertical scrolling
      const panels = document.querySelectorAll(".cinematic-panel");
      if (panels[index]) {
        panels[index].scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div ref={containerRef} className="relative bg-black w-full overflow-hidden select-none">
      
      {/* Floating vertical progress bar indicator (Desktop Left-side) */}
      <div className="fixed left-6 md:left-12 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-6">
        {PANELS_DATA.map((panel, idx) => {
          const isCurrent = idx === activePanel;
          return (
            <button
              key={panel.id}
              onClick={() => scrollToPanel(idx)}
              className="group flex items-center gap-4 cursor-pointer focus:outline-none text-left"
              aria-label={`Ir a destino ${panel.title}`}
            >
              <div 
                className={`w-[2px] transition-all duration-700 ease-out rounded-full ${
                  isCurrent ? "h-24 bg-[#f5a300]" : "h-12 bg-white/20 group-hover:bg-white/50"
                }`}
              />
              <div className="overflow-hidden h-6 flex items-center">
                <span 
                  className={`font-display text-[10px] tracking-[0.3em] font-semibold uppercase transition-all duration-500 transform ${
                    isCurrent 
                      ? "opacity-100 translate-x-0 text-white" 
                      : "opacity-0 -translate-x-4 text-white/50 group-hover:opacity-60 group-hover:translate-x-0"
                  }`}
                >
                  {panel.title}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Main Container */}
      <div 
        ref={scrollSectionRef} 
        className="flex flex-col lg:flex-row w-full lg:w-[400vw] h-auto lg:h-screen"
      >
        {PANELS_DATA.map((panel, index) => {
          return (
            <div
              key={panel.id}
              className="w-full lg:w-screen h-screen flex-shrink-0 relative flex items-center justify-center overflow-hidden bg-black cinematic-panel"
            >
              {/* Background Image with custom parallax/scale-in effect on active */}
              <div className="absolute inset-0 w-full h-full overflow-hidden">
                <motion.img
                  initial={{ scale: 1.15 }}
                  animate={{ scale: activePanel === index ? 1 : 1.15 }}
                  transition={{ duration: 2.5, ease: "easeOut" }}
                  src={panel.image}
                  alt={panel.title}
                  className="w-full h-full object-cover select-none"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/45 z-10" />
              </div>

              {/* Atmospheric volumetric lighting gradient */}
              <div className="absolute inset-0 bg-radial-[circle_at_50%_0%] from-white/5 to-transparent mix-blend-overlay pointer-events-none z-10" />

              {/* Ambient Floating Soft Particles */}
              <div className="absolute inset-0 z-10 pointer-events-none">
                {panelParticles.map((pt, i) => (
                  <motion.div
                    key={i}
                    initial={{ y: 0, x: 0, opacity: 0 }}
                    animate={{
                      y: [0, -400],
                      x: [0, pt.xMovement],
                      opacity: [0, 0.4, 0]
                    }}
                    transition={{
                      duration: pt.duration,
                      repeat: Infinity,
                      ease: "linear",
                      delay: pt.delay
                    }}
                    style={{
                      position: "absolute",
                      left: pt.left,
                      bottom: pt.bottom,
                      width: "4px",
                      height: "4px",
                      backgroundColor: "rgba(255, 255, 255, 0.8)",
                      borderRadius: "9999px",
                      filter: "blur(1px)",
                      transform: `scale(${pt.scale})`
                    }}
                  />
                ))}
              </div>

              {/* Content Row Grid Container */}
              <div className="relative z-20 w-full h-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex items-center">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
                  
                  {/* Left Column: Title and Descriptions (col-span-8) */}
                  <div className="col-span-1 lg:col-span-8 text-white space-y-6 md:space-y-8 select-none">
                    
                    {/* Destination Label Indicator */}
                    <div className="flex items-center gap-3">
                      <MapPin size={16} className="text-[#f5a300] shrink-0" />
                      <span className="font-display font-extrabold text-[10px] tracking-[0.8em] text-white uppercase">
                        DESTINO 0{panel.number}
                      </span>
                    </div>

                    {/* Poetic Subtitle */}
                    <p className="font-display italic text-lg sm:text-xl md:text-2xl text-white/60 font-light max-w-2xl leading-relaxed">
                      {panel.subtitle}
                    </p>

                    {/* Main Monumental Heading Name */}
                    <motion.h2
                      initial={{ opacity: 0, scale: 0.95, filter: "blur(20px)" }}
                      whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                      viewport={{ once: false, amount: 0.3 }}
                      transition={{ duration: 1.5, ease: "easeOut", delay: 0.1 }}
                      className="text-6xl sm:text-8xl md:text-[10rem] xl:text-[13rem] font-display font-black leading-[0.75] tracking-tighter text-white select-none uppercase"
                      style={{ textShadow: "0 20px 80px rgba(0, 0, 0, 0.8)" }}
                    >
                      {panel.title}
                    </motion.h2>

                    {/* Paragraph description */}
                    <p className="font-display font-light text-base sm:text-lg md:text-xl text-white/80 max-w-lg leading-relaxed border-l-2 border-white/20 pl-8">
                      {panel.description}
                    </p>

                    {/* Interactive Glass button */}
                    <button
                      id={`explore-${panel.id}`}
                      className="px-10 py-5 rounded-full bg-white/5 backdrop-blur-2xl border border-white/10 text-white font-bold uppercase tracking-[0.3em] text-[10px] transition-all duration-500 overflow-hidden group hover:bg-white hover:text-black cursor-pointer relative mt-6"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-3">
                        Explorar Destino
                        <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-2" />
                      </span>
                    </button>
                  </div>

                  {/* Right Column: Science Journal Circle Coordinates (col-span-4) */}
                  <div className="hidden lg:flex col-span-1 lg:col-span-4 flex-col items-center justify-center select-none">
                    <div className="w-64 h-64 rounded-full border border-white/10 flex items-center justify-center relative">
                      {/* Aura pulse background */}
                      <div className="absolute w-44 h-44 rounded-full bg-white/5 blur-xl animate-pulse" />
                      
                      {/* Interactive ring rotation */}
                      <div className="absolute inset-0 rounded-full border border-dashed border-white/10 animate-[spin_40s_linear_infinite]" />

                      {/* Glass Container */}
                      <div className="w-44 h-44 rounded-full glass-dark flex flex-col items-center justify-center relative text-center z-10 p-4">
                        <span className="text-[9px] uppercase font-mono tracking-[0.4em] text-white/40 block mb-2">
                          COORDINATES
                        </span>
                        <span className="font-mono text-xs tracking-widest text-white font-semibold block leading-loose">
                          {panel.coordinates}
                        </span>
                        <div className="w-6 h-[1px] bg-[#f5a300]/60 mt-4" />
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Bottom Right Transition Indicator */}
              <div className="absolute bottom-10 right-6 md:right-12 lg:right-24 z-20 hidden md:flex items-center gap-4 text-white/40 text-[10px] tracking-[0.4em] uppercase font-display select-none pointer-events-none">
                <div className="w-12 h-[1px] bg-white/20" />
                <span>SCROLL PARA TRANSICIÓN</span>
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
}
