import React from 'react';
import { Hero } from '../components/Hero';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
  return (
    <div className="bg-[#F8FAFC]">
      <Hero />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20" aria-label="Introduction Overview">
        <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center p-3 bg-blue-50 text-blue-600 rounded-2xl mb-6">
            <Sparkles className="w-6 h-6" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#1E293B] tracking-tight mb-4">
            Our Commitment to Local Assistance
          </h2>
          <p className="text-slate-600 leading-relaxed mb-8">
            We aggregate vetted programs across our platform to make resource discovery straightforward. 
            Navigate directly to our interactive directory tool to filter verified career tracks, immediate nourishment centers, or educational assets close to your sector area.
          </p>
          <Link 
            to="/directory" 
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-all shadow-sm shadow-blue-600/10"
          >
            Go to Live Directory <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};