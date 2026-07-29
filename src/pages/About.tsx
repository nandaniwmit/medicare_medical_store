import { useOutletContext } from 'react-router-dom';
import { motion } from 'motion/react';
import { ShieldAlert, Heart, Eye, Target, Calendar, Award, User, ShoppingBag, Landmark, Users } from 'lucide-react';
import SEO from '../components/SEO';

export default function About() {
  const { openOrderModal } = useOutletContext<{ openOrderModal: (medicineName?: string) => void }>();

  const values = [
    {
      title: 'Authenticity Guarantee',
      desc: 'We enforce an absolute zero-tolerance policy against sub-standard drugs. Every single batch is physically verified and procured solely from registered, licensed distributors.',
      icon: ShieldAlert,
    },
    {
      title: 'Patient-First Care',
      desc: 'Health demands empathy. Our pharmacists prioritize patient guidance, explaining prescription dosages, storage conditions, and helping find budget-friendly equivalents.',
      icon: Heart,
    },
    {
      title: 'Uncompromised Quality',
      desc: 'From vaccines requiring sub-zero conditions to basic life-saving drugs, we store all medicines under strict climate conditions, monitoring temperature logs daily.',
      icon: Target,
    },
  ];

  const timelineSteps = [
    {
      year: '2014',
      title: 'Our Humble Beginning',
      desc: 'Established Medicare Medical Store on Station Road, Gaya as a small retail chemist shop, serving nearby local families.',
    },
    {
      year: '2018',
      title: 'FSSAI & Drug License Expansion',
      desc: 'Secured comprehensive regulatory certifications, allowing us to supply complex pediatric formulas, surgical supplies, and advanced critical care medications.',
    },
    {
      year: '2022',
      title: 'Express WhatsApp Delivery',
      desc: 'Launched contactless home deliveries in Gaya to support senior citizens and quarantine cases. Streamlined WhatsApp order placement.',
    },
    {
      year: '2026',
      title: 'Digitalizing Care Services',
      desc: 'Introduced an instant online Medicine Stock Checker, empowering patients to inspect stock availability and expiry before leaving home.',
    },
  ];

  return (
    <>
      <SEO
        title="About Us - Our History, Owner Message & Timeline"
        description="Learn the founding story, mission and visions of Medicare Medical Store, Station Road, Gaya. Discover our uncompromised promise of genuine medicines and patient-centric care."
        keywords="About Medicare Gaya, Pharmacy History Bihar, Genuine chemist store Gaya, Registered pharmacist Station Road Gaya, Owner message Medicare, Pharmacy milestones Gaya"
      />

      {/* Page Header Banner */}
      <section className="relative py-20 bg-gradient-to-r from-teal-800 to-teal-900 text-white overflow-hidden">
        {/* Subtle background overlay */}
        <div className="absolute inset-0 bg-slate-900/10" />
        <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-teal-500/10 blur-2xl animate-pulse" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold text-teal-300 uppercase tracking-widest block">Learn Our Story</span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Our Journey & Core Commitments</h1>
          <p className="text-sm md:text-base text-teal-100 max-w-2xl mx-auto leading-relaxed">
            Discover the values and decade-long history that make us Gaya's most reliable retail pharmacy for life-saving therapeutics.
          </p>
        </div>
      </section>

      {/* Business Story */}
      <section className="py-20 bg-white dark:bg-slate-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content column */}
            <div className="space-y-6">
              <span className="text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-widest block">Founded on Trust</span>
              <h2 className="text-3xl font-extrabold text-slate-950 dark:text-white tracking-tight">
                Our Story: Over 12 Years of Unbroken Family Healthcare Trust
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                In 2014, Medicare Medical Store was founded with a clear, singular vision: to eliminate counterfeit medications and offer accessible, highly professional pharmacy services to the families of Gaya, Bihar. Over the years, we watched Station Road grow, but our pledge to keep our local community healthy never wavered.
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                We believe that a medical store isn't just a merchant shop—it is a critical pillar of first-line healthcare. That's why our shelves don't just hold medicine bottles; they carry safety, care, and the deep reassurance that what you are feeding your loved ones is 100% genuine and legally stored.
              </p>
              
              {/* Core stat blocks */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                <div>
                  <span className="text-2xl md:text-3xl font-extrabold text-teal-600 dark:text-teal-400 block">15,000+</span>
                  <span className="text-3xs text-slate-400 uppercase tracking-wider font-semibold">Patients Served</span>
                </div>
                <div>
                  <span className="text-2xl md:text-3xl font-extrabold text-teal-600 dark:text-teal-400 block">100%</span>
                  <span className="text-3xs text-slate-400 uppercase tracking-wider font-semibold">Genuine Sourcing</span>
                </div>
                <div>
                  <span className="text-2xl md:text-3xl font-extrabold text-teal-600 dark:text-teal-400 block">0</span>
                  <span className="text-3xs text-slate-400 uppercase tracking-wider font-semibold">Regulatory Recalls</span>
                </div>
              </div>
            </div>

            {/* Right Image column */}
            <div className="relative">
              <div className="aspect-video sm:aspect-square rounded-3xl overflow-hidden shadow-2xl border border-slate-100 dark:border-slate-800 relative bg-slate-50">
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800"
                  alt="Doctor checking health guidelines"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
              </div>
              
              {/* Floating Highlight card */}
              <div className="absolute -bottom-6 -left-6 p-5 rounded-2xl bg-slate-900 text-white border border-slate-800 shadow-xl max-w-xs hidden sm:flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-teal-600 text-white shrink-0">
                  <Landmark className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-teal-400 uppercase">Licensed Chemist</h4>
                  <p className="text-2xs text-slate-400 mt-0.5">Under continuous supervision of certified registered pharmacists.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Mission Vision Values Cards */}
      <section className="py-20 bg-slate-50 dark:bg-slate-950/60 border-t border-b border-slate-100 dark:border-slate-900/65 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Mission Card */}
            <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-850 space-y-4 shadow-sm">
              <div className="p-3 bg-teal-50 dark:bg-teal-950/30 rounded-xl text-teal-600 dark:text-teal-400 w-fit">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-950 dark:text-white">Our Mission</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                To bridge the gap between crucial therapeutics and patients by ensuring an uninterrupted, highly affordable supply of 100% genuine life-saving medicines and healthcare diagnostics, dispensed under expert pharmacist scrutiny in Gaya, Bihar.
              </p>
            </div>

            {/* Vision Card */}
            <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-850 space-y-4 shadow-sm">
              <div className="p-3 bg-teal-50 dark:bg-teal-950/30 rounded-xl text-teal-600 dark:text-teal-400 w-fit">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-950 dark:text-white">Our Vision</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                To digitize and modernize local retail healthcare in Bihar, making medicine search, prescription verification, and express temperature-safe door delivery seamless, setting an uncompromised standard for pharmaceutical trust.
              </p>
            </div>
          </div>

          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-widest block">Our Core Pillars</span>
            <h3 className="text-2xl font-extrabold text-slate-950 dark:text-white mt-1">Values That Direct Our Actions</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((val, idx) => {
              const ValIcon = val.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-850 space-y-3 shadow-2xs hover:shadow-md transition-shadow"
                >
                  <div className="text-teal-600 dark:text-teal-400">
                    <ValIcon className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-slate-950 dark:text-white text-base">{val.title}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{val.desc}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Store Overview & Temperature standards */}
      <section className="py-20 bg-white dark:bg-slate-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual Block */}
            <div className="lg:col-span-5 relative order-last lg:order-first">
              <div className="aspect-video sm:aspect-4/3 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-850 shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&q=80&w=600"
                  alt="Cold storage medical cabinet"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Content block */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-widest block">Modern Infrastructure</span>
              <h2 className="text-3xl font-extrabold text-slate-950 dark:text-white tracking-tight">
                Our Store Overview: Cold Chain Maintenance & High-Tech Dispensing
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Many medications, including vaccines, insulin vials, and specific eye drops lose efficacy if they aren't stored correctly. Unlike standard open-air chemist stalls, Medicare maintains specialized temperature controls.
              </p>
              
              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-teal-50 dark:bg-teal-950/40 text-teal-600 dark:text-teal-400 font-bold text-xs">1</span>
                  <div>
                    <strong className="text-sm text-slate-800 dark:text-slate-200 block font-semibold">Continuous Refrigeration (2°C - 8°C)</strong>
                    <p className="text-xs text-slate-400 mt-0.5">Strictly monitored cold storage units for insulin, vaccines, and hormone therapies.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-teal-50 dark:bg-teal-950/40 text-teal-600 dark:text-teal-400 font-bold text-xs">2</span>
                  <div>
                    <strong className="text-sm text-slate-800 dark:text-slate-200 block font-semibold">Dry Moisture-Controlled Medicine Shelves</strong>
                    <p className="text-xs text-slate-400 mt-0.5">Ensuring tablets, capsules and dry syrups are saved from Bihar's humid summer days.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-teal-50 dark:bg-teal-950/40 text-teal-600 dark:text-teal-400 font-bold text-xs">3</span>
                  <div>
                    <strong className="text-sm text-slate-800 dark:text-slate-200 block font-semibold">Meticulous First-Expiry, First-Out (FEFO) Protocol</strong>
                    <p className="text-xs text-slate-400 mt-0.5">Our inventory systems ensure older batches are separated, guaranteeing you never receive near-expiry stocks.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Timeline/Journey */}
      <section className="py-20 bg-slate-50 dark:bg-slate-950/60 border-t border-b border-slate-100 dark:border-slate-900/60 transition-colors">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-widest block">History Timeline</span>
            <h2 className="text-3xl font-extrabold text-slate-950 dark:text-white">Our Historic Milestones</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
              How we grew from a small neighborhood shop to Station Road's premier digitalized healthcare pharmacy.
            </p>
          </div>

          {/* Timeline Stack */}
          <div className="relative border-l border-slate-200 dark:border-slate-800 ml-4 md:ml-32 space-y-12">
            {timelineSteps.map((step, idx) => (
              <div key={idx} className="relative pl-8 group">
                {/* Year Badge absolute to the left for desktop */}
                <div className="md:absolute md:left-[-128px] md:top-0.5 md:w-24 md:text-right hidden md:block">
                  <span className="text-lg font-black text-teal-600 dark:text-teal-400">{step.year}</span>
                </div>

                {/* Dot indicator */}
                <div className="absolute left-[-6px] top-1.5 w-3 h-3 rounded-full bg-teal-600 dark:bg-teal-400 group-hover:scale-125 transition-transform" />

                {/* Content */}
                <div className="space-y-1">
                  <span className="text-xs font-bold text-teal-600 dark:text-teal-400 md:hidden">{step.year}</span>
                  <h4 className="text-lg font-bold text-slate-950 dark:text-white leading-snug">{step.title}</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-2xl">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Owner Message & Signature */}
      <section className="py-20 bg-white dark:bg-slate-900 transition-colors">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-850/80 shadow-lg relative">
            <div className="absolute top-6 left-6 text-teal-200 dark:text-slate-800 text-6xl font-serif leading-none select-none">“</div>
            
            <div className="relative space-y-6">
              <span className="text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-widest block">Message From Our Owner</span>
              
              <blockquote className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed italic">
                "When we opened Medicare Medical Store in 2014, my goal was to establish a sanctuary of absolute drug authenticity on Station Road. Gaya deserves world-class medicine storage, licensed pharmacists who treat patients like family, and transparent prices. Health is our most sacred wealth, and we treat every prescription as a promise of recovery. Thank you for placing your precious trust in us for over a decade."
              </blockquote>

              <div className="flex items-center gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                <div className="w-12 h-12 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold text-lg shadow-inner">
                  P
                </div>
                <div>
                  <strong className="text-sm text-slate-950 dark:text-white block font-extrabold">Pharmacist R. K. Prasad</strong>
                  <span className="text-2xs text-slate-400 block mt-0.5">Founder & Chief Pharmacist, Registered Drug Lic. Holder</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="bg-slate-900 text-white py-16 text-center space-y-6">
        <h3 className="text-2xl md:text-3xl font-extrabold">Looking For A Specific Lifesaving Drug?</h3>
        <p className="text-xs md:text-sm text-slate-400 max-w-xl mx-auto">
          Don't search city-wide. Use our search tool to inspect availability, or submit a custom WhatsApp procurement query immediately.
        </p>
        <div className="pt-2">
          <button
            onClick={() => openOrderModal('Special Medicine Inquiry')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-md cursor-pointer"
          >
            <ShoppingBag className="w-4 h-4" />
            Inquire via WhatsApp
          </button>
        </div>
      </section>
    </>
  );
}
