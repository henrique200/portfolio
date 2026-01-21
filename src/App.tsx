import { Navbar } from "./components/Navbar";
import { Hero } from "./pages/Hero";
import { Projects } from "./pages/Projects";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#070b14] text-white">
      <Navbar />

      <main className="mx-auto max-w-6xl px-4">
        <Hero />
        <Projects />
        <About />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
