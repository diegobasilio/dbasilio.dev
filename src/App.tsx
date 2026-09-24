import { Navbar } from "./components/Navbar";
import { WhatsAppFloatingButton } from "./components/WhatsAppFloatingButton";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Experience } from "./sections/Experience";
import { Projects } from "./sections/Projects";
import { TechStack } from "./sections/TechStack";
import { HowIWork } from "./sections/HowIWork";
import { Contact } from "./sections/Contact";

export function App() {
  return (
    <div className="min-h-screen bg-bg text-fg">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <TechStack />
        <HowIWork />
        <Contact />
      </main>
      <WhatsAppFloatingButton />
    </div>
  );
}
