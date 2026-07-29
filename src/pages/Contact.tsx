import React, { useState, useEffect } from 'react';
import { useLocation, useOutletContext } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, Compass, ShieldCheck, FileText, AlertTriangle, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';

export default function Contact() {
  const { openOrderModal } = useOutletContext<{ openOrderModal: (medicineName?: string) => void }>();
  const location = useLocation();

  // Handle section query for legal agreements (Privacy, Terms, Disclaimer)
  const [activeTab, setActiveTab] = useState<'info' | 'privacy' | 'terms' | 'disclaimer'>('info');

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const section = params.get('section');
    if (section === 'privacy') {
      setActiveTab('privacy');
      window.scrollTo(0, 0);
    } else if (section === 'terms') {
      setActiveTab('terms');
      window.scrollTo(0, 0);
    } else if (section === 'disclaimer') {
      setActiveTab('disclaimer');
      window.scrollTo(0, 0);
    } else {
      setActiveTab('info');
    }
  }, [location.search]);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' });
    }, 4000);
  };

  return (
    <>
      <SEO
        title={activeTab === 'info' ? 'Contact Us - Store Address, Phone & Map' : `${activeTab.toUpperCase()} Agreements`}
        description="Get in touch with Medicare Medical Store on Station Road, Gaya. View Google Map directions, opening hours, dial numbers, or write an instant inquiry message."
        keywords="Medicare contact Gaya, Pharmacy number Station Road Gaya, Medical store Bihar address, Opening hours Medicare Gaya, Submit medical inquiry Bihar"
      />

      {/* Hero Header */}
      <section className="relative py-20 bg-gradient-to-r from-teal-800 to-teal-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/10" />
        <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-teal-500/10 blur-2xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold text-teal-300 uppercase tracking-widest block">Get In Touch</span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            {activeTab === 'info' ? 'Contact Our Pharmacy' : 'Legal Documents & Agreements'}
          </h1>
          <p className="text-sm md:text-base text-teal-100 max-w-2xl mx-auto leading-relaxed">
            {activeTab === 'info'
              ? 'Find our physical address near Gaya Station Road Petrol Pump, call us directly, or submit an online inquiry.'
              : 'Please read our compliance notes, cookie standards, operational disclosures and medical warnings.'}
          </p>
        </div>
      </section>

      {/* Tabs Menu */}
      <div className="bg-slate-100 dark:bg-slate-950/80 border-b border-slate-200 dark:border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex overflow-x-auto gap-4 py-2 text-sm">
            <button
              onClick={() => setActiveTab('info')}
              className={`px-4 py-2 rounded-lg font-bold shrink-0 transition-colors cursor-pointer ${
                activeTab === 'info'
                  ? 'text-teal-600 dark:text-teal-400 bg-white dark:bg-slate-900 shadow-sm border border-slate-100 dark:border-slate-800'
                  : 'text-slate-500 hover:text-slate-800 dark:hover:text-white'
              }`}
            >
              Contact Details & Form
            </button>
            <button
              onClick={() => setActiveTab('privacy')}
              className={`px-4 py-2 rounded-lg font-bold shrink-0 transition-colors cursor-pointer ${
                activeTab === 'privacy'
                  ? 'text-teal-600 dark:text-teal-400 bg-white dark:bg-slate-900 shadow-sm border border-slate-100 dark:border-slate-800'
                  : 'text-slate-500 hover:text-slate-800 dark:hover:text-white'
              }`}
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setActiveTab('terms')}
              className={`px-4 py-2 rounded-lg font-bold shrink-0 transition-colors cursor-pointer ${
                activeTab === 'terms'
                  ? 'text-teal-600 dark:text-teal-400 bg-white dark:bg-slate-900 shadow-sm border border-slate-100 dark:border-slate-800'
                  : 'text-slate-500 hover:text-slate-800 dark:hover:text-white'
              }`}
            >
              Terms of Service
            </button>
            <button
              onClick={() => setActiveTab('disclaimer')}
              className={`px-4 py-2 rounded-lg font-bold shrink-0 transition-colors cursor-pointer ${
                activeTab === 'disclaimer'
                  ? 'text-teal-600 dark:text-teal-400 bg-white dark:bg-slate-900 shadow-sm border border-slate-100 dark:border-slate-800'
                  : 'text-slate-500 hover:text-slate-800 dark:hover:text-white'
              }`}
            >
              Medical Disclaimer
            </button>
          </div>
        </div>
      </div>

      {/* Dynamic Tab Views */}
      <section className="py-20 bg-white dark:bg-slate-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <AnimatePresence mode="wait">
            {activeTab === 'info' && (
              <motion.div
                key="info"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12"
              >
                
                {/* Left Side: Contact Information & Map */}
                <div className="lg:col-span-5 space-y-8">
                  <div className="space-y-4">
                    <span className="text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-widest block">Store Details</span>
                    <h2 className="text-2xl font-extrabold text-slate-950 dark:text-white">Where to Find Us</h2>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                      Medicare Medical Store is conveniently situated on Station Road, right next to the central petrol pump, ensuring fast access for all emergency prescription purchases in Gaya.
                    </p>
                  </div>

                  {/* Core Info Blocks */}
                  <div className="space-y-5 text-sm">
                    <div className="flex gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-950/40 border border-slate-100 dark:border-slate-850">
                      <div className="p-3 bg-teal-50 dark:bg-teal-950/30 text-teal-600 dark:text-teal-400 rounded-lg shrink-0">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <strong className="text-slate-950 dark:text-white font-bold block mb-1">Physical Address</strong>
                        <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                          R222+Q6R, Station Road, near Petrol Pump,
                          <br />
                          Gaya, Bihar - 823002
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-950/40 border border-slate-100 dark:border-slate-850">
                      <div className="p-3 bg-teal-50 dark:bg-teal-950/30 text-teal-600 dark:text-teal-400 rounded-lg shrink-0">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <strong className="text-slate-950 dark:text-white font-bold block mb-1">Direct Calling Lines</strong>
                        <a href="tel:09430476313" className="text-teal-600 dark:text-teal-400 hover:underline font-bold text-base block mt-0.5">
                          094304 76313
                        </a>
                        <span className="text-3xs text-slate-400 block mt-1">Available for emergency inquiries during working hours.</span>
                      </div>
                    </div>

                    <div className="flex gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-950/40 border border-slate-100 dark:border-slate-850">
                      <div className="p-3 bg-teal-50 dark:bg-teal-950/30 text-teal-600 dark:text-teal-400 rounded-lg shrink-0">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <strong className="text-slate-950 dark:text-white font-bold block mb-1">Operating Schedule</strong>
                        <div className="text-slate-500 dark:text-slate-400 space-y-0.5 text-xs">
                          <div className="flex justify-between w-64">
                            <span>Monday - Saturday:</span>
                            <span className="font-semibold text-slate-700 dark:text-slate-200">8:00 AM - 10:00 PM</span>
                          </div>
                          <div className="flex justify-between w-64">
                            <span>Sunday:</span>
                            <span className="font-semibold text-slate-700 dark:text-slate-200">9:00 AM - 9:00 PM</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Google Map */}
                  <div className="space-y-3">
                    <span className="text-2xs font-bold text-slate-400 uppercase tracking-widest block">Interactive Store Location Map</span>
                    <div className="w-full h-56 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-md">
                      <iframe
                        title="Medicare Medical Store Location Map Detail"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.1952044810843!2d85.00684131500609!3d25.029104983973546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2d0172e2cf1cb%3A0xe54ef9bd3b28b6d0!2sStation%20Road%20Gaya!5e0!3m2!1sen!2sin!4v1655193021948!5m2!1sen!2sin"
                        className="w-full h-full border-0"
                        allowFullScreen={false}
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>

                </div>

                {/* Right Side: Quick Inquiry Contact Form */}
                <div className="lg:col-span-7 bg-slate-50 dark:bg-slate-950/40 border border-slate-100 dark:border-slate-850 p-6 sm:p-10 rounded-3xl space-y-6 shadow-sm">
                  
                  <div className="space-y-1.5">
                    <span className="text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-widest block">Inquiry Inbox</span>
                    <h3 className="text-xl font-extrabold text-slate-950 dark:text-white">Submit a Quick Inquiry Message</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                      Write your message here if you have bulk supply requirements, questions on rare vaccine imports, or corporate contract concerns.
                    </p>
                  </div>

                  {formSubmitted ? (
                    <motion.div
                      initial={{ scale: 0.95, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="p-6 text-center border border-teal-500/20 bg-teal-50/50 dark:bg-teal-950/20 rounded-2xl"
                    >
                      <CheckCircle2 className="w-12 h-12 text-teal-600 dark:text-teal-400 mx-auto mb-3" />
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white">Inquiry Sent Successfully!</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 max-w-sm mx-auto">
                        Thank you for writing. Our chief pharmacist will review your submission and reply via email or call within 24 business hours.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleFormSubmit} className="space-y-4 text-sm">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Your Name *</label>
                          <input
                            type="text"
                            required
                            name="name"
                            value={formData.name}
                            onChange={handleFormChange}
                            placeholder="Your full name"
                            className="w-full px-4 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-850 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Email Address *</label>
                          <input
                            type="email"
                            required
                            name="email"
                            value={formData.email}
                            onChange={handleFormChange}
                            placeholder="yourname@email.com"
                            className="w-full px-4 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-850 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Subject of Inquiry</label>
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleFormChange}
                          className="w-full px-3 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-850 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500"
                        >
                          <option value="General Inquiry">General Store Inquiry</option>
                          <option value="Stock Availability">Medicine Stock Inquiry</option>
                          <option value="Bulk Purchase">Bulk Clinic Procurement</option>
                          <option value="Employment">Career / Staff Openings</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Detailed Message *</label>
                        <textarea
                          required
                          name="message"
                          rows={4}
                          value={formData.message}
                          onChange={handleFormChange}
                          placeholder="Please write details of your question..."
                          className="w-full px-4 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-850 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-teal-600 hover:bg-teal-500 text-white font-bold rounded-xl transition-all shadow-md shadow-teal-500/10 cursor-pointer"
                      >
                        <Send className="w-4 h-4" />
                        Send Message
                      </button>
                    </form>
                  )}

                  {/* Alternate Quick Delivery CTA */}
                  <div className="p-4 bg-teal-50 dark:bg-teal-950/20 border border-teal-100 dark:border-teal-900/50 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="space-y-1 text-center sm:text-left">
                      <span className="text-xs font-bold text-teal-800 dark:text-teal-400 block">Want to order medicines immediately?</span>
                      <p className="text-2xs text-slate-400">Avoid inquiry forms; launch the structured WhatsApp order system directly.</p>
                    </div>
                    <button
                      onClick={() => openOrderModal()}
                      className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-xs font-bold shrink-0 shadow cursor-pointer hover:shadow-md"
                    >
                      WhatsApp Checkout
                    </button>
                  </div>

                </div>

              </motion.div>
            )}

            {/* Privacy Policy view */}
            {activeTab === 'privacy' && (
              <motion.div
                key="privacy"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="max-w-3xl mx-auto space-y-6 text-sm text-slate-600 dark:text-slate-300 leading-relaxed"
              >
                <div className="flex items-center gap-3 text-teal-600 dark:text-teal-400 mb-2">
                  <ShieldCheck className="w-7 h-7 animate-pulse" />
                  <h2 className="text-2xl font-black text-slate-950 dark:text-white tracking-tight">Privacy Policy</h2>
                </div>
                <p className="italic text-slate-400">Last updated: July 28, 2026</p>
                <p>
                  At Medicare Medical Store, accessible from our official application website, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Medicare Medical Store and how we use it.
                </p>
                
                <h3 className="text-base font-bold text-slate-900 dark:text-white pt-2">1. Consent</h3>
                <p>By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p>

                <h3 className="text-base font-bold text-slate-900 dark:text-white pt-2">2. Information We Collect</h3>
                <p>
                  The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information. If you use our WhatsApp Checkout form, we request your name, delivery address, phone, and email to process your package accurately.
                </p>

                <h3 className="text-base font-bold text-slate-900 dark:text-white pt-2">3. Prescription Confidentiality</h3>
                <p>
                  Any prescription upload images or Rx medicine guidelines shared with our registered pharmacists on WhatsApp are treated as highly confidential medical records. We do not store, catalog or share prescription assets with secondary brokers under any circumstance.
                </p>
              </motion.div>
            )}

            {/* Terms of Service view */}
            {activeTab === 'terms' && (
              <motion.div
                key="terms"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="max-w-3xl mx-auto space-y-6 text-sm text-slate-600 dark:text-slate-300 leading-relaxed"
              >
                <div className="flex items-center gap-3 text-teal-600 dark:text-teal-400 mb-2">
                  <FileText className="w-7 h-7" />
                  <h2 className="text-2xl font-black text-slate-950 dark:text-white tracking-tight">Terms of Service</h2>
                </div>
                <p className="italic text-slate-400">Last updated: July 28, 2026</p>
                
                <h3 className="text-base font-bold text-slate-900 dark:text-white">1. Sourcing Compliance</h3>
                <p>
                  All products and medications featured on Medicare Medical Store are subject to local retail availability. We reserve the right to deny the purchase of specific drugs if a valid physical or digitally verified prescription from a registered medical practitioner is missing or deemed forged under the Drugs and Cosmetics Act of India.
                </p>

                <h3 className="text-base font-bold text-slate-900 dark:text-white pt-2">2. Delivery Terms</h3>
                <p>
                  Home delivery schedules inside Gaya, Bihar are estimates based on distance from our Station Road pharmacy. Actual delivery timings can fluctuate during peak hours, monsoons, or public emergencies.
                </p>
              </motion.div>
            )}

            {/* Medical Disclaimer view */}
            {activeTab === 'disclaimer' && (
              <motion.div
                key="disclaimer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="max-w-3xl mx-auto space-y-6 text-sm text-slate-600 dark:text-slate-300 leading-relaxed"
              >
                <div className="flex items-center gap-3 text-rose-500 mb-2">
                  <AlertTriangle className="w-7 h-7" />
                  <h2 className="text-2xl font-black text-slate-950 dark:text-white tracking-tight">Medical Disclaimer</h2>
                </div>
                <p className="italic text-rose-400">Strict Compliance Announcement</p>
                
                <div className="p-4 bg-rose-50 dark:bg-rose-950/20 border border-rose-100 dark:border-rose-900/50 rounded-xl space-y-3">
                  <p className="font-bold text-rose-800 dark:text-rose-300 text-sm">⚠️ NO MEDICAL ADVICE PROVIDING</p>
                  <p className="text-xs text-rose-700 dark:text-rose-400 leading-relaxed">
                    The entire informational content, wellness tips, or stock descriptions listed on Medicare Medical Store are for primary, general awareness purposes only. They DO NOT constitute professional medical advice, clinical diagnosis, or treatment guidelines.
                  </p>
                </div>

                <p>
                  Always seek the professional advice of your physician or a registered healthcare provider regarding any queries you have about a clinical condition or prescription dosing. Never disregard professional medical consultation or delay seeking care because of something you read on this or any secondary internet website.
                </p>

                <p>
                  The online Medicine Stock Checker is merely an inventory search indicator. A drug listing being "Available" does not guarantee dispensing if legal guidelines, pharmacist verification, or mandatory medical prescriptions are not completed.
                </p>
              </motion.div>
            )}

          </AnimatePresence>

        </div>
      </section>
    </>
  );
}
