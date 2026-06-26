import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Home as HomeIcon, Building, Factory, ArrowRight, User } from 'lucide-react';
import { isCustomerAuthenticated, getStoredCustomer } from '../services/api';
import logoImg from '../assets/logo.jpg';

export default function Navbar({ onProfileClick }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobilePackagesOpen, setIsMobilePackagesOpen] = useState(false);
  const location = useLocation();
  const isCustomer = isCustomerAuthenticated();
  const customerUser = getStoredCustomer();

  // Set background transparency on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const packages = [
    {
      name: 'Home Package',
      desc: '4+ Cameras - Perfect for villas & apartments',
      cameras: 4,
      icon: <HomeIcon className="w-4 h-4 text-security-gold" />
    },
    {
      name: 'Offices Package',
      desc: '15+ Cameras - Ideal for workspaces & retail',
      cameras: 15,
      icon: <Building className="w-4 h-4 text-security-gold" />
    },
    {
      name: 'Large Industries',
      desc: '40+ Cameras - Designed for yards & factories',
      cameras: 40,
      icon: <Factory className="w-4 h-4 text-security-gold" />
    }
  ];

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Packages', path: '/packages' },
    { name: 'Book Installation', path: '/booking' },
    { name: 'Service Booking', path: '/support' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-security-bg/90 backdrop-blur-md border-b border-slate-800 shadow-lg py-3'
          : 'bg-transparent border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img
              src={logoImg}
              alt="Thrinaina Electronic Security System"
              className="h-16 w-auto object-contain rounded-xl drop-shadow-lg transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              if (link.name === 'Packages') {
                return (
                  <div key={link.name} className="relative group py-1">
                    <Link
                      to="/packages"
                      className="flex items-center gap-1 text-sm font-medium text-slate-300 hover:text-security-gold transition-colors duration-300 focus:outline-none"
                    >
                      Packages
                      <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                    </Link>
                    {/* Glassmorphic Dropdown */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-security-bg/95 backdrop-blur-lg border border-slate-800 rounded-xl p-2 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                      <div className="space-y-1">
                        {packages.map((pkg) => (
                          <Link
                            key={pkg.name}
                            to="/booking"
                            state={{ serviceType: 'CCTV Installation', camerasCount: pkg.cameras }}
                            className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-slate-900/60 transition-colors duration-200 group/item text-left"
                          >
                            <div className="w-8 h-8 rounded-lg bg-slate-950 border border-slate-850 flex items-center justify-center group-hover/item:border-security-gold/30 transition-colors duration-200 shrink-0 mt-0.5">
                              {pkg.icon}
                            </div>
                            <div>
                              <div className="text-xs font-bold text-slate-200 group-hover/item:text-security-gold transition-colors duration-200">
                                {pkg.name}
                              </div>
                              <div className="text-[10px] text-security-textGray mt-0.5 leading-snug">
                                {pkg.desc}
                              </div>
                            </div>
                          </Link>
                        ))}
                        <hr className="border-slate-800/80 my-1" />
                        <Link
                          to="/packages"
                          className="flex items-center justify-between p-2.5 rounded-lg hover:bg-slate-900/60 text-xs font-bold text-security-gold transition-colors duration-200"
                        >
                          <span>View All Packages</span>
                          <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              }
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-medium transition-all duration-300 relative py-1 ${
                    isActive(link.path)
                      ? 'text-security-gold font-semibold'
                      : 'text-slate-300 hover:text-security-gold'
                  }`}
                >
                  {link.name}
                  {isActive(link.path) && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-security-gold rounded-full" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Admin / Portal Buttons */}
          <div className="hidden md:flex items-center gap-4">
            {isCustomer ? (
              <button
                onClick={onProfileClick}
                className="flex flex-col items-center justify-center gap-1 group cursor-pointer focus:outline-none"
                title="Open Account Dashboard"
              >
                {/* Silhouette User Icon Circle */}
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-slate-900 via-slate-950 to-security-blue/40 border border-security-gold/30 group-hover:border-security-gold/60 flex items-center justify-center shadow-[inset_0_2px_4px_rgba(0,0,0,0.6),0_0_10px_rgba(201,168,76,0.1)] group-hover:shadow-[0_0_15px_rgba(201,168,76,0.25)] transition-all duration-300 group-hover:scale-105 relative shrink-0">
                  <User className="w-5 h-5 text-security-gold" strokeWidth={2.2} />
                  {/* Glowing online indicator */}
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-slate-950 shadow-[0_0_8px_rgba(16,185,129,0.6)] animate-pulse" />
                </div>
                {/* Short Name below it */}
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-350 group-hover:text-security-gold transition-colors duration-300 truncate max-w-[80px] leading-tight select-none mt-0.5">
                  {customerUser?.full_name ? customerUser.full_name.split(' ')[0] : 'Client'}
                </span>
              </button>
            ) : (
              <Link
                to="/booking"
                className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-100 border border-security-gold/50 hover:border-security-gold bg-transparent hover:bg-security-gold hover:text-security-bg rounded-lg transition-all duration-300 hover:shadow-gold-glow"
              >
                Instant Book
              </Link>
            )}
          </div>

          {/* Mobile hamburger menu */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => {
                setIsOpen(!isOpen);
                if (isOpen) {
                  setIsMobilePackagesOpen(false);
                }
              }}
              className="p-2 rounded-lg text-slate-400 hover:text-slate-100 focus:outline-none transition-colors duration-200"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden fixed top-[89px] left-0 right-0 bottom-0 bg-security-bg/95 backdrop-blur-lg border-t border-slate-800 transition-all duration-300 transform ${
          isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="px-4 py-6 space-y-4">
          {navLinks.map((link) => {
            if (link.name === 'Packages') {
              return (
                <div key={link.name} className="space-y-1">
                  <button
                    onClick={() => setIsMobilePackagesOpen(!isMobilePackagesOpen)}
                    className="flex items-center justify-between w-full px-4 py-3 text-base font-semibold text-slate-300 hover:text-security-gold hover:bg-slate-900/50 rounded-xl transition-all duration-300"
                  >
                    <span>Packages</span>
                    <ChevronDown
                      className={`w-4 h-4 text-security-gold transition-transform duration-300 ${
                        isMobilePackagesOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`transition-all duration-300 overflow-hidden ${
                      isMobilePackagesOpen ? 'max-h-80 opacity-100 mt-1' : 'max-h-0 opacity-0 pointer-events-none'
                    }`}
                  >
                    <div className="pl-6 pr-2 py-2 space-y-2 bg-[#02050f]/40 border border-slate-900 rounded-xl">
                      {packages.map((pkg) => (
                        <Link
                          key={pkg.name}
                          to="/booking"
                          state={{ serviceType: 'CCTV Installation', camerasCount: pkg.cameras }}
                          onClick={() => {
                            setIsOpen(false);
                            setIsMobilePackagesOpen(false);
                          }}
                          className="flex items-center gap-3 py-2 px-3 hover:bg-slate-900/40 rounded-lg transition-colors duration-200"
                        >
                          <div className="shrink-0">{pkg.icon}</div>
                          <div className="text-left">
                            <div className="text-xs font-bold text-slate-200">{pkg.name}</div>
                            <div className="text-[9px] text-security-textGray">{pkg.desc.split(' - ')[0]}</div>
                          </div>
                        </Link>
                      ))}
                      <hr className="border-slate-800/80 my-1" />
                      <Link
                        to="/packages"
                        onClick={() => {
                          setIsOpen(false);
                          setIsMobilePackagesOpen(false);
                        }}
                        className="flex items-center justify-between py-2 px-3 hover:bg-slate-900/40 rounded-lg text-xs font-bold text-security-gold transition-colors duration-200"
                      >
                        <span>View All Packages</span>
                        <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            }
            return (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => {
                  setIsOpen(false);
                  setIsMobilePackagesOpen(false);
                }}
                className={`block px-4 py-3 text-base font-semibold rounded-xl transition-all duration-300 ${
                  isActive(link.path)
                    ? 'text-security-gold bg-security-card border-l-4 border-security-gold'
                    : 'text-slate-300 hover:text-security-gold hover:bg-slate-900/50'
                }`}
              >
                {link.name}
              </Link>
            );
          })}

          <hr className="border-slate-800 my-4" />

          {isCustomer ? (
            <div className="space-y-3">
              <button
                onClick={() => {
                  setIsOpen(false);
                  setIsMobilePackagesOpen(false);
                  onProfileClick();
                }}
                className="flex items-center gap-3.5 w-full p-3 bg-gradient-to-r from-slate-950/80 to-slate-900/60 border border-slate-800/80 hover:border-security-gold/50 text-slate-200 hover:text-security-gold rounded-xl transition-all duration-300 cursor-pointer shadow-lg group"
              >
                {/* Silhouette User Icon Circle */}
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-900 via-slate-950 to-security-blue/40 border border-security-gold/40 flex items-center justify-center text-security-gold shadow-inner shrink-0 relative">
                  <User className="w-5.5 h-5.5 text-security-gold" strokeWidth={2.2} />
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-slate-950 shadow-[0_0_8px_rgba(16,185,129,0.6)] animate-pulse" />
                </div>
                
                {/* Text info */}
                <div className="flex-grow text-left truncate">
                  <div className="text-xs font-bold text-slate-100 group-hover:text-slate-50 transition-colors truncate">
                    {customerUser?.full_name || 'Customer'}
                  </div>
                  <div className="text-[10px] text-security-textGray truncate">
                    {customerUser?.email}
                  </div>
                </div>

                {/* Arrow indicator */}
                <ArrowRight className="w-4 h-4 text-slate-450 group-hover:text-security-gold transition-all duration-300 group-hover:translate-x-1 shrink-0" />
              </button>
            </div>
          ) : (
            <Link
              to="/booking"
              onClick={() => {
                setIsOpen(false);
                setIsMobilePackagesOpen(false);
              }}
              className="flex items-center justify-center w-full py-3.5 bg-security-gold hover:bg-security-goldHover text-security-bg font-extrabold rounded-xl transition-all duration-300 shadow-gold-glow"
            >
              Book Security Service
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
