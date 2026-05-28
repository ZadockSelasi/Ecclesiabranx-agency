import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useRef } from 'react';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden flex flex-col justify-center items-start">
      {/* Animated Background Elements */}
      <motion.div style={{ y, scale, opacity }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-purple/10 via-brand-dark to-brand-dark" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl mix-blend-multiply animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-brand-purple/5 rounded-full blur-3xl mix-blend-multiply animate-pulse delay-1000" />
      </motion.div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:40px_40px] [mask-image:linear-gradient(to_bottom,black,transparent_80%)] opacity-50" />

      {/* Content */}
      <div className="relative z-10 w-full px-6 sm:px-8 md:px-16 lg:px-32 flex flex-col items-start text-left mt-20 max-w-7xl">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-brand-blue text-xs font-mono mb-4 block uppercase tracking-widest"
        >
          // Digital Innovation Agency
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-[3.5rem] leading-[1] sm:text-6xl md:text-[80px] lg:text-[110px] xl:text-[130px] font-display font-bold tracking-tighter sm:leading-[0.85] mb-6 -ml-1 md:-ml-2"
        >
          Building Brands.<br />
          Designing <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple">Future.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-md text-lg text-emerald-950/60 font-light mb-12 leading-relaxed"
        >
          Ecclesiabranx helps businesses grow through branding, marketing, design, and AI integration. We are a next-gen creative hub with global vision.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
        >
          <button className="px-8 py-4 bg-brand-blue text-white rounded-sm font-semibold hover:bg-emerald-600 transition-all cursor-hover cursor-none">
            Explore Our Work
          </button>
          
          <div className="flex items-center gap-2 px-4 group cursor-hover mt-4 sm:mt-0">
            <div className="w-10 h-10 border border-emerald-950/20 rounded-full flex items-center justify-center group-hover:border-brand-blue transition-colors">
              <span className="text-sm text-emerald-950">→</span>
            </div>
            <span className="text-xs uppercase tracking-widest text-emerald-950">Watch Showreel</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-zinc-500 to-transparent relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full h-full bg-white"
            initial={{ y: '-100%' }}
            animate={{ y: '100%' }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
          />
        </div>
        <span className="text-xs font-mono text-zinc-500 tracking-widest uppercase">Scroll</span>
      </motion.div>
    </section>
  );
}
