"use client";

import React, { useState, useEffect } from 'react';
import { Gift, Users, Star, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function LandingPage() {
  const [currentTestimoni, setCurrentTestimoni] = useState(0);
  const [open, setOpen] = useState(false);

  const testimonials = [
    {
      image: "/images/testi-1.jpeg",
    },
    {
      image: "/images/testi-2.jpeg",
    },
    {
      image: "/images/testi-3.jpeg",
    },
  ];

  useEffect(() => {
  const interval = setInterval(() => {
    setCurrentTestimoni((prev) => (prev + 1) % testimonials.length);
  }, 1000); // ganti slide tiap 3 detik

  return () => clearInterval(interval);
}, [testimonials.length]);

  const nextTestimoni = () => {
    setCurrentTestimoni((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimoni = () => {
    setCurrentTestimoni((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const target = 16956;
  const [count, setCount] = useState(1);

  useEffect(() => {
    const duration = 1500; // total durasi animasi (ms)
    const intervalTime = 20; // kecepatan update
    const step = Math.ceil(target / (duration / intervalTime));

    const interval = setInterval(() => {
      setCount(prev => {
        if (prev + step >= target) {
          clearInterval(interval);
          return target;
        }
        return prev + step;
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  const programs = [
    {
      title: "Agen Sosmed",
      desc: "Jual followers, like & komentar",
      income: "±150K / hari",
      icon: "📱",
    },
    {
      title: "Agen Freelance",
      desc: "Cukup balas chat pakai template",
      income: "±210K / hari",
      icon: "💬",
    },
    {
      title: "Agen Top-Up Game",
      desc: "Jualan top up game populer, sistem disediakan",
      income: "±180K / hari",
      icon: "🎮",
    },
    {
      title: "Agen Aplikasi Premium",
      desc: "Canva, CapCut, Netflix, dll",
      income: "±325K / hari",
      icon: "🚀",
    },
    {
      title: "Agen Produk Digital",
      desc: "Hanya balas chat via WhatsApp, tanpa modal",
      income: "±257K / hari",
      icon: "💼",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-600 to-teal-500">
      {/* Hero Section */}
      <div className="bg-cyan-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <div className="w-20 h-20 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-4xl">🦕</span>
            </div>
            <h1 className="text-2xl font-bold mb-2">WELCOME TO</h1>
            <h2 className="text-3xl font-bold mb-4">@IrsyadJobdesk</h2>
            <p className="text-sm opacity-90">Total Member Aktif</p>
            <p className="text-5xl font-bold mt-4"> {count.toLocaleString("id-ID")}</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
        <div className='md:flex items-center justify-center gap-3'>
          <p className='text-[16px] text-gray-800 md:text-left text-center md:mb-0 mb-3'>sebelum join silahkan cek ig resmi kami</p>
          <div className='flex justify-center md:none'>
          <Link
            href="https://www.instagram.com/irsyad.jobdesk?igsh=M2llMDU4eDd5cTZ5"
            target="_blank"
            className="
              p-2 
              rounded-md 
              text-white 
              font-semibold
              bg-gradient-to-r 
              from-purple-600 
              via-pink-500 
              to-orange-400
              hover:opacity-90 
              transition
              shadow-lg
            "
          >
            IG Resmi Kami
          </Link>
          </div>
        </div>
        {/* Success Message */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
            Sukses diusia muda, kerja flexsible hanya melewati hp dan bisa menghasilkan 400-1jt per harinya.
          </h3>
          <p className="text-gray-600 text-sm text-center leading-relaxed">
            Saya Owner Resmi sekaligus pemilik dari Agency Munjaya Group secara Sah dan Resmi
tujuan saya membangun agency ini untuk membantu pelajar bisa mandiri mendapatkan hasil dari kerjanya.
          </p>
        </div>

        {/* Join Benefits */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold text-teal-600 mb-4 flex items-center justify-center gap-2">
            <Users className="w-6 h-6" />
            Join Dan Raih Keuntungan
          </h3>
          <p className='text-[16px] font-semibold text-teal-600 mb-4'>
            Keuntungan Nyata Gabung di @irsyad.jobdesk
          </p>
          <div className="space-y-3 text-gray-700">
            <div className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
              <p className="text-sm">Potensi Penghasilan 100rb - 1jt/hari</p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
              <p className="text-sm">Kerja lewat HP tanpa keluar rumah</p>
            </div><div className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
              <p className="text-sm">Diajarkan strategi marketing</p>
            </div><div className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
              <p className="text-sm">Tanpa nunjukin muka</p>
            </div><div className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
              <p className="text-sm">Kerja dimanapun dan kapanpun</p>
            </div><div className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
              <p className="text-sm">Tanpa minimum Followers sekalipun followers kamu 0</p>
            </div><div className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
              <p className="text-sm">Full Bimbingan</p>
            </div><div className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
              <p className="text-sm">Bebas konsultasi selamanya</p>
            </div><div className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
              <p className="text-sm">Tidak ada target/tuntutan apapun</p>
            </div><div className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
              <p className="text-sm">No Ktp/Atm</p>
            </div><div className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
              <p className="text-sm">Bisnis anti Riba</p>
            </div><div className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
              <p className="text-sm">BISNIS HALAL</p>
            </div>
            <p className="text-sm">SEMUA PENGHASILAN MENJADI MILIK KAMU SEPENUHNYA TANPA BAGI HASIL KEPADA SIAPAPUN</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
            Pengertian Cara Kerja Bisnis
          </h3>
          <p className="text-gray-600 text-sm text-left leading-relaxed mb-3">
            Bisnis ini bergerak dibidang digital dan hanya memerlukan handphone dan kuota internet saja, tugasnya hanya membalas customer dan bisa dikerjakan 2/3 jam dalam sehari.
          </p>
          <p className="text-gray-600 text-sm text-left leading-relaxed mb-3">
           Bisnis Ini Cocok Untuk Pemula yang:
          </p>
          <ul className='list-disc ml-5 text-gray-600 text-[14px]'>
            <li>Introvert</li>
            <li>Belum ada pengalaman</li>
            <li>Mager hanya dirumah aja.</li>
            <li>Gaptek</li>
            <li>Suka Dirumah</li>
          </ul>
        </div>

        <section className="max-w-3xl mx-auto text-center mb-10 bg-white/10 p-6 rounded-2xl backdrop-blur">
          <p className="mb-2 font-bold text-lg">
            🔰 Resmi jadi agen kami
          </p>
          <p className="text-sm text-white/90">
            Semua bahan & template chat sudah disediakan.<br />
            Kamu tinggal <b>copy–paste & digaji</b>.
          </p>
        </section>

        <section className="text-center max-w-3xl mx-auto">
          <h1 className="text-xl md:text-2xl font-extrabold mb-3">
            5 Usaha Digital Pelajar & Mahasiswa
          </h1>
          <p className="md:text-[18px] text-[16px] text-white/90">
            ✨ <b>5 Program Digital</b> – Tinggal Jalan, Langsung Hasil!
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-12">
          {programs.map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl hover:scale-105 transition"
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="text-xl font-bold mb-1">{item.title}</h3>
              <p className="text-sm text-white/80 mb-2">{item.desc}</p>
              <span className="inline-block bg-black/30 px-3 py-1 rounded-full text-sm">
                Hasil {item.income}
              </span>
            </div>
          ))}
        </section>

        <section className="max-w-3xl mx-auto text-center mt-12 bg-white/10 p-6 rounded-2xl backdrop-blur">
          <p className="font-bold mb-2">📌 Cara Kerja Bisnis</p>
          <p className="text-sm text-white/90">
            Anda hanya perlu membalas chat customer dan hanya membutuhkan
            aplikasi <b>WhatsApp</b> saja.<br />
            Maka fee (<b>gaji</b>) akan diterima <b>setiap sore</b>.
          </p>
        </section>

        <section className="text-center mt-10">
          <p className="text-xl font-semibold">
            💰 Estimasi bersih hingga
          </p>
          <h2 className="text-3xl font-extrabold text-yellow-300">
            5 Juta / Bulan
          </h2>
          <p className="text-sm text-white/80">(±200K / hari)</p>
        </section>

        <section className="text-center mt-12">
          <p className="text-xl font-bold mb-4">
            📄 Surat Izin Usaha Resmi Dari Owner Ada Disini
          </p>

          <div className="flex justify-center">
            <Image
              src="/images/surat-legal.jpeg" // simpan di folder public/images
              alt="Surat Izin Usaha Resmi"
              width={400}
              height={400}
              className="rounded-xl shadow-xl"
            />
          </div>
        </section>


        {/* Hot Promo */}
        {/* <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-lg shadow-lg p-6 text-white">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Gift className="w-6 h-6" />
            <h3 className="text-xl font-bold">Promo Jolo Hot Hot 🔥</h3>
          </div>
          <div className="bg-white text-gray-800 rounded-lg p-4 mb-3">
            <p className="text-center font-bold text-lg">Bonus Deposit 10%</p>
            <p className="text-center text-sm">Deposit Via Dana All Nominal (E-wallet Lainnya)</p>
          </div>
          <p className="text-center text-sm font-bold">Promo Spesial Berakhir Dalam:</p>
        </div> */}

        {/* Special Event */}
        {/* <div className="bg-white rounded-lg shadow-lg p-6 text-center">
          <div className="text-red-600 font-bold text-2xl mb-2">
            🎁 Bagi 23 jam 59 menit 9 detik
          </div>
          <p className="text-gray-700 font-semibold mb-4">Member baru pasti dapat</p>
          
          <div className="bg-gradient-to-r from-yellow-400 to-orange-400 rounded-lg p-4 mb-4">
            <p className="text-white font-bold text-lg">4 WAKTU CUAN EMAS!</p>
          </div>

          <div className="space-y-2 text-left text-sm text-gray-700">
            <p>📍 10.00-12.00 wib = cuan pasti 100%</p>
            <p>📍 13.00-15.00 wib = cuan pasti 100%</p>
            <p>📍 18.00-20.00 wib = cuan pasti 100%</p>
            <p>📍 21.00-23.00 wib = cuan pasti 100%</p>
          </div>
        </div> */}

        {/* Event Cuan */}
        {/* <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold text-teal-600 mb-4 text-center">EVENT CUAN BOSKU!</h3>
          <div className="space-y-3 text-sm text-gray-700">
            <div className="bg-teal-50 p-3 rounded">
              <p className="font-semibold">🎯 Deposit 20.000 = BONUS 80.000</p>
            </div>
            <div className="bg-teal-50 p-3 rounded">
              <p className="font-semibold">🎯 Deposit 50.000 = BONUS 200.000</p>
            </div>
            <div className="bg-teal-50 p-3 rounded">
              <p className="font-semibold">🎯 Deposit 100.000 = BONUS 500.000</p>
            </div>
          </div>
        </div> */}

        {/* Kata Motivasi */}
        {/* <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg shadow-lg p-6 text-white text-center">
          <h3 className="text-2xl font-bold mb-3">Kata Motivasi</h3>
          <p className="text-lg italic">"Kesempatan tidak datang dua kali, ambil sekarang juga!"</p>
        </div> */}

        {/* Video Section */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold text-teal-600 mb-4 text-center">
            🎬 Video Singkat Testimoni Full Bimbingan
          </h3>
          <div className="bg-gray-200 h-[500px] rounded-lg overflow-hidden">
            <video
              className="w-full h-full rounded-lg"
              src="/images/video-testimoni.mp4"
              controls
              autoPlay
              muted
              loop
            />
          </div>
        </div>

        {/* Testimonial */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold text-teal-600 mb-4 text-center flex items-center justify-center gap-2">
            <Star className="w-6 h-6 fill-current" />
            Testimoni
          </h3>
          
          <div className="relative">
            <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4">
              <div className="flex items-center justify-center gap-3 mb-3">
                <img 
                  src={testimonials[currentTestimoni].image} 
                  alt={testimonials[currentTestimoni].image}
                  className="w-[500px] h-full object-cover"
                />
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between mt-4">
              <button 
                onClick={prevTestimoni}
                className="bg-teal-500 hover:bg-teal-600 text-white p-2 rounded-full transition duration-300"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Dots Indicator */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimoni(index)}
                    className={`w-2 h-2 rounded-full transition duration-300 ${
                      index === currentTestimoni ? 'bg-teal-500 w-6' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button 
                onClick={nextTestimoni}
                className="bg-teal-500 hover:bg-teal-600 text-white p-2 rounded-full transition duration-300"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Counter */}
            <p className="text-center text-xs text-gray-500 mt-2">
              {currentTestimoni + 1} / {testimonials.length}
            </p>
          </div>
        </div>

        <div className="relative bg-gradient-to-br from-red-500 via-pink-500 to-orange-400 text-white rounded-3xl p-8 shadow-2xl overflow-hidden">
        
        {/* Badge */}
        <span className="absolute top-4 right-4 bg-black/30 px-4 py-1 rounded-full text-sm font-bold">
          ⏰ Promo 24 Jam
        </span>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Mulai Freelance Di Sini
        </h2>

        {/* Harga */}
        <div className="mb-4">
          <p className="text-lg line-through opacity-80">
            400.000 IDR
          </p>
          <p className="text-4xl font-extrabold text-yellow-300">
            24.500 IDR
          </p>
          <p className="text-sm opacity-90">
            Khusus berlaku 24 jam
          </p>
        </div>

        {/* Description */}
        <p className="mb-6 text-white/90">
          Kesempatan terbatas untuk pelajar & mahasiswa.
          Sistem sudah siap, tinggal jalan & langsung hasil.
        </p>

        {/* CTA */}
        <div className="text-center">
          <p className="font-bold mb-3">
            CARA JOIN HANYA 👇🏻👇🏻👇🏻
          </p>

          <Link
            href="#"
            className="md:text-xl text-[14px] inline-block bg-yellow-400 text-black font-extrabold md:px-10 px-4 py-4 rounded-full shadow-lg hover:bg-yellow-300 hover:scale-105 transition"
          >
            🚀 Registrasi Sekarang
          </Link>

          <p className="text-sm mt-3 opacity-90">
            Lakukan registrasi sekarang sebelum terlambat!
          </p>
        </div>
      </div>

      <div className="
          bg-gradient-to-br 
          from-white 
          via-purple-50 
          to-pink-50
          text-gray-800 
          rounded-3xl 
          p-8 
          shadow-xl
          border
        ">
        
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-center">
          🎯 Setelah Join Kamu Akan Mendapatkan
        </h2>

        <p className="text-center text-gray-700 mb-6">
          5 bisnis digital yang bisa kamu pegang & kelola sendiri  
          <br />✨ <b>Mulai hari ini juga</b>
        </p>

        {/* Harga */}
        <div className="
          bg-gradient-to-r 
          from-yellow-100 
          to-orange-100 
          rounded-2xl 
          p-6 
          text-center 
          mb-8
        ">
          <p className="text-sm opacity-80 mb-1">Promo Terbatas</p>
          <h3 className="md:text-4xl text-3xl font-extrabold text-yellow-300">
            24.500 IDR
          </h3>
          <p className="text-sm opacity-90">KHUSUS 24 JAM</p>
        </div>

        {/* Payment List */}
        <div className="grid md:grid-cols-2 gap-6">
          
          {/* E-Wallet */}
          {/* E-Wallet */}
<div className="bg-white rounded-2xl p-5 shadow-md border">
  <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
    📱 E-Wallet
  </h4>


  {/* List E-Wallet */}
  <ul className="space-y-2 text-sm mb-4">
    <li>
      💙 DANA: <b>08979626451</b><br />
      a.n <b>MUH ZAH</b>
    </li>
    <li>
      💚 GOPAY: <b>083879947983</b><br />
      a.n <b>MUN</b>
    </li>
    <li>
      🟣 OVO: <b>083879947983</b><br />
      a.n <b>MUN</b>
    </li>
    <li>
      🟠 SHOPEEPAY: <b>083879947983</b><br />
      a.n <b>M. IR</b>
    </li>
  </ul>
  {/* QRIS Image */}
  <div className="flex justify-center mb-4">
    <Image
      src="/images/qris.jpeg" // simpan di public/images
      alt="QRIS Pembayaran"
      width={220}
      height={220}
      className="rounded-xl border shadow-sm"
    />
  </div>

  <p className="text-xs text-center text-gray-500">
    Scan QRIS untuk semua E-Wallet
  </p>
</div>


          {/* Bank */}
         <div className="bg-white rounded-2xl p-5 shadow-md border">
            <h4 className="font-bold text-lg mb-3">🏦 Transfer Bank</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <b>SeaBank</b><br />
                901567111337
                a.n <b>M. Irsyad Thuba</b>
              </li>
              <li>
                <b>BRI</b><br />
                602601039590533<br />
                a.n <b>M. Irsyad Thuba</b>
              </li>
            </ul>
          </div>
        </div>

        {/* Instruction */}
        <div className="mt-8 bg-black/30 rounded-2xl p-6 text-center">
          <p className="font-semibold mb-3">
            📸 Setelah Transfer
          </p>
          <p className="text-sm text-white/90 mb-4">
            Kirim bukti transfer & lakukan konfirmasi  
            melalui WhatsApp Admin
          </p>

          <Link
            href="https://wa.me/628XXXXXXXXXX"
            target="_blank"
            className="
              inline-block 
              bg-green-500 
              text-white 
              font-extrabold 
              px-10 
              py-4 
              rounded-full 
              shadow-md 
              hover:bg-green-600 
              hover:scale-105 
              transition
              md:text-[18px]
              text-[16px]
            "
          >
            💬 Konfirmasi via WhatsApp
          </Link>
        </div>

      </div>

        {/* Alasan Join */}
        {/* <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold text-teal-600 mb-4 text-center">Alasan Join</h3>
          <div className="grid grid-cols-2 gap-4 text-center">
            <div className="bg-teal-50 p-4 rounded-lg">
              <p className="text-3xl mb-2">💰</p>
              <p className="text-sm font-semibold text-gray-700">Bonus Besar</p>
            </div>
            <div className="bg-teal-50 p-4 rounded-lg">
              <p className="text-3xl mb-2">⚡</p>
              <p className="text-sm font-semibold text-gray-700">Proses Cepat</p>
            </div>
            <div className="bg-teal-50 p-4 rounded-lg">
              <p className="text-3xl mb-2">🔒</p>
              <p className="text-sm font-semibold text-gray-700">Aman Terpercaya</p>
            </div>
            <div className="bg-teal-50 p-4 rounded-lg">
              <p className="text-3xl mb-2">🎁</p>
              <p className="text-sm font-semibold text-gray-700">Event Menarik</p>
            </div>
          </div>
        </div> */}

        {/* Cara Join */}
        {/* <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold text-teal-600 mb-4 text-center">Cara Join</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">1</div>
              <p className="text-sm text-gray-700">Klik tombol daftar di bawah</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">2</div>
              <p className="text-sm text-gray-700">Isi data diri dengan lengkap</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">3</div>
              <p className="text-sm text-gray-700">Deposit minimal 10rb</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">4</div>
              <p className="text-sm text-gray-700">Mulai main dan raih cuan!</p>
            </div>
          </div>
        </div> */}

        {/* Siap-siap Untung */}
        {/* <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg shadow-lg p-6 text-white text-center">
          <h3 className="text-2xl font-bold mb-3">Siap-siap Untung?</h3>
          <p className="mb-4">Jangan sampai kelewatan promo spesial hari ini!</p>
        </div> */}

        {/* Cek Script Lengkap */}
        {/* <div className="bg-white rounded-lg shadow-lg p-6 text-center">
          <h3 className="text-xl font-bold text-gray-800 mb-3">Cek Script Lengkap</h3>
          <p className="text-sm text-gray-600 mb-4">
            Dapatkan panduan lengkap dan tips sukses dari para member yang sudah berhasil
          </p>
        </div> */}

        {/* WA.me Section */}
        {/* <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold text-teal-600 mb-4 text-center">WA.ME DIPERMUDAH KAN !</h3>
          <div className="space-y-2 text-sm text-gray-700">
            <p>✅ Sudah ada nomor</p>
            <p>✅ Sudah ada nama</p>
            <p>✅ Sudah ada alamat</p>
            <p>✅ Tinggal klik send aja</p>
            <p>✅ CS akan balas</p>
            <p>✅ Dan WD</p>
          </div>
        </div> */}

        {/* FAQ */}
        {/* <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold text-teal-600 mb-4 text-center">
            FAQ - Pertanyaan yang Sering Ditujukan
          </h3>
          <div className="space-y-3">
            <div className="bg-teal-50 p-4 rounded-lg">
              <p className="font-semibold text-gray-800 mb-1">Bagaimana cara deposit?</p>
              <p className="text-sm text-gray-600">Deposit bisa via Dana, OVO, Gopay, atau transfer bank</p>
            </div>
            <div className="bg-teal-50 p-4 rounded-lg">
              <p className="font-semibold text-gray-800 mb-1">Berapa minimal deposit?</p>
              <p className="text-sm text-gray-600">Minimal deposit hanya 10.000 rupiah</p>
            </div>
            <div className="bg-teal-50 p-4 rounded-lg">
              <p className="font-semibold text-gray-800 mb-1">Apakah aman dan terpercaya?</p>
              <p className="text-sm text-gray-600">100% aman dan terpercaya dengan ribuan member aktif</p>
            </div>
          </div>
        </div> */}

        {/* Bagi Dahulu */}
        {/* <div className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg shadow-lg p-6 text-white text-center">
          <h3 className="text-xl font-bold mb-3">🎁 Bagi Dahulu dan Mulai Bisnis Kaliannya?</h3>
          <p className="text-sm mb-4">
            Kalian dapat dari saya tentunya GRATIS dan 100% kan uangnya sudah saya modalin untuk kalian!
            Ga perlu modal bagi yg gabisa tinggal deposit sebesar 10rb aja biar bonusnya berlaku..
          </p>
          <p className="text-xs italic">
            Jadi JANGAN DI SIA SIA KAN KESEMPATAN INI! Karena ga semua orang bisa dapat & hanya di 
            account mio.dinohouse ajaa yg bagi secara GRATIS!
          </p>
        </div> */}

        {/* CTA Buttons */}
        {/* <div className="space-y-4 pb-8">
          <button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-lg shadow-lg transition duration-300 flex items-center justify-center gap-2">
            <MessageCircle className="w-6 h-6" />
            DAFTAR SEKARANG VIA WHATSAPP
          </button>
          <button className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-4 px-6 rounded-lg shadow-lg transition duration-300">
            KLAIM BONUS 80.000
          </button>
        </div> */}

      </div>

      {/* Footer */}
      <div className="bg-gray-800 text-white py-6 px-4 text-center text-sm">
        <p>&copy; 2026 @IrsyadJobdesk. All rights reserved.</p>
        <p className="mt-2 text-gray-400">Bermain dengan bijak dan bertanggung jawab</p>
      </div>
    </div>
  );
}