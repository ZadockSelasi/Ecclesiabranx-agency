import { motion } from 'motion/react';

const stats = [
  { value: '01', title: 'Creative Innovation', text: 'We don’t follow trends; we set them. Our designs are engineered to be bold, immersive, and unforgettable.' },
  { value: '02', title: 'Modern Technology', text: 'Utilizing the latest stacks (React, Next.js, Motion) to deliver blazing fast, highly interactive experiences.' },
  { value: '03', title: 'Youth-Driven Vision', text: 'Led by a fresh perspective, we bring energetic, out-of-the-box thinking to every campaign and digital product.' },
  { value: '04', title: 'Global Ambition', text: 'Rooted in Ghana, built for the world. We craft digital experiences capable of competing on the global stage.' }
];

export function WhyChooseUs() {
  return (
    <section className="py-32 px-6 md:px-12 bg-white border-t border-emerald-950/10" id="why-us">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        <div className="w-full lg:w-1/3 sticky top-32 h-fit">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-medium text-emerald-950 mb-6"
          >
            The <span className="text-emerald-950/40">Ecclesiabranx</span> Edge.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-emerald-950/60 font-light"
          >
            Why industry leaders choose us to define their digital presence and scale their brands.
          </motion.p>
        </div>

        <div className="w-full lg:w-2/3 flex flex-col gap-12">
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.value}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex gap-6 md:gap-12 group cursor-hover border-b border-emerald-950/10 pb-12 last:border-0 last:pb-0"
            >
              <div className="text-3xl md:text-5xl font-mono font-bold text-emerald-950/20 group-hover:text-brand-blue transition-colors duration-500 shrink-0">
                {stat.value}
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold tracking-tight text-emerald-950 mb-3 group-hover:translate-x-2 transition-transform duration-300">
                  {stat.title}
                </h3>
                <p className="text-emerald-950/50 leading-relaxed text-lg font-light max-w-xl group-hover:text-emerald-950/80 transition-colors">
                  {stat.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
