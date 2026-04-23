import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Download, Mail, TrendingUp, Users, Target } from 'lucide-react';
import { SITE_CONFIG } from '@/constants/config';

const MediaKitPage = ({ isDarkMode, theme }: { isDarkMode: boolean, theme: any }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
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
          <motion.div variants={fadeInUp} className="flex justify-center gap-3 mb-6">
            <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-xs font-bold tracking-widest text-[#FAD02C]">MEDIA</span>
            <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-xs font-bold tracking-widest text-[#FAD02C]">CAMPUS INNOVATION</span>
          </motion.div>
          
          <motion.h1 variants={fadeInUp} className="text-6xl md:text-8xl font-black tracking-tighter mb-4">
            {SITE_CONFIG.brand.name}
          </motion.h1>
          <motion.h2 variants={fadeInUp} className="text-xl md:text-2xl font-medium tracking-[0.3em] text-white/60 mb-16 uppercase">
            {SITE_CONFIG.brand.subtitle}
          </motion.h2>

          <motion.div variants={fadeInUp} className="max-w-2xl mx-auto bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-10 shadow-[0_0_40px_rgba(250,208,44,0.05)]">
            <h3 className="text-sm font-bold tracking-widest text-white/50 uppercase mb-2">Impact Counter</h3>
            <div className="text-5xl md:text-7xl font-black text-[#FAD02C] mb-4">{SITE_CONFIG.mediaKit.totalFollowers}</div>
            <div className="text-2xl font-bold mb-2">Total Followers</div>
            <p className="text-white/60 leading-relaxed">
              {SITE_CONFIG.mediaKit.growthDescription}
            </p>
          </motion.div>
        </motion.section>

        {/* B. Social Reach Grid */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-32"
        >
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { 
                platform: "Instagram", 
                handle: SITE_CONFIG.socials.instagram.handle, 
                followers: SITE_CONFIG.socials.instagram.followers, 
                icon: "IG", 
                growth: SITE_CONFIG.socials.instagram.growth 
              },
              { 
                platform: "TikTok", 
                handle: SITE_CONFIG.socials.tiktok.handle, 
                followers: SITE_CONFIG.socials.tiktok.followers, 
                icon: "TK", 
                growth: SITE_CONFIG.socials.tiktok.growth 
              },
              { 
                platform: "YouTube", 
                handle: SITE_CONFIG.socials.youtube.name, 
                followers: SITE_CONFIG.socials.youtube.followers, 
                icon: "YT", 
                growth: SITE_CONFIG.socials.youtube.growth 
              }
            ].map((social, i) => (
              <motion.div 
                key={i} 
                variants={fadeInUp}
                className="bg-white/5 border border-white/10 backdrop-blur-md p-8 rounded-3xl hover:bg-white/10 transition-colors group"
              >
                <div className="flex justify-between items-start mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center font-black text-[#FAD02C]">
                    {social.icon}
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAD02C]/10 text-[#FAD02C] text-sm font-bold border border-[#FAD02C]/20">
                    <TrendingUp className="w-4 h-4" /> {social.growth}
                  </div>
                </div>
                <h4 className="text-3xl font-black mb-1">{social.followers}</h4>
                <div className="font-bold text-white/80 mb-1">{social.platform} Followers</div>
                <div className="text-sm text-white/50">{social.handle}</div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* C. Who We Are Section */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-32 grid lg:grid-cols-2 gap-16 items-center"
        >
          <motion.div variants={fadeInUp}>
            <h3 className="text-[#FAD02C] text-sm font-bold tracking-widest uppercase mb-4">Who We Are</h3>
            <h2 className="text-4xl md:text-5xl font-black leading-tight mb-6">
              The Telkom University Creative Core
            </h2>
            <p className="text-lg text-white/70 leading-relaxed mb-8">
              Uni-Inside is a cultural engine fueled by Telkom University, bridging the gap between campus innovation and commercial excellence. We don't just follow trends; we create them by understanding what the next generation truly wants.
            </p>
          </motion.div>

          <motion.div variants={staggerContainer} className="space-y-6">
            <motion.div variants={fadeInUp} className="bg-white/5 border border-white/10 backdrop-blur-md p-6 rounded-2xl flex gap-5">
              <div className="w-12 h-12 rounded-full bg-[#FAD02C]/10 flex items-center justify-center shrink-0">
                <Users className="w-6 h-6 text-[#FAD02C]" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Next-Gen Perspective</h4>
                <p className="text-white/60">Speaking the language of Gen-Z with authentic storytelling and visual impact.</p>
              </div>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="bg-white/5 border border-white/10 backdrop-blur-md p-6 rounded-2xl flex gap-5">
              <div className="w-12 h-12 rounded-full bg-[#FAD02C]/10 flex items-center justify-center shrink-0">
                <Target className="w-6 h-6 text-[#FAD02C]" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Digital-First Strategy</h4>
                <p className="text-white/60">Campaigns designed to be experienced seamlessly across all modern digital platforms.</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* D. Global Partnerships */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-32"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="text-2xl font-black text-white/80">Global Partnerships</h2>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["Telkom Univ", "Spotify Indo", "Gojek", "Tokopedia"].map((partner, i) => (
              <div key={i} className="aspect-[3/2] bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center group hover:bg-white/10 transition-colors">
                <span className="text-xl font-bold text-white/30 group-hover:text-white/70 transition-colors">{partner}</span>
              </div>
            ))}
          </motion.div>
        </motion.section>

        {/* E. Final Call-to-Action */}
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
              Ready to reach the<br/>next generation?
            </h2>
            <div className="flex flex-wrap justify-center gap-5">
              <button className="px-8 py-4 rounded-full bg-[#FAD02C] text-[#202121] font-bold hover:brightness-110 transition-all flex items-center gap-2 shadow-[0_0_30px_rgba(250,208,44,0.3)]">
                <Download className="w-5 h-5" /> Download Kit (PDF)
              </button>
              <button 
                onClick={() => window.location.href = `mailto:${SITE_CONFIG.brand.email}`}
                className="px-8 py-4 rounded-full bg-white/10 text-white font-bold hover:bg-white/20 border border-white/20 transition-all flex items-center gap-2"
              >
                <Mail className="w-5 h-5" /> Get in Touch
              </button>
            </div>
          </motion.div>
        </motion.section>

      </main>
    </div>
  );
};

export default MediaKitPage;
