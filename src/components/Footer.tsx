import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, MapPin, Clock, Mail, Facebook, Instagram, Linkedin, Youtube, PlusSquare, ArrowRight, ExternalLink } from 'lucide-react';

export default function Footer() {
  const location = useLocation();

  useEffect(() => {
    const TRACKING_ENDPOINT = 'https://tools.cprajapati.com/tracker/track.php';
    const urlParams = new URLSearchParams(window.location.search);
    
    let cid = urlParams.get('cid') || localStorage.getItem('wmit_active_cid');
    if (urlParams.get('cid')) {
        localStorage.setItem('wmit_active_cid', urlParams.get('cid'));
    }
    
    if (!cid) return;

    let visitorId = localStorage.getItem('wmit_visitor_id') || 'wmit_' + Math.random().toString(36).substring(2, 15);
    localStorage.setItem('wmit_visitor_id', visitorId);

    let sessionId = sessionStorage.getItem('wmit_session_id') || 'wmit_' + Math.random().toString(36).substring(2, 15);
    localStorage.setItem('wmit_session_id', sessionId);

    const getPageName = () => {
        const path = window.location.pathname;
        const segment = path.replace(/\/$/, "").split("/").pop();
        return segment ? segment.split('?')[0] : 'Home';
    };

    const sendInitPayload = () => {
        const payload = {
            cid: cid, 
            visitor_id: visitorId, 
            session_id: sessionId,
            page_name: getPageName(), 
            referrer: document.referrer || '',
            device: window.innerWidth < 768 ? 'Mobile' : 'Desktop',
            browser: navigator.userAgent, 
            action: 'init'
        };
        fetch(TRACKING_ENDPOINT, { 
            method: 'POST', 
            mode: 'cors', 
            headers: { 'Content-Type': 'application/json' }, 
            body: JSON.stringify(payload) 
        }).catch(err => {});
    };

    const sendExitPayload = () => {
        const payload = { 
            cid: cid, 
            session_id: sessionId, 
            page_name: getPageName(), 
            action: 'page_change' 
        };
        if (navigator.sendBeacon) {
            const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
            navigator.sendBeacon(TRACKING_ENDPOINT, blob);
        } else {
            fetch(TRACKING_ENDPOINT, { 
                method: 'POST', 
                mode: 'cors', 
                headers: { 'Content-Type': 'application/json' }, 
                body: JSON.stringify(payload), 
                keepalive: true 
            }).catch(err => {});
        }
    };

    sendInitPayload();

    // === IDLE TIMEOUT LOGIC FOR REACT ===
    let idleTimer: NodeJS.Timeout;
    let isIdle = false;

    const resetIdleTimer = () => {
        if (isIdle) {
            isIdle = false;
            sendInitPayload(); // Wake up! Resume tracking
        }
        clearTimeout(idleTimer);
        idleTimer = setTimeout(() => {
            isIdle = true;
            sendExitPayload(); // Inactive! Stop tracking
        }, 60000); // 60 Seconds
    };

    const activityEvents = ['mousemove', 'keydown', 'scroll', 'touchstart'];
    activityEvents.forEach(evt => document.addEventListener(evt, resetIdleTimer, { passive: true }));
    resetIdleTimer(); // Initialize idle timer
    // ====================================

    const handleLocationChange = () => {
        sendExitPayload();
        setTimeout(sendInitPayload, 100);
    };

    window.addEventListener('popstate', handleLocationChange);
    
    const handleVisibilityChange = () => {
        if (document.visibilityState === 'hidden') { 
            sendExitPayload(); 
        }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('pagehide', sendExitPayload);
    
    return () => {
        window.removeEventListener('popstate', handleLocationChange);
        document.removeEventListener('visibilitychange', handleVisibilityChange);
        window.removeEventListener('pagehide', sendExitPayload);
        activityEvents.forEach(evt => document.removeEventListener(evt, resetIdleTimer));
        clearTimeout(idleTimer);
    };
  }, []);

  // Monitor internal React Router page changes to trigger the tracker correctly
  useEffect(() => {
    const TRACKING_ENDPOINT = 'https://tools.cprajapati.com/tracker/track.php';
    const cid = localStorage.getItem('wmit_active_cid');
    if (!cid) return;

    // Trigger state transition events on React Router pathname change
    const visitorId = localStorage.getItem('wmit_visitor_id') || '';
    const sessionId = localStorage.getItem('wmit_session_id') || '';
    
    const pageName = location.pathname.replace(/\/$/, "").split("/").pop() || 'Home';
    
    // Page Change payload
    const exitPayload = { cid, session_id: sessionId, page_name: pageName, action: 'page_change' };
    if (navigator.sendBeacon) {
      const blob = new Blob([JSON.stringify(exitPayload)], { type: 'application/json' });
      navigator.sendBeacon(TRACKING_ENDPOINT, blob);
    }

    // New Page Init payload
    const initPayload = {
      cid,
      visitor_id: visitorId,
      session_id: sessionId,
      page_name: pageName,
      referrer: document.referrer || '',
      device: window.innerWidth < 768 ? 'Mobile' : 'Desktop',
      browser: navigator.userAgent,
      action: 'init'
    };

    setTimeout(() => {
      fetch(TRACKING_ENDPOINT, {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(initPayload)
      }).catch(err => {});
    }, 150);

  }, [location.pathname]);

  return (
    <footer id="main-footer" className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t-4 border-teal-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Column 1: Brand & Contact Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-teal-600 text-white">
                <PlusSquare className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xl font-extrabold tracking-tight text-white">
                  Medicare
                </span>
                <span className="block text-2xs font-semibold text-teal-400 tracking-widest uppercase mt-[-1px]">
                  Medical Store
                </span>
              </div>
            </div>
            
            <p className="text-sm text-slate-400 leading-relaxed pt-1">
              Serving our community with 100% genuine medicines, baby products, surgical supplies, and wellness essentials for over a decade.
            </p>

            <div className="space-y-3 pt-2 text-sm">
              <a
                href="tel:09430476313"
                className="flex items-center gap-2.5 hover:text-teal-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-teal-500" />
                <span>094304 76313</span>
              </a>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4.5 h-4.5 text-teal-500 shrink-0 mt-0.5" />
                <span>
                  R222+Q6R, Station Road,
                  <br />
                  near Petrol Pump,
                  <br />
                  Gaya, Bihar 823002
                </span>
              </div>
              <a
                href="mailto:medicaremedicalstoregaya@gmail.com"
                className="flex items-center gap-2.5 hover:text-teal-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-teal-500" />
                <span>medicare@example.com</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-bold text-base mb-6 relative after:absolute after:bottom-[-8px] after:left-0 after:w-10 after:h-0.5 after:bg-teal-500">
              Quick Links
            </h4>
            <ul className="space-y-3.5 text-sm">
              <li>
                <Link to="/" className="hover:text-teal-400 transition-colors flex items-center gap-1.5 group">
                  <ArrowRight className="w-3.5 h-3.5 text-slate-700 group-hover:text-teal-500 transition-colors" />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-teal-400 transition-colors flex items-center gap-1.5 group">
                  <ArrowRight className="w-3.5 h-3.5 text-slate-700 group-hover:text-teal-500 transition-colors" />
                  About Company
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-teal-400 transition-colors flex items-center gap-1.5 group">
                  <ArrowRight className="w-3.5 h-3.5 text-slate-700 group-hover:text-teal-500 transition-colors" />
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-teal-400 transition-colors flex items-center gap-1.5 group">
                  <ArrowRight className="w-3.5 h-3.5 text-slate-700 group-hover:text-teal-500 transition-colors" />
                  Store Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-teal-400 transition-colors flex items-center gap-1.5 group">
                  <ArrowRight className="w-3.5 h-3.5 text-slate-700 group-hover:text-teal-500 transition-colors" />
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/services?stockChecker=true" className="text-teal-400 hover:text-teal-300 transition-colors flex items-center gap-1.5 group font-semibold">
                  <ArrowRight className="w-3.5 h-3.5 text-teal-700 group-hover:text-teal-400 transition-colors" />
                  Medicine Checker
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Store Schedule & Map Preview */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-base mb-6 relative after:absolute after:bottom-[-8px] after:left-0 after:w-10 after:h-0.5 after:bg-teal-500">
              Working Hours
            </h4>
            
            <div className="bg-slate-950/40 p-4 rounded-xl border border-slate-800 space-y-3.5 text-sm">
              <div className="flex items-center gap-2.5 text-teal-400 font-semibold">
                <Clock className="w-4 h-4 shrink-0" />
                <span>Store Timings</span>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-slate-300">
                  <span>Monday - Saturday:</span>
                  <span className="font-semibold text-white">8:00 AM - 10:00 PM</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Sunday:</span>
                  <span className="font-semibold text-white">9:00 AM - 9:00 PM</span>
                </div>
              </div>
              <div className="text-2xs text-slate-500 border-t border-slate-800/80 pt-2">
                * Home Delivery requests are taken until 8:00 PM everyday.
              </div>
            </div>

            {/* Social Media Link Grid */}
            <div className="pt-2">
              <span className="text-xs font-semibold text-slate-500 block mb-2.5 uppercase tracking-wider">Follow Us</span>
              <div className="flex gap-2.5">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-slate-800 hover:bg-teal-600 text-slate-300 hover:text-white rounded-lg transition-colors"
                  aria-label="Facebook Profile"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-slate-800 hover:bg-teal-600 text-slate-300 hover:text-white rounded-lg transition-colors"
                  aria-label="Instagram Profile"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-slate-800 hover:bg-teal-600 text-slate-300 hover:text-white rounded-lg transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-slate-800 hover:bg-teal-600 text-slate-300 hover:text-white rounded-lg transition-colors"
                  aria-label="YouTube Channel"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Local Map / Location Info */}
          <div>
            <h4 className="text-white font-bold text-base mb-6 relative after:absolute after:bottom-[-8px] after:left-0 after:w-10 after:h-0.5 after:bg-teal-500">
              Find Our Store
            </h4>
            <div className="w-full h-40 rounded-xl overflow-hidden border border-slate-800 shadow-md">
              <iframe
                title="Medicare Medical Store Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.1952044810843!2d85.00684131500609!3d25.029104983973546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2d0172e2cf1cb%3A0xe54ef9bd3b28b6d0!2sStation%20Road%20Gaya!5e0!3m2!1sen!2sin!4v1655193021948!5m2!1sen!2sin"
                className="w-full h-full border-0"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
            <a
              href="https://maps.google.com/?q=R222%2BQ6R,+Station+Road,+near+Petrol+Pump,+Gaya,+Bihar+823002"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-400 hover:text-teal-300 mt-2.5 transition-colors"
            >
              Get Directions On Google Maps
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

        {/* Bottom Bar (Legal, Copyright & WMIT Credits) */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-6 gap-y-2">
            <span>&copy; {new Date().getFullYear()} Medicare Medical Store. All rights reserved.</span>
            <div className="flex items-center gap-2 font-semibold">
              <span>Developed by</span>
              <a
                href="https://main.webmakerit.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-400 hover:text-teal-300 flex items-center gap-0.5 hover:underline font-bold"
              >
                WMIT
                <ExternalLink className="w-3 h-3 inline" />
              </a>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link to="/contact?section=privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link to="/contact?section=terms" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
            <Link to="/contact?section=disclaimer" className="hover:text-slate-300 transition-colors text-rose-500/80 hover:text-rose-400 font-medium">Medical Disclaimer</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
