
import { useLanguage, LanguageProvider } from "@/components/LanguageContext"
import Aboutme from "@/components/Aboutme";
import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import Services from "@/components/Services";
import Image from "next/image"
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Recenzje from "@/components/Recenzje";
import Navbar from '@/components/Navbar';
export default function Home() {
  return (
    <LanguageProvider> 
      <HomeContent />
    </LanguageProvider>
  );
}

function HomeContent() {
  return (
    <main className="w-full bg-gray-950 text-gray-300 px-4">
      <div className="max-w-screen-xl mx-auto lg:pt-10">
        <Navbar />
        <Banner />
        <Aboutme />
        <Services />
        <Skills />
        <Projects />
        <Recenzje />
        <Contact />
        <Footer />
      </div>
    </main>
  );
  }  