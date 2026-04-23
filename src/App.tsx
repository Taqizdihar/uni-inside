import React, { useState, useRef } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring, useMotionTemplate } from 'motion/react';
import CameraPage from './pages/CameraPage';
import DronePage from './pages/DronePage';
import EditPage from './pages/EditPage';
import PhotographyPage from './pages/PhotographyPage';
import SouvenirPage from './pages/SouvenirPage';
import MediaKitPage from './pages/MediaKitPage';
import TeamSection from './components/TeamSection';
import logoDark from './assets/logo/dark.png';
import logoNormal from './assets/logo/normal.png';
import horizontalDark from './assets/logo/horizontal dark.png';
import horizontalNormal from './assets/logo/horizontal normal.png';
import heroImg from './assets/images/hero.jpg';
import universeLogo from './assets/app products/UNI-VERSE.png';
import aiseoDark from './assets/app products/UNI-AISEO Dark Mode.png';
import aiseoLight from './assets/app products/UNI-AISEO Light Mode.png';
import { SITE_CONFIG } from '@/constants/config';
import { 
  ArrowRight, 
  Camera, 
  Video, 
  PenTool, 
  Send, 
  MapPin, 
  Phone, 
  Mail, 
  Instagram, 
  CheckCircle2,
  Sparkles,
  Zap,
  Target,
  Sun,
  Moon
} from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, desc, theme, isDarkMode }: any) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const xPct = useMotionValue(0);
  const yPct = useMotionValue(0);
  
  const rotateX = useSpring(useTransform(yPct, [-0.5, 0.5], [7, -7]), { stiffness: 150, damping: 30 });
  const rotateY = useSpring(useTransform(xPct, [-0.5, 0.5], [-7, 7]), { stiffness: 150, damping: 30 });

  function handleMouseMove({ currentTarget, clientX, clientY }: any) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
    xPct.set((clientX - left) / width - 0.5);
    yPct.set((clientY - top) / height - 0.5);
  }

  function handleMouseLeave() {
    xPct.set(0);
    yPct.set(0);
  }

  return (
    <motion.div
      style={{ perspective: 1000 }}
      className="relative h-full"
    >
      <motion.div
        className={`relative p-8 rounded-3xl ${theme.cardBg} border ${theme.border} overflow-hidden group h-full`}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                350px circle at ${mouseX}px ${mouseY}px,
                rgba(250, 208, 44, 0.1),
                transparent 80%
              )
            `,
          }}
        />
        <div style={{ transform: "translateZ(30px)" }} className="relative z-10">
          <motion.div 
            className={`w-16 h-16 rounded-2xl ${isDarkMode ? 'bg-uni-yellow/10' : 'bg-uni-yellow/20'} flex items-center justify-center mb-6`}
            variants={{
              hover: { y: -5 }
            }}
          >
            <motion.div
              variants={{
                hover: { y: [0, -6, 0], transition: { repeat: Infinity, duration: 0.6, ease: "easeInOut" } }
              }}
            >
              <Icon className={`w-8 h-8 ${theme.textYellow}`} />
            </motion.div>
          </motion.div>
          <h4 className="text-xl font-black mb-4">{title}</h4>
          <p className={`${theme.textMuted} leading-relaxed`}>{desc}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Layout = ({ children, isDarkMode, toggleTheme, theme }: any) => {
  return (
    <div className={`min-h-screen ${theme.bg} ${theme.text} font-sans selection:bg-uni-yellow/30 transition-colors duration-500`}>
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 ${theme.navBg} backdrop-blur-md border-b ${theme.border} transition-colors duration-500`}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <AnimatePresence mode="wait">
              <motion.img 
                key={isDarkMode ? 'dark' : 'light'}
                src={isDarkMode ? logoNormal : logoDark} 
                alt="The Uni-Inside Logo" 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="h-14 w-auto object-contain"
              />
            </AnimatePresence>
          </Link>
          
          <div className={`hidden md:flex items-center gap-8 text-sm font-bold ${theme.textMuted}`}>
            <a href="/#about-us" className={`hover:text-uni-yellow transition-colors`}>About Us</a>
            <a href="/#why-us" className={`hover:text-uni-yellow transition-colors`}>Why Us</a>
            <a href="/#our-team" className={`hover:text-uni-yellow transition-colors`}>Our Team</a>
            <a href="/#products" className={`hover:text-uni-yellow transition-colors`}>Products</a>
            <a href="/#contact" className={`hover:text-uni-yellow transition-colors`}>Contact</a>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={toggleTheme}
              className={`p-2.5 rounded-full ${theme.cardBg} ${theme.cardHover} border ${theme.border} transition-colors relative overflow-hidden flex items-center justify-center`}
              aria-label="Toggle Theme"
            >
              <AnimatePresence mode="wait">
                {isDarkMode ? (
                  <motion.div
                    key="sun"
                    initial={{ y: -20, opacity: 0, rotate: -90 }}
                    animate={{ y: 0, opacity: 1, rotate: 0 }}
                    exit={{ y: 20, opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Sun className="w-4 h-4 text-uni-yellow" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ y: -20, opacity: 0, rotate: -90 }}
                    animate={{ y: 0, opacity: 1, rotate: 0 }}
                    exit={{ y: 20, opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Moon className="w-4 h-4 text-uni-black" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
            
            <Link 
              to="/mediakit" 
              className="px-5 py-2.5 rounded-full bg-uni-yellow text-uni-black text-sm font-bold hover:brightness-110 transition-all shadow-lg shadow-uni-yellow/20"
            >
              Media Kit
            </Link>
          </div>
        </div>
      </nav>

      {children}

      {/* Footer */}
      <footer className={`${theme.sectionBg} py-12 px-6 border-t ${theme.border} transition-colors duration-500`}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <AnimatePresence mode="wait">
              <motion.img 
                key={isDarkMode ? 'dark' : 'light'}
                src={isDarkMode ? logoNormal : logoDark} 
                alt="The Uni-Inside Logo" 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="h-14 w-auto object-contain"
              />
            </AnimatePresence>
          </div>
          
          <p className={`${theme.textMuted} text-sm text-center md:text-left font-bold`}>
            &copy; {new Date().getFullYear()} {SITE_CONFIG.brand.name} {SITE_CONFIG.brand.subtitle}. All rights reserved.
          </p>
          
          <div className="flex items-center gap-4">
            <a href={SITE_CONFIG.socials.find(s => s.platform === "Instagram")?.link || "#"} target="_blank" rel="noopener noreferrer" className={`w-10 h-10 rounded-full ${isDarkMode ? 'bg-white/5' : 'bg-black/5'} flex items-center justify-center ${theme.textMuted} hover:${theme.text} ${theme.cardHover} transition-all`}>
              <Instagram className="w-4 h-4" />
            </a>
            <a href={SITE_CONFIG.socials.find(s => s.platform === "TikTok")?.link || "#"} target="_blank" rel="noopener noreferrer" className={`w-10 h-10 rounded-full ${isDarkMode ? 'bg-white/5' : 'bg-black/5'} flex items-center justify-center ${theme.textMuted} hover:${theme.text} ${theme.cardHover} transition-all`}>
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

function LandingPage({ isDarkMode, toggleTheme, theme }: any) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('loading');
    
    try {
      const response = await fetch('/contact.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setFormStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setFormStatus('idle'), 5000);
      } else {
        setFormStatus('error');
        setTimeout(() => setFormStatus('idle'), 5000);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 5000);
    }
  };

  const aboutRef = useRef(null);
  const { scrollYProgress: aboutScroll } = useScroll({
    target: aboutRef,
    offset: ["start end", "end start"]
  });
  const parallaxY = useTransform(aboutScroll, [0, 1], [-100, 100]);

  const aboutText = "Lahir dari semangat inovasi kampus, kami hadir menjembatani ide dan realita. Kami percaya setiap cerita berhak disampaikan dengan cara luar biasa, menggabungkan tren terkini dan eksekusi profesional untuk hasil yang melampaui ekspektasi.";
  const aboutWords = aboutText.split(" ");

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <>
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden px-6">
        
        {/* --- 3D Decorative Elements --- */}
        
        {/* Top-Center/Right Torus */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [-5, 5, -5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="hidden md:block absolute top-[10%] right-[15%] lg:right-[25%] xl:right-[35%] w-48 h-48 lg:w-64 lg:h-64 z-0 pointer-events-none"
        >
          <motion.div 
            className="absolute inset-0 rounded-full backdrop-blur-3xl"
            animate={{
              background: isDarkMode 
                ? 'linear-gradient(to top right, rgba(255,255,255,0.1), rgba(255,255,255,0.6), rgba(243,244,246,0.2))' 
                : 'linear-gradient(to top right, rgba(31,41,55,0.4), rgba(17,24,39,0.8), rgba(0,0,0,0.4))',
              boxShadow: isDarkMode
                ? 'inset 0 0 40px rgba(255,255,255,0.8), 0 20px 40px rgba(0,0,0,0.3)'
                : 'inset 0 0 40px rgba(0,0,0,0.8), 0 20px 40px rgba(0,0,0,0.15)'
            }}
            transition={{ duration: 0.7 }}
            style={{ maskImage: 'radial-gradient(circle, transparent 35%, black 36%)', WebkitMaskImage: 'radial-gradient(circle, transparent 35%, black 36%)' }}
          >
            <motion.div 
              className="absolute inset-0 mix-blend-overlay"
              animate={{
                background: isDarkMode
                  ? 'linear-gradient(to bottom left, rgba(243,244,246,0.4), rgba(255,255,255,0.4))'
                  : 'linear-gradient(to bottom left, rgba(0,0,0,0.4), rgba(31,41,55,0.4))'
              }}
              transition={{ duration: 0.7 }}
            />
          </motion.div>
        </motion.div>

        {/* Bottom-Left Organic Ribbon Shape */}
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, 6, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="hidden md:block absolute -bottom-16 -left-16 lg:-bottom-24 lg:-left-24 xl:-left-10 w-64 h-64 lg:w-80 lg:h-80 z-0 pointer-events-none"
        >
          <motion.div 
            className="relative w-full h-full rounded-full overflow-hidden"
            animate={{
              background: isDarkMode
                ? 'linear-gradient(to bottom right, #ffffff, #e5e7eb, #6b7280)'
                : 'linear-gradient(to bottom right, #4b5563, #1f2937, #000000)',
              boxShadow: isDarkMode
                ? 'inset -15px -15px 30px rgba(0,0,0,0.15), inset 15px 15px 30px rgba(255,255,255,0.9)'
                : 'inset -15px -15px 30px rgba(0,0,0,0.8), inset 15px 15px 30px rgba(255,255,255,0.1)'
            }}
            transition={{ duration: 0.7 }}
          >
            <motion.div 
              className="absolute -top-8 -left-8 w-[120%] h-[120%] rounded-full border-[20px] blur-sm transform rotate-12"
              animate={{ borderColor: isDarkMode ? 'rgba(255,255,255,0.8)' : 'rgba(107,114,128,0.4)' }}
              transition={{ duration: 0.7 }}
            />
            <motion.div 
              className="absolute top-4 left-4 w-[90%] h-[90%] rounded-full border-[30px] blur-md transform -rotate-12"
              animate={{ borderColor: isDarkMode ? 'rgba(209,213,219,0.6)' : 'rgba(55,65,81,0.5)' }}
              transition={{ duration: 0.7 }}
            />
            <motion.div 
              className="absolute top-16 left-16 w-[60%] h-[60%] rounded-full border-[25px] blur-md transform rotate-45"
              animate={{ borderColor: isDarkMode ? 'rgba(156,163,175,0.5)' : 'rgba(17,24,39,0.6)' }}
              transition={{ duration: 0.7 }}
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent mix-blend-overlay"></div>
          </motion.div>
        </motion.div>

        {/* Bottom-Right Prism */}
        <motion.div
          animate={{ y: [0, 15, 0], rotate: [0, -4, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="hidden md:block absolute bottom-5 right-0 lg:bottom-10 lg:right-5 xl:right-20 w-56 h-56 lg:w-72 lg:h-72 z-30 pointer-events-none drop-shadow-2xl"
        >
          {/* Left/Top Facet (White/Light Yellow) */}
          <motion.div 
            className="absolute inset-0" 
            style={{ clipPath: 'polygon(15% 75%, 75% 15%, 55% 55%)' }}
            animate={{
              background: isDarkMode 
                ? 'linear-gradient(to bottom right, rgba(255,255,255,1), rgba(255,255,255,0.9), rgba(250,208,44,0.3))' 
                : 'linear-gradient(to bottom right, rgba(243,244,246,1), rgba(229,231,235,1), rgba(250,208,44,0.4))'
            }}
            transition={{ duration: 0.7 }}
          />
          
          {/* Right Facet (Deep Yellow) */}
          <motion.div 
            className="absolute inset-0" 
            style={{ clipPath: 'polygon(75% 15%, 95% 85%, 55% 55%)' }}
            animate={{
              background: isDarkMode 
                ? 'linear-gradient(to bottom left, rgba(250,208,44,0.8), rgba(250,208,44,1), rgba(202,138,4,1))' 
                : 'linear-gradient(to bottom left, rgba(250,208,44,0.9), rgba(234,179,8,1), rgba(161,98,7,1))'
            }}
            transition={{ duration: 0.7 }}
          />
          
          {/* Bottom Facet (Soft Yellow/White blend) */}
          <motion.div 
            className="absolute inset-0" 
            style={{ clipPath: 'polygon(15% 75%, 55% 55%, 95% 85%)' }}
            animate={{
              background: isDarkMode 
                ? 'linear-gradient(to top right, rgba(250,208,44,1), rgba(254,240,138,1), rgba(255,255,255,0.9))' 
                : 'linear-gradient(to top right, rgba(234,179,8,1), rgba(250,208,44,1), rgba(243,244,246,1))'
            }}
            transition={{ duration: 0.7 }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/30"></div>
          </motion.div>
        </motion.div>

        {/* --- Main Content --- */}
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-2xl relative z-20"
          >
            <motion.div variants={fadeInUp} className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${theme.cardBg} border ${theme.border} ${theme.text} text-sm font-bold mb-6`}>
              <Sparkles className={`w-4 h-4 ${theme.textYellow}`} />
              <span>Creative Startup</span>
            </motion.div>
            <motion.h1 variants={fadeInUp} style={{ fontFamily: 'system-ui' }} className="text-5xl md:text-7xl font-black tracking-tighter leading-[1.1] mb-6">
              Empowering Your <br/>
              <span className={theme.textYellow}>Creative Vision.</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className={`text-lg ${theme.textMuted} mb-8 leading-relaxed max-w-xl`}>
              Kami adalah sekumpulan mahasiswa kreatif yang siap mengubah ide brilian Anda menjadi karya visual dan strategi konten yang berdampak nyata. Mari ciptakan sesuatu yang luar biasa bersama.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <Link to="/mediakit" className="px-8 py-4 rounded-full bg-uni-yellow text-uni-black font-bold hover:brightness-110 transition-all flex items-center gap-2 shadow-lg shadow-uni-yellow/20">
                Media Kit Kami <ArrowRight className="w-5 h-5" />
              </Link>
              <a href="#contact" className={`px-8 py-4 rounded-full ${theme.cardBg} ${theme.cardHover} border ${theme.border} ${theme.text} font-bold transition-all`}>
                Hubungi Kami
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className={`relative aspect-[4/3] rounded-3xl overflow-hidden border ${theme.border} shadow-2xl ${isDarkMode ? 'shadow-uni-yellow/5' : 'shadow-black/10'} z-20`}
          >
            <img 
              src={heroImg} 
              alt="The Uni-Inside Team" 
              className="w-full h-full object-cover"
            />
            <div className={`absolute inset-0 bg-gradient-to-t ${isDarkMode ? 'from-uni-black/90' : 'from-uni-white/90'} to-transparent`}></div>
            <div className="absolute bottom-6 left-6 right-6">
              <div className={`backdrop-blur-md ${isDarkMode ? 'bg-white/10 border-white/20' : 'bg-white/60 border-white/40'} border p-4 rounded-2xl flex items-center gap-4`}>
                <div className="w-12 h-12 rounded-full bg-uni-yellow flex items-center justify-center shrink-0">
                  <Video className="w-6 h-6 text-uni-black" />
                </div>
                <div>
                  <p className={`font-bold ${isDarkMode ? 'text-white' : 'text-uni-black'}`}>Produksi Konten Kreatif</p>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} font-medium`}>Kualitas profesional, sentuhan anak muda.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. About Us */}
      <section id="about-us" ref={aboutRef} className={`py-24 px-6 ${theme.sectionBg} border-y ${theme.border} transition-colors duration-500 relative overflow-hidden`}>
        {/* Parallax Background Logo */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none flex items-center justify-center z-0 opacity-10">
          <motion.div style={{ y: parallaxY }} className="w-full max-w-5xl px-8 flex justify-center">
            <AnimatePresence mode="wait">
              <motion.img 
                key={isDarkMode ? 'dark' : 'light'}
                src={isDarkMode ? horizontalNormal : horizontalDark}
                alt="Uni-Inside Background"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full h-auto object-contain"
              />
            </AnimatePresence>
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className={`text-sm font-black tracking-widest ${theme.textYellow} uppercase mb-6`}>About Us</h2>
            <motion.p 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                visible: { transition: { staggerChildren: 0.05 } }
              }}
              className="text-2xl md:text-4xl font-black leading-tight flex flex-wrap justify-center"
            >
              {aboutWords.map((word, i) => (
                <motion.span 
                  key={i} 
                  variants={{
                    hidden: { opacity: 0.15 },
                    visible: { opacity: 1, transition: { duration: 0.4 } }
                  }}
                  className={`relative inline-block mr-2 mt-2 ${isDarkMode ? "text-white" : "text-uni-black"}`}
                >
                  {word}
                </motion.span>
              ))}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 3. Why Choose Us */}
      <section id="why-us" className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-16 md:mb-24 text-center">
            <h2 className={`text-sm font-black tracking-widest ${theme.textYellow} uppercase mb-3`}>Why Choose Us</h2>
            <h3 className="text-4xl md:text-5xl font-black">Keunggulan Kami</h3>
          </div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: Zap,
                title: "Ide Segar & Kekinian",
                desc: "Sebagai mahasiswa, kami selalu up-to-date dengan tren digital terbaru. Kami membawa perspektif segar yang relevan dengan audiens masa kini."
              },
              {
                icon: Target,
                title: "Eksekusi Profesional",
                desc: "Meski berjiwa muda, standar kerja kami tetap profesional. Ketepatan waktu, kualitas alat, dan hasil akhir adalah prioritas utama kami."
              },
              {
                icon: CheckCircle2,
                title: "Harga Fleksibel",
                desc: "Kami memahami kebutuhan budget yang beragam. Layanan kami dirancang untuk memberikan value maksimal dengan harga yang masuk akal."
              }
            ].map((item, i) => (
              <motion.div key={i} variants={fadeInUp} className="h-full">
                <FeatureCard 
                  icon={item.icon}
                  title={item.title}
                  desc={item.desc}
                  theme={theme}
                  isDarkMode={isDarkMode}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <div id="our-team">
        <TeamSection theme={theme} isDarkMode={isDarkMode} />
      </div>

      {/* 4. Our Products & Services */}
      <section id="products" className={`py-24 ${theme.sectionBg} border-y ${theme.border} transition-colors duration-500`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className={`text-sm font-black tracking-widest ${theme.textYellow} uppercase mb-3`}>Our Products & Services</h2>
            <h3 className="text-4xl md:text-5xl font-black max-w-2xl mb-12">Layanan Kreatif yang Kami Tawarkan untuk Anda</h3>
            
            {/* Produk Aplikasi Kami - Full Width Style Container */}
            <div className="relative -mx-6 px-6 py-16 mb-20 overflow-hidden">
              {/* Subtle background for the app section to make it feel "full width" even if inside the main section */}
              <div className={`absolute inset-0 ${isDarkMode ? 'bg-white/[0.02]' : 'bg-black/[0.02]'} border-y ${theme.border}`} />
              
              <div className="relative z-10">
                <h4 className={`text-2xl md:text-3xl font-black mb-8 text-center md:text-left ${isDarkMode ? 'text-white' : 'text-uni-black'}`}>
                  Produk Aplikasi Kami
                </h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* UNI-VERSE Card */}
                  <motion.div
                    whileHover={{ y: -5, scale: 1.01 }}
                    className={`${theme.cardBg} backdrop-blur-xl border ${theme.border} rounded-3xl p-10 flex items-center justify-center h-48 md:h-56 group transition-all duration-300 relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-uni-yellow/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <img 
                      src={universeLogo} 
                      alt="UNI-VERSE" 
                      className="max-h-24 md:max-h-28 w-auto object-contain transition-transform duration-500 group-hover:scale-110 relative z-10"
                    />
                  </motion.div>

                  {/* UNI-AISEO Card */}
                  <motion.div
                    whileHover={{ y: -5, scale: 1.01 }}
                    className={`${theme.cardBg} backdrop-blur-xl border ${theme.border} rounded-3xl p-10 flex items-center justify-center h-48 md:h-56 group transition-all duration-300 relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-uni-yellow/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <AnimatePresence mode="wait">
                      <motion.img 
                        key={isDarkMode ? 'dark' : 'light'}
                        src={isDarkMode ? aiseoDark : aiseoLight} 
                        alt="UNI-AISEO" 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.1 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="max-h-24 md:max-h-28 w-auto object-contain transition-transform duration-500 group-hover:scale-110 relative z-10"
                      />
                    </AnimatePresence>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              { 
                id: 'camera', 
                title: "Sewa Kamera", 
                subtitle: "Sewa kamera berkualitas tinggi dengan penyimpanan besar", 
                img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                icon: Camera,
                cta: "Sewa Sekarang",
                path: "/camera"
              },
              { 
                id: 'drone', 
                title: "Sewa Drone", 
                subtitle: "Sewa drone untuk dokumentasi video cinematic", 
                img: "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                icon: Video,
                cta: "Sewa Sekarang",
                path: "/drone"
              },
              { 
                id: 'edit', 
                title: "Jasa Edit", 
                subtitle: "Jasa editing video untuk konten sosial media atau proyek pribadi", 
                img: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                icon: PenTool,
                cta: "Edit Video",
                path: "/edit"
              },
              { 
                id: 'photography', 
                title: "Jasa Fotografi", 
                subtitle: "Jasa fotografi profesional untuk acara, produk, atau portofolio", 
                img: "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                icon: Camera,
                cta: "Booking Sekarang",
                path: "/photography"
              },
              { 
                id: 'souvenir', 
                title: "Paket Suvenir", 
                subtitle: "Paket suvenir eksklusif untuk kenang-kenangan", 
                img: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                icon: Sparkles,
                cta: "Pesan Sekarang",
                path: "/souvenir"
              }
            ].map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`w-full ${i === 4 ? 'lg:col-span-2 max-w-2xl mx-auto' : ''}`}
              >
                <Link to={product.path} className="block w-full">
                  <motion.div 
                    initial="rest"
                    whileHover="hover"
                    animate="rest"
                    variants={{
                      rest: { scale: 1 },
                      hover: { scale: 1.02 }
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className={`relative h-[280px] md:h-[320px] rounded-3xl overflow-hidden border ${theme.border} ${isDarkMode ? '' : 'shadow-sm'}`}
                  >
                    {/* Background Image */}
                    <div className="absolute inset-0">
                      <motion.img 
                        src={product.img} 
                        alt={product.title} 
                        variants={{
                          rest: { opacity: isDarkMode ? 0.6 : 0.75, scale: 1 },
                          hover: { opacity: isDarkMode ? 0.8 : 0.85, scale: 1.05 }
                        }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      {/* Default Gradient Overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${isDarkMode ? 'from-uni-black/95 via-uni-black/80 to-uni-black/20' : 'from-gray-100/95 via-gray-100/80 to-transparent'}`}></div>
                      
                      {/* Hover Gradient Overlay (Fades in smoothly) */}
                      <motion.div 
                        variants={{
                          rest: { opacity: 0 },
                          hover: { opacity: 1 }
                        }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className={`absolute inset-0 bg-gradient-to-r ${isDarkMode ? 'from-[#8B7314]/95 via-[#8B7314]/80 to-[#8B7314]/20' : 'from-[#D4C59A]/95 via-[#D4C59A]/80 to-[#D4C59A]/30'}`}
                      ></motion.div>
                    </div>

                    {/* Content */}
                    <div className="relative h-full p-6 md:p-10 flex flex-col justify-center max-w-2xl">
                      <div className={`w-12 h-12 rounded-2xl ${isDarkMode ? 'bg-white/10' : 'bg-black/5'} backdrop-blur-md flex items-center justify-center border ${theme.border} mb-4`}>
                        <product.icon className={`w-6 h-6 ${theme.text}`} />
                      </div>
                      
                      <h4 className={`text-2xl md:text-4xl font-black mb-3 ${isDarkMode ? 'text-uni-white' : 'text-[#202121]'} leading-tight`}>
                        {product.title}
                      </h4>
                      <p className={`text-base md:text-lg font-medium ${isDarkMode ? 'text-gray-300' : 'text-[#202121]/80'} leading-relaxed max-w-lg line-clamp-2`}>
                        {product.subtitle}
                      </p>

                      {/* Consolidated CTA */}
                      <motion.div
                        variants={{
                          rest: { opacity: 0, x: -10 },
                          hover: { opacity: 1, x: 0 }
                        }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className={`mt-6 flex items-center gap-1 text-sm font-black uppercase tracking-widest ${isDarkMode ? 'text-uni-black' : 'text-[#202121]'}`}
                      >
                        {product.cta}
                        <ArrowRight className="w-4 h-4" />
                      </motion.div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Contact Us */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className={`text-sm font-black tracking-widest ${theme.textYellow} uppercase mb-3`}>Contact Us</h2>
              <h3 className="text-4xl md:text-5xl font-black mb-6">Mari Berkolaborasi</h3>
              <p className={`${theme.textMuted} text-lg mb-12 max-w-md font-medium`}>
                Punya ide gila yang ingin diwujudkan? Atau sekadar ingin bertanya tentang layanan kami? Jangan ragu untuk menghubungi tim Uni-Inside.
              </p>

              <div className="space-y-4">
                <motion.a 
                  href={SITE_CONFIG.brand.address.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial="initial"
                  whileHover="hover"
                  variants={{
                    initial: { y: 0, backgroundColor: 'rgba(250, 208, 44, 0)' },
                    hover: { y: -4, backgroundColor: isDarkMode ? 'rgba(250, 208, 44, 0.08)' : 'rgba(250, 208, 44, 0.15)' }
                  }}
                  transition={{ duration: 0.3 }}
                  className="flex items-start gap-4 p-4 -ml-4 rounded-2xl cursor-pointer"
                >
                  <div className={`w-12 h-12 rounded-full ${theme.cardBg} flex items-center justify-center shrink-0`}>
                    <MapPin className={`w-5 h-5 ${theme.textYellow}`} />
                  </div>
                  <div>
                    <div className="flex items-center mb-1">
                      <h4 className="font-black text-lg">Office Address</h4>
                      <motion.span 
                        variants={{
                          initial: { opacity: 0, x: -10 },
                          hover: { opacity: 1, x: 0 }
                        }}
                        transition={{ duration: 0.3 }}
                        className="hidden md:inline-flex ml-3 px-2.5 py-0.5 rounded-full bg-uni-yellow text-uni-black text-[10px] font-bold uppercase tracking-wider items-center"
                      >
                        Check on Maps
                      </motion.span>
                    </div>
                    <p className={`${theme.textMuted} leading-relaxed font-medium`}>
                      {SITE_CONFIG.brand.address.line1}<br/>
                      {SITE_CONFIG.brand.address.line2}<br/>
                      {SITE_CONFIG.brand.address.line3}
                    </p>
                  </div>
                </motion.a>

                <motion.a 
                  href={`https://wa.me/${SITE_CONFIG.brand.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial="initial"
                  whileHover="hover"
                  variants={{
                    initial: { y: 0, backgroundColor: 'rgba(250, 208, 44, 0)' },
                    hover: { y: -4, backgroundColor: isDarkMode ? 'rgba(250, 208, 44, 0.08)' : 'rgba(250, 208, 44, 0.15)' }
                  }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center gap-4 p-4 -ml-4 rounded-2xl cursor-pointer"
                >
                  <div className={`w-12 h-12 rounded-full ${theme.cardBg} flex items-center justify-center shrink-0`}>
                    <Phone className={`w-5 h-5 ${theme.textYellow}`} />
                  </div>
                  <div>
                    <div className="flex items-center mb-1">
                      <h4 className="font-black text-lg">WhatsApp</h4>
                      <motion.span 
                        variants={{
                          initial: { opacity: 0, x: -10 },
                          hover: { opacity: 1, x: 0 }
                        }}
                        transition={{ duration: 0.3 }}
                        className="hidden md:inline-flex ml-3 px-2.5 py-0.5 rounded-full bg-uni-yellow text-uni-black text-[10px] font-bold uppercase tracking-wider items-center"
                      >
                        Contact Us
                      </motion.span>
                    </div>
                    <p className={`${theme.textMuted} font-medium`}>{SITE_CONFIG.brand.whatsappDisplay}</p>
                  </div>
                </motion.a>

                <motion.a 
                  href={`mailto:${SITE_CONFIG.brand.email}`}
                  initial="initial"
                  whileHover="hover"
                  variants={{
                    initial: { y: 0, backgroundColor: 'rgba(250, 208, 44, 0)' },
                    hover: { y: -4, backgroundColor: isDarkMode ? 'rgba(250, 208, 44, 0.08)' : 'rgba(250, 208, 44, 0.15)' }
                  }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center gap-4 p-4 -ml-4 rounded-2xl cursor-pointer"
                >
                  <div className={`w-12 h-12 rounded-full ${theme.cardBg} flex items-center justify-center shrink-0`}>
                    <Mail className={`w-5 h-5 ${theme.textYellow}`} />
                  </div>
                  <div>
                    <div className="flex items-center mb-1">
                      <h4 className="font-black text-lg">Email</h4>
                      <motion.span 
                        variants={{
                          initial: { opacity: 0, x: -10 },
                          hover: { opacity: 1, x: 0 }
                        }}
                        transition={{ duration: 0.3 }}
                        className="hidden md:inline-flex ml-3 px-2.5 py-0.5 rounded-full bg-uni-yellow text-uni-black text-[10px] font-bold uppercase tracking-wider items-center"
                      >
                        Send an Email
                      </motion.span>
                    </div>
                    <p className={`${theme.textMuted} font-medium`}>{SITE_CONFIG.brand.email}</p>
                  </div>
                </motion.a>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`${theme.cardBg} border ${theme.border} rounded-3xl p-8 md:p-10`}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className={`block text-sm font-black ${theme.textMuted} mb-2`}>Nama Lengkap</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className={`w-full ${theme.inputBg} border ${theme.inputBorder} rounded-xl px-4 py-3 ${theme.text} focus:outline-none focus:border-uni-yellow focus:ring-1 focus:ring-uni-yellow transition-all font-medium`}
                    placeholder="Masukkan nama Anda"
                  />
                </div>
                <div>
                  <label htmlFor="email" className={`block text-sm font-black ${theme.textMuted} mb-2`}>Email Address</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className={`w-full ${theme.inputBg} border ${theme.inputBorder} rounded-xl px-4 py-3 ${theme.text} focus:outline-none focus:border-uni-yellow focus:ring-1 focus:ring-uni-yellow transition-all font-medium`}
                    placeholder="nama@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className={`block text-sm font-black ${theme.textMuted} mb-2`}>Pesan / Detail Proyek</label>
                  <textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className={`w-full ${theme.inputBg} border ${theme.inputBorder} rounded-xl px-4 py-3 ${theme.text} focus:outline-none focus:border-uni-yellow focus:ring-1 focus:ring-uni-yellow transition-all resize-none font-medium`}
                    placeholder="Ceritakan tentang proyek atau kebutuhan Anda..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  disabled={formStatus === 'loading'}
                  className="w-full bg-uni-yellow hover:brightness-110 text-uni-black font-black py-4 rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-uni-yellow/20"
                >
                  {formStatus === 'loading' ? 'Mengirim...' : (
                    <>Kirim Pesan <Send className="w-4 h-4" /></>
                  )}
                </button>

                {formStatus === 'success' && (
                  <p className="text-emerald-500 font-bold text-sm text-center mt-4">Terima kasih! Pesan Anda telah berhasil dikirim.</p>
                )}
                {formStatus === 'error' && (
                  <p className="text-red-500 font-bold text-sm text-center mt-4">Maaf, terjadi kesalahan. Silakan coba lagi.</p>
                )}
              </form>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const theme = {
    bg: isDarkMode ? 'bg-uni-black' : 'bg-[#F9FAFB]',
    text: isDarkMode ? 'text-uni-white' : 'text-[#202121]',
    textMuted: isDarkMode ? 'text-gray-400' : 'text-gray-600',
    border: isDarkMode ? 'border-white/10' : 'border-black/5',
    sectionBg: isDarkMode ? 'bg-white/5' : 'bg-white',
    cardBg: isDarkMode ? 'bg-white/5' : 'bg-white shadow-sm',
    cardHover: isDarkMode ? 'hover:bg-white/10' : 'hover:bg-gray-50',
    navBg: isDarkMode ? 'bg-uni-black/80' : 'bg-[#F9FAFB]/80',
    inputBg: isDarkMode ? 'bg-black/20' : 'bg-white',
    inputBorder: isDarkMode ? 'border-white/10' : 'border-black/10',
    textYellow: isDarkMode ? 'text-uni-yellow' : 'text-[#A38F59]',
  };

  return (
    <BrowserRouter>
      <Layout isDarkMode={isDarkMode} toggleTheme={toggleTheme} theme={theme}>
        <Routes>
          <Route path="/" element={<LandingPage isDarkMode={isDarkMode} toggleTheme={toggleTheme} theme={theme} />} />
          <Route path="/camera" element={<CameraPage isDarkMode={isDarkMode} theme={theme} />} />
          <Route path="/drone" element={<DronePage isDarkMode={isDarkMode} theme={theme} />} />
          <Route path="/edit" element={<EditPage isDarkMode={isDarkMode} theme={theme} />} />
          <Route path="/photography" element={<PhotographyPage isDarkMode={isDarkMode} theme={theme} />} />
          <Route path="/souvenir" element={<SouvenirPage isDarkMode={isDarkMode} theme={theme} />} />
          <Route path="/mediakit" element={<MediaKitPage isDarkMode={isDarkMode} theme={theme} />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
