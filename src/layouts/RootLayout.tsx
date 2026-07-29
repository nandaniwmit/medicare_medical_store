import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import FloatingButtons from '../components/FloatingButtons';
import WhatsAppOrderForm from '../components/WhatsAppOrderForm';
import { ThemeProvider } from '../context/ThemeContext';

export default function RootLayout() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [prefilledMed, setPrefilledMed] = useState('');
  const location = useLocation();

  // Scroll to top on route change
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleOpenOrderModal = (medicineName: string = '') => {
    setPrefilledMed(medicineName);
    setIsOrderModalOpen(true);
  };

  const handleCloseOrderModal = () => {
    setIsOrderModalOpen(false);
    setPrefilledMed('');
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-200">
        
        {/* Navigation Bar */}
        <Navbar onOrderClick={() => handleOpenOrderModal()} />

        {/* Dynamic Breadcrumbs Navigation Indicator */}
        <Breadcrumbs />

        {/* Main Content Area */}
        <main className="flex-grow">
          {/* React Router sub-pages will receive 'openOrderModal' trigger via Outlet Context */}
          <Outlet context={{ openOrderModal: handleOpenOrderModal }} />
        </main>

        {/* Footer with integrated global tracking */}
        <Footer />

        {/* Global Floating Actions (Back To Top, Floating Call/WhatsApp) */}
        <FloatingButtons onOrderClick={() => handleOpenOrderModal()} />

        {/* WhatsApp Medicine Order Form Dialog Modal */}
        <WhatsAppOrderForm
          isOpen={isOrderModalOpen}
          onClose={handleCloseOrderModal}
          prefilledMedicine={prefilledMed}
        />

      </div>
    </ThemeProvider>
  );
}

// Reusable hook for children pages to access layout triggers easily
export function useLayoutTrigger() {
  const context = useOutletContext<{ openOrderModal: (medicineName?: string) => void }>();
  return context;
}
import { useOutletContext } from 'react-router-dom';
import React from 'react';
