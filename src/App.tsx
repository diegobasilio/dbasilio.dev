import { Navbar } from "./components/Navbar";
import { WhatsAppFloatingButton } from "./components/WhatsAppFloatingButton";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Journey } from "./sections/Journey";
import { Projects } from "./sections/Projects";
import { TechStack } from "./sections/TechStack";
import { Contact } from "./sections/Contact";

export function App() {
  return (
    <div className="min-h-screen bg-bg text-fg">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Journey />
        <Projects />
        <TechStack />
        <Contact />
      </main>
      <WhatsAppFloatingButton />
    </div>
  );
}
