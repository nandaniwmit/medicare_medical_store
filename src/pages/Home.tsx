import { Link, useOutletContext } from 'react-router-dom';
import { motion } from 'motion/react';
import { Phone, CheckCircle2, ShoppingBag, ArrowRight, ArrowUpRight, Award, Truck, ShieldCheck, HeartPulse, Sparkles, MessageCircle, Star, HelpCircle, Mail, MapPin } from 'lucide-react';
import SEO from '../components/SEO';

export default function Home() {
  const { openOrderModal } = useOutletContext<{ openOrderModal: (medicineName?: string) => void }>();

  // 3 Featured Health Tips
  const healthTips = [
    {
      id: 1,
      title: 'How to Store Medicines Safely During Monsoon Season',
      category: 'Medicine Care',
      excerpt: 'High humidity levels can impact medication potency. Learn the best spots to keep your prescription drugs secure and dry...',
      readTime: '3 min read',
      date: 'July 24, 2026',
      icon: ShieldCheck,
    },
    {
      id: 2,
      title: 'Understanding OTC Pain Relievers: Ibuprofen vs Paracetamol',
      category: 'Health Guide',
      excerpt: 'Both alleviate pain but work differently inside the body. Here is an easy, expert-backed comparison to help you choose...',
      readTime: '5 min read',
      date: 'July 18, 2026',
      icon: HeartPulse,
    },
    {
      id: 3,
      title: 'Top 5 Daily Wellness Habits for Managing High Blood Pressure',
      category: 'Wellness',
      excerpt: 'From low-sodium meal tweaks to simple activity cycles, read these straightforward lifestyle adjustments approved by cardiologists...',
      readTime: '4 min read',
      date: 'June 30, 2026',
      icon: Sparkles,
    },
  ];

  // 6 Featured Services
  const featuredServices = [
    {
      title: 'Genuine Medicines',
      desc: '100% authentic, directly sourced prescription drugs and critical care medicines stored in climate-controlled environments.',
      tag: 'Prescription Drugs',
    },
    {
      title: 'Surgical Supplies',
      desc: 'Premium quality wound care, diagnostic equipment, surgical masks, sanitizers, and medical bandages for home and clinic use.',
      tag: 'Clinical Essentials',
    },
    {
      title: 'Health & Baby Care',
      desc: 'Dermatologically safe baby formulas, baby skin care, wipes, nursing pads, and essential dietary health supplements.',
      tag: 'Infant Wellness',
    },
    {
      title: 'Daily Health Devices',
      desc: 'A complete inventory of digital blood pressure monitors, infrared thermometers, glucose checkers, and pulse oximeters.',
      tag: 'Home Diagnostics',
    },
    {
      title: 'OTC Essentials',
      desc: 'Over-the-counter tablets for colds, fever, digestive relief, pain sprays, health tonics, and topical ointments.',
      tag: 'Self Care',
    },
    {
      title: 'Local Home Delivery',
      desc: 'Convenient medicine delivery right to your doorstep anywhere in Gaya, Bihar. Simply order on WhatsApp.',
      tag: 'Express Service',
    },
  ];

  // Featured Products Previews
  const featuredProducts = [
    { name: 'Omron Digital BP Monitor', brand: 'Omron HEM-7120', mrp: 2499, img: 'https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&q=80&w=400' },
    { name: 'Accu-Chek Active Glucose Meter', brand: 'Roche Diagnostics', mrp: 975, img: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&q=80&w=400' },
    { name: 'Pure Hand Sanitizer 500ml', brand: 'Dettol', mrp: 218, img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=400' },
  ];

  // 3 FAQ Items for preview
  const faqs = [
    { q: 'How can I place an order online with Medicare?', a: 'You can order easily by clicking the WhatsApp Order button on our website. Just fill out our WhatsApp Order Form with your name, address, and medicine list. It generates a preformatted text message and opens WhatsApp instantly to share with our store.' },
    { q: 'Do you deliver medicines directly to homes in Gaya?', a: 'Yes! We provide safe, contactless home delivery for medicines and healthcare products throughout Gaya, Bihar, especially near Station Road and surrounding neighborhoods. Contact us for delivery times.' },
    { q: 'Is a prescription required for purchasing medicines?', a: 'For general OTC, baby care, or standard supplements, no prescription is needed. However, legally classified Schedule H or prescription drugs absolutely require a clear photo of your doctor prescription sent to us over WhatsApp.' },
  ];

  // Dynamic SEO schema markup for Local Business
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'Pharmacy',
    'name': 'Medicare Medical Store',
    'image': 'https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&q=80&w=800',
    '@id': 'https://ais-dev-dtu3wvucgqsf6bndozwil6-457061730116.asia-southeast1.run.app/#pharmacy',
    'url': window.location.origin,
    'telephone': '09430476313',
    'priceRange': '$$',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Station Road, near Petrol Pump',
      'addressLocality': 'Gaya',
      'addressRegion': 'Bihar',
      'postalCode': '823002',
      'addressCountry': 'IN'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': '25.0291',
      'longitude': '85.0068'
    },
    'openingHoursSpecification': {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
      ],
      'opens': '08:00',
      'closes': '22:00'
    },
    'sameAs': [
      'https://facebook.com',
      'https://instagram.com'
    ]
  };

  return (
    <>
      <SEO
        title="Your Trusted Medical Store for Genuine Medicines"
        description="Providing 100% genuine medicines, surgical supplies, healthcare products, baby care and wellness devices in Gaya, Bihar. Order instantly on WhatsApp!"
        keywords="Medicare Medical Store, Pharmacy in Gaya, Buy genuine medicines Gaya, Chemist Station Road Gaya, Baby Care items Bihar, Medical devices Gaya, WhatsApp medicine order"
        schemaMarkup={[localBusinessSchema]}
      />

      {/* Hero Banner Section */}
      <section id="hero-banner" className="relative bg-slate-900 text-white min-h-[80vh] flex items-center overflow-hidden">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&q=80&w=1600"
            alt="Pharmacy Healthcare Store background"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-slate-900/90 to-teal-950/40" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-10">
          <div className="max-w-3xl">
            {/* Tagline / Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/10 text-teal-300 border border-teal-500/25 mb-6 text-xs font-bold uppercase tracking-wider"
            >
              <HeartPulse className="w-4 h-4" />
              Trusted Pharmacy in Gaya, Bihar
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight"
            >
              Your Trusted Medical Store for{' '}
              <span className="bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
                Genuine Medicines
              </span>{' '}
              & Healthcare Needs
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed max-w-2xl"
            >
              Providing genuine medicines, healthcare products, surgical supplies, baby care, personal care
              and daily medical essentials at affordable prices. Direct home delivery in Gaya.
            </motion.p>

            {/* Core Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a
                href="tel:09430476313"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white hover:bg-slate-100 text-slate-900 font-bold rounded-xl text-sm transition-all shadow-lg hover:shadow-xl active:translate-y-0.5"
              >
                <Phone className="w-4 h-4 text-teal-600" />
                Call Now
              </a>
              <button
                onClick={() => openOrderModal()}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-bold rounded-xl text-sm transition-all shadow-md shadow-emerald-500/10 active:translate-y-0.5 cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4" />
                WhatsApp Order
              </button>
              <a
                href="https://maps.google.com/?q=R222%2BQ6R,+Station+Road,+near+Petrol+Pump,+Gaya,+Bihar+823002"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 hover:text-white font-bold rounded-xl text-sm transition-all border border-slate-700 backdrop-blur-sm active:translate-y-0.5"
              >
                <MapPin className="w-4 h-4 text-emerald-400" />
                Get Directions
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Short About Preview Section */}
      <section id="about-preview" className="py-20 bg-white dark:bg-slate-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual Column */}
            <div className="lg:col-span-5 relative">
              <div className="aspect-4/3 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600"
                  alt="Pharmacist dispensing genuine medicines"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 p-6 bg-slate-900 text-white rounded-2xl shadow-xl hidden sm:block border border-slate-800">
                <span className="text-3xl font-extrabold text-teal-400 block">10+ Years</span>
                <span className="text-xs text-slate-400 uppercase tracking-widest font-semibold">Of Trust In Gaya</span>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-widest block">Who We Are</span>
              <h2 className="text-3xl font-extrabold text-slate-950 dark:text-white tracking-tight">
                Your Health, Our Supreme Priority at Medicare Medical Store
              </h2>
              <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Located centrally on Station Road in Gaya, Bihar, Medicare Medical Store is dedicated to providing only 100% verified medicines, healthcare tools, surgical equipment, and wellness items. Under supervision of certified professionals, we verify every single batch to protect patient health.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">Certified Pharmacists</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">100% Sourced from Licensed Distributors</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">Safe Home Delivery near Gaya</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">Strict Climate-Controlled Storage</span>
                </div>
              </div>
              <div className="pt-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-teal-500/30 hover:border-teal-500 text-sm font-bold text-teal-600 dark:text-teal-400 transition-all hover:bg-teal-50 dark:hover:bg-teal-950/20"
                >
                  Read Our Full Story
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services (Maximum 6) */}
      <section id="featured-services" className="py-20 bg-slate-50 dark:bg-slate-950/60 border-t border-b border-slate-100 dark:border-slate-900/60 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-widest block">What We Offer</span>
            <h2 className="text-3xl font-extrabold text-slate-950 dark:text-white tracking-tight mt-2">
              Comprehensive Medical Solutions Under One Roof
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-3 leading-relaxed">
              Explore our core pharmacy categories tailored to support you and your family at every stage of wellness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((srv, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-850 hover:shadow-xl hover:shadow-slate-100/10 dark:hover:shadow-black/20 hover:border-teal-500/20 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className="text-3xs font-extrabold tracking-widest text-teal-600 dark:text-teal-400 uppercase bg-teal-50 dark:bg-teal-950/30 px-2 py-1 rounded mb-4 inline-block">
                    {srv.tag}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{srv.title}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6">{srv.desc}</p>
                </div>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-600 dark:text-teal-400 hover:underline"
                >
                  Learn More
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-sm shadow-md shadow-teal-500/10 hover:shadow-teal-500/20 transition-all"
            >
              View Detailed Service Page
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="py-20 bg-white dark:bg-slate-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content Column */}
            <div className="space-y-6">
              <span className="text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-widest block">Our Guarantee</span>
              <h2 className="text-3xl font-extrabold text-slate-950 dark:text-white tracking-tight">
                Why Thousands Trust Medicare Medical Store For Health Essentials
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                As a leading local pharmacy in Gaya, we understand how vital correct medications are. We are committed to meticulous standards, giving you complete reassurance with every order.
              </p>

              {/* Grid bullet list */}
              <div className="space-y-4 pt-2">
                <div className="flex gap-4 p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-950/40 transition-colors">
                  <div className="p-3 bg-teal-50 dark:bg-teal-950/30 rounded-lg text-teal-600 dark:text-teal-400 shrink-0">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-base">100% Genuine Medicines</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">We source directly from registered pharma distributors with rigorous batch screening.</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-950/40 transition-colors">
                  <div className="p-3 bg-teal-50 dark:bg-teal-950/30 rounded-lg text-teal-600 dark:text-teal-400 shrink-0">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-base">Certified Pharmacist Supervision</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Your prescription is checked and fulfilled by fully licensed pharmacists.</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-950/40 transition-colors">
                  <div className="p-3 bg-teal-50 dark:bg-teal-950/30 rounded-lg text-teal-600 dark:text-teal-400 shrink-0">
                    <Truck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-base">Prompt WhatsApp Home Delivery</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Easily upload and receive prompt medicine drops directly to your home in Gaya.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Column */}
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-2xl relative bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1547489432-cf93fa6c71ee?auto=format&fit=crop&q=80&w=600"
                  alt="Certified medical equipment shelf"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-950/40 via-transparent to-transparent" />
              </div>
              <div className="absolute -top-4 -left-4 p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900 flex items-center gap-3 shadow-md max-w-xs">
                <div className="p-2 rounded bg-emerald-600 text-white">
                  <HeartPulse className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-800 dark:text-emerald-300 block">FSSAI Certified</span>
                  <span className="text-3xs text-slate-400">Licensed Drug Distributors</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section id="featured-products" className="py-20 bg-slate-50 dark:bg-slate-950/60 border-t border-b border-slate-100 dark:border-slate-900/60 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-widest block">Popular Diagnostics</span>
              <h2 className="text-3xl font-extrabold text-slate-950 dark:text-white tracking-tight mt-1">
                Featured Healthcare Devices
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-1 text-sm font-bold text-teal-600 dark:text-teal-400 hover:underline"
            >
              See All Stock Inventory
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((prod, idx) => (
              <div
                key={idx}
                className="group rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-850 overflow-hidden hover:shadow-xl transition-all"
              >
                <div className="h-48 overflow-hidden bg-slate-100 relative">
                  <img
                    src={prod.img}
                    alt={prod.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 bg-teal-600 text-white text-3xs font-extrabold uppercase px-2 py-0.5 rounded">
                    Popular Product
                  </div>
                </div>
                <div className="p-5 space-y-3">
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white text-base line-clamp-1">{prod.name}</h3>
                    <span className="text-xs text-slate-400 italic mt-0.5 block">{prod.brand}</span>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800">
                    <div>
                      <span className="text-2xs text-slate-400 block">MRP Price</span>
                      <strong className="text-base text-slate-800 dark:text-teal-400">₹{prod.mrp.toFixed(2)}</strong>
                    </div>
                    <button
                      onClick={() => openOrderModal(`${prod.name} (${prod.brand})`)}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-teal-600 text-white hover:bg-teal-500 font-bold text-xs transition-all cursor-pointer"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews Preview Section */}
      <section id="reviews-preview" className="py-20 bg-white dark:bg-slate-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-widest block">Client Feedback</span>
            <h2 className="text-3xl font-extrabold text-slate-950 dark:text-white tracking-tight mt-1">
              Patron Reviews From Gaya, Bihar
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
              Read real feedback summarizing standard local experiences from patients who trust Medicare.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-950/40 border border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-1 text-amber-500 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 italic leading-relaxed">
                "Finding critical medicines for my grandfather is always easy here. The staff are highly knowledgeable, very helpful, and they deliver directly to our house near Station Road. Always authentic."
              </p>
              <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-800/60 pt-4 mt-6">
                <div>
                  <strong className="text-xs text-slate-900 dark:text-white block font-bold">Amit Kumar Singh</strong>
                  <span className="text-3xs text-slate-400 block mt-0.5">Local Local Guide</span>
                </div>
                <span className="text-2xs font-semibold text-teal-600 dark:text-teal-400 uppercase bg-teal-50 dark:bg-teal-950/30 px-2 py-0.5 rounded">
                  Google Review
                </span>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-950/40 border border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-1 text-amber-500 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 italic leading-relaxed">
                "Excellent service! I ordered some health supplements and baby wipes on WhatsApp. The formatted checkout text was very easy. The delivery driver brought it within 2 hours. High quality customer support."
              </p>
              <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-800/60 pt-4 mt-6">
                <div>
                  <strong className="text-xs text-slate-900 dark:text-white block font-bold">Priyanka Kumari</strong>
                  <span className="text-3xs text-slate-400 block mt-0.5">Regular Patron</span>
                </div>
                <span className="text-2xs font-semibold text-teal-600 dark:text-teal-400 uppercase bg-teal-50 dark:bg-teal-950/30 px-2 py-0.5 rounded">
                  Direct Verified
                </span>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-950/40 border border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-1 text-amber-500 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 italic leading-relaxed">
                "They have a wonderful medicine availability searcher on their website. I searched for Novamox and instantly saw it was available. Saved me a physical trip. Most professional pharmacy in Bihar!"
              </p>
              <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-800/60 pt-4 mt-6">
                <div>
                  <strong className="text-xs text-slate-900 dark:text-white block font-bold">Dr. S. K. Verma</strong>
                  <span className="text-3xs text-slate-400 block mt-0.5">Medical Professional</span>
                </div>
                <span className="text-2xs font-semibold text-teal-600 dark:text-teal-400 uppercase bg-teal-50 dark:bg-teal-950/30 px-2 py-0.5 rounded">
                  Google Review
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview Section */}
      <section id="faq-preview" className="py-20 bg-slate-50 dark:bg-slate-950/60 border-t border-b border-slate-100 dark:border-slate-900/60 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Header Column */}
            <div className="lg:col-span-4 space-y-4">
              <span className="text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-widest block">Got Questions?</span>
              <h2 className="text-3xl font-extrabold text-slate-950 dark:text-white tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                Find quick clarifications about how to check medicine stock, how home delivery works, and required prescription uploads.
              </p>
              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white text-xs font-bold uppercase"
                >
                  Ask Other Question
                  <HelpCircle className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Accordion Column */}
            <div className="lg:col-span-8 space-y-4">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-850 space-y-2.5 shadow-sm"
                >
                  <h4 className="font-bold text-slate-900 dark:text-white text-base flex items-start gap-2">
                    <HelpCircle className="w-5 h-5 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                    {faq.q}
                  </h4>
                  <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 leading-relaxed pl-7">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="home-cta" className="relative py-20 bg-slate-900 text-white overflow-hidden">
        {/* Background Accent Gradient */}
        <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-teal-950/40 to-slate-950" />
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-emerald-500/5 blur-3xl" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-extrabold text-teal-400 uppercase tracking-widest block">Emergency & Fast Orders</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Need Urgent Medicines Fulfilled Promptly?</h2>
          <p className="text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Don't worry about waiting in queues. Fill our quick order form to send details to our WhatsApp number directly. We will pack your order and coordinate express home drop-off!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => openOrderModal()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold rounded-xl text-sm hover:shadow-lg hover:shadow-emerald-500/10 active:translate-y-0.5 cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4" />
              Order Instantly On WhatsApp
            </button>
            <a
              href="tel:09430476313"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-slate-800 text-white font-bold rounded-xl text-sm hover:bg-slate-700 transition-colors border border-slate-700"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              Call Pharmacist: 09430476313
            </a>
          </div>
        </div>
      </section>

      {/* Latest Health Tips Preview Section */}
      <section id="health-tips-preview" className="py-20 bg-white dark:bg-slate-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-widest block">Wellness Blog</span>
            <h2 className="text-3xl font-extrabold text-slate-950 dark:text-white tracking-tight mt-1">
              Latest Health & Wellness Tips
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
              Stay informed with simple, scientifically sound advice on medicine storage and general well-being.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {healthTips.map((tip) => {
              const TipIcon = tip.icon;
              return (
                <div
                  key={tip.id}
                  className="rounded-2xl border border-slate-100 dark:border-slate-850 p-6 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-3xs font-extrabold uppercase bg-teal-50 dark:bg-teal-950/30 text-teal-600 dark:text-teal-400 px-2 py-0.5 rounded">
                        {tip.category}
                      </span>
                      <span className="text-3xs text-slate-400">{tip.date}</span>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="p-2.5 rounded-lg bg-teal-50 dark:bg-teal-950/20 text-teal-600 dark:text-teal-400 shrink-0">
                        <TipIcon className="w-5 h-5" />
                      </div>
                      <h3 className="font-bold text-slate-900 dark:text-white text-base line-clamp-2 leading-snug">
                        {tip.title}
                      </h3>
                    </div>

                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-3">
                      {tip.excerpt}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-4 mt-6 border-t border-slate-100 dark:border-slate-800/60 text-3xs font-bold text-slate-400 uppercase tracking-widest">
                    <span>{tip.readTime}</span>
                    <button
                      onClick={() => openOrderModal(`Inquiry about article: ${tip.title}`)}
                      className="text-teal-600 dark:text-teal-400 hover:underline inline-flex items-center gap-0.5 cursor-pointer"
                    >
                      Ask Specialist <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription Card Section */}
      <section id="home-newsletter" className="py-20 bg-slate-50 dark:bg-slate-950/40 border-t border-b border-slate-100 dark:border-slate-900/60 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto p-8 sm:p-12 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-850 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-teal-500/5 blur-2xl" />

            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-3">
                <div className="flex items-center gap-2 text-teal-600 dark:text-teal-400">
                  <Mail className="w-5 h-5" />
                  <span className="text-xs font-bold uppercase tracking-wider">Health Newsletter</span>
                </div>
                <h3 className="text-2xl font-extrabold text-slate-950 dark:text-white">Subscribe For Weekly Wellness Guides</h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  Join 1,000+ Gaya citizens receiving expert-approved medicine advice, wellness articles, and product discount announcements directly. No spam, ever.
                </p>
              </div>

              <div className="lg:col-span-5">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert('Thank you for subscribing! Your medical store guides are on the way.');
                  }}
                  className="space-y-3"
                >
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 text-sm bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500"
                  />
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center px-4 py-3 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-sm shadow-md transition-all cursor-pointer"
                  >
                    Subscribe Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
