import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Eye, X, ChevronLeft, ChevronRight, Grid } from 'lucide-react';
import SEO from '../components/SEO';
import { GalleryItem } from '../types';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'store' | 'medicines' | 'equipment' | 'products'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Gallery Photos Data
  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: 'Organized Medicine Cabinets',
      category: 'medicines',
      imageUrl: 'https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&q=80&w=800',
      description: 'Alphabetically organized and moisture-controlled prescription racks for quick, error-free dispensing.',
    },
    {
      id: 2,
      title: 'Store Front & Ingress Area',
      category: 'store',
      imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
      description: 'Our spacious, fully-lit retail counter on Station Road, Gaya, welcoming patrons everyday.',
    },
    {
      id: 3,
      title: 'Certified Diagnostic Equipment',
      category: 'equipment',
      imageUrl: 'https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&q=80&w=800',
      description: 'High-accuracy digital blood pressure monitors, pulse oximeters, and nebulizers from top brands.',
    },
    {
      id: 4,
      title: 'Safe Pediatric & Baby Formulas',
      category: 'products',
      imageUrl: 'https://images.unsplash.com/photo-1547489432-cf93fa6c71ee?auto=format&fit=crop&q=80&w=800',
      description: 'A fully stocked infant care range containing standard nutritional formulas and baby skincare.',
    },
    {
      id: 5,
      title: 'Cold Chain Insulin Cabinets',
      category: 'equipment',
      imageUrl: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&q=80&w=800',
      description: 'Specialized 2°C - 8°C refrigeration unit storing critical hormone medicines and vaccine vials.',
    },
    {
      id: 6,
      title: 'Wound Care & Sterile Dressings',
      category: 'medicines',
      imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800',
      description: 'Clinical grade sterile bandages, medical micropore tapes, and antiseptic lotions in bulk stock.',
    },
  ];

  // Filter items based on selected tab
  const filteredItems = useMemo(() => {
    if (activeFilter === 'all') return galleryItems;
    return galleryItems.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    const prevIdx = lightboxIndex === 0 ? filteredItems.length - 1 : lightboxIndex - 1;
    setLightboxIndex(prevIdx);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    const nextIdx = lightboxIndex === filteredItems.length - 1 ? 0 : lightboxIndex + 1;
    setLightboxIndex(nextIdx);
  };

  return (
    <>
      <SEO
        title="Store Gallery - Racks, Cold Chain & Diagnostic Tools"
        description="Explore the gallery of Medicare Medical Store, Gaya. Look inside our organized pharmacy counters, climate-controlled cold storage, and certified medical products."
        keywords="Pharmacy photos Gaya, Inside medical store Gaya, Cold storage insulin Gaya, Medicine shelves Bihar, Medical devices gallery, Chemist shop exterior Station Road Gaya"
      />

      {/* Page Header Banner */}
      <section className="relative py-20 bg-gradient-to-r from-teal-800 to-teal-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/10" />
        <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-teal-500/10 blur-2xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold text-teal-300 uppercase tracking-widest block">Virtual Tour</span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Our Store Gallery</h1>
          <p className="text-sm md:text-base text-teal-100 max-w-2xl mx-auto leading-relaxed">
            Take a virtual tour of our clean, highly organized medical facility on Station Road, Gaya.
          </p>
        </div>
      </section>

      {/* Gallery Filter Tabs */}
      <section className="py-12 bg-white dark:bg-slate-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-xl transition-all cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-teal-600 text-white shadow-md'
                  : 'bg-slate-100 dark:bg-slate-850 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800'
              }`}
            >
              All Images
            </button>
            <button
              onClick={() => setActiveFilter('store')}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-xl transition-all cursor-pointer ${
                activeFilter === 'store'
                  ? 'bg-teal-600 text-white shadow-md'
                  : 'bg-slate-100 dark:bg-slate-850 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800'
              }`}
            >
              Store Counter
            </button>
            <button
              onClick={() => setActiveFilter('medicines')}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-xl transition-all cursor-pointer ${
                activeFilter === 'medicines'
                  ? 'bg-teal-600 text-white shadow-md'
                  : 'bg-slate-100 dark:bg-slate-850 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800'
              }`}
            >
              Medicine Shelves
            </button>
            <button
              onClick={() => setActiveFilter('equipment')}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-xl transition-all cursor-pointer ${
                activeFilter === 'equipment'
                  ? 'bg-teal-600 text-white shadow-md'
                  : 'bg-slate-100 dark:bg-slate-850 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800'
              }`}
            >
              Cold storage & Devices
            </button>
            <button
              onClick={() => setActiveFilter('products')}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-xl transition-all cursor-pointer ${
                activeFilter === 'products'
                  ? 'bg-teal-600 text-white shadow-md'
                  : 'bg-slate-100 dark:bg-slate-850 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800'
              }`}
            >
              Healthcare Products
            </button>
          </div>

          {/* Grid list with entry transition */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                onClick={() => setLightboxIndex(index)}
                className="group cursor-pointer rounded-2xl border border-slate-100 dark:border-slate-850 bg-slate-50 dark:bg-slate-950/40 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image Wrap */}
                <div className="h-56 overflow-hidden relative bg-slate-100">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  {/* Hover Overlay with Eye icon */}
                  <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white border border-white/25">
                      <Eye className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="absolute top-3 left-3 bg-teal-600 text-white text-3xs font-extrabold uppercase px-2 py-0.5 rounded">
                    {item.category}
                  </div>
                </div>

                {/* Text Block */}
                <div className="p-5">
                  <h3 className="font-bold text-slate-950 dark:text-white text-base line-clamp-1">{item.title}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Lightbox Zoom Modal popup */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/95 backdrop-blur-xs">
            {/* Backdrop click closes */}
            <div className="absolute inset-0" onClick={() => setLightboxIndex(null)} />

            {/* Close Button top-right */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 hover:scale-105 transition-all z-10 cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Left Button */}
            <button
              onClick={handlePrev}
              className="absolute left-6 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 hover:scale-105 transition-all z-10 cursor-pointer"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Content Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl max-h-[80vh] w-full bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col md:flex-row"
            >
              {/* Photo Area */}
              <div className="md:w-3/5 h-64 md:h-[60vh] bg-black">
                <img
                  src={filteredItems[lightboxIndex].imageUrl}
                  alt={filteredItems[lightboxIndex].title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Description sidebar */}
              <div className="md:w-2/5 p-6 md:p-8 text-white flex flex-col justify-between bg-slate-900">
                <div className="space-y-4">
                  <span className="text-3xs font-extrabold text-teal-400 uppercase bg-teal-950/50 border border-teal-800/50 px-2 py-0.5 rounded w-fit block">
                    {filteredItems[lightboxIndex].category}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold leading-tight">{filteredItems[lightboxIndex].title}</h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {filteredItems[lightboxIndex].description}
                  </p>
                </div>

                <div className="text-3xs text-slate-500 pt-6 border-t border-slate-850 flex justify-between">
                  <span>Image {lightboxIndex + 1} of {filteredItems.length}</span>
                  <span className="text-teal-500 font-semibold">Medicare Medical Store Gaya</span>
                </div>
              </div>
            </motion.div>

            {/* Right Button */}
            <button
              onClick={handleNext}
              className="absolute right-6 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 hover:scale-105 transition-all z-10 cursor-pointer"
              aria-label="Next Image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        )}
      </AnimatePresence>

      {/* Trust Quote Bottom Banner */}
      <section className="bg-slate-900 text-white py-16 text-center space-y-4">
        <h4 className="text-xl md:text-2xl font-bold">Absolute Clinical Hygiene, Guaranteed.</h4>
        <p className="text-xs md:text-sm text-slate-400 max-w-xl mx-auto leading-relaxed">
          We maintain absolute cleanliness standards and strictly follow FDA regulations. Drop by our store near Gaya Station Road Petrol Pump to inspect our facility yourself.
        </p>
      </section>
    </>
  );
}
