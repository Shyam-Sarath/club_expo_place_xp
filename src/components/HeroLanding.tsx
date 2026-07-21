import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Sparkles, Trophy, Building2, ChevronRight, Zap } from "lucide-react";
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
    <div className="relative min-h-[calc(100vh-65px)] w-full flex flex-col items-center justify-center overflow-hidden px-4 py-12">
      
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none opacity-60" />

      <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-[#6D5DF6]/20 rounded-full blur-[120px] pointer-events-none animate-float-slow" />
      <div className="absolute bottom-1/4 right-1/6 w-96 h-96 bg-[#00E5FF]/15 rounded-full blur-[120px] pointer-events-none animate-float-reverse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[150px] pointer-events-none animate-pulse-glow" />

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-panel-glow text-xs font-semibold text-[#00E5FF] mb-6 shadow-lg"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#00E5FF] animate-spin" style={{ animationDuration: '6s' }} />
          <span>300+ Verified Placement Profiles Across 19 VIT Departments</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-white mb-6 leading-[1.1]"
        >
          Guess The{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6D5DF6] via-[#A78BFA] to-[#00E5FF]">
            Package
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-2xl font-medium text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Think you know placements?
          <br className="hidden sm:block" />
          <span className="text-[#00E5FF]"> Predict the salary</span> before we reveal the CTC.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative group mb-14"
        >
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#6D5DF6] via-[#7C3AED] to-[#00E5FF] blur-xl opacity-75 group-hover:opacity-100 transition duration-500 group-hover:scale-105 animate-pulse" />

          <button
            onClick={() => {
              soundFx.playTick(700, 0.1);
              onSpinClick();
            }}
            className="relative px-10 py-5 rounded-2xl bg-gradient-to-r from-[#6D5DF6] to-[#7C3AED] font-extrabold text-xl text-white shadow-2xl flex items-center space-x-4 border border-white/20 transform group-hover:scale-105 transition-all duration-300 cursor-pointer active:scale-95"
          >
            <span className="text-3xl">🎯</span>
            <span className="tracking-wide">Spin the Wheel</span>
            <ChevronRight className="w-6 h-6 text-[#00E5FF] group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl"
        >
          <div className="glass-panel p-4 rounded-2xl border border-white/10 flex flex-col items-center">
            <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-blue-400 font-mono">
              304
            </div>
            <div className="text-xs text-gray-400 mt-1 font-medium flex items-center space-x-1">
              <Building2 className="w-3.5 h-3.5" />
              <span>Real Profiles</span>
            </div>
          </div>

          <div className="glass-panel p-4 rounded-2xl border border-white/10 flex flex-col items-center">
            <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-[#6D5DF6] font-mono">
              19
            </div>
            <div className="text-xs text-gray-400 mt-1 font-medium flex items-center space-x-1">
              <Zap className="w-3.5 h-3.5" />
              <span>VIT Departments</span>
            </div>
          </div>

          <div className="glass-panel p-4 rounded-2xl border border-white/10 flex flex-col items-center">
            <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-500 font-mono">
              ₹1.1 CR
            </div>
            <div className="text-xs text-gray-400 mt-1 font-medium flex items-center space-x-1">
              <Trophy className="w-3.5 h-3.5 text-yellow-400" />
              <span>Highest Package</span>
            </div>
          </div>

          <div className="glass-panel p-4 rounded-2xl border border-white/10 flex flex-col items-center">
            <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300 font-mono">
              {highestStreak}
            </div>
            <div className="text-xs text-gray-400 mt-1 font-medium flex items-center space-x-1">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>Best Streak</span>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};
