import React, { useState } from 'react';
import {
  Clock,
  Users,
  Printer,
  Rocket,
  Video,
  Headphones,
  Compass,
  Mail,
  HeartHandshake,
  ChevronDown,
  Building,
  UtensilsCrossed,
} from 'lucide-react';
import PageHero from '../components/common/PageHero';
import CtaBanner from '../components/common/CtaBanner';
import Footer from '../components/common/Footer';
import { IMAGES } from '../assets/images';

const spaces = [
  {
    title: 'Work Floor',
    description: 'A vibrant open layout designed to keep you inspired and productive throughout your workday.',
    icon: Building,
    image: IMAGES.workFloor,
  },
  {
    title: 'Full Kitchen',
    description: 'Enjoy fresh complimentary organic coffee, artisan tea, fresh fruit, and healthy snacks anytime.',
    icon: UtensilsCrossed,
    image: IMAGES.fullKitchen,
  },
  {
    title: 'Conference Room',
    description: 'High-tech meeting rooms equipped with video conferencing tools, high-speed Wi-Fi, and whiteboards.',
    icon: Users,
    image: IMAGES.conferenceRoom,
  },
];

const amenitiesList = [
  {
    icon: Clock,
    title: '24/7 Access',
    description: 'Come and work whenever you need, morning, night, or weekend, with secure keycard entry.',
  },
  {
    icon: Users,
    title: 'Conference Room',
    description: 'Book modern conference rooms for team brainstorms, client presentations, or webinars.',
  },
  {
    icon: Printer,
    title: 'Printing Desk',
    description: 'High-quality laser color printing, copying, and secure scanning available at your fingertips.',
  },
  {
    icon: Rocket,
    title: 'High-Speed Wi-Fi',
    description: 'Lightning-fast, enterprise-grade 1 Gbps fiber optic Wi-Fi with dual redundant connections.',
  },
  {
    icon: Video,
    title: 'Projector & Screens',
    description: 'Full HD high-lumen projectors and wide-screen displays ready for your pitches and demos.',
  },
  {
    icon: Headphones,
    title: 'Member Support',
    description: 'Our dedicated on-site community management team is always here to assist with whatever you need.',
  },
  {
    icon: Compass,
    title: 'Flexible Work Space',
    description: 'Choose freely from quiet focus booths, open co-working tables, or relaxing cafe-style lounges.',
  },
  {
    icon: Mail,
    title: 'Mail Delivery',
    description: 'A prestigious business mailing address and secure mail & courier handling service.',
  },
  {
    icon: HeartHandshake,
    title: 'Pet Friendly',
    description: 'Well-behaved four-legged companions are always welcome to keep you company while you create.',
  },
];

const faqs = [
  {
    q: 'What Types Of Workspaces Do You Offer?',
    a: 'We offer a wide variety of workspace options including Hot Desks in our open lounge, Dedicated Desks with lockable storage, fully furnished Private Offices for teams from 2 to 20 people, and Virtual Office packages with mail delivery.',
  },
  {
    q: 'Can I Book A Workspace For Just One Day?',
    a: 'Yes, absolutely! We offer flexible Day Passes that give you complete access to all open seating areas, ultra-fast Wi-Fi, complimentary coffee and tea, and phone booths from 9 AM to 6 PM.',
  },
  {
    q: 'Are Your Co-Working Spaces Accessible 24/7?',
    a: 'Yes! Members with Dedicated Desks and Private Offices enjoy 24/7/365 access using encrypted digital mobile keycards. Hot desk members can also upgrade to 24/7 access at any time.',
  },
  {
    q: 'Do You Provide Free Wi-Fi And Other Basic Facilities?',
    a: 'Yes! All workspace plans include high-speed enterprise Wi-Fi, unlimited organic coffee, tea, purified water, print/scan quotas, cleaning, utilities, and access to all community networking events.',
  },
];

export default function Amenities() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <PageHero
        title="Amenities"
        subtitle="Enjoy amenities that make your workday productive, comfortable, and enjoyable, without worrying about office logistics."
        bgImage={IMAGES.amenitiesHeroBg}
      />

      {/* The Spaces Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            The Spaces
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-base sm:text-lg mb-14 leading-relaxed">
            Every corner of our co-working space is crafted with natural lighting, ergonomic design, and premium aesthetics.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {spaces.map((s, index) => {
              const Icon = s.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl overflow-hidden soft-card-shadow border border-slate-100 hover:shadow-2xl transition-all duration-300 group text-left"
                >
                  <div className="relative h-60 overflow-hidden bg-slate-100">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-4 right-4 w-11 h-11 rounded-lg bg-[#3656f5] text-white flex items-center justify-center shadow-lg">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="p-7">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{s.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{s.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What We Have Here For You (9 items in 3x3 Grid) */}
      <section className="py-24 bg-slate-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            What We Have Here For You
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-base sm:text-lg mb-14 leading-relaxed">
            Discover a comprehensive suite of modern amenities to make your day seamless and stress-free.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {amenitiesList.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 soft-card-shadow border border-slate-100 text-left flex flex-col items-start hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-5 shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Reusable CTA Banner */}
      <CtaBanner />

      {/* Frequently Asked Questions */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 text-base max-w-xl mx-auto">
              Got questions about our plans, memberships, or tours? Here are answers to the most common inquiries.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="border border-slate-200 rounded-xl overflow-hidden transition-all bg-white"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between font-semibold text-slate-900 hover:text-blue-600 transition-colors"
                  >
                    <span className="text-base sm:text-lg">{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-blue-600 transform transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-slate-600 text-sm leading-relaxed border-t border-slate-100 bg-slate-50/50">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
