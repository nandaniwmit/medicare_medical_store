import { useEffect, useRef } from 'react';
import { useLocation, useOutletContext } from 'react-router-dom';
import { motion } from 'motion/react';
import { Pill, Activity, ShieldCheck, ShoppingBag, Heart, Thermometer, UserCheck, Stethoscope, Baby } from 'lucide-react';
import SEO from '../components/SEO';
import MedicineStockChecker from '../components/MedicineStockChecker';

export default function Services() {
  const { openOrderModal } = useOutletContext<{ openOrderModal: (medicineName?: string) => void }>();
  const location = useLocation();
  const stockCheckerRef = useRef<HTMLDivElement>(null);

  // Scroll to stock checker if the query parameter is present
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get('stockChecker') === 'true' && stockCheckerRef.current) {
      setTimeout(() => {
        stockCheckerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 400);
    }
  }, [location.search]);

  // Complete List of Categories
  const categories = [
    {
      title: 'Prescription Medicines (Rx)',
      desc: 'Life-saving critical care drugs, cardiovascular, diabetes, asthma, psychiatric, and antibiotic therapeutics sourced directly from certified manufacturers.',
      icon: Pill,
      popularItems: ['Insulin Glargine', 'Metformin 500mg', 'Amlodipine 5mg', 'Atorvastatin 10mg'],
      ctaLabel: 'Submit Prescription Order',
    },
    {
      title: 'OTC General Medicines',
      desc: 'Quick over-the-counter remedies for cough, cold, fever, pain relief, acidity, digestive comfort, allergy pills, and multi-symptom flu syrups.',
      icon: ShieldCheck,
      popularItems: ['Paracetamol 650mg', 'Cetirizine 10mg', 'Brufen 400mg', 'Antacid Gel'],
      ctaLabel: 'Order OTC Medicines',
    },
    {
      title: 'Digital Health Devices',
      desc: 'Accurate home monitoring devices and digital diagnostic trackers to keep watch over your vitals with clinical accuracy.',
      icon: Thermometer,
      popularItems: ['Omron BP Monitors', 'Accu-Chek Test Strips', 'Digital Thermometers', 'Pulse Oximeters'],
      ctaLabel: 'Order Health Devices',
    },
    {
      title: 'Baby Care & Hygiene',
      desc: 'Dermatologist-tested premium infant formulas, diapers, baby wipes, sensitive skin baby body wash, talcs, rash creams, and gripe water.',
      icon: Baby,
      popularItems: ['Infant Milk Formula', 'Gripe Water', 'Gentle Baby Wipes', 'Nappy Rash Cream'],
      ctaLabel: 'Order Baby Products',
    },
    {
      title: 'Supplements & Vitamins',
      desc: 'Comprehensive nutritional support ranging from daily multivitamins, zinc tablets, calcium boosters, whey proteins, to botanical immune helpers.',
      icon: Heart,
      popularItems: ['Vitamin C (Limcee)', 'Multivitamin Capsules', 'Calcium + Vit D3', 'Protein Powders'],
      ctaLabel: 'Order Supplements',
    },
    {
      title: 'Surgical & Wound Care',
      desc: 'Surgical cottons, sterile bandages, medical micro-pore tapes, hand rubs, gloves, antiseptic solutions, and clinical face masks.',
      icon: Stethoscope,
      popularItems: ['Dettol Liquid', 'Micropore Tape', 'Sterile Gauze pads', 'N95 Respirators'],
      ctaLabel: 'Order Wound Care supplies',
    },
  ];

  return (
    <>
      <SEO
        title="Our Services - Medicines, Baby Care & Stock Checker"
        description="Browse all service categories at Medicare Medical Store Gaya: Prescription drugs, OTC, digital BP monitors, baby food, surgical supplies and check real-time stock online."
        keywords="Pharmacy services Gaya, Buy medicines Station Road, Medicine categories Bihar, Digital BP machine Gaya, Glucose checker price Bihar, Pediatric formula Gaya, Medical equipment stock"
      />

      {/* Hero Header */}
      <section className="relative py-20 bg-gradient-to-r from-teal-850 to-teal-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/10" />
        <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-teal-500/10 blur-2xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold text-teal-300 uppercase tracking-widest block">Explore Our Offerings</span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Our Services & Specialized Categories</h1>
          <p className="text-sm md:text-base text-teal-100 max-w-2xl mx-auto leading-relaxed">
            From critical prescription medicines and orthopedic supplies to baby wellness and advanced home diagnostics.
          </p>
        </div>
      </section>

      {/* STOCK CHECKER EXCLUSIVE SECTION */}
      <section ref={stockCheckerRef} id="exclusive-stock-checker" className="py-20 bg-slate-100/50 dark:bg-slate-950/30 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-widest block bg-teal-100 dark:bg-teal-950/40 px-3 py-1 rounded-full w-fit mx-auto mb-3">
              Exclusive Online Feature
            </span>
            <h2 className="text-3xl font-extrabold text-slate-950 dark:text-white tracking-tight">
              Medicine Stock Checker
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
              Verify if your prescribed drug is in stock, inspect manufacturer brands, unit counts, and retail pricing before ordering. Search operates instantly.
            </p>
          </div>

          {/* Interactive checker component */}
          <MedicineStockChecker onOrderClick={(medName) => openOrderModal(medName)} />
        </div>
      </section>

      {/* Detailed Service Category Grid */}
      <section id="services-categories" className="py-20 bg-white dark:bg-slate-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-widest block">A-Z Inventory</span>
            <h3 className="text-2xl md:text-3xl font-extrabold text-slate-950 dark:text-white tracking-tight mt-1">
              Complete Store Categories
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
              We stock products across multiple categories to cover every health necessity for your entire family.
            </p>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat, idx) => {
              const CatIcon = cat.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-950/40 border border-slate-100 dark:border-slate-800/60 hover:border-teal-500/20 shadow-sm flex flex-col justify-between hover:shadow-lg transition-all duration-300"
                >
                  <div className="space-y-4">
                    {/* Icon Header */}
                    <div className="p-3 bg-white dark:bg-slate-900 rounded-xl text-teal-600 dark:text-teal-400 border border-slate-100 dark:border-slate-800 w-fit">
                      <CatIcon className="w-6 h-6" />
                    </div>

                    <h4 className="text-lg font-bold text-slate-950 dark:text-white leading-tight">
                      {cat.title}
                    </h4>
                    
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                      {cat.desc}
                    </p>

                    {/* Popular Items Block */}
                    <div className="pt-2">
                      <span className="text-2xs font-bold text-slate-400 uppercase block mb-2 tracking-wider">Commonly Stocked:</span>
                      <div className="flex flex-wrap gap-1.5">
                        {cat.popularItems.map((item, key) => (
                          <span
                            key={key}
                            className="text-3xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 text-slate-600 dark:text-slate-300 px-2 py-1 rounded"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* CTA button */}
                  <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800/60">
                    <button
                      onClick={() => openOrderModal(`Inquiry: ${cat.title}`)}
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs uppercase tracking-wider cursor-pointer"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      {cat.ctaLabel}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Bottom Procurement Banner */}
      <section className="bg-slate-900 text-white py-16 text-center space-y-6">
        <h3 className="text-2xl font-extrabold">Can't Find Your Prescribed Drug in our Stock?</h3>
        <p className="text-xs md:text-sm text-slate-400 max-w-xl mx-auto leading-relaxed">
          Bihar has vast medical catalogs and some rare critical medicines are hard to find. We maintain ties with top-tier licensed pharmaceutical distributors and can import specific life-saving drugs within 24 to 48 hours.
        </p>
        <div className="pt-2">
          <button
            onClick={() => openOrderModal('Rare Medicine Procurement Request')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-md cursor-pointer"
          >
            <ShoppingBag className="w-4 h-4" />
            Request Rare Medicines
          </button>
        </div>
      </section>
    </>
  );
}
