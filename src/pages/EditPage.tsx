import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, PenTool, Shield, Zap, Clock, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const EditPage = ({ isDarkMode, theme }: { isDarkMode: boolean, theme: any }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={`min-h-screen ${theme.bg} ${theme.text} font-sans transition-colors duration-500`}>
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <Link to="/" className={`inline-flex items-center gap-2 mb-8 font-bold ${theme.textMuted} hover:${theme.text} transition-colors`}>
            <ArrowLeft className="w-4 h-4" /> Kembali ke Beranda
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-black mb-6">Jasa <span className={theme.textYellow}>Edit Video</span></h1>
              <p className={`text-xl ${theme.textMuted} mb-8 leading-relaxed`}>
                Jasa editing video untuk konten sosial media atau proyek pribadi. Kami membantu Anda menciptakan video yang menarik, dinamis, dan profesional untuk audiens Anda.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#contact" className="px-8 py-4 rounded-full bg-uni-yellow text-uni-black font-bold hover:brightness-110 transition-all shadow-lg shadow-uni-yellow/20">
                  Konsultasi Sekarang
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`relative aspect-video rounded-3xl overflow-hidden border ${theme.border} shadow-2xl`}
            >
              <img 
                src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Jasa Edit Video" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {[
              { icon: Shield, title: "Revisi Gratis", desc: "Kami memberikan revisi hingga Anda puas dengan hasil akhirnya." },
              { icon: Zap, title: "Cepat & Tepat", desc: "Proses editing yang efisien untuk memenuhi deadline proyek Anda." },
              { icon: Clock, title: "Berbagai Format", desc: "Kami mendukung berbagai format video untuk berbagai platform media sosial." }
            ].map((item, i) => (
              <div key={i} className={`p-8 rounded-3xl ${theme.cardBg} border ${theme.border}`}>
                <item.icon className={`w-10 h-10 ${theme.textYellow} mb-6`} />
                <h3 className="text-xl font-black mb-4">{item.title}</h3>
                <p className={theme.textMuted}>{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mb-24">
            <h2 className="text-3xl font-black mb-12 text-center">Paket Editing</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className={`p-6 rounded-2xl ${theme.cardBg} border ${theme.border} flex items-center justify-between`}>
                <span className="font-bold">Paket Basic (Shorts/Reels)</span>
                <span className={theme.textYellow}>Mulai Rp 150.000</span>
              </div>
              <div className={`p-6 rounded-2xl ${theme.cardBg} border ${theme.border} flex items-center justify-between`}>
                <span className="font-bold">Paket YouTube (10 Menit)</span>
                <span className={theme.textYellow}>Mulai Rp 500.000</span>
              </div>
              <div className={`p-6 rounded-2xl ${theme.cardBg} border ${theme.border} flex items-center justify-between`}>
                <span className="font-bold">Paket Cinematic (Wedding/Event)</span>
                <span className={theme.textYellow}>Mulai Rp 1.500.000</span>
              </div>
              <div className={`p-6 rounded-2xl ${theme.cardBg} border ${theme.border} flex items-center justify-between`}>
                <span className="font-bold">Color Grading & Sound Design</span>
                <span className={theme.textYellow}>Termasuk</span>
              </div>
            </div>
          </div>

          <div className="mb-24">
            <h2 className="text-3xl font-black mb-12 text-center">FAQ</h2>
            <div className="space-y-4 max-w-3xl mx-auto">
              {[
                { q: "Berapa lama proses editing?", a: "Tergantung pada kompleksitas video, biasanya berkisar antara 2-5 hari kerja." },
                { q: "Apakah bisa request musik?", a: "Tentu, kami menyediakan koleksi musik bebas royalti atau Anda bisa memberikan musik sendiri." },
                { q: "Bagaimana cara pengiriman file?", a: "Anda bisa mengirimkan file mentah melalui Google Drive atau layanan cloud lainnya." }
              ].map((faq, i) => (
                <div key={i} className={`p-6 rounded-2xl ${theme.cardBg} border ${theme.border}`}>
                  <h4 className="font-bold mb-2 flex items-center gap-2">
                    <CheckCircle2 className={`w-4 h-4 ${theme.textYellow}`} /> {faq.q}
                  </h4>
                  <p className={theme.textMuted}>{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EditPage;
