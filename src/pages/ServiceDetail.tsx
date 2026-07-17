import React from 'react';
import { useParams, Link } from 'react-router-dom';
import servicesData from '../data/services.json';
import { ArrowLeft, Phone, Mail, Clock, ShieldAlert, ArrowRight } from 'lucide-react';

export const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const service = servicesData.find((s) => s.id === id);

  if (!service) {
    return (
      <div className="bg-[#F8FAFC] min-h-screen flex items-center justify-center py-12 px-4">
        <div className="text-center bg-white border border-slate-200 p-8 rounded-2xl max-w-sm shadow-sm">
          <h2 className="text-xl font-bold text-[#1E293B] mb-2">Service Not Found</h2>
          <p className="text-slate-500 text-sm mb-6">The system data dictionary could not resolve this specific id token.</p>
          <Link to="/directory" className="inline-flex items-center text-sm font-bold text-blue-600 hover:text-blue-700">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to directory
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#F8FAFC] min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/directory" className="inline-flex items-center text-sm font-semibold text-slate-500 hover:text-slate-800 mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Resource Directory
        </Link>

        <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm space-y-8">
          <div>
            <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold uppercase bg-blue-50 text-blue-600 mb-3">
              {service.category}
            </span>
            <h1 className="text-2xl sm:text-3xl font-black text-[#1E293B] tracking-tight">{service.name}</h1>
            <p className="text-slate-500 text-sm mt-1">Sector Coverage Node: <strong className="text-slate-700">{service.location}</strong></p>
          </div>

          <div className="border-t border-b border-slate-100 py-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Program Description</h2>
            <p className="text-slate-600 text-base leading-relaxed">{service.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Operational Contacts</h3>
              <div className="space-y-3">
                <div className="flex items-center text-slate-600 text-sm">
                  <Phone className="w-4 h-4 mr-3 text-slate-400" /> {service.phone}
                </div>
                <div className="flex items-center text-slate-600 text-sm">
                  <Mail className="w-4 h-4 mr-3 text-slate-400" /> {service.email}
                </div>
                <div className="flex items-center text-slate-600 text-sm">
                  <Clock className="w-4 h-4 mr-3 text-slate-400" /> {service.hours}
                </div>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200/60 rounded-2xl p-5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 flex items-center">
                <ShieldAlert className="w-4 h-4 mr-1.5 text-blue-600" /> Accessibility Notes
              </h3>
              <p className="text-slate-600 text-xs leading-relaxed">{service.accessibility}</p>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 flex justify-end">
            <Link to="/contact" className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-all">
              Request Info Packets <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};