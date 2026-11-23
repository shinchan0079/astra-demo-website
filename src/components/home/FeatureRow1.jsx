import React from 'react';
import { Link } from 'react-router-dom';
import { Package, Building2, Briefcase, ArrowRight } from 'lucide-react';
import { IMAGES } from '../../assets/images';

export default function FeatureRow1() {
  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
              We Provides All Facilities For Better Work Environment
            </h2>
            
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              At The Work Place, we believe a great workspace is more than just a desk and Wi-Fi — it's an environment that inspires productivity and well-being. Our co-working space is equipped with every modern facility you need to stay focused and comfortable, from high-speed internet and meeting rooms to cozy lounges and premium coffee. Whether you're working solo or collaborating with a team, you'll find everything you need to create, connect, and grow under one roof.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-center space-x-3 text-slate-800">
                <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <Package className="w-5 h-5" />
                </div>
                <span className="text-sm font-semibold">Flexible Private Office</span>
              </div>

              <div className="flex items-center space-x-3 text-slate-800">
                <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <Building2 className="w-5 h-5" />
                </div>
                <span className="text-sm font-semibold">Fully Custom Space</span>
              </div>
            </div>

            <div className="pt-4">
              <Link
                to="/amenities"
                className="inline-flex items-center space-x-2 bg-[#3656f5] hover:bg-blue-600 text-white font-medium text-sm px-7 py-3 rounded-md transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 group"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Image with Overlapping Floating Blue Badge */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={IMAGES.facilities}
                alt="Man working on laptop at round table"
                className="w-full h-[420px] sm:h-[480px] object-cover"
              />
            </div>

            {/* Floating Blue Card matching Image 1 */}
            <div className="absolute -bottom-6 -left-4 sm:left-4 bg-[#3656f5] text-white p-6 rounded-2xl shadow-2xl max-w-sm sm:max-w-md z-20">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white shrink-0 mt-0.5">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-base text-white mb-1.5">Anything You Need</h4>
                  <p className="text-xs sm:text-sm text-blue-100 leading-relaxed font-normal">
                    From flexible plans to modern interiors, every detail is designed to help you focus on what truly matters — your work and growth.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
