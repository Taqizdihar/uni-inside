import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { SITE_CONFIG } from '@/constants/config';

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
    hoverProps = { scale: 1.05 };
  } else if (position === 'left') {
    animateProps = { x: isMobile ? -130 : -240, scale: 0.8, opacity: 0.5, zIndex: 20 };
  } else if (position === 'right') {
    animateProps = { x: isMobile ? 130 : 240, scale: 0.8, opacity: 0.5, zIndex: 20 };
  }

  return (
    <motion.div
      className={`absolute top-0 bottom-0 m-auto w-64 h-96 ${position === 'center' ? 'cursor-pointer' : ''}`}
      style={{ perspective: 1000 }}
      animate={animateProps}
      whileHover={hoverProps}
      transition={{ duration: 0.6, type: "spring", stiffness: 300, damping: 30 }}
      onClick={handleClick}
      initial={false}
    >
      <motion.div
        className="w-full h-full relative"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 200, damping: 20 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front Side */}
        <div 
          className={`absolute inset-0 ${theme.cardBg} border ${theme.border} rounded-3xl overflow-hidden backdrop-blur-xl flex flex-col ${position === 'center' && isDarkMode ? 'shadow-[0_0_30px_rgba(250,208,44,0.1)]' : position === 'center' ? 'shadow-xl' : ''}`} 
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="w-full h-2/3 relative bg-gray-200 overflow-hidden">
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
             <div className={`absolute inset-0 bg-gradient-to-t ${isDarkMode ? 'from-[#1a1a1a]' : 'from-white'} to-transparent opacity-90`} />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-6 text-center z-10">
            <h4 className="text-xl font-black mb-1">{member.name}</h4>
            <p className={`text-sm ${theme.textYellow} font-bold tracking-widest uppercase`}>{member.role}</p>
          </div>
        </div>

        {/* Back Side */}
        <div 
          className={`absolute inset-0 ${theme.cardBg} border ${theme.border} rounded-3xl p-6 backdrop-blur-xl flex flex-col items-center justify-center text-center`} 
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <h4 className="text-lg font-black mb-4">Profil</h4>
          <p className={`text-sm ${theme.textMuted} leading-relaxed`}>{member.bio}</p>
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
    checkMobile(); // Check on initial mount
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
          <h3 className="text-4xl md:text-5xl font-black">Tim Kami.</h3>
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
          <div className="relative w-full h-full flex justify-center perspective-1000">
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
          </div>

        </div>
      </div>
    </section>
  );
};

export default TeamSection;
