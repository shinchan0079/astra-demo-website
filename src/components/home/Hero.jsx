import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Navbar from '../common/Navbar';
import { IMAGES } from '../../assets/images';

export default function Hero() {
  return (
    <div className="relative min-h-[90vh] lg:min-h-screen text-white curved-hero-br overflow-hidden flex flex-col justify-between">
      {/* Real Astra Template Hero Background with integrated professional */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-[center_right_20%] sm:bg-center"
        style={{
          backgroundImage: `url(${IMAGES.homeHeroBg})`,
        }}
      />

      {/* Subtle gradient overlay to make left text 100% readable while keeping the right person visible */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/25 lg:from-black/75 lg:via-black/45 lg:to-transparent" />

      {/* Top Navbar */}
      <Navbar />

      {/* Hero Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-36 sm:py-44 lg:py-52 w-full my-auto">
        <div className="max-w-2xl space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15]">
            A Better Place <br />
            To Work
          </h1>

          <p className="text-gray-200 text-base sm:text-lg max-w-xl leading-relaxed font-normal">
            Discover a workspace designed to inspire focus, collaboration, and creativity. Our modern co-working environment offers flexible plans, high-speed connectivity, and all the comforts you need to stay productive and connected every day.
          </p>

          <div className="pt-4 flex items-center space-x-4">
            <Link
              to="/about"
              className="inline-flex items-center space-x-3 bg-[#3656f5] hover:bg-blue-600 text-white font-semibold text-sm px-7 py-3.5 rounded-md transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 group"
            >
              <span>Learn More</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
            {/* <Link
              to="/pricing"
              className="inline-flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white text-sm font-medium px-6 py-3.5 rounded-md backdrop-blur-xs transition-all"
            >
              <span>Explore Plans</span>
            </Link> */}
          </div>
        </div>
      </div>

      {/* Empty bottom spacer for balance */}
      <div className="h-6"></div>
    </div>
  );
}
