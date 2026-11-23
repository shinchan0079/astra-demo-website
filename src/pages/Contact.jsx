import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  MapPin,
  Phone,
  Mail,
  Send,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';
import {
  FacebookIcon,
  TwitterIcon,
  YoutubeIcon,
  LinkedinIcon,
} from '../components/common/SocialIcons';
import PageHero from '../components/common/PageHero';
import Footer from '../components/common/Footer';
import { IMAGES } from '../assets/images';

export default function Contact() {
  const location = useLocation();
  const prefillSubject = location.state?.selectedPlan
    ? `Inquiry for ${location.state.selectedPlan} Plan`
    : '';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: prefillSubject,
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg('');
    setErrorMsg('');

    try {
      // Connect to our express backend CRUD API via environment variable
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
      const response = await fetch(`${API_URL}/contacts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSuccessMsg(
          'Your message has been sent successfully! We will get back to you soon.'
        );
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        setErrorMsg(result.message || 'Something went wrong. Please check your inputs.');
      }
    } catch (err) {
      setErrorMsg(
        'Could not connect to Backend server at http://localhost:5000. Please ensure `npm run dev` or `node server.js` is running inside the backend folder.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <PageHero
        title="Contact Us"
        subtitle="We’d love to hear from you! Get in touch with our team for bookings, tours, or any questions about our co-working spaces."
        bgImage={IMAGES.contactHeroBg}
      />

      {/* Get In Touch Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Get in Touch
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto text-base mb-8">
            We’re here to help you find the perfect workspace and answer any questions you may have.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center space-x-3 mb-14">
            <a
              href="#facebook"
              className="w-10 h-10 rounded-full bg-[#3656f5] text-white flex items-center justify-center hover:bg-blue-700 transition-colors shadow-sm"
              aria-label="Facebook"
            >
              <FacebookIcon className="w-4 h-4" />
            </a>
            <a
              href="#twitter"
              className="w-10 h-10 rounded-full bg-[#3656f5] text-white flex items-center justify-center hover:bg-blue-700 transition-colors shadow-sm"
              aria-label="Twitter"
            >
              <TwitterIcon className="w-4 h-4" />
            </a>
            <a
              href="#youtube"
              className="w-10 h-10 rounded-full bg-[#3656f5] text-white flex items-center justify-center hover:bg-blue-700 transition-colors shadow-sm"
              aria-label="Youtube"
            >
              <YoutubeIcon className="w-4 h-4" />
            </a>
            <a
              href="#linkedin"
              className="w-10 h-10 rounded-full bg-[#3656f5] text-white flex items-center justify-center hover:bg-blue-700 transition-colors shadow-sm"
              aria-label="Linkedin"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
          </div>

          {/* 3 Contact Info Cards matching template */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Card 1: Our Location */}
            <div className="bg-white rounded-2xl p-8 soft-card-shadow border border-slate-100 flex flex-col items-center hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-4 shadow-sm">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Our Location</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                68 East 12th Street, 1st Floor, New York, NY , 10022
              </p>
            </div>

            {/* Card 2: Call Us On */}
            <div className="bg-white rounded-2xl p-8 soft-card-shadow border border-slate-100 flex flex-col items-center hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-4 shadow-sm">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Call Us On</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                + 1 800 123 456<br />+ 1 800 123 457
              </p>
            </div>

            {/* Card 3: Email us */}
            <div className="bg-white rounded-2xl p-8 soft-card-shadow border border-slate-100 flex flex-col items-center hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-4 shadow-sm">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Email us</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                info@example.com<br />hello@example.com
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="w-full bg-white">
        <div className="w-full h-[450px] overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3072.1551274505764!2d81.02704147983019!3d26.867203238639732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be370a35ae057%3A0xfcdb26b5b1764533!2sBarrownz%20Learning%20Academy!5e1!3m2!1sen!2sin!4v1795330497966!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            title="Barrownz Learning Academy Location Map"
            className="w-full h-full border-0"
          />
        </div>
      </section>
      {/* Send us a Message Section */}
      <section className="py-20 bg-slate-50/60">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-2">
              Send us a Message
            </h2>
            <p className="text-slate-500 text-sm">
              We would love to hear from you!
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 sm:p-10 soft-card-shadow border border-slate-100">
            <h3 className="text-xl font-bold text-slate-900 mb-6">
              Simple Contact Form
            </h3>

            {/* Success Alert */}
            {successMsg && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="font-semibold">Message Received!</p>
                  <p>{successMsg}</p>
                </div>
              </div>
            )}

            {/* Error Alert */}
            {errorMsg && (
              <div className="mb-6 p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 flex items-start space-x-3">
                <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="font-semibold">Submission Note</p>
                  <p>{errorMsg}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm text-slate-800 placeholder-slate-400 bg-slate-50/50 transition-all"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm text-slate-800 placeholder-slate-400 bg-slate-50/50 transition-all"
                />
              </div>

              <div>
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm text-slate-800 placeholder-slate-400 bg-slate-50/50 transition-all"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm text-slate-800 placeholder-slate-400 bg-slate-50/50 transition-all resize-none"
                />
              </div>

              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-[#3656f5] hover:bg-blue-600 disabled:opacity-60 text-white font-medium text-sm px-8 py-3.5 rounded-md shadow-md transition-all flex items-center space-x-2"
                >
                  {loading ? (
                    <span>Submitting...</span>
                  ) : (
                    <>
                      <span>Submit</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>



      <Footer />
    </div>
  );
}
