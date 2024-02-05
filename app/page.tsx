// pages/index.js
"use client"
import { useEffect, useState } from "react";
import Loader from "@/components/Loader";
import Aboutme from "@/components/Aboutme";
import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fakeDataFetch = async () => {
      try {

        await new Promise((resolve) => setTimeout(resolve, 4000));

        setIsLoading(false);
      } catch (error) {
        console.error('Wystąpił błąd podczas pobierania danych:', error)
      }
    };

    fakeDataFetch();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <main className="w-full bg-gray-950 text-gray-300 px-4">
          <div className="max-w-screen-xl mx-auto lg:pt-10">
            <Banner />
            <Aboutme />
            <Experience />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
          </div>
        </main>
      )}
    </>
  );
}
