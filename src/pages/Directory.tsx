import React, { useState, useMemo } from 'react';
import servicesData from '../data/services.json';
import { SearchBar } from '../components/SearchBar';
import { FilterBar } from '../components/FilterBar';
import { ServiceCard } from '../components/ServiceCard';
import { Info } from 'lucide-react';

export const Directory: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');

  const categories = useMemo(() => Array.from(new Set(servicesData.map(s => s.category))), []);
  const locations = useMemo(() => Array.from(new Set(servicesData.map(s => s.location))), []);

  const filteredServices = useMemo(() => {
    return servicesData.filter((service) => {
      const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            service.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === '' || service.category === selectedCategory;
      const matchesLocation = selectedLocation === '' || service.location === selectedLocation;
      return matchesSearch && matchesCategory && matchesLocation;
    });
  }, [searchQuery, selectedCategory, selectedLocation]);

  return (
    <div className="bg-[#F8FAFC] min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center lg:text-left mb-10">
          <h1 className="text-3xl font-black text-[#1E293B] tracking-tight sm:text-4xl">Public Resource Directory</h1>
          <p className="text-slate-500 mt-2 text-base">Filter through our 20+ verified fictional assistance nodes inside the sector map.</p>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm mb-8 space-y-6">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
          <FilterBar
            categories={categories}
            locations={locations}
            selectedCategory={selectedCategory}
            selectedLocation={selectedLocation}
            onCategoryChange={setSelectedCategory}
            onLocationChange={setSelectedLocation}
          />
        </div>

        <div className="aria-live-element text-sm text-slate-500 font-medium mb-6" aria-live="polite">
          Showing {filteredServices.length} resources found based on criteria.
        </div>

        {filteredServices.length === 0 ? (
          <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center max-w-lg mx-auto shadow-sm">
            <div className="inline-flex items-center justify-center p-3 bg-amber-50 text-amber-500 rounded-2xl mb-4">
              <Info className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-[#1E293B] mb-1">No services matched criteria</h3>
            <p className="text-slate-500 text-sm">Please clear inputs, change spelling keywords, or broaden category options.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <ServiceCard
                key={service.id}
                id={service.id}
                name={service.name}
                category={service.category}
                location={service.location}
                description={service.description}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};