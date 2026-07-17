import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  id: string;
  name: string;
  category: string;
  location: string;
  description: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ id, name, category, location, description }) => {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-start gap-2 mb-3">
          <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold uppercase bg-blue-50 text-blue-600">
            {category}
          </span>
          <span className="inline-flex items-center text-xs text-slate-500 font-medium">
            <MapPin className="w-3.5 h-3.5 mr-1 text-slate-400" /> {location}
          </span>
        </div>
        <h3 className="text-lg font-bold text-[#1E293B] mb-2 leading-snug">{name}</h3>
        <p className="text-slate-600 text-sm line-clamp-3 mb-4">{description}</p>
      </div>
      <Link 
        to={`/directory/${id}`} 
        className="w-full inline-flex items-center justify-center px-4 py-2.5 border border-slate-200 hover:border-blue-600 text-sm font-semibold rounded-xl text-slate-700 hover:text-white hover:bg-blue-600 transition-all group"
      >
        View Service Details 
        <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
};