"use client";
import React, { useEffect, useState } from 'react';

const NavBar = () => {
  const [activeSection, setActiveSection] = useState<string>('#live');
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    const closeNav = () => setMobileNavOpen(false);
    window.addEventListener('hashchange', closeNav);
    return () => window.removeEventListener('hashchange', closeNav);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-sky-500 shadow-md px-4 py-3 flex justify-between items-center">
      <h1 className="text-xl sm:text-2xl font-bold text-blue-900">IPL Dashboard</h1>
      <nav className="hidden sm:flex gap-6 text-sm text-white">
        <a href="#live" onClick={() => setActiveSection('#live')} className={`hover:text-blue-600 ${activeSection === '#live' ? 'text-blue-900 font-bold ' : ''}`}>Live Match</a>
        <a href="#points" onClick={() => setActiveSection('#points')} className={`hover:text-blue-600 ${activeSection === '#points' ? 'text-blue-900 font-bold ' : ''}`}>Points Table</a>
        <a href="#schedule" onClick={() => setActiveSection('#schedule')} className={`hover:text-blue-600 ${activeSection === '#schedule' ? 'text-blue-900 font-bold ' : ''}`}>Schedule</a>
        <a href="#history" onClick={() => setActiveSection('#history')} className={`hover:text-blue-600 ${activeSection === '#history' ? 'text-blue-900 font-bold ' : ''}`}>Historical Matches</a>
        <a href="#points-chart" onClick={() => setActiveSection('#points-chart')} className={`hover:text-blue-600 ${activeSection === '#points-chart' ? 'text-blue-900 font-bold ' : ''}`}>Points Chart</a>
      </nav>
      <button
        className="sm:hidden flex items-center justify-center p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-900"
        aria-label="Open navigation menu"
        onClick={() => setMobileNavOpen((open) => !open)}
      >
        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      {mobileNavOpen && (
        <nav className="absolute top-full left-0 w-full bg-sky-500 shadow-md flex flex-col items-center gap-2 py-4 sm:hidden animate-fade-in z-50">
          <a href="#live" onClick={() => setActiveSection('#live')} className={`block px-4 py-2 text-black text-base w-full text-center hover:bg-sky-600 ${activeSection === '#live' ? 'bg-blue-100 text-black font-bold' : ''}`}>Live Match</a>
          <a href="#points" onClick={() => setActiveSection('#points')} className={`block px-4 py-2 text-black text-base w-full text-center hover:bg-sky-600 ${activeSection === '#points' ? 'bg-blue-100 text-black font-bold' : ''}`}>Points Table</a>
          <a href="#schedule" onClick={() => setActiveSection('#schedule')} className={`block px-4 py-2 text-black text-base w-full text-center hover:bg-sky-600 ${activeSection === '#schedule' ? 'bg-blue-100 text-black font-bold' : ''}`}>Schedule</a>
          <a href="#history" onClick={() => setActiveSection('#history')} className={`block px-4 py-2 text-black text-base w-full text-center hover:bg-sky-600 ${activeSection === '#history' ? 'bg-blue-100 text-black font-bold' : ''}`}>Historical Matches</a>
          <a href="#points-chart" onClick={() => setActiveSection('#points-chart')} className={`block px-4 py-2 text-black text-base w-full text-center hover:bg-sky-600 ${activeSection === '#points-chart' ? 'bg-blue-100 text-black font-bold' : ''}`}>Points Chart</a>
        </nav>
      )}
    </header>
  );
};

export default NavBar; 