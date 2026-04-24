import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Download, Mail, Users, Target, ExternalLink, MessageCircle, Instagram, Youtube, Linkedin, Facebook } from 'lucide-react';
import { AnimatePresence } from 'motion/react';
import { SITE_CONFIG, UI_TEXT, t } from '@/constants/config';
import type { Lang } from '@/constants/config';
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

const MediaKitPage = ({ isDarkMode, theme, lang = 'id' as Lang }: { isDarkMode: boolean, theme: any, lang?: Lang }) => {
  const [activeTab, setActiveTab] = useState<'instagram' | 'tiktok'>('instagram');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Helper to load external scripts for social embeds
  useEffect(() => {
    const loadScripts = () => {
      // Instagram
      if (!document.getElementById('instagram-embed-script')) {
        const igScript = document.createElement('script');
        igScript.id = 'instagram-embed-script';
        igScript.src = 'https://www.instagram.com/embed.js';
        igScript.async = true;
        document.body.appendChild(igScript);
      }
      
      // TikTok
      if (!document.getElementById('tiktok-embed-script')) {
        const ttScript = document.createElement('script');
        ttScript.id = 'tiktok-embed-script';
        ttScript.src = 'https://www.tiktok.com/embed.js';
        ttScript.async = true;
        document.body.appendChild(ttScript);
      }
    };

    loadScripts();
  }, []);

  // Re-process embeds when tab changes
  useEffect(() => {
    if (activeTab === 'instagram' && (window as any).instgrm) {
      (window as any).instgrm.Embeds.process();
    }
  }, [activeTab]);

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
            <div className="text-2xl font-bold mb-2">{t(UI_TEXT.mediaKit.totalFollowers, lang)}</div>
            <p className={`${theme.textMuted} leading-relaxed`}>
              {typeof SITE_CONFIG.mediaKit.growthDescription === 'object' ? t(SITE_CONFIG.mediaKit.growthDescription, lang) : SITE_CONFIG.mediaKit.growthDescription}
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
            <h2 className="text-2xl font-black">{t(UI_TEXT.mediaKit.socialReach, lang)}</h2>
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
                <div className="font-bold mb-1">{t(UI_TEXT.mediaKit.followersLabel, lang)} {social.platform}</div>
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
            <h3 className={`${theme.textYellow} text-sm font-bold tracking-widest uppercase mb-4`}>{t(UI_TEXT.mediaKit.aboutLabel, lang)}</h3>
            <h2 className="text-4xl md:text-5xl font-black leading-tight mb-6">
              {t(UI_TEXT.mediaKit.aboutHeading, lang)}
            </h2>
            <p className={`text-lg ${theme.textMuted} leading-relaxed mb-8`}>
              {t(UI_TEXT.mediaKit.aboutDescription, lang)}
            </p>
          </motion.div>

          <motion.div variants={staggerContainer} className="space-y-6">
            <motion.div variants={fadeInUp} whileHover={cardHover} className={`${theme.cardBg} border ${theme.border} backdrop-blur-md p-6 rounded-2xl flex gap-5`}>
              <div className={`w-12 h-12 rounded-full ${isDarkMode ? 'bg-[#FAD02C]/10' : 'bg-[#FAD02C]/20'} flex items-center justify-center shrink-0`}>
                <Users className={`w-6 h-6 ${theme.textYellow}`} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">{t(UI_TEXT.mediaKit.featureGen.title, lang)}</h4>
                <p className={theme.textMuted}>{t(UI_TEXT.mediaKit.featureGen.desc, lang)}</p>
              </div>
            </motion.div>
            
            <motion.div variants={fadeInUp} whileHover={cardHover} className={`${theme.cardBg} border ${theme.border} backdrop-blur-md p-6 rounded-2xl flex gap-5`}>
              <div className={`w-12 h-12 rounded-full ${isDarkMode ? 'bg-[#FAD02C]/10' : 'bg-[#FAD02C]/20'} flex items-center justify-center shrink-0`}>
                <Target className={`w-6 h-6 ${theme.textYellow}`} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">{t(UI_TEXT.mediaKit.featureDigital.title, lang)}</h4>
                <p className={theme.textMuted}>{t(UI_TEXT.mediaKit.featureDigital.desc, lang)}</p>
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
            <h2 className="text-2xl font-black">{t(UI_TEXT.mediaKit.partnersHeading, lang)}</h2>
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
                <p className={`text-sm ${theme.textMuted} leading-relaxed`}>{typeof partner.description === 'object' ? t(partner.description, lang) : partner.description}</p>
              </motion.a>
            ))}
          </div>
        </motion.section>

        {/* E. Postingan Terbaru Kami */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-32"
        >
          <motion.div variants={fadeInUp} className="text-center mb-10">
            <h2 className="text-2xl font-black">{t(UI_TEXT.mediaKit.latestPostsHeading, lang)}</h2>
          </motion.div>

          {/* Tabs */}
          <motion.div variants={fadeInUp} className="flex justify-center gap-3 mb-10">
            <button
              onClick={() => setActiveTab('instagram')}
              className={`px-6 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all duration-300 flex items-center gap-2 border ${
                activeTab === 'instagram'
                  ? 'bg-[#f5a720] text-uni-black border-[#f5a720] shadow-lg shadow-[#f5a720]/20'
                  : `${theme.cardBg} ${theme.cardHover} ${theme.text} ${theme.border}`
              }`}
            >
              <Instagram className="w-4 h-4" />
              {t(UI_TEXT.mediaKit.latestPostsInstagram, lang)}
            </button>
            <button
              onClick={() => setActiveTab('tiktok')}
              className={`px-6 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all duration-300 flex items-center gap-2 border ${
                activeTab === 'tiktok'
                  ? 'bg-[#f5a720] text-uni-black border-[#f5a720] shadow-lg shadow-[#f5a720]/20'
                  : `${theme.cardBg} ${theme.cardHover} ${theme.text} ${theme.border}`
              }`}
            >
              <TikTokIcon className="w-4 h-4" />
              {t(UI_TEXT.mediaKit.latestPostsTiktok, lang)}
            </button>
          </motion.div>

          {/* Carousel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
            >
              <motion.div
                className="flex gap-6 cursor-grab active:cursor-grabbing px-2 pb-8 overflow-x-auto no-scrollbar scroll-smooth"
                drag="x"
                dragConstraints={{ left: -(SITE_CONFIG.latestPosts[activeTab].length * 320 - (typeof window !== 'undefined' ? Math.min(window.innerWidth - 60, 1200) : 900)), right: 0 }}
                dragElastic={0.15}
                dragTransition={{ bounceStiffness: 300, bounceDamping: 30 }}
              >
                {SITE_CONFIG.latestPosts[activeTab].map((url, i) => {
                  return (
                    <motion.div
                      key={`${activeTab}-${i}`}
                      className={`shrink-0 w-[280px] md:w-[320px] rounded-3xl overflow-hidden border ${theme.border} ${theme.cardBg} backdrop-blur-xl relative group shadow-2xl`}
                      whileHover={{ y: -8, scale: 1.02 }}
                      transition={{ duration: 0.4 }}
                    >
                      {/* Subtle glow on hover */}
                      <div className="absolute inset-0 bg-gradient-to-b from-[#FAD02C]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 rounded-3xl" />
                      
                      {/* Embed Container with 9:16 aspect ratio */}
                      <div className="w-full aspect-[9/16] relative flex items-center justify-center bg-black/20 overflow-y-auto no-scrollbar">
                        {activeTab === 'instagram' ? (
                          <div className="w-full h-full scale-[0.85] md:scale-[0.9] origin-top pt-4">
                            <blockquote 
                              className="instagram-media" 
                              data-instgrm-permalink={url} 
                              data-instgrm-version="14"
                              style={{ width: '100%', border: 'none', margin: 0, padding: 0 }}
                            ></blockquote>
                          </div>
                        ) : (
                          <div className="w-full h-full overflow-hidden">
                             <blockquote 
                              className="tiktok-embed" 
                              cite={url} 
                              data-video-id={url.split('/video/')[1]?.split('?')[0] || ''}
                              style={{ width: '100%', height: '100%', margin: 0, padding: 0 }}
                            >
                              <section></section>
                            </blockquote>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          </AnimatePresence>
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
              {t(UI_TEXT.mediaKit.ctaHeading, lang)}
            </h2>
            <div className="flex flex-wrap justify-center gap-5">
              <button 
                onClick={() => window.open(`https://wa.me/${SITE_CONFIG.brand.whatsapp}`, '_blank')}
                className={`px-8 py-4 rounded-full ${isDarkMode ? 'bg-white/10 hover:bg-white/20 border-white/20' : 'bg-black/5 hover:bg-black/10 border-black/10'} font-bold border transition-all flex items-center gap-2`}
              >
                <MessageCircle className="w-5 h-5" /> {t(UI_TEXT.mediaKit.ctaButton, lang)}
              </button>
            </div>
          </motion.div>
        </motion.section>

      </main>
    </div>
  );
};

export default MediaKitPage;
