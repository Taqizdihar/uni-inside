export type Lang = 'id' | 'en';

export const SITE_CONFIG = {
  brand: {
    name: "Uni-Inside",
    subtitle: "CREATIVE STARTUP",
    whatsapp: "628974395313",
    whatsappDisplay: "+62 897-4395-313",
    email: "uninsidemed@gmail.com",
    address: {
      line1: "Gedung Selaru lt. 4",
      line2: "Fakultas Ilmu Terapan, Telkom University",
      line3: "Jl. Telekomunikasi No.1, Sukapura, Kec. Dayeuhkolot, Kabupaten Bandung, Jawa Barat 40257",
      mapsLink: "https://maps.app.goo.gl/uuckDPXqEHUtw1pQA"
    },
    categories: ["Campus Media", "Creative Space", "Digital Marketing"]
  },
  socials: [
    {
      platform: "Instagram",
      handle: "@uniinside.studio",
      followers: "95",
      link: "https://www.instagram.com/uniinside.studio?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
    },
    {
      platform: "TikTok",
      handle: "@uniinside",
      followers: "47",
      link: "https://www.tiktok.com/@uniinside.studio?is_from_webapp=1&sender_device=pc"
    }
    //{ platform: "YouTube", handle: "Uni-Inside Studio", followers: "12", link: "#" },
    //{ platform: "LinkedIn", handle: "Uni-Inside", followers: "34", link: "#" },
    //{ platform: "X", handle: "@uniinside", followers: "18", link: "#" }
  ],
  partners: [
    {
      name: "D3 Sistem Informasi",
      logo: "d3si.jpg",
      description: {
        id: "Program studi D3 Sistem Informasi Telkom University yang terakreditasi Unggul.",
        en: "The Diploma in Information Systems program at Telkom University, accredited with an 'Excellent' rating."
      },
      link: "https://telkomuniversity.ac.id"
    },
    {
      name: "Koperasi Giat Sejahtera Bersama",
      logo: "giat.jpg",
      description: {
        id: "Koperasi Telkom University yang menyediakan kebutuhan mahasiswa dan dosen.",
        en: "A Telkom University cooperative providing daily essentials for students and faculty."
      },
      link: "#"
    }
  ],
  mediaKit: {
    totalFollowers: "142",
    growthDescription: {
      id: "Total jumlah pengikut lintas sosial media aktif kami.",
      en: "Total followers across all of our active social media platforms."
    }
  },
  team: [
    { id: 1, name: "April Adzani", role: "Chief Executive Officer", image: "April.jpg", bio: { id: "Halo, nama saya April Adzani. Saya adalah CEO dari Uni-Inside.", en: "Hi, I'm April Adzani. I serve as the CEO of Uni-Inside." }, socials: {} },
    { id: 2, name: "Dian T. S. Daeli", role: "Chief Operating Officer", image: "Dian.jpg", bio: { id: "Halo, nama saya Dian Tri. Saya adalah COO dari Uni-Inside.", en: "Hi, I'm Dian Tri. I serve as the COO of Uni-Inside." }, socials: {} },
    { id: 3, name: "M. Taqi Izdihar", role: "Chief Technology Officer", image: "Taqi.jpg", bio: { id: "Halo, saya adalah seorang peminat IT & Multimedia. Motto saya adalah 'Be patient & be grateful always'", en: "Hi, I'm passionate about IT & Multimedia. My motto is 'Be patient & be grateful always'" }, socials: { instagram: "https://instagram.com/taqizdihar", website: "https://beacons.ai/taqizdihar", linkedin: "https://linkedin.com/in/taqizdihar" } },
    { id: 4, name: "K. Qorry Kharismayani", role: "Student Daily Life Specialist", image: "Qorry.jpg", bio: { id: "Halo, nama saya Qorry. Saya adalah Student Daily Life Specialist dari Uni-Inside.", en: "Hi, I'm Qorry. I'm the Student Daily Life Specialist at Uni-Inside." }, socials: {} },
    { id: 5, name: "Amadea Salsabila", role: "Lab Daily Life Specialist", image: "Amadea.jpg", bio: { id: "Halo, nama saya Amadea. Saya adalah Lab Daily Life Specialist dari Uni-Inside.", en: "Hi, I'm Amadea. I'm the Lab Daily Life Specialist at Uni-Inside." }, socials: {} },
    { id: 6, name: "Nadine Nathania", role: "News Report Specialist", image: "Nadine.jpg", bio: { id: "Halo, nama saya Nadine. Saya adalah News Report Specialist dari Uni-Inside.", en: "Hi, I'm Nadine. I'm the News Report Specialist at Uni-Inside." }, socials: {} },
    { id: 7, name: "Naura Ramadhani", role: "Social Media Entertainment Specialist", image: "Naura.jpg", bio: { id: "Halo, nama saya Naura. Saya adalah Social Media Entertainment Specialist dari Uni-Inside.", en: "Hi, I'm Naura. I'm the Social Media Entertainment Specialist at Uni-Inside." }, socials: {} },
    { id: 8, name: "Cantika Anggi", role: "Digital Education Specialist", image: "Anggi.jpg", bio: { id: "Halo, nama saya Cantika. Saya adalah Digital Education Specialist dari Uni-Inside.", en: "Hi, I'm Cantika. I'm the Digital Education Specialist at Uni-Inside." }, socials: {} },
    { id: 9, name: "Amany Fakhirah R.", role: "F&B Review Specialist", image: "Amany.jpg", bio: { id: "Halo, nama saya Amany. Saya adalah F&B Review Specialist dari Uni-Inside.", en: "Hi, I'm Amany. I'm the F&B Review Specialist at Uni-Inside." }, socials: {} }
  ]
};

/** All UI text strings keyed by language */
export const UI_TEXT = {
  // Navbar
  nav: {
    aboutUs: { id: "About Us", en: "About Us" },
    whyUs: { id: "Why Us", en: "Why Us" },
    ourTeam: { id: "Our Team", en: "Our Team" },
    products: { id: "Products", en: "Products" },
    contact: { id: "Contact", en: "Contact" },
  },

  // Hero Section
  hero: {
    badge: { id: "Creative Startup", en: "Creative Startup" },
    heading1: { id: "Empowering Your", en: "Empowering Your" },
    heading2: { id: "Creative Vision.", en: "Creative Vision." },
    description: {
      id: "Kami adalah sekumpulan mahasiswa kreatif yang siap mengubah ide brilian Anda menjadi karya visual dan strategi konten yang berdampak nyata. Mari ciptakan sesuatu yang luar biasa bersama.",
      en: "We are a group of creative students ready to transform your brilliant ideas into impactful visual works and content strategies. Let's create something extraordinary together."
    },
    ctaPrimary: { id: "Media Kit Kami", en: "Our Media Kit" },
    ctaSecondary: { id: "Hubungi Kami", en: "Contact Us" },
    overlayTitle: { id: "Produksi Konten Kreatif", en: "Creative Content Production" },
    overlaySubtitle: { id: "Kualitas profesional, sentuhan anak muda.", en: "Professional quality, youthful touch." },
  },

  // About Us Section
  aboutUs: {
    label: { id: "About Us", en: "About Us" },
    text: {
      id: "Lahir dari semangat inovasi kampus, kami hadir menjembatani ide dan realita. Kami percaya setiap cerita berhak disampaikan dengan cara luar biasa, menggabungkan tren terkini dan eksekusi profesional untuk hasil yang melampaui ekspektasi.",
      en: "Born from the spirit of campus innovation, we bridge ideas and reality. We believe every story deserves to be told in an extraordinary way, combining the latest trends with professional execution for results that exceed expectations."
    }
  },

  // Why Choose Us Section
  whyUs: {
    label: { id: "Why Choose Us", en: "Why Choose Us" },
    heading: { id: "Keunggulan Kami", en: "Our Advantages" },
    items: [
      {
        title: { id: "Ide Segar & Kekinian", en: "Fresh & Trendy Ideas" },
        desc: {
          id: "Sebagai mahasiswa, kami selalu up-to-date dengan tren digital terbaru. Kami membawa perspektif segar yang relevan dengan audiens masa kini.",
          en: "As students, we are always up-to-date with the latest digital trends. We bring fresh perspectives relevant to today's audience."
        }
      },
      {
        title: { id: "Eksekusi Profesional", en: "Professional Execution" },
        desc: {
          id: "Meski berjiwa muda, standar kerja kami tetap profesional. Ketepatan waktu, kualitas alat, dan hasil akhir adalah prioritas utama kami.",
          en: "While youthful in spirit, our work standards remain professional. Timeliness, quality equipment, and polished results are our top priorities."
        }
      },
      {
        title: { id: "Harga Fleksibel", en: "Flexible Pricing" },
        desc: {
          id: "Kami memahami kebutuhan budget yang beragam. Layanan kami dirancang untuk memberikan value maksimal dengan harga yang masuk akal.",
          en: "We understand diverse budget needs. Our services are designed to deliver maximum value at reasonable prices."
        }
      }
    ]
  },

  // Team Section
  team: {
    label: { id: "Our Team", en: "Our Team" },
    heading: { id: "Mengenal Anggota Kami Lebih Dekat", en: "Get to Know Our Team Up Close" },
    hint: { id: "klik kartu untuk lihat detail", en: "click a card to see details" },
  },

  // Products Section
  products: {
    label: { id: "Our Products & Services", en: "Our Products & Services" },
    heading: { id: "Layanan Kreatif yang Kami Tawarkan untuk Anda", en: "Creative Services We Offer for You" },
    appHeading: { id: "Produk Aplikasi Kami", en: "Our App Products" },
    items: [
      { title: { id: "Sewa Kamera", en: "Camera Rental" }, subtitle: { id: "Sewa kamera berkualitas tinggi dengan penyimpanan besar", en: "Rent high-quality cameras with large storage capacity" }, cta: { id: "Sewa Sekarang", en: "Rent Now" } },
      { title: { id: "Sewa Drone", en: "Drone Rental" }, subtitle: { id: "Sewa drone untuk dokumentasi video cinematic", en: "Rent drones for cinematic video documentation" }, cta: { id: "Sewa Sekarang", en: "Rent Now" } },
      { title: { id: "Jasa Edit", en: "Video Editing" }, subtitle: { id: "Jasa editing video untuk konten sosial media atau proyek pribadi", en: "Video editing services for social media content or personal projects" }, cta: { id: "Edit Video", en: "Edit Video" } },
      { title: { id: "Jasa Fotografi", en: "Photography" }, subtitle: { id: "Jasa fotografi profesional untuk acara, produk, atau portofolio", en: "Professional photography for events, products, or portfolios" }, cta: { id: "Booking Sekarang", en: "Book Now" } },
      { title: { id: "Paket Suvenir", en: "Souvenir Packages" }, subtitle: { id: "Paket suvenir eksklusif untuk kenang-kenangan", en: "Exclusive souvenir packages for memorable keepsakes" }, cta: { id: "Pesan Sekarang", en: "Order Now" } }
    ]
  },

  // Contact Section
  contact: {
    label: { id: "Contact Us", en: "Contact Us" },
    heading: { id: "Mari Berkolaborasi", en: "Let's Collaborate" },
    description: {
      id: "Punya ide gila yang ingin diwujudkan? Atau sekadar ingin bertanya tentang layanan kami? Jangan ragu untuk menghubungi tim Uni-Inside.",
      en: "Have a bold idea you want to bring to life? Or simply want to ask about our services? Don't hesitate to reach out to the Uni-Inside team."
    },
    officeAddress: { id: "Office Address", en: "Office Address" },
    checkMaps: { id: "Cek di Maps", en: "Check on Maps" },
    contactUs: { id: "Hubungi Kami", en: "Contact Us" },
    sendEmail: { id: "Kirim Email", en: "Send an Email" },
    formName: { id: "Nama Lengkap", en: "Full Name" },
    formNamePlaceholder: { id: "Masukkan nama Anda", en: "Enter your name" },
    formEmail: { id: "Email Address", en: "Email Address" },
    formMessage: { id: "Pesan / Detail Proyek", en: "Message / Project Details" },
    formMessagePlaceholder: { id: "Ceritakan tentang proyek atau kebutuhan Anda...", en: "Tell us about your project or needs..." },
    formSubmit: { id: "Kirim Pesan", en: "Send Message" },
    formSending: { id: "Mengirim...", en: "Sending..." },
    formSuccess: { id: "Terima kasih! Pesan Anda telah berhasil dikirim.", en: "Thank you! Your message has been sent successfully." },
    formError: { id: "Maaf, terjadi kesalahan. Silakan coba lagi.", en: "Sorry, an error occurred. Please try again." },
  },

  // Media Kit
  mediaKit: {
    totalFollowers: { id: "Total Pengikut", en: "Total Followers" },
    socialReach: { id: "Jangkauan Sosial Media", en: "Social Media Reach" },
    followersLabel: { id: "Pengikut", en: "Followers" },
    aboutLabel: { id: "Tentang Kami", en: "About Us" },
    aboutHeading: { id: "Inti Kreatif Telkom University", en: "The Creative Core of Telkom University" },
    aboutDescription: {
      id: "Uni-Inside adalah mesin budaya yang digerakkan oleh Telkom University, menjembatani kesenjangan antara inovasi kampus dan keunggulan komersial. Kami tidak hanya mengikuti tren — kami menciptakannya dengan memahami apa yang benar-benar diinginkan generasi berikutnya.",
      en: "Uni-Inside is a culture engine powered by Telkom University, bridging the gap between campus innovation and commercial excellence. We don't just follow trends — we create them by understanding what the next generation truly desires."
    },
    featureGen: {
      title: { id: "Perspektif Generasi Baru", en: "Next-Gen Perspective" },
      desc: { id: "Berbicara dalam bahasa Gen-Z dengan storytelling autentik dan dampak visual yang kuat.", en: "Speaking the language of Gen-Z with authentic storytelling and strong visual impact." }
    },
    featureDigital: {
      title: { id: "Strategi Digital-First", en: "Digital-First Strategy" },
      desc: { id: "Kampanye yang dirancang untuk dialami secara mulus di seluruh platform digital modern.", en: "Campaigns designed to be experienced seamlessly across all modern digital platforms." }
    },
    partnersHeading: { id: "Partner Kami", en: "Our Partners" },
    ctaHeading: { id: "Mulai Berkolaborasi", en: "Start Collaborating" },
    ctaButton: { id: "Hubungi Kami", en: "Contact Us" },
  },

  // Footer
  footer: {
    copyright: { id: "Uni-Inside Creative Startup. All rights reserved.", en: "Uni-Inside Creative Startup. All rights reserved." },
  }
};

/** Helper to get text for current language */
export function t(textObj: { id: string; en: string }, lang: Lang): string {
  return textObj[lang] || textObj.id;
}