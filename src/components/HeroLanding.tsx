import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Sparkles, Trophy, Building2, ChevronRight, Zap, Flame } from "lucide-react";
import { soundFx } from "../utils/audio";

interface HeroLandingProps {
  onSpinClick: () => void;
  onOpenStats: () => void;
  roundsPlayed: number;
  highestStreak: number;
}

export const HeroLanding: React.FC<HeroLandingProps> = ({
  onSpinClick,
  highestStreak
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const particles = Array.from({ length: 45 }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2 + 0.5,
      color: Math.random() > 0.5 ? "rgba(109, 93, 246, " : "rgba(0, 229, 255, ",
      alpha: Math.random() * 0.5 + 0.2,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.alpha})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative min-h-[calc(100vh-60px)] max-h-[calc(100vh-60px)] w-full flex flex-col items-center justify-center overflow-hidden px-4 py-4">
      
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none opacity-60" />

      <div className="absolute top-1/4 left-1/6 w-80 h-80 bg-[#6D5DF6]/20 rounded-full blur-[100px] pointer-events-none animate-float-slow" />
      <div className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-[#00E5FF]/15 rounded-full blur-[100px] pointer-events-none animate-float-reverse" />

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        
        {/* PLACE XP Club Expo Badge & Motto */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full glass-panel-glow text-xs font-bold text-[#00E5FF] mb-4 shadow-lg"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#00E5FF] animate-spin" style={{ animationDuration: '6s' }} />
          <span className="text-white font-extrabold">PLACE XP</span>
          <span>•</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-white to-cyan-300 font-mono uppercase tracking-wider">
            Equip • Engage • Execute
          </span>
        </motion.div>

        {/* Large Title */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white mb-3 leading-[1.1]"
        >
          Guess The{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6D5DF6] via-[#A78BFA] to-[#00E5FF]">
            Package
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-base sm:text-xl font-medium text-gray-300 max-w-xl mx-auto mb-6 leading-relaxed"
        >
          Think you know placements?
          <br />
          <span className="text-[#00E5FF] font-semibold">Predict the CTC</span> before we reveal the package.
        </motion.p>

        {/* Glowing Main CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative group mb-8"
        >
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#6D5DF6] via-[#7C3AED] to-[#00E5FF] blur-lg opacity-75 group-hover:opacity-100 transition duration-500 group-hover:scale-105 animate-pulse" />

          <button
            onClick={() => {
              soundFx.playTick(700, 0.1);
              onSpinClick();
            }}
            className="relative px-8 py-4 rounded-2xl bg-gradient-to-r from-[#6D5DF6] to-[#7C3AED] font-extrabold text-lg text-white shadow-2xl flex items-center space-x-3 border border-white/20 transform group-hover:scale-105 transition-all duration-300 cursor-pointer active:scale-95"
          >
            <span className="text-2xl">🎯</span>
            <span className="tracking-wide">Spin the Wheel</span>
            <ChevronRight className="w-5 h-5 text-[#00E5FF] group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

        {/* Compact Quick Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-3xl"
        >
          <div className="glass-panel py-2.5 px-3 rounded-2xl border border-white/10 flex flex-col items-center">
            <div className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-blue-400 font-mono">
              304
            </div>
            <div className="text-[11px] text-gray-400 font-medium flex items-center space-x-1">
              <Building2 className="w-3 h-3" />
              <span>Real Profiles</span>
            </div>
          </div>

          <div className="glass-panel py-2.5 px-3 rounded-2xl border border-white/10 flex flex-col items-center">
            <div className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-[#6D5DF6] font-mono">
              19
            </div>
            <div className="text-[11px] text-gray-400 font-medium flex items-center space-x-1">
              <Zap className="w-3 h-3" />
              <span>VIT Departments</span>
            </div>
          </div>

          <div className="glass-panel py-2.5 px-3 rounded-2xl border border-white/10 flex flex-col items-center">
            <div className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-500 font-mono">
              ₹1.1 CR
            </div>
            <div className="text-[11px] text-gray-400 font-medium flex items-center space-x-1">
              <Trophy className="w-3 h-3 text-yellow-400" />
              <span>Highest Package</span>
            </div>
          </div>

          <div className="glass-panel py-2.5 px-3 rounded-2xl border border-white/10 flex flex-col items-center">
            <div className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300 font-mono">
              {highestStreak}
            </div>
            <div className="text-[11px] text-gray-400 font-medium flex items-center space-x-1">
              <Flame className="w-3 h-3 text-emerald-400" />
              <span>Best Streak</span>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};
