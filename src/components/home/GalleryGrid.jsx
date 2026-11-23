import React from 'react';
import { IMAGES } from '../../assets/images';

export default function GalleryGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-3">
            Life At TheWorkPlace
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto text-base">
            Take a quick visual glance into our modern co-working environment, vibrant community events, and relaxing breakout spots.
          </p>
        </div> */}

        {/* 6 Photo Grid matching Screenshot 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="rounded-2xl overflow-hidden shadow-md group h-72">
            <img
              src={IMAGES.gallery1}
              alt="Team collaborating at table"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-md group h-72">
            <img
              src={IMAGES.gallery2}
              alt="Professional smiling at laptop"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          <div className="rounded-2xl overflow-hidden shadow-md group h-48">
            <img
              src={IMAGES.gallery3}
              alt="Coffee cup on desk"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-md group h-48">
            <img
              src={IMAGES.gallery4}
              alt="Lounge sofa discussion"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-md group h-48">
            <img
              src={IMAGES.gallery5}
              alt="Team planning workshop"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-md group h-48">
            <img
              src={IMAGES.gallery6}
              alt="Tablet with analytics charts"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
