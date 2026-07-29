import { useState, useEffect } from 'react';
import { Phone, ArrowUp, MessageSquarePlus } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FloatingButtonsProps {
  onOrderClick: () => void;
}

export default function FloatingButtons({ onOrderClick }: FloatingButtonsProps) {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        {/* Back To Top Button */}
        <AnimatePresence>
          {showBackToTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={scrollToTop}
              className="p-3 bg-white hover:bg-slate-50 dark:bg-slate-850 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-full shadow-lg border border-slate-100 dark:border-slate-800/80 transition-all focus:outline-none cursor-pointer"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-5.5 h-5.5" />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Floating Call Button */}
        <a
          href="tel:09430476313"
          className="p-4 bg-teal-600 hover:bg-teal-500 text-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 active:scale-95"
          aria-label="Call Medicare Medical Store"
        >
          <Phone className="w-5.5 h-5.5" />
        </a>

        {/* Floating WhatsApp Button */}
        <button
          onClick={onOrderClick}
          className="p-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 active:scale-95 cursor-pointer"
          aria-label="Order medicines via WhatsApp"
        >
          <MessageSquarePlus className="w-5.5 h-5.5" />
        </button>
      </div>

      {/* Sticky Bottom CTA Bar on Mobile only */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-100 dark:border-slate-800 flex divide-x divide-slate-100 dark:divide-slate-800 shadow-xl">
        <a
          href="tel:09430476313"
          className="flex-1 py-3.5 flex items-center justify-center gap-2 text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider"
        >
          <Phone className="w-4 h-4 text-teal-600" />
          Call Store
        </a>
        <button
          onClick={onOrderClick}
          className="flex-1 py-3.5 flex items-center justify-center gap-2 text-xs font-bold text-teal-700 dark:text-teal-400 uppercase tracking-wider cursor-pointer"
        >
          <MessageSquarePlus className="w-4 h-4 text-emerald-600" />
          Order Medicines
        </button>
      </div>
    </>
  );
}
