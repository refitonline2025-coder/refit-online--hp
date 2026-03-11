import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './router';
import Footer from './components/feature/Footer';
import Header from './components/feature/Header';
import FloatingLineButton from './components/feature/FloatingLineButton';
import ScrollProgressBar from './components/feature/ScrollProgressBar';
import ExitIntentPopup from './components/feature/ExitIntentPopup';
import TableOfContentsSidebar from './components/feature/TableOfContentsSidebar';

function App() {
  return (
    <BrowserRouter basename={__BASE_PATH__}>
      <ScrollProgressBar />
      <ExitIntentPopup />
      <TableOfContentsSidebar />
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