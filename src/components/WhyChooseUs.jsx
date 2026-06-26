import { ShieldCheck, Cpu, Clock, Award, Hammer, Brain } from 'lucide-react';

export default function WhyChooseUs() {
  const points = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-security-gold" />,
      title: 'Certified Technicians',
      desc: 'Our staff consists of factory-certified, security-cleared technicians who understand modern surveillance architecture.'
    },
    {
      icon: <Cpu className="w-8 h-8 text-security-gold" />,
      title: 'STQC-Certified Systems',
      desc: 'We deploy secure, STQC-certified cameras and recording hardware to ensure standard quality and security compliance.'
    },
    {
      icon: <Clock className="w-8 h-8 text-security-gold" />,
      title: '24/7 Security Support',
      desc: ' Surveillance failures cannot wait. We offer priority dispatching and rapid remote technical assistance round the clock.'
    },
    {
      icon: <Award className="w-8 h-8 text-security-gold" />,
      title: '100% Quality Assurance',
      desc: 'Every installation undergoes strict multi-point QA checks, cable testing, and resolution tuning before client hand-off.'
    },
    {
      icon: <Hammer className="w-8 h-8 text-security-gold" />,
      title: 'Custom System Engineering',
      desc: 'No generic packages. We map out camera blindspots using professional modeling tools to maximize coverage per lens.'
    },
    {
      icon: <Brain className="w-8 h-8 text-security-gold" />,
      title: 'AI Smart Integrations',
      desc: 'Equip your setups with modern smart features: face recognition, line crossing alerts, heatmaps, and numberplate readers.'
    }
  ];

  return (
    <section className="py-24 bg-security-bg relative">
      <div className="absolute inset-0 tech-grid opacity-30 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-security-gold block mb-3">
            Surveillance Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Why Partner With Thrinaina Security?
          </h2>
          <div className="w-16 h-1 bg-security-gold mx-auto my-5 rounded-full" />
          <p className="text-security-textGray text-base leading-relaxed">
            We do not just wire cameras. We design high-availability physical safety barriers with premium quality hardware and professional engineering layouts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((point, i) => (
            <div
              key={i}
              className="glass-panel p-8 border-slate-800/80 hover:border-security-gold/50 transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col items-start group hover:shadow-gold-glow"
            >
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 group-hover:border-security-gold/30 transition-colors duration-300 mb-6">
                {point.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-security-gold transition-colors duration-300">
                {point.title}
              </h3>
              <p className="text-sm text-security-textGray leading-relaxed">
                {point.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
