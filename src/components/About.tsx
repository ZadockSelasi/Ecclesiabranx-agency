import { motion } from 'motion/react';
import { Globe, Lightbulb, Zap } from 'lucide-react';

const OVERLAY_VARIANTS = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export function About() {
  return (
    <section className="relative py-32 px-6 md:px-12 bg-white overflow-hidden" id="about">
      {/* Background gradients */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-brand-purple/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left: Typography */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ staggerChildren: 0.2 }}
            className="space-y-8"
          >
            <motion.h2 variants={OVERLAY_VARIANTS} className="text-5xl md:text-6xl font-display font-bold leading-tight tracking-tight">
              A Next-Generation <br/>
              <span className="text-emerald-950/60">Creative & Tech Hub.</span>
            </motion.h2>
            
            <motion.p variants={OVERLAY_VARIANTS} className="text-lg text-emerald-950/60 font-light leading-relaxed max-w-md">
              Based in Ghana with a global vision. We merge dark luxury aesthetics with high-performance digital engineering to build brands that defy the ordinary and define the future.
            </motion.p>
            
            <motion.div variants={OVERLAY_VARIANTS} className="grid grid-cols-3 gap-4 border-t border-emerald-950/10 pt-8 mt-8">
              <div>
                <h4 className="text-2xl font-bold text-emerald-950 tracking-tight">120+</h4>
                <p className="text-[10px] text-emerald-950/40 uppercase tracking-widest mt-1 font-mono">Projects Done</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-emerald-950 tracking-tight">15+</h4>
                <p className="text-[10px] text-emerald-950/40 uppercase tracking-widest mt-1 font-mono">Awards Won</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-emerald-950 tracking-tight">Ghana</h4>
                <p className="text-[10px] text-emerald-950/40 uppercase tracking-widest mt-1 font-mono">Base Location</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Floating Cards */}
          <div className="relative h-[500px] w-full hidden md:block">
            <motion.div
              initial={{ opacity: 0, y: 100, rotate: -5 }}
              whileInView={{ opacity: 1, y: 0, rotate: -2 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-10 left-0 w-64 p-6 bg-emerald-50/80 backdrop-blur-xl border border-emerald-200 rounded-2xl shadow-2xl cursor-hover z-20 hover:scale-105 transition-transform"
            >
              <Zap className="w-8 h-8 text-brand-blue mb-4" />
              <h3 className="text-lg font-medium text-emerald-950 mb-2">Digital Engineering</h3>
              <p className="text-sm text-zinc-400">High-performance applications built for speed and scale.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100, rotate: 5 }}
              whileInView={{ opacity: 1, x: 0, rotate: 4 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-40 right-0 w-72 p-6 bg-emerald-50/90 backdrop-blur-xl border border-emerald-200 rounded-2xl shadow-2xl cursor-hover z-10 hover:scale-105 transition-transform"
            >
               <Globe className="w-8 h-8 text-brand-purple mb-4" />
              <h3 className="text-lg font-medium text-emerald-950 mb-2">Global Vision</h3>
              <p className="text-sm text-zinc-400">Crafting experiences that resonate across borders and cultures.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -50, x: -50 }}
              whileInView={{ opacity: 1, y: 0, x: 0, rotate: -8 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="absolute bottom-20 left-20 w-60 p-6 bg-emerald-100 backdrop-blur-xl border border-emerald-200 rounded-2xl shadow-2xl cursor-hover z-30 flex gap-4 items-center hover:scale-105 transition-transform"
            >
              <div className="w-12 h-12 rounded-full bg-emerald-950/5 flex items-center justify-center shrink-0">
                <Lightbulb className="w-6 h-6 text-emerald-950" />
              </div>
              <p className="text-sm font-medium text-emerald-950">Continuous Innovation</p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
