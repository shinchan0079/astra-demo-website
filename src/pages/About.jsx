import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { FacebookIcon, TwitterIcon, LinkedinIcon, InstagramIcon } from '../components/common/SocialIcons';
import PageHero from '../components/common/PageHero';
import CtaBanner from '../components/common/CtaBanner';
import Testimonials from '../components/common/Testimonials';
import Footer from '../components/common/Footer';
import { IMAGES } from '../assets/images';

const teamMembers = [
  {
    name: 'Kristen Lewis',
    role: 'Founder',
    image: IMAGES.teamFounder,
  },
  {
    name: 'James O\'Neil',
    role: 'Manager',
    image: IMAGES.teamManager,
  },
  {
    name: 'Nataliya Stepulev',
    role: 'Receptionist',
    image: IMAGES.teamReceptionist,
  },
];

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <PageHero
        title="About Us"
        subtitle="We're on a mission to bring people together by creating spaces that foster inspiration, creativity and community."
        bgImage={IMAGES.aboutHeroBg}
      />

      {/* About Our Co-Working Place Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column */}
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                About Our Co-Working Place
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                A place tailored specifically to help you and your business thrive. We provide a space for freelancers looking for a dedicated focus desk, or expanding teams that need fully serviced private offices.
              </p>
              <p className="text-slate-600 text-base leading-relaxed">
                Our vision is rooted in creating an inclusive, highly productive environment where people can connect, collaborate, and accomplish their best work. With flexible membership plans and enterprise-grade infrastructure, your workday runs smoothly.
              </p>

              <div className="pt-2">
                <Link
                  to="/pricing"
                  className="inline-flex items-center space-x-2 bg-[#3656f5] hover:bg-blue-600 text-white font-medium text-sm px-6 py-3 rounded-md transition-all shadow-md"
                >
                  <span>Get Your Place</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Column Image */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={IMAGES.aboutPlace}
                  alt="Co-working team working together"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-24 bg-slate-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Our Team
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-base sm:text-lg mb-14 leading-relaxed">
            Behind every great co-working space is a passionate team. Meet the people who make our community thrive every single day.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden soft-card-shadow border border-slate-100 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="h-72 overflow-hidden bg-slate-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                  <p className="text-sm text-blue-600 font-medium mb-4">{member.role}</p>

                  {/* Social Icons */}
                  <div className="flex justify-center space-x-3">
                    <a
                      href="#facebook"
                      className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white flex items-center justify-center transition-colors text-xs"
                      aria-label="Facebook"
                    >
                      <FacebookIcon className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href="#twitter"
                      className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white flex items-center justify-center transition-colors text-xs"
                      aria-label="Twitter"
                    >
                      <TwitterIcon className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href="#linkedin"
                      className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white flex items-center justify-center transition-colors text-xs"
                      aria-label="LinkedIn"
                    >
                      <LinkedinIcon className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href="#instagram"
                      className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white flex items-center justify-center transition-colors text-xs"
                      aria-label="Instagram"
                    >
                      <InstagramIcon className="w-3.5 h-3.5" />
                    </a>
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
