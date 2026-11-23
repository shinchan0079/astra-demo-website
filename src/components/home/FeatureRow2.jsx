import React from 'react';
import { Link } from 'react-router-dom';
import { Users, PiggyBank, ArrowRight } from 'lucide-react';
import { IMAGES } from '../../assets/images';

export default function FeatureRow2() {
  return (
    <section className="py-20 lg:py-24 bg-slate-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Image with Floating Blue Badge */}
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={IMAGES.affordablePricing}
                alt="Woman working on laptop at desk"
                className="w-full h-[420px] sm:h-[480px] object-cover"
              />
            </div>

            {/* Floating Blue Badge */}
            <div className="absolute -top-6 -right-4 sm:right-4 bg-[#3656f5] text-white p-6 rounded-2xl shadow-2xl max-w-sm z-20">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white shrink-0 mt-0.5">
                  <PiggyBank className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-base text-white mb-1.5">Friendly Price Package</h4>
                  <p className="text-xs sm:text-sm text-blue-100 leading-relaxed font-normal">
                    Choose from flexible and affordable plans designed to match your work style.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Text */}
          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
              Most Affordable Co-Working Place In The City
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We've made it our mission to offer premium co-working spaces at prices everyone can afford. Enjoy all the perks of a modern, fully equipped workspace — without the high costs of a traditional office. Our flexible membership plans are designed to fit every budget, giving freelancers, startups, and professionals access to an inspiring environment where productivity meets affordability.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-center space-x-3 text-slate-800">
                <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <span className="text-sm font-semibold">Membership Package</span>
              </div>

              <div className="flex items-center space-x-3 text-slate-800">
                <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <PiggyBank className="w-5 h-5" />
                </div>
                <span className="text-sm font-semibold">Friendly Price Package</span>
              </div>
            </div>

            <div className="pt-4">
              <Link
                to="/pricing"
                className="inline-flex items-center space-x-2 bg-[#3656f5] hover:bg-blue-600 text-white font-medium text-sm px-7 py-3 rounded-md transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 group"
              >
                <span>Check Pricing</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
