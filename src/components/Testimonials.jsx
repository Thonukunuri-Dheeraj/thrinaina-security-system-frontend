import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'R. K. Raghavan',
      role: 'President',
      company: 'Sree Vihar Enclave Association',
      stars: 5,
      comment: 'Thrinaina installed 64 IP cameras across our gated community. The clarity is exceptional, and their cabling layouts are extremely neat. The tracking portal is very easy to use for reporting issues.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150'
    },
    {
      name: 'Priyanka Sen',
      role: 'Operations Lead',
      company: 'AppVenture Technologies',
      stars: 5,
      comment: 'We hired them for a complete CCTV and DVR integration for our new office floor. The team completed the wiring overnight to avoid disturbing our workforce. Their maintenance service is highly prompt!',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150'
    },
    {
      name: 'Vikram Aditya',
      role: 'Managing Partner',
      company: 'Aditya Warehousing & Logistics',
      stars: 5,
      comment: 'Excellent industrial surveillance consulting. They configured thermal mapping cameras and PTZ tracking for our yard. Remote cloud setup is flawless on mobile devices. Highly recommended.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150'
    }
  ];

  return (
    <section className="py-24 bg-[#0C1224]/50 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-security-gold block mb-3">
            Client Success
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            What Our Clients Say
          </h2>
          <div className="w-16 h-1 bg-security-gold mx-auto my-5 rounded-full" />
          <p className="text-security-textGray text-base leading-relaxed">
            Over a thousand security integrations. Here is the feedback from our partners, business managers, and residential communities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="glass-panel p-8 flex flex-col justify-between border-slate-900 bg-security-card/90 relative hover:border-slate-800/80 transition-all duration-300"
            >
              <Quote className="absolute top-6 right-8 w-10 h-10 text-slate-800/40 pointer-events-none" />
              
              <div>
                <div className="flex items-center gap-1 mb-5">
                  {[...Array(t.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-security-gold text-security-gold" />
                  ))}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed italic mb-8">
                  "{t.comment}"
                </p>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-slate-800/50">
                {/* Fallback avatar if unsplash fails */}
                <div className="w-11 h-11 rounded-full bg-security-blue/30 border border-security-gold/25 flex items-center justify-center font-bold text-security-gold">
                  {t.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-slate-100">{t.name}</span>
                  <span className="text-xs text-security-gold">{t.role}</span>
                  <span className="text-[10px] text-security-textGray">{t.company}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
