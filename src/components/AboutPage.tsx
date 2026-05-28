import { motion } from 'motion/react';
import { ArrowRight, Lightbulb, TrendingUp, ShieldCheck, Target, Zap, Globe, Linkedin, Twitter } from 'lucide-react';

const teamMembers = [
  { name: "Nana Kwame Appiah", role: "Co-Founder", desc: "Recognized for influential leadership and strategic vision, driving market positioning.", img: "/Nana Kwame Appiah.jpeg" },
  { name: "Zadock Selasi", role: "Founder", desc: "Passionate about technology and innovation. Engineers scalable digital experiences.", img: "/Zadock Selasi.jpeg" },
  { name: "Ama Dufie Winnifred", role: "CEO", desc: "Guiding the company's vision and ensuring sustainable growth in African markets.", img: "/Ama Dufie Winnifred.jpeg" },
  { name: "Daniel Danso", role: "Design Head", desc: "Crafting visually compelling identities that elevate brands globally.", img: "/Daniel Danso.jpeg" },
  { name: "Stephen", role: "Designer", desc: "Translating complex ideas into intuitive and elegant design solutions.", img: "/Stephen.jpeg" },
  { name: "Padmond", role: "Marketing Head", desc: "Developing data-driven strategies to maximize brand reach and ROI.", img: "/Padmond.jpeg" },
  { name: "Princess Awuah", role: "Marketer", desc: "Executing high-impact marketing campaigns across diverse platforms.", img: "/Princess Awuah.jpeg" },
  { name: "Abigail Akorfa", role: "Marketer", desc: "Connecting with audiences through authentic and engagement-focused marketing.", img: "/Abigail Akorfa.jpeg" },
  { name: "Nhyira Kwartengmaa", role: "Financial Lead & Secretary", desc: "Ensuring financial prudence and operational compliance across the agency.", img: "/Nhyira Kwartengmaa.jpeg" }
];

const OVERLAY_VARIANTS = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const STAGGER_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export function AboutPage() {
  return (
    <div className="pt-24 bg-brand-dark min-h-screen text-emerald-950">
      
      {/* Hero Section */}
      <section className="relative py-32 px-6 md:px-12 bg-brand-dark text-emerald-950 overflow-hidden min-h-[60vh] flex flex-col justify-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-purple/10 via-brand-dark to-brand-dark pointer-events-none" />
        <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-[120px] pointer-events-none translate-x-1/2 -translate-y-1/2" />
        
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={STAGGER_CONTAINER}
            className="max-w-3xl"
          >
            <motion.h1 variants={OVERLAY_VARIANTS} className="text-5xl md:text-7xl font-display font-bold leading-tight tracking-tight mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple">Ecclesiabranx</span>
            </motion.h1>
            <motion.p variants={OVERLAY_VARIANTS} className="text-xl text-emerald-950/70 font-light leading-relaxed">
              Building African businesses through creativity, innovation, and strategic engineering. We transform visionary ideas into globally competitive realities.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={STAGGER_CONTAINER}
            >
              <motion.span variants={OVERLAY_VARIANTS} className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-blue mb-4 block">The Genesis</motion.span>
              <motion.h2 variants={OVERLAY_VARIANTS} className="text-4xl md:text-5xl font-display font-bold text-emerald-950 mb-8">
                From Design Agency to Growth Engine.
              </motion.h2>
              <div className="space-y-6 text-emerald-950/70 text-lg font-light leading-relaxed">
                <motion.p variants={OVERLAY_VARIANTS}>
                  Ecclesiabranx started its journey in October 2024 as "Ecclesia Brands", originally operating as a creative design agency heavily focused on branding and visual identity.
                </motion.p>
                <motion.p variants={OVERLAY_VARIANTS}>
                  Over time, our founders observed a critical gap: many startups and businesses in Africa struggled not only to build strong identities and stand out, but also to grow strategically and establish legal recognition. Good design wasn't enough; businesses needed holistic solutions.
                </motion.p>
                <motion.p variants={OVERLAY_VARIANTS}>
                  This realization inspired our transition into <strong>Ecclesiabranx</strong> — a comprehensive technology and consulting hub focused on business growth, advanced branding, strategic consultancy, legal frameworks, and digital solutions serving Ghana and the broader African market.
                </motion.p>
              </div>
            </motion.div>
            
            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
               viewport={{ once: true }}
               className="relative h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/20 to-brand-purple/20 mix-blend-overlay z-10" />
              <img src="/gen.jpeg" alt="Creative engineering" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 px-6 md:px-12 bg-emerald-50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-emerald-950 mb-6">Our Mission Array</h2>
            <p className="text-lg text-emerald-950/70 font-light">
              We empower African businesses to achieve global standards through a multi-dimensional approach to growth.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Brand Identity", icon: Target, desc: "Building recognizable and deeply resonant brand aesthetics." },
              { title: "Business Consultancy", icon: TrendingUp, desc: "Strategic operational frameworks for sustainable scaling." },
              { title: "Tech-Driven Growth", icon: Zap, desc: "Deploying high-performance digital engineering to optimize reach." },
              { title: "Professional Legality", icon: ShieldCheck, desc: "Establishing proper regulatory and professional compliance." },
              { title: "African Empowerment", icon: Globe, desc: "Elevating local ventures to compete seamlessly in global markets." },
              { title: "Creative Innovation", icon: Lightbulb, desc: "Infusing unique, disruptive ideas into traditional industries." }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  className="bg-white p-8 rounded-3xl shadow-sm border border-emerald-950/5 hover:border-brand-blue/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-2xl bg-brand-blue/10 flex items-center justify-center mb-6 text-brand-blue">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-emerald-950 mb-3">{item.title}</h3>
                  <p className="text-emerald-950/60 leading-relaxed font-light">{item.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Collage & Members Section */}
      <section className="py-24 px-6 md:px-12 bg-white text-emerald-950 relative overflow-hidden">
        {/* Soft glowing background similar to the image's blur transition but adapted for light mode */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-gradient-to-r from-brand-blue/10 via-brand-purple/10 to-emerald-500/10 blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Creative Collage */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-6">Meet our Team</h2>
            <p className="text-xl text-emerald-950/70 font-light">
              A diverse team of passionate professionals with unique skills driving innovation and excellence in every project.
            </p>
          </div>

          {/* Collage Grid */}
          <div className="flex justify-center items-center gap-4 md:gap-8 mb-32 max-w-5xl mx-auto pt-8 pb-16">
             {/* Left Column */}
             <div className="flex flex-col gap-4 md:gap-8 translate-y-8">
               <motion.div 
                 initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                 className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden"
               >
                 <img src={teamMembers[0].img} alt="" className="w-full h-full object-cover" />
               </motion.div>
               <motion.div 
                 initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
                 className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden"
               >
                 <img src={teamMembers[4].img} alt="" className="w-full h-full object-cover" />
               </motion.div>
             </div>

             {/* Middle Column */}
             <div className="flex flex-col gap-4 md:gap-8 -translate-y-8">
               <motion.div 
                 initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
                 className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden self-center"
               >
                 <img src={teamMembers[2].img} alt="" className="w-full h-full object-cover" />
               </motion.div>
               <motion.div 
                 initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}
                 className="w-40 h-56 md:w-56 md:h-72 rounded-[100px] overflow-hidden self-center"
               >
                 <img src={teamMembers[3].img} alt="" className="w-full h-full object-cover" />
               </motion.div>
             </div>

             {/* Right Column */}
             <div className="flex flex-col gap-4 md:gap-8 translate-y-12">
               <motion.div 
                 initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }}
                 className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden"
               >
                 <img src={teamMembers[1].img} alt="" className="w-full h-full object-cover" />
               </motion.div>
               <motion.div 
                 initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.5 }}
                 className="w-32 h-48 md:w-48 md:h-64 rounded-[100px] overflow-hidden"
               >
                 <img src={teamMembers[5].img} alt="" className="w-full h-full object-cover" />
               </motion.div>
             </div>
          </div>

          {/* Detailed Team Grid */}
          <div className="text-center max-w-3xl mx-auto mb-16 pt-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">The Ecclesiabranx Team</h2>
            <p className="text-lg text-emerald-950/70 font-light">
              A diverse group of passionate professionals, each bringing unique skills and experiences to drive innovation and excellence in every project we undertake.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {teamMembers.map((member, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col bg-emerald-50/50 border border-emerald-950/10 p-6 rounded-3xl hover:bg-emerald-50 transition-colors"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden mb-5 border border-emerald-950/10 p-1">
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                </div>
                <h4 className="text-xl font-bold mb-1 text-emerald-950">{member.name}</h4>
                <p className="text-xs font-mono tracking-wider text-brand-blue mb-4 uppercase">{member.role}</p>
                <p className="text-sm text-emerald-950/60 font-light leading-relaxed mb-6 flex-grow">{member.desc}</p>
                <div className="flex gap-4">
                  <a href="#" className="text-emerald-950/40 hover:text-emerald-950 transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href="#" className="text-emerald-950/40 hover:text-emerald-950 transition-colors">
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a href="#" className="text-emerald-950/40 hover:text-emerald-950 transition-colors">
                    <Globe className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
