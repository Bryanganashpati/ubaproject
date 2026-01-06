"use client";

import React, { useState, useEffect } from 'react';
import { Gift, Users, Star, CheckCircle, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';

export default function LandingPage() {
  const [currentTestimoni, setCurrentTestimoni] = useState(0);

  const testimonials = [
    {
      image: "https://i.pravatar.cc/150?img=12",
    },
    {
      image: "https://i.pravatar.cc/150?img=45",
    },
    {
      image: "https://i.pravatar.cc/150?img=33",
    },
    {
      image: "https://i.pravatar.cc/150?img=47",
    },
    {
      image: "https://i.pravatar.cc/150?img=68",
    }
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
            <h2 className="text-3xl font-bold mb-4">@mio.dinohouse</h2>
            <p className="text-sm opacity-90">Join dan raih kesempatan</p>
            <p className="text-5xl font-bold mt-4">80.000</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
        
        {/* Success Message */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
            SUKSES DITA ANDA KELOLA LEWAT VIP BISA HASILKAN 500RB-1JUTA/HARI
          </h3>
          <p className="text-gray-600 text-sm text-center leading-relaxed">
            Sebelumnya daftar di bit dinohouse bukan dari kelola bukan dari kita semua kan tinggal nama dari id dan pin nya di tempat lain 
            pernah daftar juga di tempat lain dan ternyata ga ada hasil malah untung yg ada rugiii...
          </p>
        </div>

        {/* Join Benefits */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold text-teal-600 mb-4 flex items-center justify-center gap-2">
            <Users className="w-6 h-6" />
            Join Dan Raih Keuntungan
          </h3>
          <div className="space-y-3 text-gray-700">
            <div className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
              <p className="text-sm">Minimal deposit hanya 10rb aja</p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
              <p className="text-sm">Bonus new member 100%</p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
              <p className="text-sm">Welcome bonus hingga 80.000</p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
              <p className="text-sm">Bonus rollingan 0.5%</p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
              <p className="text-sm">Bonus cashback hingga 10%</p>
            </div>
          </div>
        </div>

        {/* Hot Promo */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-lg shadow-lg p-6 text-white">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Gift className="w-6 h-6" />
            <h3 className="text-xl font-bold">Promo Jolo Hot Hot 🔥</h3>
          </div>
          <div className="bg-white text-gray-800 rounded-lg p-4 mb-3">
            <p className="text-center font-bold text-lg">Bonus Deposit 10%</p>
            <p className="text-center text-sm">Deposit Via Dana All Nominal (E-wallet Lainnya)</p>
          </div>
          <p className="text-center text-sm font-bold">Promo Spesial Berakhir Dalam:</p>
        </div>

        {/* Special Event */}
        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
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
        </div>

        {/* Event Cuan */}
        <div className="bg-white rounded-lg shadow-lg p-6">
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
        </div>

        {/* Kata Motivasi */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg shadow-lg p-6 text-white text-center">
          <h3 className="text-2xl font-bold mb-3">Kata Motivasi</h3>
          <p className="text-lg italic">"Kesempatan tidak datang dua kali, ambil sekarang juga!"</p>
        </div>

        {/* Video Section */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold text-teal-600 mb-4 text-center">
            🎬 Video Strujuk Tradisional Full Imkitolungo
          </h3>
          <div className="bg-gray-200 h-48 rounded-lg overflow-hidden">
            <video
              className="w-full h-full object-cover rounded-lg"
              src="/video-promo.mp4"
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
                  className="w-24 h-24 rounded-full object-cover"
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

        {/* Alasan Join */}
        <div className="bg-white rounded-lg shadow-lg p-6">
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
        </div>

        {/* Cara Join */}
        <div className="bg-white rounded-lg shadow-lg p-6">
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
        </div>

        {/* Siap-siap Untung */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg shadow-lg p-6 text-white text-center">
          <h3 className="text-2xl font-bold mb-3">Siap-siap Untung?</h3>
          <p className="mb-4">Jangan sampai kelewatan promo spesial hari ini!</p>
        </div>

        {/* Cek Script Lengkap */}
        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
          <h3 className="text-xl font-bold text-gray-800 mb-3">Cek Script Lengkap</h3>
          <p className="text-sm text-gray-600 mb-4">
            Dapatkan panduan lengkap dan tips sukses dari para member yang sudah berhasil
          </p>
        </div>

        {/* WA.me Section */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold text-teal-600 mb-4 text-center">WA.ME DIPERMUDAH KAN !</h3>
          <div className="space-y-2 text-sm text-gray-700">
            <p>✅ Sudah ada nomor</p>
            <p>✅ Sudah ada nama</p>
            <p>✅ Sudah ada alamat</p>
            <p>✅ Tinggal klik send aja</p>
            <p>✅ CS akan balas</p>
            <p>✅ Dan WD</p>
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-white rounded-lg shadow-lg p-6">
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
        </div>

        {/* Bagi Dahulu */}
        <div className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg shadow-lg p-6 text-white text-center">
          <h3 className="text-xl font-bold mb-3">🎁 Bagi Dahulu dan Mulai Bisnis Kaliannya?</h3>
          <p className="text-sm mb-4">
            Kalian dapat dari saya tentunya GRATIS dan 100% kan uangnya sudah saya modalin untuk kalian!
            Ga perlu modal bagi yg gabisa tinggal deposit sebesar 10rb aja biar bonusnya berlaku..
          </p>
          <p className="text-xs italic">
            Jadi JANGAN DI SIA SIA KAN KESEMPATAN INI! Karena ga semua orang bisa dapat & hanya di 
            account mio.dinohouse ajaa yg bagi secara GRATIS!
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="space-y-4 pb-8">
          <button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-lg shadow-lg transition duration-300 flex items-center justify-center gap-2">
            <MessageCircle className="w-6 h-6" />
            DAFTAR SEKARANG VIA WHATSAPP
          </button>
          <button className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-4 px-6 rounded-lg shadow-lg transition duration-300">
            KLAIM BONUS 80.000
          </button>
        </div>

      </div>

      {/* Footer */}
      <div className="bg-gray-800 text-white py-6 px-4 text-center text-sm">
        <p>&copy; 2024 Mio Dinohouse. All rights reserved.</p>
        <p className="mt-2 text-gray-400">Bermain dengan bijak dan bertanggung jawab</p>
      </div>
    </div>
  );
}