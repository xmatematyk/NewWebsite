// pages/404.js
import Head from 'next/head';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import './404.css';

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      router.push('/');
    }, 5000);

    return () => clearTimeout(redirectTimeout);
  }, []); 

  return (
    <>
      <Head>
        <title>404 HTML Template by Colorlib</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex, follow" />

        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" />
      </Head>

      <div id="notfound" className="relative h-screen">
        <div className="notfound absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-520 w-full text-center">
          <div className="notfound-404 relative h-240">
            <h1 className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 font-montserrat font-bold text-9xl text-gray-700 uppercase tracking-wide leading-none m-0">
              <span className="text-shadow-8px-0-0 text-gray">4</span>
              <span className="text-shadow-8px-0-0 text-gray">0</span>
              <span className="text-shadow-8px-0-0 text-gray">4</span>
            </h1>
            <h3 className="relative font-cabin font-bold text-16 uppercase text-gray-700 tracking-wider pl-6">Oops! Not Found</h3>
          </div>
          <h2 className="font-cabin text-20 font-normal uppercase text-black mt-0 mb-25">Przykro nam, cos poszlo nie tak!</h2>
        </div>
      </div>

      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-23581568-13"></script>
      <script dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'UA-23581568-13');
        `
      }}></script>
      <script defer src="https://static.cloudflareinsights.com/beacon.min.js/v84a3a4012de94ce1a686ba8c167c359c1696973893317" integrity="sha512-euoFGowhlaLqXsPWQ48qSkBSCFs3DPRyiwVu3FjR96cMPx+Fr+gpWRhIafcHwqwCqWS42RZhIudOvEI+Ckf6MA==" crossOrigin="anonymous" data-cf-beacon='{"rayId":"84f699c5dc5b70b7","version":"2024.2.0","token":"cd0b4b3a733644fc843ef0b185f98241"}'></script>
    </>
  );
};

export default NotFound;
