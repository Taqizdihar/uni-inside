import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Download, Mail, Users, Target, ExternalLink, MessageCircle, Instagram, Youtube, Linkedin, Facebook } from 'lucide-react';
import { AnimatePresence } from 'motion/react';
import { SITE_CONFIG } from '@/constants/config';
import logoDark from '../assets/logo/dark.png';
import logoNormal from '../assets/logo/normal.png';

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const XIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.49h2.039L6.486 3.24H4.298l13.311 17.403z"/>
  </svg>
);

const PLATFORM_ICONS: Record<string, any> = {
  instagram: Instagram,
  tiktok: TikTokIcon,
  youtube: Youtube,
  linkedin: Linkedin,
  facebook: Facebook,
  x: XIcon,
  twitter: XIcon
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
    <div className={`min-h-screen ${theme.bg} ${theme.text} font-sans overflow-hidden transition-colors duration-500`}>
      {/* Background Glow Effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className={`absolute top-[-20%] left-[-10%] w-[50%] h-[50%] ${isDarkMode ? 'bg-[#FAD02C]/10' : 'bg-[#FAD02C]/20'} rounded-full blur-[120px] transition-colors duration-500`} />
        <div className={`absolute top-[40%] right-[-10%] w-[40%] h-[40%] ${isDarkMode ? 'bg-[#FAD02C]/5' : 'bg-[#FAD02C]/15'} rounded-full blur-[100px] transition-colors duration-500`} />
        <div className={`absolute bottom-[-10%] left-[20%] w-[60%] h-[60%] ${isDarkMode ? 'bg-[#FAD02C]/5' : 'bg-[#FAD02C]/15'} rounded-full blur-[120px] transition-colors duration-500`} />
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
              <span key={i} className={`px-4 py-1.5 rounded-full ${theme.cardBg} border ${theme.border} backdrop-blur-md text-xs font-bold tracking-widest ${theme.textYellow}`}>
                {cat.toUpperCase()}
              </span>
            ))}
          </motion.div>
          
          <motion.div variants={fadeInUp} className="flex justify-center mb-8">
            <AnimatePresence mode="wait">
              <motion.img 
                key={isDarkMode ? 'dark' : 'light'}
                src={isDarkMode ? logoNormal : logoDark} 
                alt="Uni-Inside Logo" 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="h-72 w-auto object-contain"
              />
            </AnimatePresence>
          </motion.div>

          <motion.h1 variants={fadeInUp} className="text-6xl md:text-8xl font-black tracking-tighter mb-4">
            {SITE_CONFIG.brand.name}
          </motion.h1>
          <motion.h2 variants={fadeInUp} className={`text-xl md:text-2xl font-medium tracking-[0.3em] ${theme.textMuted} mb-16 uppercase`}>
            {SITE_CONFIG.brand.subtitle}
          </motion.h2>

          <motion.div variants={fadeInUp} className={`max-w-2xl mx-auto ${theme.cardBg} border ${theme.border} backdrop-blur-xl rounded-3xl p-10 ${isDarkMode ? 'shadow-[0_0_40px_rgba(250,208,44,0.05)]' : 'shadow-xl shadow-black/5'}`}>
            <div className={`text-5xl md:text-7xl font-black ${theme.textYellow} mb-4`}>{SITE_CONFIG.mediaKit.totalFollowers}</div>
            <div className="text-2xl font-bold mb-2">Total Pengikut</div>
            <p className={`${theme.textMuted} leading-relaxed`}>
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
            <h2 className="text-2xl font-black">Jangkauan Sosial Media</h2>
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
                className={`${theme.cardBg} border ${theme.border} backdrop-blur-md p-8 rounded-3xl ${theme.cardHover} transition-colors group w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] min-w-[280px]`}
              >
                <div className="flex justify-between items-start mb-8">
                  <div className={`w-12 h-12 rounded-2xl ${isDarkMode ? 'bg-white/5' : 'bg-black/5'} border ${theme.border} flex items-center justify-center font-black ${theme.textYellow} group-hover:bg-[#FAD02C]/10 transition-colors`}>
                    {PLATFORM_ICONS[social.platform.toLowerCase()] ? (
                      React.createElement(PLATFORM_ICONS[social.platform.toLowerCase()], { className: "w-6 h-6" })
                    ) : (
                      social.platform.substring(0, 2).toUpperCase()
                    )}
                  </div>
                  <ExternalLink className={`w-4 h-4 ${theme.textMuted} group-hover:${theme.textYellow} transition-colors`} />
                </div>
                <h4 className="text-3xl font-black mb-1">{social.followers}</h4>
                <div className="font-bold mb-1">Pengikut {social.platform}</div>
                <div className={`text-sm ${theme.textMuted}`}>{social.handle}</div>
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
            <h3 className={`${theme.textYellow} text-sm font-bold tracking-widest uppercase mb-4`}>Tentang Kami</h3>
            <h2 className="text-4xl md:text-5xl font-black leading-tight mb-6">
              Inti Kreatif Telkom University
            </h2>
            <p className={`text-lg ${theme.textMuted} leading-relaxed mb-8`}>
              Uni-Inside adalah mesin budaya yang digerakkan oleh Telkom University, menjembatani kesenjangan antara inovasi kampus dan keunggulan komersial. Kami tidak hanya mengikuti tren — kami menciptakannya dengan memahami apa yang benar-benar diinginkan generasi berikutnya.
            </p>
          </motion.div>

          <motion.div variants={staggerContainer} className="space-y-6">
            <motion.div variants={fadeInUp} whileHover={cardHover} className={`${theme.cardBg} border ${theme.border} backdrop-blur-md p-6 rounded-2xl flex gap-5`}>
              <div className={`w-12 h-12 rounded-full ${isDarkMode ? 'bg-[#FAD02C]/10' : 'bg-[#FAD02C]/20'} flex items-center justify-center shrink-0`}>
                <Users className={`w-6 h-6 ${theme.textYellow}`} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Perspektif Generasi Baru</h4>
                <p className={theme.textMuted}>Berbicara dalam bahasa Gen-Z dengan storytelling autentik dan dampak visual yang kuat.</p>
              </div>
            </motion.div>
            
            <motion.div variants={fadeInUp} whileHover={cardHover} className={`${theme.cardBg} border ${theme.border} backdrop-blur-md p-6 rounded-2xl flex gap-5`}>
              <div className={`w-12 h-12 rounded-full ${isDarkMode ? 'bg-[#FAD02C]/10' : 'bg-[#FAD02C]/20'} flex items-center justify-center shrink-0`}>
                <Target className={`w-6 h-6 ${theme.textYellow}`} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Strategi Digital-First</h4>
                <p className={theme.textMuted}>Kampanye yang dirancang untuk dialami secara mulus di seluruh platform digital modern.</p>
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
            <h2 className="text-2xl font-black">Partner Kami</h2>
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
                className={`${theme.cardBg} border ${theme.border} backdrop-blur-sm rounded-2xl p-8 group ${theme.cardHover} transition-colors w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] min-w-[280px] flex flex-col items-center text-center`}
              >
                <div className={`w-24 h-24 rounded-2xl ${isDarkMode ? 'bg-white/5' : 'bg-black/5'} border ${theme.border} flex items-center justify-center font-black text-2xl ${theme.textYellow} mb-5 group-hover:bg-[#FAD02C]/10 transition-colors overflow-hidden`}>
                  {/\.(jpeg|jpg|gif|png|svg|webp)$/i.test(partner.logo) ? (
                    <img 
                      src={new URL(`../assets/partners/${partner.logo}`, import.meta.url).href} 
                      alt={partner.name} 
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                        (e.target as HTMLImageElement).parentElement!.innerText = partner.logo.substring(0, 2).toUpperCase();
                      }}
                    />
                  ) : (
                    partner.logo
                  )}
                </div>
                <h4 className={`text-xl font-bold mb-2 group-hover:${theme.textYellow} transition-colors`}>{partner.name}</h4>
                <p className={`text-sm ${theme.textMuted} leading-relaxed`}>{partner.description}</p>
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
          className={`text-center ${theme.cardBg} border ${theme.border} backdrop-blur-xl p-16 rounded-[3rem] relative overflow-hidden`}
        >
          <div className={`absolute inset-0 bg-gradient-to-b ${isDarkMode ? 'from-[#FAD02C]/5' : 'from-[#FAD02C]/10'} to-transparent pointer-events-none`} />
          
          <motion.div variants={fadeInUp} className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-black mb-10">
              Mulai Berkolaborasi
            </h2>
            <div className="flex flex-wrap justify-center gap-5">
              <button 
                onClick={() => window.open(`https://wa.me/${SITE_CONFIG.brand.whatsapp}`, '_blank')}
                className={`px-8 py-4 rounded-full ${isDarkMode ? 'bg-white/10 hover:bg-white/20 border-white/20' : 'bg-black/5 hover:bg-black/10 border-black/10'} font-bold border transition-all flex items-center gap-2`}
              >
                <MessageCircle className="w-5 h-5" /> Hubungi Kami
              </button>
            </div>
          </motion.div>
        </motion.section>

      </main>
    </div>
  );
};

export default MediaKitPage;
