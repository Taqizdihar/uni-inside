import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Sparkles, Shield, Zap, Clock, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const SouvenirPage = ({ isDarkMode, theme }: { isDarkMode: boolean, theme: any }) => {
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
              <h1 className="text-5xl md:text-6xl font-black mb-6">Paket <span className={theme.textYellow}>Suvenir</span></h1>
              <p className={`text-xl ${theme.textMuted} mb-8 leading-relaxed`}>
                Paket suvenir eksklusif untuk kenang-kenangan acara Anda. Kami menyediakan berbagai pilihan suvenir yang unik, berkualitas, dan berkesan untuk tamu undangan Anda.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#contact" className="px-8 py-4 rounded-full bg-uni-yellow text-uni-black font-bold hover:brightness-110 transition-all shadow-lg shadow-uni-yellow/20">
                  Pesan Sekarang
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
                src="https://images.unsplash.com/photo-1513519245088-0e12902e35ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Paket Suvenir" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {[
              { icon: Shield, title: "Kualitas Premium", desc: "Kami menggunakan bahan-bahan berkualitas tinggi untuk setiap suvenir." },
              { icon: Zap, title: "Desain Kustom", desc: "Anda bisa memesan desain suvenir yang unik dan sesuai dengan tema acara." },
              { icon: Clock, title: "Pengiriman Tepat Waktu", desc: "Kami menjamin pengiriman suvenir tepat waktu sebelum acara dimulai." }
            ].map((item, i) => (
              <div key={i} className={`p-8 rounded-3xl ${theme.cardBg} border ${theme.border}`}>
                <item.icon className={`w-10 h-10 ${theme.textYellow} mb-6`} />
                <h3 className="text-xl font-black mb-4">{item.title}</h3>
                <p className={theme.textMuted}>{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mb-24">
            <h2 className="text-3xl font-black mb-12 text-center">Pilihan Paket</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className={`p-6 rounded-2xl ${theme.cardBg} border ${theme.border} flex items-center justify-between`}>
                <span className="font-bold">Paket Wedding (100 Pcs)</span>
                <span className={theme.textYellow}>Mulai Rp 2.500.000</span>
              </div>
              <div className={`p-6 rounded-2xl ${theme.cardBg} border ${theme.border} flex items-center justify-between`}>
                <span className="font-bold">Paket Corporate (50 Pcs)</span>
                <span className={theme.textYellow}>Mulai Rp 1.500.000</span>
              </div>
              <div className={`p-6 rounded-2xl ${theme.cardBg} border ${theme.border} flex items-center justify-between`}>
                <span className="font-bold">Paket Event (Custom)</span>
                <span className={theme.textYellow}>Hubungi Kami</span>
              </div>
              <div className={`p-6 rounded-2xl ${theme.cardBg} border ${theme.border} flex items-center justify-between`}>
                <span className="font-bold">Packaging & Kartu Ucapan</span>
                <span className={theme.textYellow}>Termasuk</span>
              </div>
            </div>
          </div>

          <div className="mb-24">
            <h2 className="text-3xl font-black mb-12 text-center">FAQ</h2>
            <div className="space-y-4 max-w-3xl mx-auto">
              {[
                { q: "Berapa lama waktu pemesanan?", a: "Pemesanan minimal dilakukan 2-4 minggu sebelum acara." },
                { q: "Apakah ada minimal order?", a: "Ya, minimal order untuk paket suvenir adalah 50 pcs." },
                { q: "Bisa kirim ke luar kota?", a: "Tentu, kami bisa mengirimkan suvenir ke seluruh Indonesia dengan biaya pengiriman ditanggung pemesan." }
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

export default SouvenirPage;
