import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
// Since TikTok and WhatsApp are not in standard Lucide gracefully without specialized icons, we'll use text or generic replacements. Or custom SVG.
// Assuming lucide-react has some, or we can use text.

export function Contact() {
  const socials = [
    { name: 'Instagram', label: 'IG', link: 'https://www.instagram.com/eccl.esiabranx?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' },
    { name: 'TikTok', label: 'TK', link: '#' },
    { name: 'WhatsApp', label: 'WA', link: 'https://whatsapp.com/channel/0029VbBlenaA2pL79M9CIn3D' },
  ];

  return (
    <section className="relative py-32 px-6 md:px-12 bg-[#050505] min-h-[90vh] flex flex-col justify-center overflow-hidden" id="contact">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-blue/10 rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/3" />

      <div className="max-w-[1400px] mx-auto w-full grid lg:grid-cols-2 gap-16 relative z-10">
        
        {/* Left: Copy & Connect */}
        <div className="flex flex-col justify-between">
          <div className="mb-16 lg:mb-0">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-[80px] lg:text-[96px] font-display font-bold leading-[1.05] tracking-tighter mb-8 text-white max-w-xl"
            >
              Let’s Build <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-emerald-400">Something Powerful.</span>
            </motion.h2>
            <motion.p 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg md:text-xl text-white/60 font-light max-w-md leading-relaxed"
            >
              Ready to grow your brand, launch your business, or elevate your marketing? Let’s work together.
            </motion.p>
          </div>

          <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-10 mt-12"
          >
            <div>
              <span className="text-xs text-white/40 uppercase tracking-[0.2em] block mb-4">Direct Contact</span>
              <a href="mailto:ecclesiabranx@gmail.com" className="group flex items-center gap-4 text-2xl md:text-4xl font-display font-medium text-white hover:text-brand-blue transition-colors duration-500 cursor-hover w-fit">
                ecclesiabranx@gmail.com
                <ArrowRight className="w-6 h-6 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500" />
              </a>
            </div>

            <div>
              <span className="text-xs text-white/40 uppercase tracking-[0.2em] block mb-6">Social Network</span>
              <div className="flex flex-wrap gap-4">
                {socials.map((platform, idx) => (
                  <a 
                    key={idx} 
                    href={platform.link} 
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={platform.name}
                    className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-sm text-white/60 hover:text-white hover:border-brand-blue hover:bg-brand-blue/10 hover:shadow-[0_0_20px_rgba(37,99,235,0.2)] transition-all duration-500 font-mono tracking-wider cursor-hover backdrop-blur-sm"
                  >
                    {platform.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right: Premium Form */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative group lg:mt-12"
        >
          {/* Glassmorphism Container */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-white/[0.01] rounded-[2rem] border border-white/5 backdrop-blur-2xl pointer-events-none" />
          
          <form 
            className="relative p-8 md:p-12 flex flex-col gap-8 z-10"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you for reaching out! We'll get back to you soon.");
              e.currentTarget.reset();
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-3 group/input">
                <label className="text-xs font-mono text-white/40 uppercase tracking-[0.15em] group-focus-within/input:text-brand-blue transition-colors">Full Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="John Doe"
                  className="bg-transparent border-b border-white/10 py-3 text-lg text-white placeholder:text-white/20 focus:outline-none focus:border-brand-blue transition-all cursor-hover"
                />
              </div>
              <div className="flex flex-col gap-3 group/input">
                <label className="text-xs font-mono text-white/40 uppercase tracking-[0.15em] group-focus-within/input:text-brand-blue transition-colors">Business Name</label>
                <input 
                  type="text" 
                  placeholder="Your Company"
                  className="bg-transparent border-b border-white/10 py-3 text-lg text-white placeholder:text-white/20 focus:outline-none focus:border-brand-blue transition-all cursor-hover"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-3 group/input">
                <label className="text-xs font-mono text-white/40 uppercase tracking-[0.15em] group-focus-within/input:text-brand-blue transition-colors">Email Address</label>
                <input 
                  type="email" 
                  required
                  placeholder="john@company.com"
                  className="bg-transparent border-b border-white/10 py-3 text-lg text-white placeholder:text-white/20 focus:outline-none focus:border-brand-blue transition-all cursor-hover"
                />
              </div>
              <div className="flex flex-col gap-3 group/input">
                <label className="text-xs font-mono text-white/40 uppercase tracking-[0.15em] group-focus-within/input:text-brand-blue transition-colors">Service Needed</label>
                <select required className="bg-transparent border-b border-white/10 py-3 text-lg text-white/60 focus:text-white focus:outline-none focus:border-brand-blue transition-all cursor-hover appearance-none">
                  <option value="" className="bg-[#050505] text-white">Select a service...</option>
                  <option value="branding" className="bg-[#050505] text-white">Brand Identity</option>
                  <option value="digital-marketing" className="bg-[#050505] text-white">Digital Marketing</option>
                  <option value="business-consultancy" className="bg-[#050505] text-white">Business Consultancy</option>
                  <option value="business-setup" className="bg-[#050505] text-white">Business Registration</option>
                  <option value="other" className="bg-[#050505] text-white">Other</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-3 group/input mt-4">
              <label className="text-xs font-mono text-white/40 uppercase tracking-[0.15em] group-focus-within/input:text-brand-blue transition-colors">Message</label>
              <textarea 
                required
                placeholder="Tell us about the project you want to build..."
                rows={4}
                className="bg-transparent border-b border-white/10 py-3 text-lg text-white placeholder:text-white/20 focus:outline-none focus:border-brand-blue transition-all resize-none cursor-hover"
              />
            </div>

            <button type="submit" className="group/btn mt-8 w-full md:w-auto self-start flex items-center justify-center bg-white text-black px-10 py-5 rounded-full font-medium hover:bg-brand-blue hover:text-white hover:shadow-[0_0_30px_rgba(37,99,235,0.3)] transition-all duration-500 cursor-hover relative overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                Start Your Brand Journey
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
              </span>
            </button>
          </form>
        </motion.div>

      </div>
      
    </section>
  );
}
