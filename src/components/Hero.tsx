import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const Hero: React.FC = () => {
  return (
    <div className="relative bg-[#F8FAFC] overflow-hidden min-h-[75vh] flex items-center border-b border-slate-200">
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-blue-400/10 blur-[120px]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-emerald-400/10 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-white border border-slate-200 px-3.5 py-1.5 rounded-full mb-6 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500" />
              <span className="text-slate-600 text-xs font-bold tracking-wider uppercase">
                Fictional Community Directory
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#1E293B] tracking-tight leading-[1.15] mb-6">
              Find the help you need, <br />
              <span className="text-blue-600">right in your neighborhood.</span>
            </h1>
            <p className="text-slate-600 text-lg sm:text-xl max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed mb-8">
              Community Connect Network is a centralized public platform built
              to help individuals discover vital support services, food
              assistance programs, and educational resources.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                to="/directory"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-xl text-white bg-blue-600 hover:bg-blue-700 shadow-md transform hover:-translate-y-0.5 transition-all"
              >
                Browse Public Services <ArrowRight className="w-5 h-5 ml-2.5" />
              </Link>
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-xl text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 transition-all"
              >
                Contact Coordinator
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 hidden lg:block">
            <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xl">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Resource Quick View
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              </div>
              <div className="space-y-3">
                <div className="p-4 bg-[#F8FAFC] border-l-4 border-blue-600 rounded-r-xl">
                  <span className="text-[11px] font-bold uppercase text-blue-600 block mb-1">
                    Food Assistance
                  </span>
                  <h4 className="text-[#1E293B] font-bold text-sm">
                    Metro Food Bank Hub
                  </h4>
                  <p className="text-slate-500 text-xs mt-1">
                    Emergency food parcel operations and voucher distribution
                    panels.
                  </p>
                </div>
                <div className="p-4 bg-[#F8FAFC] border-l-4 border-emerald-500 rounded-r-xl opacity-75">
                  <span className="text-[11px] font-bold uppercase text-emerald-600 block mb-1">
                    Career Support
                  </span>
                  <h4 className="text-[#1E293B] font-bold text-sm">
                    Vocational Placement Guild
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
