import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { SITE_CONFIG } from '@/constants/config';

const TeamCard = ({ member, isActive, theme, isDarkMode }: any) => {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    if (!isActive) {
      setIsFlipped(false);
    }
  }, [isActive]);

  const handleClick = () => {
    if (isActive) {
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

  return (
    <motion.div
      className={`relative w-64 h-96 shrink-0 cursor-pointer ${isActive ? 'z-20' : 'z-10'}`}
      style={{ perspective: 1000 }}
      animate={{
        scale: isActive ? 1.1 : 0.85,
        opacity: isActive ? 1 : 0.4,
      }}
      whileHover={isActive ? { scale: 1.15 } : {}}
      transition={{ duration: 0.5, type: "spring", stiffness: 300, damping: 25 }}
      onClick={handleClick}
    >
      <motion.div
        className="w-full h-full relative"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 200, damping: 20 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front Side */}
        <div 
          className={`absolute inset-0 ${theme.cardBg} border ${theme.border} rounded-3xl overflow-hidden backdrop-blur-xl flex flex-col`} 
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
  const [activeIndex, setActiveIndex] = useState(Math.floor(team.length / 2));

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % team.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + team.length) % team.length);
  };

  const handleDragEnd = (event: any, info: any) => {
    if (info.offset.x < -50) {
      handleNext();
    } else if (info.offset.x > 50) {
      handlePrev();
    }
  };

  return (
    <section className={`py-24 px-6 relative overflow-hidden ${theme.sectionBg} border-t ${theme.border} transition-colors duration-500`}>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <h2 className={`text-sm font-black tracking-widest ${theme.textYellow} uppercase mb-3`}>Our Team</h2>
          <h3 className="text-4xl md:text-5xl font-black">Tim Kami.</h3>
        </div>

        <div className="relative w-full h-[500px]">
          {/* Navigation Buttons */}
          <button 
            onClick={handlePrev}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-30 p-4 rounded-full ${theme.cardBg} border ${theme.border} ${theme.cardHover} backdrop-blur-md hidden md:flex shadow-xl`}
          >
            <ChevronLeft className={`w-6 h-6 ${theme.text}`} />
          </button>

          <button 
            onClick={handleNext}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-30 p-4 rounded-full ${theme.cardBg} border ${theme.border} ${theme.cardHover} backdrop-blur-md hidden md:flex shadow-xl`}
          >
            <ChevronRight className={`w-6 h-6 ${theme.text}`} />
          </button>

          {/* Carousel Track */}
          <div className="absolute left-1/2 top-0 bottom-0 flex items-center">
            <motion.div 
              className="flex items-center gap-8"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
              animate={{ x: -1 * (activeIndex * (256 + 32) + 128) }} // 256px card + 32px gap, 128px is half card width
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
            >
              {team.map((member, i) => (
                <TeamCard 
                  key={member.id} 
                  member={member} 
                  isActive={i === activeIndex} 
                  theme={theme}
                  isDarkMode={isDarkMode}
                />
              ))}
            </motion.div>
          </div>
        </div>
        
        {/* Mobile helper text */}
        <div className="text-center mt-8 md:hidden">
          <p className={`text-sm ${theme.textMuted} animate-pulse`}>Geser untuk melihat tim</p>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
