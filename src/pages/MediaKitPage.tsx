import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Download, Mail, Users, Target, ExternalLink } from 'lucide-react';
import { SITE_CONFIG } from '@/constants/config';

const PLATFORM_ICONS: Record<string, string> = {
  Instagram: "IG",
  TikTok: "TK",
  YouTube: "YT",
  Twitter: "TW",
  LinkedIn: "LI",
  Facebook: "FB"
};

const MediaKitPage = ({ isDarkMode, theme }: { isDarkMode: boolean, theme: any }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardHover = {
    y: -6,
    boxShadow: "0 20px 40px rgba(250, 208, 44, 0.08)",
    transition: { duration: 0.3, ease: "easeOut" }
  };

  return (
    <div className="min-h-screen bg-[#202121] text-white font-sans overflow-hidden">
      {/* Background Glow Effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#FAD02C]/10 rounded-full blur-[120px]" />
        <div className="absolute top-[40%] right-[-10%] w-[40%] h-[40%] bg-[#FAD02C]/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[20%] w-[60%] h-[60%] bg-[#FAD02C]/5 rounded-full blur-[120px]" />
      </div>

      <main className="relative z-10 pt-32 pb-24 px-6 max-w-7xl mx-auto">
        
        {/* A. Header & Hero Section */}
        <motion.section 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="text-center mb-32"
        >
          <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-3 mb-6">
            {SITE_CONFIG.brand.categories.map((cat, i) => (
              <span key={i} className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-xs font-bold tracking-widest text-[#FAD02C]">
                {cat.toUpperCase()}
              </span>
            ))}
          </motion.div>
          
          <motion.h1 variants={fadeInUp} className="text-6xl md:text-8xl font-black tracking-tighter mb-4">
            {SITE_CONFIG.brand.name}
          </motion.h1>
          <motion.h2 variants={fadeInUp} className="text-xl md:text-2xl font-medium tracking-[0.3em] text-white/60 mb-16 uppercase">
            {SITE_CONFIG.brand.subtitle}
          </motion.h2>

          <motion.div variants={fadeInUp} className="max-w-2xl mx-auto bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-10 shadow-[0_0_40px_rgba(250,208,44,0.05)]">
            <div className="text-5xl md:text-7xl font-black text-[#FAD02C] mb-4">{SITE_CONFIG.mediaKit.totalFollowers}</div>
            <div className="text-2xl font-bold mb-2">Total Pengikut</div>
            <p className="text-white/60 leading-relaxed">
              {SITE_CONFIG.mediaKit.growthDescription}
            </p>
          </motion.div>
        </motion.section>

        {/* B. Jangkauan Sosial Media */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-32"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="text-2xl font-black text-white/80">Jangkauan Sosial Media</h2>
          </motion.div>
          
          <div className="flex flex-wrap justify-center gap-6">
            {SITE_CONFIG.socials.map((social, i) => (
              <motion.a
                key={i}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={cardHover}
                className="bg-white/5 border border-white/10 backdrop-blur-md p-8 rounded-3xl hover:bg-white/8 transition-colors group w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] min-w-[280px]"
              >
                <div className="flex justify-between items-start mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center font-black text-[#FAD02C] group-hover:bg-[#FAD02C]/10 transition-colors">
                    {PLATFORM_ICONS[social.platform] || social.platform.substring(0, 2).toUpperCase()}
                  </div>
                  <ExternalLink className="w-4 h-4 text-white/20 group-hover:text-[#FAD02C] transition-colors" />
                </div>
                <h4 className="text-3xl font-black mb-1">{social.followers}</h4>
                <div className="font-bold text-white/80 mb-1">Pengikut {social.platform}</div>
                <div className="text-sm text-white/50">{social.handle}</div>
              </motion.a>
            ))}
          </div>
        </motion.section>

        {/* C. Tentang Kami */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-32 grid lg:grid-cols-2 gap-16 items-center"
        >
          <motion.div variants={fadeInUp}>
            <h3 className="text-[#FAD02C] text-sm font-bold tracking-widest uppercase mb-4">Tentang Kami</h3>
            <h2 className="text-4xl md:text-5xl font-black leading-tight mb-6">
              Inti Kreatif Telkom University
            </h2>
            <p className="text-lg text-white/70 leading-relaxed mb-8">
              Uni-Inside adalah mesin budaya yang digerakkan oleh Telkom University, menjembatani kesenjangan antara inovasi kampus dan keunggulan komersial. Kami tidak hanya mengikuti tren — kami menciptakannya dengan memahami apa yang benar-benar diinginkan generasi berikutnya.
            </p>
          </motion.div>

          <motion.div variants={staggerContainer} className="space-y-6">
            <motion.div variants={fadeInUp} whileHover={cardHover} className="bg-white/5 border border-white/10 backdrop-blur-md p-6 rounded-2xl flex gap-5">
              <div className="w-12 h-12 rounded-full bg-[#FAD02C]/10 flex items-center justify-center shrink-0">
                <Users className="w-6 h-6 text-[#FAD02C]" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Perspektif Generasi Baru</h4>
                <p className="text-white/60">Berbicara dalam bahasa Gen-Z dengan storytelling autentik dan dampak visual yang kuat.</p>
              </div>
            </motion.div>
            
            <motion.div variants={fadeInUp} whileHover={cardHover} className="bg-white/5 border border-white/10 backdrop-blur-md p-6 rounded-2xl flex gap-5">
              <div className="w-12 h-12 rounded-full bg-[#FAD02C]/10 flex items-center justify-center shrink-0">
                <Target className="w-6 h-6 text-[#FAD02C]" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Strategi Digital-First</h4>
                <p className="text-white/60">Kampanye yang dirancang untuk dialami secara mulus di seluruh platform digital modern.</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* D. Partner Kami */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-32"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="text-2xl font-black text-white/80">Partner Kami</h2>
          </motion.div>
          
          <div className="flex flex-wrap justify-center gap-6">
            {SITE_CONFIG.partners.map((partner, i) => (
              <motion.a
                key={i}
                href={partner.link}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={cardHover}
                className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl p-8 group hover:bg-white/8 transition-colors w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] min-w-[280px]"
              >
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center font-black text-2xl text-[#FAD02C] mb-5 group-hover:bg-[#FAD02C]/10 transition-colors">
                  {partner.logo}
                </div>
                <h4 className="text-xl font-bold mb-2 group-hover:text-[#FAD02C] transition-colors">{partner.name}</h4>
                <p className="text-sm text-white/50 leading-relaxed">{partner.description}</p>
              </motion.a>
            ))}
          </div>
        </motion.section>

        {/* E. Ajakan Bertindak */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center bg-white/5 border border-white/10 backdrop-blur-xl p-16 rounded-[3rem] relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#FAD02C]/5 to-transparent pointer-events-none" />
          
          <motion.div variants={fadeInUp} className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-black mb-10">
              Siap menjangkau<br/>generasi berikutnya?
            </h2>
            <div className="flex flex-wrap justify-center gap-5">
              <button className="px-8 py-4 rounded-full bg-[#FAD02C] text-[#202121] font-bold hover:brightness-110 transition-all flex items-center gap-2 shadow-[0_0_30px_rgba(250,208,44,0.3)]">
                <Download className="w-5 h-5" /> Unduh Media Kit (PDF)
              </button>
              <button 
                onClick={() => window.location.href = `mailto:${SITE_CONFIG.brand.email}`}
                className="px-8 py-4 rounded-full bg-white/10 text-white font-bold hover:bg-white/20 border border-white/20 transition-all flex items-center gap-2"
              >
                <Mail className="w-5 h-5" /> Hubungi Kami
              </button>
            </div>
          </motion.div>
        </motion.section>

      </main>
    </div>
  );
};

export default MediaKitPage;
