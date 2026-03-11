import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './router';
import Footer from './components/feature/Footer';
import Header from './components/feature/Header';
import FloatingLineButton from './components/feature/FloatingLineButton';
import ScrollProgressBar from './components/feature/ScrollProgressBar';
import ExitIntentPopup from './components/feature/ExitIntentPopup';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.fade-in-up').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <BrowserRouter basename={__BASE_PATH__}>
      <ScrollProgressBar />
      <ExitIntentPopup />
      <div className="min-h-screen flex flex-col w-full">
        <Header />
        <main className="flex-1 w-full">
          <AppRoutes />
        </main>
        <Footer />
        <FloatingLineButton />
      </div>
    </BrowserRouter>
  );
}

export default App;