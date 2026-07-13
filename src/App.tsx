import Hero from "./components/Hero";
import Destinations from "./components/Destinations";
import CinematicExperience from "./components/CinematicExperience";

export default function App() {
  return (
    <main className="w-full bg-black min-h-screen text-white font-sans antialiased overflow-x-hidden">
      {/* 1. Hero / Home Section */}
      <Hero />

      {/* 2. Destinations Section */}
      <Destinations />

      {/* 3. Cinematic Horizontal Experience Section */}
      <CinematicExperience />
    </main>
  );
}
