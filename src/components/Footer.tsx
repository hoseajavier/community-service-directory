import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200 py-8 text-center" aria-label="Platform Footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm text-slate-500 font-medium">
          &copy; 2026 Community Connect Network. Developed independently for educational and portfolio presentation purposes.
        </p>
        <p className="text-xs text-slate-400 mt-2">
          All data, organization entities, and operational addresses are strictly fictional.
        </p>
      </div>
    </footer>
  );
};