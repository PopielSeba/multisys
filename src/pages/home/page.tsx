import { useState } from 'react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-[#0a0a0a] via-[#0a0a0a] to-black opacity-40"></div>
      
      {/* Noise texture */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
      }}></div>

      {/* Decorative element */}
      <div className="absolute bottom-10 right-10 w-0.5 h-16 bg-[#333333] animate-pulse opacity-60"></div>

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 md:px-10">
        {/* Logo */}
        <div className="mb-16 animate-fadeInDown">
          <img 
            src="https://raw.githubusercontent.com/PopielSeba/multisys/main/beztla.png" 
            alt="MultiSys Logo" 
            className="h-64"
          />
        </div>

        {/* Hero text with frame */}
        <div className="max-w-[700px] text-center mb-20 animate-fadeInUp border border-[#333333] px-10 py-12 relative">
          {/* Corner decorations */}
          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-white/20"></div>
          <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-white/20"></div>
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-white/20"></div>
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-white/20"></div>
          
          <h1 className="text-lg md:text-xl lg:text-2xl font-normal text-white/90 leading-[1.6] tracking-[-0.3px]">
            Szyjemy systemy na miarę Twoich potrzeb.<br />
            Nieważne, czy jesteś małą czy średnią firmą — stworzymy system dokładnie taki, jakiego potrzebujesz, nawet jeśli jeszcze nie istnieje.
          </h1>
        </div>

        {/* Phone number */}
        <a 
          href="tel:500600525"
          className="text-2xl md:text-3xl lg:text-4xl font-medium text-white tracking-[-0.5px] transition-all duration-300 hover:scale-105 hover:text-[#f0f0f0] cursor-pointer animate-fadeInUp animation-delay-300"
        >
          tel. 500 600 525
        </a>
      </div>

      <style>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInDown {
          animation: fadeInDown 0.8s ease-out;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out;
        }

        .animation-delay-300 {
          animation-delay: 0.3s;
          opacity: 0;
          animation-fill-mode: forwards;
        }

        .bg-gradient-radial {
          background: radial-gradient(circle at center, var(--tw-gradient-stops));
        }
      `}</style>
    </div>
  );
}
