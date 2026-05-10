import ContactSection from "./components/ContactSection";
import ExperienceSection from "./components/ExperienceSection";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";

export default function Home() {
  return (
   <div>
    <HeroSection/>
    <ExperienceSection/>
    <ProjectsSection/>
    <ContactSection/>
   </div>
  );
}
