import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Veloz Shop',
    category: 'E-Commerce / UI/UX',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=2000',
    color: 'from-orange-500/20 to-red-500/20'
  },
  {
    title: 'Ecclesiabranx',
    category: 'Agency Branding',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=2000',
    color: 'from-brand-blue/20 to-brand-purple/20'
  },
  {
    title: 'Hostel Matrix',
    category: 'Management System',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=2000',
    color: 'from-emerald-500/20 to-teal-500/20'
  },
  {
    title: 'EdTech Pro',
    category: 'Education Platform',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=2000',
    color: 'from-blue-500/20 to-indigo-500/20'
  }
];

export function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <section ref={containerRef} className="py-32 px-6 md:px-12 bg-brand-dark" id="work">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 flex justify-between items-end">
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-emerald-950 tracking-tighter"
            >
              Selected Work
            </motion.h2>
          </div>
          <motion.button 
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="hidden md:flex items-center gap-2 text-zinc-400 hover:text-emerald-950 transition-colors uppercase tracking-widest text-sm font-mono cursor-hover group"
          >
            View All Archive <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => {
            return (
              <motion.div 
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative overflow-hidden rounded-2xl group cursor-hover aspect-[4/3] md:aspect-square lg:aspect-[4/3]"
              >
                {/* Image Background */}
                <div 
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700" 
                  style={{ backgroundImage: `url(${project.image})` }} 
                />
                
                {/* Gradient Overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/20 to-transparent z-10" />
                <div className={`absolute inset-0 bg-gradient-to-tr ${project.color} mix-blend-overlay z-10`} />
                
                {/* Content Overlay */}
                <div className="absolute bottom-6 left-6 right-6 z-20 flex flex-col items-start text-left">
                  <span className="px-2 py-1 bg-brand-blue text-white text-[8px] uppercase tracking-widest rounded-sm font-mono mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-emerald-950 mb-2 group-hover:-translate-y-1 transition-transform duration-300">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 group-hover:-translate-y-1 transition-transform duration-300 delay-75">
                    <span className="text-xs text-emerald-950/60">Explore Case Study</span>
                    <ArrowUpRight className="w-4 h-4 text-emerald-950/60 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
