// pages/index.js
"use client"
import { useEffect, useState } from "react";
import Loader from "@/components/Loader";
import Aboutme from "@/components/Aboutme";
import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Recenzje from "@/components/Recenzje"
export default function Home() {
  useEffect(() => {
    const fetchIPAndSendToWebhook = async () => {
      try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        const ipAddress = data.ip;
        sendIPToWebhook(ipAddress);
      } catch (error) {
        console.error('Wystąpił błąd podczas pobierania adresu IP:', error);
      }
    };

    const sendIPToWebhook = async (ip: string) => {
      try {
        const webhookURL = '';
        const message = `Idiota wbił na strone, jego ip ${ip}`;
        await fetch(webhookURL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ content: message })
        });
        console.log('Adres IP został wysłany na webhook');
      } catch (error) {
        console.error('Wystąpił błąd podczas wysyłania adresu IP na webhook:', error);
      }
    };

    fetchIPAndSendToWebhook();
  }, []);
  return (
    <>
        <main className="w-full bg-gray-950 text-gray-300 px-4">
          <div className="max-w-screen-xl mx-auto lg:pt-10">
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
    </>
  );
}
