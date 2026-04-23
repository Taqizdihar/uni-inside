import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Camera, Shield, Zap, Clock, CheckCircle2 } from 'lucide-react';
import { SITE_CONFIG } from '@/constants/config';
import { Link } from 'react-router-dom';

const PhotographyPage = ({ isDarkMode, theme }: { isDarkMode: boolean, theme: any }) => {
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
              <h1 className="text-5xl md:text-6xl font-black mb-6">Jasa <span className={theme.textYellow}>Fotografi</span></h1>
              <p className={`text-xl ${theme.textMuted} mb-8 leading-relaxed`}>
                Jasa fotografi profesional untuk acara, produk, atau portofolio. Kami mengabadikan setiap momen berharga Anda dengan kualitas gambar yang luar biasa dan artistik.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href={`https://wa.me/${SITE_CONFIG.brand.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-full bg-uni-yellow text-uni-black font-bold hover:brightness-110 transition-all shadow-lg shadow-uni-yellow/20"
                >
                  Booking Sekarang
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
                src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Jasa Fotografi" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {[
              { icon: Shield, title: "Fotografer Berpengalaman", desc: "Tim kami terdiri dari fotografer profesional yang ahli di bidangnya." },
              { icon: Zap, title: "Kualitas Studio", desc: "Kami menggunakan peralatan studio terbaik untuk hasil foto yang sempurna." },
              { icon: Clock, title: "Hasil Cepat", desc: "Proses editing foto yang cepat tanpa mengurangi kualitas hasil akhir." }
            ].map((item, i) => (
              <div key={i} className={`p-8 rounded-3xl ${theme.cardBg} border ${theme.border}`}>
                <item.icon className={`w-10 h-10 ${theme.textYellow} mb-6`} />
                <h3 className="text-xl font-black mb-4">{item.title}</h3>
                <p className={theme.textMuted}>{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mb-24">
            <h2 className="text-3xl font-black mb-12 text-center">Paket Fotografi</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className={`p-6 rounded-2xl ${theme.cardBg} border ${theme.border} flex items-center justify-between`}>
                <span className="font-bold">Paket Event (Harian)</span>
                <span className={theme.textYellow}>Mulai Rp 1.500.000</span>
              </div>
              <div className={`p-6 rounded-2xl ${theme.cardBg} border ${theme.border} flex items-center justify-between`}>
                <span className="font-bold">Paket Produk (10 Foto)</span>
                <span className={theme.textYellow}>Mulai Rp 500.000</span>
              </div>
              <div className={`p-6 rounded-2xl ${theme.cardBg} border ${theme.border} flex items-center justify-between`}>
                <span className="font-bold">Paket Portofolio (Personal)</span>
                <span className={theme.textYellow}>Mulai Rp 750.000</span>
              </div>
              <div className={`p-6 rounded-2xl ${theme.cardBg} border ${theme.border} flex items-center justify-between`}>
                <span className="font-bold">Editing & Retouching</span>
                <span className={theme.textYellow}>Termasuk</span>
              </div>
            </div>
          </div>

          <div className="mb-24">
            <h2 className="text-3xl font-black mb-12 text-center">FAQ</h2>
            <div className="space-y-4 max-w-3xl mx-auto">
              {[
                { q: "Apakah bisa request lokasi?", a: "Tentu, kami bisa melakukan pemotretan di lokasi yang Anda inginkan." },
                { q: "Berapa banyak foto yang didapat?", a: "Jumlah foto tergantung pada paket yang dipilih, biasanya berkisar antara 20-100 foto." },
                { q: "Apakah file mentah diberikan?", a: "Kami memberikan file hasil editing terbaik, file mentah bisa diberikan jika diminta." }
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

export default PhotographyPage;
