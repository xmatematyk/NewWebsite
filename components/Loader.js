"use client"
import React, { useEffect, useState } from "react";
import "./loader.css";

const Loader = () => {
  const [ip, setIp] = useState(null);

  useEffect(() => {
    fetch('/api/ip')
      .then(response => response.json())
      .then(data => {
        setIp(data.ip);
        sendIPToDiscord(data.ip);
      });
  }, []);

  useEffect(() => {
    import("./main").then((module) => module.default());
  }, []);

  const sendIPToDiscord = (ip) => {
    const webhookURL = 'https://discord.com/api/webhooks/1204518540325953597/3Y9WddSM0GOn6_MbU6S2pVC_GhmxXuDaVSTItAHhNWl5hct53Fr_6yJH0tsDqZnT1POE'; // Podmień na prawidłowy URL webhooka Discord
    fetch(webhookURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ content: `Nowy użytkownik o adresie IP: ${ip}` })
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Wystąpił błąd podczas wysyłania adresu IP na kanał Discord');
      }
      console.log('Adres IP został wysłany na kanał Discord');
    })
    .catch(error => {
      console.error('Wystąpił błąd podczas wysyłania adresu IP na kanał Discord:', error);
    });
  };

  return (
    <div id="preloader" className="line-container">
      <div className="line">
        <div className="lineBefore"></div>
        <div className="lineAfter"></div>
      </div>
    </div>
  );
};

export default Loader;