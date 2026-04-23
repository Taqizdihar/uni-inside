import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Instagram, Linkedin, Globe, Youtube } from 'lucide-react';
import { SITE_CONFIG } from '@/constants/config';

// TikTok SVG icon (not available in lucide-react)
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

// Social media icon mapping
const socialIconMap: Record<string, { icon: any; label: string }> = {
  linkedin:  { icon: Linkedin,    label: 'LinkedIn' },
  website:   { icon: Globe,       label: 'Website' },
  instagram: { icon: Instagram,   label: 'Instagram' },
  youtube:   { icon: Youtube,     label: 'YouTube' },
  tiktok:    { icon: TikTokIcon,  label: 'TikTok' },
};

const TeamCard = ({ member, position, isMobile, theme, isDarkMode }: any) => {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    if (position !== 'center') {
      setIsFlipped(false);
    }
  }, [position]);

  const handleClick = () => {
    if (position === 'center') {
      setIsFlipped(!isFlipped);
    }
  };

  const getImageUrl = (imageName: string) => {
    try {
      return new URL(`../assets/members/${imageName}`, import.meta.url).href;
    } catch (e) {
      return '';
    }
  };

  // Determine animation properties based on position
  let animateProps: any = { x: 0, scale: 0.5, opacity: 0, zIndex: 10 };
  let hoverProps: any = {};

  if (position === 'center') {
    animateProps = { x: 0, scale: 1, opacity: 1, zIndex: 30 };
    hoverProps = { scale: 1.02 };
  } else if (position === 'left') {
    animateProps = { x: isMobile ? -110 : -240, scale: 0.8, opacity: 0.5, zIndex: 20 };
  } else if (position === 'right') {
    animateProps = { x: isMobile ? 110 : 240, scale: 0.8, opacity: 0.5, zIndex: 20 };
  }

  // Filter socials to only those with a URL
  const activeSocials = member.socials
    ? Object.entries(member.socials).filter(([_, url]) => url)
    : [];

  return (
    <motion.div
      className={`absolute top-1/2 left-1/2 ${position === 'center' ? 'cursor-pointer' : ''}`}
      style={{ perspective: 1000, width: isMobile ? 240 : 280 }}
      animate={{ 
        x: `calc(-50% + ${animateProps.x}px)`, 
        y: "-50%",
        scale: animateProps.scale,
        opacity: animateProps.opacity,
        zIndex: animateProps.zIndex
      }}
      whileHover={hoverProps}
      transition={{ duration: 0.6, type: "spring", stiffness: 300, damping: 30 }}
      onClick={handleClick}
      initial={false}
    >
      <motion.div
        className="w-full relative"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 200, damping: 20 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front Side */}
        <div 
          className={`w-full rounded-3xl overflow-hidden flex flex-col border ${theme.border} ${position === 'center' && isDarkMode ? 'shadow-[0_0_20px_rgba(255,255,255,0.05)]' : position === 'center' ? 'shadow-lg' : ''}`} 
          style={{ backfaceVisibility: 'hidden' }}
        >
          {/* Image Container — strict 4:5 aspect ratio */}
          <div className="w-full aspect-[4/5] relative overflow-hidden bg-gray-200 shrink-0">
             <img 
               src={getImageUrl(member.image)} 
               alt={member.name}
               className="w-full h-full object-cover"
               onError={(e) => {
                 (e.target as HTMLImageElement).style.display = 'none';
                 const parent = (e.target as HTMLImageElement).parentElement;
                 if(parent) {
                   parent.style.backgroundColor = isDarkMode ? '#374151' : '#e5e7eb';
                   parent.innerHTML = `<div class="w-full h-full flex items-center justify-center font-bold text-4xl opacity-20">${member.name.substring(0, 1)}</div>`;
                 }
               }}
             />
          </div>
          
          {/* Info Container — solid background, outside the image frame */}
          <div className={`px-4 py-3 text-center shrink-0 ${isDarkMode ? 'bg-[#1a1a1a]' : 'bg-white'} border-t ${theme.border}`}>
            <h4 className={`text-xl font-black leading-tight mb-0.5 ${theme.text}`}>{member.name}</h4>
            <p className={`text-[10px] ${theme.textYellow} font-bold tracking-widest uppercase leading-snug`}>{member.role}</p>
          </div>
        </div>

        {/* Back Side */}
        <div 
          className={`absolute inset-0 rounded-3xl border ${theme.border} p-6 flex flex-col items-center justify-center text-center ${isDarkMode ? 'bg-[#1a1a1a]' : 'bg-white'}`} 
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <h4 className={`text-xl font-black mb-3 ${theme.text}`}>{member.name}</h4>
          <p className={`text-[10px] ${theme.textYellow} font-bold tracking-widest uppercase mb-4`}>{member.role}</p>
          <p className={`text-sm ${theme.textMuted} leading-relaxed mb-6`}>{member.bio}</p>
          
          {/* Dynamic Social Icons */}
          {activeSocials.length > 0 && (
            <div className="flex items-center gap-3 mt-auto">
              {activeSocials.map(([platform, url]) => {
                const socialInfo = socialIconMap[platform];
                if (!socialInfo) return null;
                const IconComponent = socialInfo.icon;
                return (
                  <a
                    key={platform}
                    href={url as string}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className={`w-9 h-9 rounded-full ${isDarkMode ? 'bg-white/10 hover:bg-white/20' : 'bg-black/5 hover:bg-black/10'} flex items-center justify-center ${theme.textMuted} hover:${theme.textYellow} transition-colors`}
                    title={socialInfo.label}
                  >
                    <IconComponent className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

const TeamSection = ({ theme, isDarkMode }: any) => {
  const team = SITE_CONFIG.team;
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % team.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + team.length) % team.length);
  };

  const getCardPosition = (index: number) => {
    if (index === activeIndex) return 'center';
    
    const prevIndex = (activeIndex - 1 + team.length) % team.length;
    if (index === prevIndex) return 'left';
    
    const nextIndex = (activeIndex + 1) % team.length;
    if (index === nextIndex) return 'right';
    
    return 'hidden';
  };

  return (
    <section className={`py-24 px-6 relative overflow-hidden ${theme.sectionBg} border-t ${theme.border} transition-colors duration-500`}>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <h2 className={`text-sm font-black tracking-widest ${theme.textYellow} uppercase mb-3`}>Our Team</h2>
          <h3 className="text-4xl md:text-5xl font-black">Mengenal anggota kami lebih dekat</h3>
          <motion.p
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className={`mt-4 text-sm font-bold ${theme.textMuted}`}
          >
            klik kartu untuk lihat detail
          </motion.p>
        </div>

        <div className="relative w-full h-[500px] flex items-center justify-center">
          
          {/* Navigation Buttons */}
          <div className="absolute w-full max-w-4xl flex justify-between px-4 md:px-12 z-40 pointer-events-none">
            <button 
              onClick={handlePrev}
              className={`pointer-events-auto p-4 rounded-full ${theme.cardBg} border ${theme.border} ${theme.cardHover} backdrop-blur-md shadow-xl transition-all hover:scale-110 active:scale-95`}
              aria-label="Previous Team Member"
            >
              <ChevronLeft className={`w-6 h-6 ${theme.text}`} />
            </button>

            <button 
              onClick={handleNext}
              className={`pointer-events-auto p-4 rounded-full ${theme.cardBg} border ${theme.border} ${theme.cardHover} backdrop-blur-md shadow-xl transition-all hover:scale-110 active:scale-95`}
              aria-label="Next Team Member"
            >
              <ChevronRight className={`w-6 h-6 ${theme.text}`} />
            </button>
          </div>

          {/* Stacked Carousel */}
          <div className="relative w-full h-full flex items-center justify-center">
            <motion.div 
              className="relative w-full max-w-4xl h-full touch-pan-y"
              onPanEnd={(e, info) => {
                if (info.offset.x < -50) handleNext();
                else if (info.offset.x > 50) handlePrev();
              }}
            >
            {team.map((member, i) => (
              <TeamCard 
                key={member.id} 
                member={member} 
                position={getCardPosition(i)} 
                isMobile={isMobile}
                theme={theme}
                isDarkMode={isDarkMode}
              />
            ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TeamSection;
