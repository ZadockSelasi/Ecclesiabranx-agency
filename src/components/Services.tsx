import { motion } from 'motion/react';
import { 
  Fingerprint, 
  Layers, 
  Megaphone, 
  Building2, 
  Briefcase, 
  Sparkles, 
  Printer, 
  Rocket
} from 'lucide-react';

const services = [
  {
    icon: Fingerprint,
    title: 'Brand Identity',
    items: ['Logo Design', 'Brand Guidelines', 'Visual Identity Systems', 'Packaging Design', 'Brand Strategy']
  },
  {
    icon: Layers,
    title: 'Graphic Design',
    items: ['Flyers & Posters', 'Social Media Designs', 'Business Cards', 'Company Profiles', 'Marketing Materials']
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    items: ['Social Media Marketing', 'Content Marketing', 'Ad Campaigns', 'Growth Strategy', 'Audience Engagement', 'Brand Awareness']
  },
  {
    icon: Building2,
    title: 'Business Registration',
    items: ['Company Registration', 'Business Name Registration', 'Startup Documentation', 'Legal Setup Assistance', 'Business Consultation']
  },
  {
    icon: Briefcase,
    title: 'Business Consultancy',
    items: ['Business Strategy', 'Market Analysis', 'Operations Consulting', 'Financial Advisory', 'Risk Management']
  },
  {
    icon: Sparkles,
    title: 'Creative Direction',
    items: ['Brand Positioning', 'Campaign Direction', 'Visual Storytelling', 'Marketing Concepts', 'Premium Experiences']
  },
  {
    icon: Printer,
    title: 'Printing & Materials',
    items: ['Banner Printing', 'Merchandise Branding', 'Packaging Production', 'Promotional Materials']
  },
  {
    icon: Rocket,
    title: 'Business Growth',
    items: ['Startup Branding', 'Online Presence Setup', 'Marketing Consultation', 'Digital Brand Expansion']
  }
];

export function Services() {
  return (
    <section className="py-32 px-6 md:px-12 bg-[#050505] relative overflow-hidden" id="services">
      {/* Background gradients for dark luxury glassmorphism */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-blue/10 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none -translate-x-1/3 translate-y-1/3" />

      <div className="max-w-[1400px] mx-auto relative z-10 w-full">
        <div className="mb-20 text-center flex flex-col items-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.2em] font-semibold text-brand-blue block mb-6 px-4 py-1.5 rounded-full border border-brand-blue/20 bg-brand-blue/5"
          >
            Capabilities
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white tracking-tight leading-[1.1] mb-6 max-w-4xl"
          >
            Building Brands That <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-emerald-400">Stand Out.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-white/60 font-light max-w-2xl leading-relaxed"
          >
            Ecclesiabranx helps businesses grow through branding, marketing, business setup, and digital presence.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: (Math.min(index, 3)) * 0.1 }}
                className="group relative p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-brand-blue/30 transition-all duration-500 cursor-hover backdrop-blur-xl flex flex-col h-full overflow-hidden"
              >
                {/* Hover Glow Effect inside card */}
                <div className="absolute top-0 left-0 w-full h-[200px] bg-gradient-to-b from-brand-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-brand-blue group-hover:border-brand-blue transition-all duration-500 relative z-10 shadow-lg shadow-black/20 group-hover:shadow-brand-blue/20">
                  <Icon className="w-6 h-6 text-white/70 group-hover:text-white transition-colors" />
                </div>
                
                <h3 className="text-2xl font-display font-medium text-white mb-6 group-hover:text-brand-blue transition-colors duration-300 relative z-10 tracking-tight">
                  {service.title}
                </h3>

                <ul className="flex flex-col gap-3 relative z-10 mt-auto">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-blue/50 group-hover:bg-brand-blue shrink-0 transition-colors" />
                      <span className="text-sm text-white/50 group-hover:text-white/80 transition-colors leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
