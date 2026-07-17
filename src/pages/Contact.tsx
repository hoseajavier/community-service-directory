import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ fullName: '', email: '', message: '' });
  const [errors, setErrors] = useState({ fullName: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors = { fullName: '', email: '', message: '' };
    let isValid = true;

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name field is required.';
      isValid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email address field is required.';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please provide a valid structured email format.';
      isValid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Inquiry details description is required.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
      setFormData({ fullName: '', email: '', message: '' });
    }
  };

  return (
    <div className="bg-[#F8FAFC] min-h-screen py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-black text-[#1E293B] tracking-tight">Request Information</h1>
          <p className="text-slate-500 mt-2 text-sm">Submit your specific questions, and our ficitonal dispatch officer will respond.</p>
        </div>

        <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
          {isSubmitted ? (
            <div className="text-center py-8 space-y-4" role="alert">
              <div className="inline-flex items-center justify-center p-3 bg-emerald-50 text-emerald-500 rounded-full">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-[#1E293B]">Inquiry Logged Successfully</h3>
              <p className="text-slate-500 text-sm max-w-sm mx-auto">
                Thank you! Your simulated request packet has successfully compiled and cleared validation rules.
              </p>
              <button 
                onClick={() => setIsSubmitted(false)} 
                className="mt-4 px-5 py-2 text-xs font-bold text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg transition-all"
              >
                Submit New Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div>
                <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">Full Name</label>
                <input
                  id="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className={`block w-full px-4 py-3 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 ${errors.fullName ? 'border-red-500 bg-red-50/10' : 'border-slate-200 bg-white'}`}
                  aria-invalid={errors.fullName ? "true" : "false"}
                  aria-describedby={errors.fullName ? "name-error" : undefined}
                />
                {errors.fullName && <p id="name-error" className="text-xs text-red-600 font-medium mt-1.5" role="alert">{errors.fullName}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">Email Address</label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`block w-full px-4 py-3 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 ${errors.email ? 'border-red-500 bg-red-50/10' : 'border-slate-200 bg-white'}`}
                  aria-invalid={errors.email ? "true" : "false"}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && <p id="email-error" className="text-xs text-red-600 font-medium mt-1.5" role="alert">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">Inquiry Details</label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`block w-full px-4 py-3 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 ${errors.message ? 'border-red-500 bg-red-50/10' : 'border-slate-200 bg-white'}`}
                  aria-invalid={errors.message ? "true" : "false"}
                  aria-describedby={errors.message ? "message-error" : undefined}
                />
                {errors.message && <p id="message-error" className="text-xs text-red-600 font-medium mt-1.5" role="alert">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-6 py-3.5 border border-transparent text-sm font-bold rounded-xl text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-all"
              >
                <Send className="w-4 h-4 mr-2" /> Dispatch Request Packet
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};