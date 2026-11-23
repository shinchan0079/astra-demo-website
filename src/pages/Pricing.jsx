import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import PageHero from '../components/common/PageHero';
import CtaBanner from '../components/common/CtaBanner';
import Testimonials from '../components/common/Testimonials';
import Footer from '../components/common/Footer';
import { IMAGES } from '../assets/images';

const plans = [
  {
    title: 'Membership',
    price: '$149',
    period: '/ month',
    badge: 'Popular for Freelancers',
    description: 'Perfect for freelancers, remote workers, and digital nomads seeking flexible high-speed workspace.',
    image: IMAGES.facilities,
    imageLeft: true,
    features: [
      '24/7 Access to open lounge & hot desks',
      'High-speed 1 Gbps fiber optic Wi-Fi',
      'Free organic tea, artisan coffee & fruit',
      '5 Hours monthly conference room credits',
      'Access to weekly community events & workshops',
    ],
  },
  {
    title: 'Dedicated Desk',
    price: '$299',
    period: '/ month',
    badge: 'Best for Solo Pros',
    description: 'Your own personal reserved desk every day with lockable storage in a quiet, productive shared zone.',
    image: IMAGES.affordablePricing,
    imageLeft: false,
    features: [
      'Permanent reserved desk & ergonomic chair',
      'Personal lockable filing cabinet & drawers',
      'Dual monitor mount setup support',
      '15 Hours monthly conference room credits',
      'Prestigious business address & mail receipt',
    ],
  },
  {
    title: 'Dedicated Office',
    price: '$599',
    period: '/ month',
    badge: 'Ideal for Teams (2-10)',
    description: 'Fully furnished, lockable private glass suite tailored for growing startups, agencies, and teams.',
    image: IMAGES.peopleInsideRoom,
    imageLeft: true,
    features: [
      'Secure, fully enclosed private office suite',
      'Custom company branding on office door',
      '24/7 keycard access for all team members',
      'Unlimited conference room bookings',
      'Dedicated mail handling & VIP reception support',
    ],
  },
];

export default function Pricing() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <PageHero
        title="Pricing Plans"
        subtitle="Choose the perfect plan that fits your work style and budget. Clear, flexible pricing with zero hidden lease fees."
        bgImage={IMAGES.pricingHeroBg}
      />

      {/* Works Has Never Felt So Good Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-3">
              Works Has Never Felt So Good
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto text-base">
              Explore our flexible packages. All memberships come with all-inclusive amenities and no long-term lease lock-ins.
            </p>
          </div>

          {/* 3 Alternating Pricing Cards matching screenshot 4 */}
          <div className="space-y-16">
            {plans.map((plan, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl overflow-hidden soft-card-shadow border border-slate-100 hover:shadow-2xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10"
              >
                {/* Image Section */}
                <div
                  className={`lg:col-span-6 ${
                    plan.imageLeft ? 'order-1' : 'order-1 lg:order-2'
                  }`}
                >
                  <div className="rounded-2xl overflow-hidden shadow-lg h-72 sm:h-96">
                    <img
                      src={plan.image}
                      alt={plan.title}
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Content Section */}
                <div
                  className={`lg:col-span-6 space-y-6 ${
                    plan.imageLeft ? 'order-2' : 'order-2 lg:order-1'
                  }`}
                >
                  <div>
                    <span className="inline-block bg-blue-50 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-2">
                      {plan.badge}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
                      {plan.title}
                    </h3>
                    <div className="flex items-baseline space-x-1">
                      <span className="text-4xl font-extrabold text-[#3656f5]">{plan.price}</span>
                      <span className="text-slate-500 text-sm">{plan.period}</span>
                    </div>
                  </div>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {plan.description}
                  </p>

                  <ul className="space-y-3 pt-2">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center space-x-3 text-slate-700 text-sm">
                        <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                          <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4">
                    <Link
                      to="/contact"
                      state={{ selectedPlan: plan.title }}
                      className="inline-flex items-center space-x-2 bg-[#3656f5] hover:bg-blue-600 text-white font-medium text-sm px-7 py-3.5 rounded-lg shadow-md hover:shadow-lg transition-all"
                    >
                      <span>Choose {plan.title}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reusable CTA Banner */}
      <CtaBanner />

      {/* Testimonials */}
      <Testimonials />

      <Footer />
    </div>
  );
}
