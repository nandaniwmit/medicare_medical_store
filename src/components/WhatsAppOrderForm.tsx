import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, Phone, CheckCircle, FileText, Clock, User, Mail, MapPin } from 'lucide-react';

interface WhatsAppOrderFormProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledMedicine?: string;
}

export default function WhatsAppOrderForm({
  isOpen,
  onClose,
  prefilledMedicine = '',
}: WhatsAppOrderFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    medicineName: prefilledMedicine,
    hasPrescription: 'No',
    message: '',
    preferredTime: 'Anytime (9:00 AM - 9:00 PM)',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sync prefilled medicine when modal opens
  React.useEffect(() => {
    if (prefilledMedicine) {
      setFormData((prev) => ({ ...prev, medicineName: prefilledMedicine }));
    }
  }, [prefilledMedicine]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Formatting WhatsApp Message
    const businessName = 'Medicare Medical Store';
    const whatsappText = `Hello ${businessName}, I would like to place a Medicine Order.

📋 ORDER DETAILS:
----------------------------------
👤 Customer Name: ${formData.name}
📞 Phone: ${formData.phone}
📧 Email: ${formData.email || 'N/A'}
🏠 Delivery Address: ${formData.address}
💊 Medicine Required: ${formData.medicineName}
📄 Prescription Attached/Available: ${formData.hasPrescription}
🕒 Preferred Delivery Time: ${formData.preferredTime}
📝 Notes: ${formData.message || 'None'}

Please confirm availability and price. Thank you!`;

    // International country code for India is +91
    const whatsappNumber = '919430476313';
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(whatsappText)}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');

    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
    }, 3000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div id="whatsapp-order-modal" className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />

          {/* Form Container */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: 'spring', duration: 0.4 }}
            className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl dark:bg-slate-900 border border-slate-100 dark:border-slate-800"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-teal-600 to-emerald-600 px-6 py-4 text-white flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold">WhatsApp Medicine Order</h3>
                <p className="text-xs text-teal-100 mt-0.5">Quick order with instant confirmation</p>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-full hover:bg-white/15 transition-colors focus:outline-none focus:ring-2 focus:ring-white/20"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 max-h-[75vh] overflow-y-auto">
              {isSubmitted ? (
                <div className="py-12 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400 mb-4"
                  >
                    <CheckCircle className="w-10 h-10" />
                  </motion.div>
                  <h4 className="text-xl font-bold text-slate-800 dark:text-white">Redirecting to WhatsApp...</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 max-w-xs mx-auto">
                    Your formatted order has been prepared and we are opening WhatsApp to finalize your delivery.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                      Customer Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-2 text-sm border border-slate-200 dark:border-slate-800 rounded-lg bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 dark:focus:border-teal-500"
                        placeholder="Your full name"
                      />
                    </div>
                  </div>

                  {/* Phone & Email Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                        Mobile Number *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-2 text-sm border border-slate-200 dark:border-slate-800 rounded-lg bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 dark:focus:border-teal-500"
                          placeholder="E.g., 9430476313"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-2 text-sm border border-slate-200 dark:border-slate-800 rounded-lg bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500"
                          placeholder="yourname@email.com"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Medicine Name */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                      Medicines / Health Products Required *
                    </label>
                    <div className="relative">
                      <FileText className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                      <textarea
                        name="medicineName"
                        required
                        rows={2}
                        value={formData.medicineName}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-2 text-sm border border-slate-200 dark:border-slate-800 rounded-lg bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500"
                        placeholder="Enter medicine names, quantities (e.g., Dolo 650 - 2 strips, Limcee - 1 strip)"
                      />
                    </div>
                  </div>

                  {/* Address */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                      Delivery Address *
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                      <textarea
                        name="address"
                        required
                        rows={2}
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-2 text-sm border border-slate-200 dark:border-slate-800 rounded-lg bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500"
                        placeholder="Your complete address with landmarks"
                      />
                    </div>
                  </div>

                  {/* Prescription Selector & Delivery Time */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                        Do you have a prescription?
                      </label>
                      <select
                        name="hasPrescription"
                        value={formData.hasPrescription}
                        onChange={handleChange}
                        className="w-full px-3 py-2 text-sm border border-slate-200 dark:border-slate-800 rounded-lg bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500"
                      >
                        <option value="Yes">Yes, I will share on WhatsApp</option>
                        <option value="No">No, OTC medicines only</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                        Preferred Delivery Time
                      </label>
                      <div className="relative">
                        <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <select
                          name="preferredTime"
                          value={formData.preferredTime}
                          onChange={handleChange}
                          className="w-full pl-10 pr-3 py-2 text-sm border border-slate-200 dark:border-slate-800 rounded-lg bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500"
                        >
                          <option value="Anytime (9:00 AM - 9:00 PM)">Anytime (9:00 AM - 9:00 PM)</option>
                          <option value="Morning (9:00 AM - 1:00 PM)">Morning (9:00 AM - 1:00 PM)</option>
                          <option value="Afternoon (1:00 PM - 5:00 PM)">Afternoon (1:00 PM - 5:00 PM)</option>
                          <option value="Evening (5:00 PM - 9:00 PM)">Evening (5:00 PM - 9:00 PM)</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                      Additional Notes / Message
                    </label>
                    <textarea
                      name="message"
                      rows={2}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-3 py-2 text-sm border border-slate-200 dark:border-slate-800 rounded-lg bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500"
                      placeholder="E.g., Please include hand sanitizer, need fast delivery, call before arrival."
                    />
                  </div>

                  {/* Footnote on Prescription */}
                  {formData.hasPrescription === 'Yes' && (
                    <div className="p-3 bg-teal-50 dark:bg-teal-950/30 text-xs text-teal-800 dark:text-teal-300 rounded-lg border border-teal-100 dark:border-teal-900/50">
                      💡 <strong>Note:</strong> Please send a photo of your doctor's prescription directly through WhatsApp once the chat window opens. This is legally required for Rx medicines.
                    </div>
                  )}

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-2 pt-2">
                    <button
                      type="submit"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-semibold text-sm shadow-md shadow-emerald-500/10 hover:shadow-lg hover:shadow-emerald-500/15 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                    >
                      <Send className="w-4 h-4" />
                      Send via WhatsApp
                    </button>
                    <a
                      href="tel:09430476313"
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-850 dark:hover:bg-slate-800 text-slate-800 dark:text-white font-semibold text-sm transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                    >
                      <Phone className="w-4 h-4 text-teal-600" />
                      Call Store Now
                    </a>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
