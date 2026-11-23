import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { IMAGES } from '../../assets/images';

export default function CtaBanner() {
  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
          
          {/* Left Column: Overlapping Collage matching Image 1 */}
          <div className="lg:col-span-5 xl:col-span-5 relative z-20 flex justify-center lg:justify-end px-4 sm:px-6 lg:px-0">
            
            {/* Dots pattern on the far left */}
            <div className="absolute left-2 sm:left-6 lg:-left-2 top-1/2 -translate-y-1/2 hidden md:grid grid-cols-2 gap-2 z-0 opacity-40">
              {[...Array(24)].map((_, i) => (
                <span key={i} className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
              ))}
            </div>

            <div className="relative flex items-center">
              {/* Front-Left: Yellow Armchair Image (Shifted UP and LEFT with shadow) */}
              <div className="relative z-20 w-[240px] sm:w-[280px] md:w-[320px] h-[360px] sm:h-[420px] md:h-[480px] rounded-xl overflow-hidden shadow-2xl -translate-y-8 sm:-translate-y-10 lg:-translate-y-12 shrink-0 bg-slate-100">
                <img
                  src={IMAGES.furnitureLounge}
                  alt="Co-working space with yellow armchair"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Back-Right: Writing Notepad Image (Shifted DOWN and overlapping behind Image 1) */}
              <div className="relative z-10 w-[200px] sm:w-[240px] md:w-[280px] h-[340px] sm:h-[400px] md:h-[460px] rounded-xl overflow-hidden shadow-xl -ml-24 sm:-ml-28 md:-ml-32 translate-y-8 sm:translate-y-10 lg:translate-y-12 shrink-0 bg-slate-100">
                <img
                  src={IMAGES.writingNotepad}
                  alt="Person writing notes in co-working workspace"
                  className="w-full h-full object-cover object-right"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Full-Width Solid Royal Blue Box matching Image 1 */}
          <div className="lg:col-span-7 xl:col-span-7 bg-[#3656f5] text-white py-16 sm:py-20 lg:py-28 px-8 sm:px-14 lg:px-20 xl:px-24 flex flex-col justify-center relative z-10 mt-16 lg:mt-0">
            <div className="max-w-xl">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-5 leading-[1.2]">
                Space To Make Your <br />
                Greatest Impact.
              </h2>

              <p className="text-white/90 text-sm sm:text-base leading-relaxed mb-8 font-normal">
                We've built more than just an office — we've built a thriving community. our co-working hub gives you everything you need to stay focused, comfortable, and connected.
              </p>

              <div>
                <Link
                  to="/pricing"
                  className="inline-flex items-center space-x-2 text-white border border-white/70 hover:bg-white hover:text-[#3656f5] px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 group"
                >
                  <span>Get Your Place</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
