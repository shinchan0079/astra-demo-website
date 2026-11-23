import React from 'react';
import { IMAGES } from '../../assets/images';

export default function Testimonials() {
  return (
    <section className="py-20 bg-slate-50/60 text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 tracking-tight">
          People Who Love Our Place
        </h2>
        <div className="relative">
          <blockquote className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal mb-8 max-w-3xl mx-auto">
            "Working here has completely changed the way I work. The atmosphere is vibrant, inspiring, and collaborative. I no longer feel isolated like I used to at home, and the high-speed amenities have boosted my daily productivity!"
          </blockquote>
          
          <div className="flex flex-col items-center">
            <img
              src={IMAGES.testimonialAvatar}
              alt="Anita Roy"
              className="w-16 h-16 rounded-full object-cover shadow-md border-2 border-blue-500 mb-2"
            />
            <div className="font-semibold text-slate-900 text-base">Anita Roy</div>
            <div className="text-xs text-blue-600 font-medium">Product Designer & Freelancer</div>
          </div>
        </div>
      </div>
    </section>
  );
}
