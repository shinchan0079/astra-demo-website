import React from 'react';
import { Link } from 'react-router-dom';
import { FacebookIcon, TwitterIcon, YoutubeIcon, LinkedinIcon } from './SocialIcons';

export default function Footer() {
  return (
    <footer className="bg-[#162040] text-gray-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div>
            <Link to="/" className="inline-block text-2xl font-bold tracking-tight text-white mb-4">
              TheWork<span className="text-blue-400">Place</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Discover a workspace designed to inspire focus, collaboration, and creativity.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-base font-semibold mb-4 tracking-wide">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/amenities" className="text-gray-400 hover:text-white transition-colors">Amenities</Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h4 className="text-white text-base font-semibold mb-4 tracking-wide">Important Links</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#terms" className="text-gray-400 hover:text-white transition-colors">Terms and Conditions</a>
              </li>
              <li>
                <a href="#legal" className="text-gray-400 hover:text-white transition-colors">Legal</a>
              </li>
              <li>
                <a href="#business" className="text-gray-400 hover:text-white transition-colors">Business</a>
              </li>
              <li>
                <a href="#partners" className="text-gray-400 hover:text-white transition-colors">Partners</a>
              </li>
            </ul>
          </div>

          {/* Let's Connect */}
          <div>
            <h4 className="text-white text-base font-semibold mb-4 tracking-wide">Let’s Connect!</h4>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Connect with entrepreneurs, build your network, make great business.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded bg-blue-600/30 hover:bg-blue-600 text-white flex items-center justify-center transition-all"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded bg-blue-600/30 hover:bg-blue-600 text-white flex items-center justify-center transition-all"
                aria-label="Twitter"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded bg-blue-600/30 hover:bg-blue-600 text-white flex items-center justify-center transition-all"
                aria-label="Youtube"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded bg-blue-600/30 hover:bg-blue-600 text-white flex items-center justify-center transition-all"
                aria-label="Linkedin"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 mt-8 border-t border-slate-800 text-xs text-gray-400 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>Copyright © 2026 Co-Working Space</p>
          <p>Powered by Co-Working Space</p>
        </div>
      </div>
    </footer>
  );
}
