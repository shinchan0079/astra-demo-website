import React from 'react';
import Navbar from './Navbar';

export default function PageHero({ title, subtitle, bgImage }) {
  return (
    <div className="relative text-white overflow-hidden curved-hero-br mb-16 min-h-[420px] sm:min-h-[480px] flex flex-col justify-between">
      {/* Real Astra Template Hero Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      />
      {/* Dark overlay matching the Astra demo aesthetic */}
      <div className="absolute inset-0 bg-black/60 backdrop-brightness-75" />

      {/* Top Navbar */}
      <Navbar />

      {/* Hero Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-24 md:pt-44 md:pb-28 w-full my-auto">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-base sm:text-lg lg:text-xl text-gray-200 font-normal leading-relaxed max-w-2xl">
              {subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Spacer */}
      <div className="h-4"></div>
    </div>
  );
}
