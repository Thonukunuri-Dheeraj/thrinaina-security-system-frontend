import { Mail, Phone, MapPin, Clock, MessageSquare, Compass } from 'lucide-react';

export default function Contact() {
  const whatsappNumber = '9849021269';
  const whatsappText = encodeURIComponent("Hello Thrinaina Security! I'd like to book an installation slot.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappText}`;

  return (
    <div className="pt-28 pb-20 relative">
      <div className="absolute inset-0 tech-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-security-gold block mb-3">
            Get in Touch
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-100 tracking-tight">
            Contact Our Security Experts
          </h1>
          <div className="w-16 h-1 bg-security-gold mx-auto my-5 rounded-full" />
          <p className="text-security-textGray text-base leading-relaxed">
            Have questions about system designs, brand pricing, or scheduling maintenance? Drop us a line or connect with our support desk instantly.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10">
          {/* Left: Contact Info (Full Width) */}
          <div className="lg:col-span-12 space-y-6">
            <div className="glass-panel p-6 sm:p-8 bg-security-card/85 border-slate-900 space-y-8">
              <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
                <Compass className="w-5.5 h-5.5 text-security-gold" />
                Office Information
              </h3>

              <div className="space-y-6 text-sm text-slate-300">
                {/* Address */}
                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl text-security-gold shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-security-textGray block uppercase tracking-wider mb-1">
                      Corporate HQ
                    </span>
                    <p className="leading-relaxed text-slate-200">
                      HNo:- 30-1347, Lane no:- 12, Vinayak Nagar, Neredmet, Medchal-Malkajgiri , 500056
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl text-security-gold shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-security-textGray block uppercase tracking-wider mb-1">
                      Call Support
                    </span>
                    <a href="tel:+919849021269" className="text-slate-200 hover:text-security-gold font-semibold transition-colors duration-200 block text-base mt-0.5">
                      +91 9849021269
                    </a>
                    <span className="text-[10px] text-slate-500">Mon - Sat: 9:00 AM to 9:00 PM</span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl text-security-gold shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-security-textGray block uppercase tracking-wider mb-1">
                      Email Inquiries
                    </span>
                    <a href="mailto:thrinainaelectronics@gmail.com" className="text-slate-200 hover:text-security-gold font-semibold transition-colors duration-200 block mt-0.5">
                      thrinainaelectronics@gmail.com
                    </a>
                  </div>
                </div>

                {/* Timings */}
                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl text-security-gold shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-security-textGray block uppercase tracking-wider mb-1">
                      Business Hours
                    </span>
                    <p className="text-slate-200 mt-0.5">Monday - Saturday: 09:00 AM - 09:00 PM</p>
                    <p className="text-amber-500 text-[10px] mt-0.5">Sunday: Emergency Dispatch Only</p>
                  </div>
                </div>
              </div>

              {/* Instant Integration buttons */}
              <div className="pt-6 border-t border-slate-800/80 space-y-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-slate-100 font-bold uppercase tracking-wider text-xs rounded-xl transition-all duration-200 shadow-md"
                >
                  <MessageSquare className="w-4.5 h-4.5" />
                  Chat on WhatsApp
                </a>
                <a
                  href="mailto:info@thrinainasecurity.com?subject=Inquiry%20from%20Website"
                  className="flex items-center justify-center gap-2.5 w-full py-3.5 bg-security-blue hover:bg-blue-800 text-slate-100 font-bold uppercase tracking-wider text-xs rounded-xl transition-all duration-200 shadow-md"
                >
                  <Mail className="w-4.5 h-4.5" />
                  Direct Email Send
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Google Maps Embed widget */}
        <div className="mt-16 glass-panel p-2.5 border-slate-900 bg-[#0B192C] shadow-lg rounded-2xl overflow-hidden h-[400px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.2878772097943!2d78.5377018!3d17.4685886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9b2aac7b9ad5%3A0x9469d87d7a8ca688!2sThrinaina+Electronic+security+system!5e0!3m2!1sen!2sin!4v1718683000000"
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: '0.75rem' }}
            allowFullScreen=""
            loading="lazy"
            title="Thrinaina Electronic Security Systems location Map"
          />
        </div>
      </div>
    </div>
  );
}
