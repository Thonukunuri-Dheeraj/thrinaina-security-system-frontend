import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Lock } from 'lucide-react';
import logoImg from '../assets/logo.jpg';

export default function Footer() {
  return (
    <footer className="bg-[#0A0E1C] border-t border-slate-900 pt-16 pb-8 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Col */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <img
                src={logoImg}
                alt="Thrinaina Logo"
                className="h-9 w-auto object-contain rounded-lg border border-security-gold/30 bg-white p-0.5"
              />
              <div className="flex flex-col">
                <span className="font-extrabold text-lg tracking-wider text-slate-100">
                  THRINAINA
                </span>
                <span className="text-[8px] font-semibold text-security-textGray tracking-[0.18em]">
                  SECURITY SYSTEMS
                </span>
              </div>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed pt-2">
              Premium CCTV camera installation, DVR/NVR recording systems, and complete surveillance solutions for homes, offices, and industries. Securing what matters most.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-security-gold text-slate-450 hover:text-security-gold transition-all duration-300">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H7v3h2v9h3v-9h3.6l.4-3H12V6c0-.6.4-1 1-1h2V2h-3C9.7 2 8 3.7 8 6v2H9z" />
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-security-gold text-slate-450 hover:text-security-gold transition-all duration-300">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-security-gold text-slate-450 hover:text-security-gold transition-all duration-300">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-security-gold text-slate-450 hover:text-security-gold transition-all duration-300">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-slate-200 font-bold text-sm uppercase tracking-wider mb-5">Useful Links</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-security-gold transition-colors duration-200">Home</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-security-gold transition-colors duration-200">Our Services</Link>
              </li>
              <li>
                <Link to="/packages" className="hover:text-security-gold transition-colors duration-200">Packages</Link>
              </li>
              <li>
                <Link to="/booking" className="hover:text-security-gold transition-colors duration-200">Book Installation</Link>
              </li>
              <li>
                <Link to="/support" className="hover:text-security-gold transition-colors duration-200">Service Request & tracking</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-security-gold transition-colors duration-200">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Installations Quick Links */}
          <div>
            <h4 className="text-slate-200 font-bold text-sm uppercase tracking-wider mb-5">Installations</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/services" className="hover:text-security-gold transition-colors duration-200">Residential CCTV Setup</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-security-gold transition-colors duration-200">Commercial Surveillance</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-security-gold transition-colors duration-200">Industrial Security Grids</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-security-gold transition-colors duration-200">DVR/NVR Setup & Configuration</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-security-gold transition-colors duration-200">CCTV Repair</Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h4 className="text-slate-200 font-bold text-sm uppercase tracking-wider mb-1">Company Info</h4>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-security-gold shrink-0 mt-0.5" />
                <span>
                  HNo:- 30-1347, Lane no:- 12,<br />
                  Vinayak Nagar, Neredmet,<br />
                  Medchal-Malkajgiri - 500056
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-security-gold shrink-0" />
                <a href="tel:+919849021269" className="hover:text-security-gold transition-colors duration-200">+91 98490 21269</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-security-gold shrink-0" />
                <a href="mailto:thrinainaelectronics@gmail.com" className="hover:text-security-gold transition-colors duration-200">thrinainaelectronics@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-slate-900 my-10" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>&copy; {new Date().getFullYear()} Thrinaina Electronic Security System. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
