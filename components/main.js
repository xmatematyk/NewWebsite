// main.js
export const setupPreloader = () => {
    const preloader = document.querySelector('#preloader');
    if (preloader && preloader.parentNode === document.body) {
      setTimeout(() => {
        preloader.classList.add('loaded');
      }, 10); // Zmienione opóźnienie na 500 ms
      setTimeout(() => {
        preloader.parentNode.removeChild(preloader);
      }, 1000); // Zmienione opóźnienie na 1000 ms
    }
  };
  