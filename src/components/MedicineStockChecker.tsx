import React, { useState, useMemo } from 'react';
import { Search, Filter, AlertCircle, CheckCircle2, AlertTriangle, PlusCircle, ArrowUpDown } from 'lucide-react';
import stockData from '../medicineStock.json';
import { MedicineStockItem } from '../types';

interface MedicineStockCheckerProps {
  onOrderClick: (medicineName: string) => void;
}

export default function MedicineStockChecker({ onOrderClick }: MedicineStockCheckerProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [sortBy, setSortBy] = useState<'name' | 'mrp'>('name');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  // Future API reference:
  // To replace with an API, simply replace stockData with a state array and fetch it inside a useEffect:
  // const [medicines, setMedicines] = useState<MedicineStockItem[]>([]);
  // useEffect(() => { fetch('/api/stock').then(r => r.json()).then(setMedicines) }, []);
  const medicines: MedicineStockItem[] = stockData as MedicineStockItem[];

  // Get unique categories for filter dropdown
  const categories = useMemo(() => {
    const cats = new Set(medicines.map((m) => m.category));
    return ['All', ...Array.from(cats)];
  }, [medicines]);

  // Filter and sort items
  const filteredMedicines = useMemo(() => {
    return medicines
      .filter((med) => {
        const matchesSearch =
          med.medicineName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          med.brand.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || med.category === selectedCategory;
        const matchesStatus = selectedStatus === 'All' || med.status === selectedStatus;
        return matchesSearch && matchesCategory && matchesStatus;
      })
      .sort((a, b) => {
        let comparison = 0;
        if (sortBy === 'name') {
          comparison = a.medicineName.localeCompare(b.medicineName);
        } else if (sortBy === 'mrp') {
          comparison = a.mrp - b.mrp;
        }
        return sortOrder === 'asc' ? comparison : -comparison;
      });
  }, [medicines, searchQuery, selectedCategory, selectedStatus, sortBy, sortOrder]);

  const handleSortToggle = (field: 'name' | 'mrp') => {
    if (sortBy === field) {
      setSortOrder((prev) => (prev === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortBy(field);
      setSortOrder('asc');
    }
  };

  const getStatusBadge = (status: MedicineStockItem['status']) => {
    switch (status) {
      case 'Available':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-400">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Available
          </span>
        );
      case 'Limited Stock':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-full bg-amber-100 text-amber-800 dark:bg-amber-950/40 dark:text-amber-400">
            <AlertTriangle className="w-3.5 h-3.5" />
            Limited Stock
          </span>
        );
      case 'Out of Stock':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-full bg-rose-100 text-rose-800 dark:bg-rose-950/40 dark:text-rose-400">
            <AlertCircle className="w-3.5 h-3.5" />
            Out of Stock
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div id="medicine-stock-checker-section" className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-xl overflow-hidden">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-teal-700 to-teal-800 px-6 py-5 text-white">
        <h3 className="text-xl font-bold">Real-time Medicine Availability Checker</h3>
        <p className="text-sm text-teal-100 mt-1">
          Search for medicines, prescription drugs, surgical supplies, and health supplements instantly.
        </p>
      </div>

      {/* Filters and Search Bar */}
      <div className="p-6 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/30 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Search Box */}
          <div className="md:col-span-2 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search generic name or brand (e.g., Paracetamol, Dolo, Limcee)..."
              className="w-full pl-10 pr-4 py-2.5 text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500"
            />
          </div>

          {/* Category Filter */}
          <div className="relative">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-3 py-2.5 text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 appearance-none cursor-pointer"
            >
              <option value="All">All Categories</option>
              {categories.filter(c => c !== 'All').map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
            <Filter className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
          </div>

          {/* Status Filter */}
          <div className="relative">
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="w-full px-3 py-2.5 text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 appearance-none cursor-pointer"
            >
              <option value="All">All Statuses</option>
              <option value="Available">Available</option>
              <option value="Limited Stock">Limited Stock</option>
              <option value="Out of Stock">Out of Stock</option>
            </select>
            <Filter className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
          </div>
        </div>

        {/* Sort options & results count */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-2 border-t border-slate-100 dark:border-slate-800/60 text-xs text-slate-500 dark:text-slate-400">
          <div>
            Showing <strong className="text-slate-700 dark:text-slate-200">{filteredMedicines.length}</strong> of{' '}
            {medicines.length} medicine records
          </div>
          <div className="flex items-center gap-3">
            <span>Sort by:</span>
            <button
              onClick={() => handleSortToggle('name')}
              className={`flex items-center gap-1 font-semibold hover:text-teal-600 transition-colors ${
                sortBy === 'name' ? 'text-teal-600' : ''
              }`}
            >
              Medicine Name <ArrowUpDown className="w-3 h-3" />
            </button>
            <button
              onClick={() => handleSortToggle('mrp')}
              className={`flex items-center gap-1 font-semibold hover:text-teal-600 transition-colors ${
                sortBy === 'mrp' ? 'text-teal-600' : ''
              }`}
            >
              MRP (Price) <ArrowUpDown className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

      {/* Grid List */}
      <div className="p-6">
        {filteredMedicines.length === 0 ? (
          <div className="py-12 text-center">
            <AlertCircle className="w-12 h-12 text-slate-300 dark:text-slate-600 mx-auto mb-3" />
            <h4 className="text-lg font-bold text-slate-700 dark:text-slate-300">No Medicines Found</h4>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-md mx-auto">
              We couldn't find any medicine matching "{searchQuery}" under the selected filters. Please contact the store directly as we can procure it for you.
            </p>
            <a
              href="tel:09430476313"
              className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-600 text-white font-semibold text-sm hover:bg-teal-500 transition-colors"
            >
              Call Store Directly
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMedicines.map((med) => (
              <div
                key={med.id}
                className="flex flex-col justify-between p-5 rounded-2xl bg-slate-50 dark:bg-slate-950/40 border border-slate-100 dark:border-slate-800/50 hover:border-teal-500/30 hover:shadow-lg hover:shadow-teal-500/5 transition-all duration-300"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <span className="text-2xs font-bold text-teal-600 dark:text-teal-400 uppercase bg-teal-50 dark:bg-teal-950/30 px-2 py-0.5 rounded">
                      {med.category}
                    </span>
                    {getStatusBadge(med.status)}
                  </div>

                  <h4 className="text-base font-bold text-slate-800 dark:text-white line-clamp-1 mb-0.5">
                    {med.medicineName}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 italic mb-3">
                    {med.brand}
                  </p>

                  <div className="grid grid-cols-2 gap-2 text-xs border-t border-b border-slate-100 dark:border-slate-800/60 py-2.5 mb-4">
                    <div>
                      <span className="text-slate-400 block">MRP</span>
                      <strong className="text-slate-700 dark:text-slate-200 text-sm">
                        ₹{med.mrp.toFixed(2)}
                      </strong>
                    </div>
                    <div className="text-right">
                      <span className="text-slate-400 block">Expiry</span>
                      <strong className="text-slate-700 dark:text-slate-200">{med.expiry}</strong>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-2">
                  <div className="text-xs text-slate-400">
                    Stock:{' '}
                    <span className="text-slate-600 dark:text-slate-300 font-semibold">
                      {med.availableQuantity > 0 ? `${med.availableQuantity} units` : 'Out of stock'}
                    </span>
                  </div>

                  {med.status !== 'Out of Stock' ? (
                    <button
                      onClick={() => onOrderClick(`${med.medicineName} (${med.brand})`)}
                      className="inline-flex items-center gap-1 text-xs font-bold text-white bg-teal-600 hover:bg-teal-500 px-3 py-1.5 rounded-lg shadow-sm hover:shadow transition-all"
                    >
                      <PlusCircle className="w-3.5 h-3.5" />
                      Order Now
                    </button>
                  ) : (
                    <button
                      onClick={() => onOrderClick(`Procurement Request: ${med.medicineName} (${med.brand})`)}
                      className="inline-flex items-center gap-1 text-xs font-bold text-teal-600 dark:text-teal-400 border border-teal-500/20 bg-teal-50/50 dark:bg-teal-950/20 px-3 py-1.5 rounded-lg hover:bg-teal-100 dark:hover:bg-teal-950/50 transition-all"
                    >
                      Request Stock
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Disclaimer bottom bar */}
      <div className="bg-slate-50 dark:bg-slate-950 px-6 py-4 border-t border-slate-100 dark:border-slate-800 text-2xs text-slate-400 leading-relaxed">
        ⚠️ <strong>Note:</strong> While we make every effort to keep our stock checker updated, actual inventory may vary during peak hours. Some medicines are classified as Schedule H or Rx drugs, which absolutely require a physical or digitally verified prescription from a registered medical practitioner to purchase.
      </div>
    </div>
  );
}
