import Image from "next/image";
import HeroSection from "../section/hero-section";
import ToolsSection from "../section/tools-section";
import Experience from "../section/experience-section";
import AboutMe from "../section/aboutMe-section";
import ClientsSections from "../section/clients-sections";
import SkilssSection from "../section/skilss-section";
import Work from "../section/work-section";

export default function Home() {
  return (
    <main className='px-4'>
      <HeroSection/>
      <ToolsSection/>
      <AboutMe/>
      <SkilssSection/>
      <Experience/>
      <Work/>
      <ClientsSections/>
      
     
    
    </main>
  );
}
