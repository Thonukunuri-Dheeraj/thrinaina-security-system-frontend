import { Link } from 'react-router-dom';
import { Home as HomeIcon, Building, Factory, CheckCircle, ArrowRight } from 'lucide-react';

export default function Packages() {
  const packagesList = [
    {
      title: 'Home Package',
      subtitle: 'Residential Surveillance',
      cameraCount: '4+ Cameras',
      cameras: 4,
      icon: <HomeIcon className="w-8 h-8 text-security-gold" />,
      desc: 'Secure your home, villas, or apartment complexes with high-definition CCTV cameras and reliable DVR recording systems.',
      features: [
        '4 HD Dome/Bullet cameras',
        'Color Night Vision with IR sensors',
        '1TB Security Grade Hard Drive',
        'Mobile app remote streaming setup',
        '1-Year free installation support'
      ],
      badge: 'Best Value'
    },
    {
      title: 'Offices Package',
      subtitle: 'Commercial Surveillance',
      cameraCount: '15+ Cameras',
      cameras: 15,
      icon: <Building className="w-8 h-8 text-security-gold" />,
      desc: 'Enhance office premises, retail shops, and complexes with integrated CCTV surveillance and NVR/DVR recording.',
      features: [
        '15+ 2K IP Cameras (PoE)',
        '16-Channel Central NVR',
        '4TB High-Capacity Security Storage',
        'Multi-user remote desktop & mobile view',
        'Power backup integration (UPS)'
      ],
      badge: 'Popular'
    },
    {
      title: 'Large Industries',
      subtitle: 'Industrial Surveillance',
      cameraCount: '40+ Cameras',
      cameras: 40,
      icon: <Factory className="w-8 h-8 text-security-gold" />,
      desc: 'Secure warehouses, construction yards, and manufacturing facilities with heavy duty night-vision layouts.',
      features: [
        '40+ 4K UHD PTZ tracking cameras',
        '64-Channel Central NVR Server',
        'Fibre optic loop cabling backbone',
        'Guard-room control screen matrix',
        'Explosion & weather-proof chassis'
      ],
      badge: 'Enterprise'
    }
  ];

  return (
    <div className="pt-28 pb-20 relative">
      <div className="absolute inset-0 tech-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-security-gold block mb-3">
            Surveillance Solutions
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-100 tracking-tight">
            Tailored Security Packages
          </h1>
          <div className="w-16 h-1 bg-security-gold mx-auto my-5 rounded-full" />
          <p className="text-security-textGray text-base leading-relaxed">
            Choose a surveillance package tailored to your property size and security demands. Get premium, STQC-certified equipment with professional layout configurations.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packagesList.map((pkg, i) => (
            <div
              key={i}
              className="glass-panel p-8 bg-security-card/85 border-slate-900 hover:border-security-gold/40 hover:shadow-gold-glow transition-all duration-300 flex flex-col justify-between group relative rounded-2xl"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-security-gold/30 to-transparent rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Corner Tag */}
              <div className="absolute top-0 right-0 py-1 px-3 text-[9px] font-bold uppercase tracking-wider bg-security-blue/50 text-slate-200 border-b border-l border-slate-800 rounded-bl-lg rounded-tr-xl">
                {pkg.badge}
              </div>

              <div>
                <div className="w-16 h-16 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center mb-6 group-hover:border-security-gold/30 transition-colors duration-300 shadow-sm">
                  {pkg.icon}
                </div>
                
                <h3 className="text-2xl font-extrabold text-slate-100 mb-1 group-hover:text-security-gold transition-colors duration-200">
                  {pkg.title}
                </h3>
                
                <div className="text-xs font-semibold text-security-gold tracking-wider uppercase mb-4">
                  {pkg.cameraCount} Package
                </div>
                
                <p className="text-xs text-security-textGray leading-relaxed mb-6">
                  {pkg.desc}
                </p>

                <hr className="border-slate-800/80 mb-6" />

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle className="w-4 h-4 text-security-gold shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                to="/booking"
                state={{ serviceType: 'CCTV Installation', camerasCount: pkg.cameras }}
                className="w-full py-3.5 bg-slate-950 border border-slate-800 hover:border-security-gold hover:bg-security-gold hover:text-security-bg text-center text-xs font-bold uppercase tracking-wider text-slate-300 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                Select {pkg.title}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
