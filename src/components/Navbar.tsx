import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Menu, X, PlusSquare, ShoppingBag, PhoneCall } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onOrderClick: () => void;
}

export default function Navbar({ onOrderClick }: NavbarProps) {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/gallery', label: 'Store Gallery' },
    { path: '/contact', label: 'Contact' },
  ];

  const activeStyle = 'text-teal-600 dark:text-teal-400 font-semibold relative after:absolute after:bottom-[-22px] after:left-0 after:right-0 after:h-0.75 after:bg-teal-600 dark:after:bg-teal-400 after:rounded-full';
  const inactiveStyle = 'text-slate-600 hover:text-teal-600 dark:text-slate-300 dark:hover:text-teal-400 font-medium transition-colors';

  return (
    <header className="sticky top-0 z-50 bg-white/85 dark:bg-slate-900/85 backdrop-blur-md border-b border-slate-100 dark:border-slate-800/80 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Logo & Brand */}
          <Link to="/" className="flex items-center gap-3 group focus:outline-none">
            {/* SVG Logo with medical cross & aesthetic circles */}
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-600 text-white shadow-md shadow-teal-500/10 group-hover:shadow-teal-500/25 transition-all">
              <PlusSquare className="w-6 h-6 animate-pulse" />
              <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white dark:border-slate-900" />
            </div>
            <div>
              <span className="text-lg md:text-xl font-extrabold tracking-tight bg-gradient-to-r from-teal-600 to-emerald-600 dark:from-teal-400 dark:to-emerald-400 bg-clip-text text-transparent">
                Medicare
              </span>
              <span className="block text-2xs md:text-xs font-semibold text-slate-400 tracking-widest uppercase mt-[-1px]">
                Medical Store
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Utilities (Theme Switch, Order Button, Phone) */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Direct Phone Trigger */}
            <a
              href="tel:09430476313"
              className="flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-teal-600 dark:text-slate-400 dark:hover:text-teal-400 transition-colors"
            >
              <PhoneCall className="w-4 h-4 text-teal-600" />
              094304 76313
            </a>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 text-slate-600 hover:text-teal-600 dark:text-slate-300 dark:hover:text-teal-400 rounded-lg bg-slate-50 dark:bg-slate-850 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer"
              aria-label={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* WhatsApp Quick Order */}
            <button
              onClick={onOrderClick}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-500 hover:to-emerald-500 rounded-xl transition-all shadow-md shadow-teal-500/10 cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4" />
              Order Medicine
            </button>
          </div>

          {/* Tablet/Mobile Action & Toggle Group */}
          <div className="flex lg:hidden items-center gap-3">
            {/* Mobile Dark Mode */}
            <button
              onClick={toggleTheme}
              className="p-2 text-slate-600 dark:text-slate-300 rounded-lg bg-slate-50 dark:bg-slate-850 cursor-pointer"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-4.5 h-4.5" /> : <Moon className="w-4.5 h-4.5" />}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-600 dark:text-slate-300 rounded-lg bg-slate-50 dark:bg-slate-850 hover:bg-slate-100 focus:outline-none cursor-pointer"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black lg:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', ease: 'easeInOut', duration: 0.3 }}
              className="fixed right-0 top-0 bottom-0 z-50 w-72 max-w-xs bg-white dark:bg-slate-950 p-6 shadow-2xl flex flex-col lg:hidden"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-6 border-b border-slate-100 dark:border-slate-800">
                <span className="text-base font-bold bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
                  Menu Options
                </span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1.5 rounded-lg text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-900 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col space-y-4 py-8">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `px-3 py-2 text-sm rounded-lg transition-colors ${
                        isActive
                          ? 'bg-teal-50 text-teal-700 dark:bg-teal-950/40 dark:text-teal-400 font-bold'
                          : 'text-slate-600 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-900'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
              </nav>

              {/* Drawer Bottom Actions */}
              <div className="mt-auto space-y-4 pt-6 border-t border-slate-100 dark:border-slate-800">
                <a
                  href="tel:09430476313"
                  className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50"
                >
                  <PhoneCall className="w-4 h-4 text-teal-600" />
                  094304 76313
                </a>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOrderClick();
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-teal-600 to-emerald-600 text-white text-xs font-bold uppercase tracking-wider cursor-pointer shadow-md"
                >
                  <ShoppingBag className="w-4 h-4" />
                  Order Medicines
                </button>
              </div>

            </motion.div>
          </>
        )}
      </AnimatePresence>

    </header>
  );
}
