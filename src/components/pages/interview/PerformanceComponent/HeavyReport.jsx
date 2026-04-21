 
import React from 'react';

const HeavyReport = () => {
  return (
    <div className="p-6 bg-white rounded-xl shadow-sm border-l-4 border-emerald-500">
      <h4 className="text-lg font-bold text-slate-800">📊 2026 Sales Report</h4>
      <p className="text-xs text-slate-500 mt-2">This is the heavy component that was loaded lazily!</p>
    </div>
  );
};

export default HeavyReport; // Must be a default export!