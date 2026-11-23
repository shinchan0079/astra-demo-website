import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Users, Wifi, Sparkles, CalendarCheck } from 'lucide-react';

const services = [
  {
    icon: Clock,
    title: '24 Hrs Access',
    description: 'With round-the-clock access, you can work anytime your creativity strikes.',
  },
  {
    icon: Users,
    title: 'Conference Room',
    description: 'Collaborate effectively with clients in well-equipped meeting zones.',
  },
  {
    icon: Wifi,
    title: 'High Speed Internet',
    description: "Seamless video calls & browsing, instant uploads - we’ve got it covered.",
  },
  {
    icon: Sparkles,
    title: 'Modern Interiors',
    description: 'Work in a vibrant, thoughtfully designed environment that boosts creativity.',
  },
  {
    icon: CalendarCheck,
    title: 'Flexible Plans',
    description: 'Choose daily, weekly, or monthly options that suit your schedule.',
  },
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Header */}
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
          A Place That Helps <br className="hidden sm:inline" />Growth Of Your Work
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto text-base sm:text-lg mb-8 leading-relaxed">
          Work. Connect. Create. Your Perfect Co-Working Space Awaits. A flexible, inspiring workspace designed for professionals, freelancers, and teams who want to work smarter, not harder.
        </p>

        <div className="mb-14">
          <Link
            to="/about"
            className="inline-block bg-[#3656f5] hover:bg-blue-600 text-white font-medium text-sm px-7 py-3 rounded-md shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
          >
            About Us
          </Link>
        </div>

        {/* 5 Cards Layout (3 on top row, 2 centered below) matching Astra Template */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {services.slice(0, 3).map((s, index) => {
            const Icon = s.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 soft-card-shadow border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-left flex flex-col items-start"
              >
                <div className="w-12 h-12 rounded-full bg-blue-50 text-[#3656f5] flex items-center justify-center mb-5 shadow-sm">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{s.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{s.description}</p>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.slice(3, 5).map((s, index) => {
            const Icon = s.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 soft-card-shadow border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-left flex flex-col items-start"
              >
                <div className="w-12 h-12 rounded-full bg-blue-50 text-[#3656f5] flex items-center justify-center mb-5 shadow-sm">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{s.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{s.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
