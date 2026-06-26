import { Link } from 'react-router-dom';
import { Camera, Wrench, ShieldCheck, PhoneCall, Building, Factory, Globe, ArrowRight } from 'lucide-react';

export default function Services() {
  const servicesList = [
    {
      icon: <Camera className="w-8 h-8 text-security-gold" />,
      title: 'CCTV Installation',
      desc: 'Professional configuration of analogue HD, digital IP, and wireless CCTV cameras with NVR/DVR storage.',
      features: ['1080p to 4K UHD resolutions', 'H.265+ storage optimization', 'Infrared & Full-Color night vision', 'Neat concealed cabling layout'],
      tag: 'Popular'
    },
    {
      icon: <Globe className="w-8 h-8 text-security-gold" />,
      title: 'Network & Remote View Setup',
      desc: 'Resolving IP conflicts, setting up port forwarding, router config, and enabling real-time remote monitoring on mobile/tablet.',
      features: ['Mobile application setup', 'Router & Switch configuration', 'Wi-Fi extension for wireless cameras', 'Static IP & DNS setup'],
      tag: 'Tech Support'
    },
    {
      icon: <Wrench className="w-8 h-8 text-security-gold" />,
      title: 'System Maintenance & Service',
      desc: 'Scheduled health checks, camera replacement, DVR/NVR hard drive upgrades, power supply troubleshooting, and regular cleanings.',
      features: ['Lens cleaning & refocusing', 'Hard drive storage upgrades', 'Wiring and power supply repair', 'Fitted equipment replacement'],
      tag: 'Essential'
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-security-gold" />,
      title: 'Access Control & Security Audits',
      desc: 'Installing biometric access systems, smart locks, intercoms, and conducting detailed onsite vulnerability audits.',
      features: ['Biometric & RFID access control', 'Smart lock & Intercom systems', 'Vulnerability risk assessment', 'Emergency system diagnostics'],
      tag: 'Advanced'
    }
  ];

  return (
    <div className="pt-28 pb-20 relative">
      <div className="absolute inset-0 tech-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-security-gold block mb-3">
            Secure Infrastructure
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-100 tracking-tight">
            Our Professional Security Services
          </h1>
          <div className="w-16 h-1 bg-security-gold mx-auto my-5 rounded-full" />
          <p className="text-security-textGray text-base leading-relaxed">
            From single-camera residential setups to heavy multi-camera industrial yards, we supply and manage end-to-end CCTV camera and DVR/NVR recording systems.
          </p>
        </div>

        {/* Services Grid */}
        <div className="flex flex-wrap justify-center gap-8">
          {servicesList.map((service, i) => (
            <div
              key={i}
              className="glass-panel p-6 border-slate-900 bg-security-card/80 hover:border-security-gold/30 hover:shadow-gold-glow flex flex-col justify-between transform hover:-translate-y-1.5 transition-all duration-300 relative group overflow-hidden w-full md:w-[calc(50%-1rem)] max-w-md"
            >
              {/* Corner Tag */}
              <div className="absolute top-0 right-0 py-1 px-3 text-[9px] font-bold uppercase tracking-wider bg-security-blue/50 text-slate-200 border-b border-l border-slate-800 rounded-bl-lg">
                {service.tag}
              </div>

              <div>
                <div className="w-14 h-14 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center mb-6 group-hover:border-security-gold/30 transition-colors duration-300 shadow-sm">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-100 mb-2.5 group-hover:text-security-gold transition-colors duration-200">
                  {service.title}
                </h3>
                <p className="text-xs text-security-textGray leading-relaxed mb-6">
                  {service.desc}
                </p>

                <hr className="border-slate-900 mb-5" />

                <ul className="space-y-2 mb-8">
                  {service.features.map((f, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-[11px] text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-security-gold shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                to="/booking"
                state={{ serviceType: service.title }}
                className="w-full py-3 bg-slate-950 border border-slate-800 hover:border-security-gold hover:bg-security-gold hover:text-security-bg text-center text-xs font-bold uppercase tracking-wider text-slate-300 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                Book Now
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
