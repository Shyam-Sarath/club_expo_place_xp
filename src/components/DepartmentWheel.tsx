import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DEPARTMENT_CATEGORIES, DEPARTMENTS, type Department, type DepartmentCategory } from "../data/departments";
import { soundFx } from "../utils/audio";
import { RotateCw, Sparkles } from "lucide-react";

interface DepartmentWheelProps {
  selectedDeptId: string;
  onWheelComplete: (winningDept: Department) => void;
}

export const DepartmentWheel: React.FC<DepartmentWheelProps> = ({
  selectedDeptId,
  onWheelComplete
}) => {
  const [isSpinning, setIsSpinning] = useState<boolean>(false);
  const [rotationDegree, setRotationDegree] = useState<number>(0);
  const [winnerCategory, setWinnerCategory] = useState<DepartmentCategory | null>(null);
  const [winnerDept, setWinnerDept] = useState<Department | null>(null);
  const [isZoomed, setIsZoomed] = useState<boolean>(false);

  // 10 spacious categories for clean SVG wheel rendering
  const categories = DEPARTMENT_CATEGORIES;
  const numSlices = categories.length;
  const sliceAngle = 360 / numSlices; // 36 degrees per slice!

  // Spin wheel action
  const handleSpin = () => {
    if (isSpinning) return;
    
    setIsSpinning(true);
    setWinnerCategory(null);
    setWinnerDept(null);
    setIsZoomed(false);

    soundFx.playBuildup();

    // Determine target category
    let targetCatIndex: number;
    if (selectedDeptId !== "ALL") {
      const targetDept = DEPARTMENTS.find(d => d.id === selectedDeptId);
      if (targetDept) {
        const catIdx = categories.findIndex(c => c.id === targetDept.categoryId);
        targetCatIndex = catIdx !== -1 ? catIdx : Math.floor(Math.random() * numSlices);
      } else {
        targetCatIndex = Math.floor(Math.random() * numSlices);
      }
    } else {
      targetCatIndex = Math.floor(Math.random() * numSlices);
    }

    const winningCat = categories[targetCatIndex];

    // Pick specific department from winning category
    const validDepts = DEPARTMENTS.filter(d => winningCat.deptIds.includes(d.id));
    const finalDept = validDepts[Math.floor(Math.random() * validDepts.length)] || DEPARTMENTS[0];

    const extraTurns = 360 * 6;
    const sliceCenterAngle = targetCatIndex * sliceAngle + sliceAngle / 2;
    const finalDegree = rotationDegree + extraTurns + (360 - sliceCenterAngle);

    setRotationDegree(finalDegree);

    const startTime = Date.now();
    const durationMs = 4200;
    
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      if (elapsed >= durationMs) {
        clearInterval(interval);
        return;
      }
      soundFx.playTick(400 + Math.random() * 200, 0.04);
    }, 120);

    setTimeout(() => {
      clearInterval(interval);
      setIsSpinning(false);
      setWinnerCategory(winningCat);
      setWinnerDept(finalDept);
      setIsZoomed(true);

      soundFx.playVictory();

      setTimeout(() => {
        onWheelComplete(finalDept);
      }, 2200);

    }, durationMs);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleSpin();
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-[calc(100vh-60px)] max-h-[calc(100vh-60px)] w-full flex flex-col items-center justify-center px-4 py-2 overflow-hidden">
      
      {/* Background radial glow */}
      <div 
        className="absolute inset-0 transition-colors duration-1000 pointer-events-none opacity-30"
        style={{
          background: winnerCategory 
            ? `radial-gradient(circle at center, ${winnerCategory.color}40 0%, transparent 70%)` 
            : 'radial-gradient(circle at center, rgba(109,93,246,0.15) 0%, transparent 70%)'
        }}
      />

      <div className="relative z-10 max-w-4xl w-full flex flex-col items-center text-center">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-2"
        >
          <span className="px-3 py-0.5 rounded-full text-[11px] font-bold bg-[#6D5DF6]/20 border border-[#6D5DF6]/40 text-[#00E5FF] uppercase tracking-wider">
            Step 2: Department Selection Wheel
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-white mt-1">
            Department Placement Wheel
          </h2>
          <p className="text-xs text-gray-400">
            Spinning across Academic Divisions & CSE Specialisations
          </p>
        </motion.div>

        {/* Sleek Spacious Wheel Container */}
        <div className="relative w-80 h-80 sm:w-[380px] sm:h-[380px] my-2 flex items-center justify-center perspective-1000 shrink-0">
          
          {/* Top Neon Pointer */}
          <div className="absolute -top-4 z-30 flex flex-col items-center pointer-events-none">
            <div className="w-8 h-8 bg-gradient-to-b from-[#00E5FF] to-[#6D5DF6] rotate-45 rounded-sm shadow-[0_0_20px_#00E5FF] border-2 border-white" />
          </div>

          {/* Animated Rotating Wheel SVG (10 Spacious Slices) */}
          <motion.div
            className="w-full h-full rounded-full border-4 border-[#00E5FF]/40 shadow-[0_0_40px_rgba(109,93,246,0.3)] relative overflow-hidden"
            animate={{
              rotate: rotationDegree,
              scale: isZoomed ? 1.08 : 1
            }}
            transition={{
              rotate: { duration: 4.2, ease: [0.15, 0.99, 0.18, 1.0] },
              scale: { duration: 0.5, ease: "easeOut" }
            }}
          >
            <svg viewBox="0 0 500 500" className="w-full h-full transform -rotate-90">
              {categories.map((cat, index) => {
                const startAngle = index * sliceAngle;
                const endAngle = (index + 1) * sliceAngle;
                
                const x1 = 250 + 245 * Math.cos((Math.PI * startAngle) / 180);
                const y1 = 250 + 245 * Math.sin((Math.PI * startAngle) / 180);
                const x2 = 250 + 245 * Math.cos((Math.PI * endAngle) / 180);
                const y2 = 250 + 245 * Math.sin((Math.PI * endAngle) / 180);
                
                const pathData = `M 250 250 L ${x1} ${y1} A 245 245 0 0 1 ${x2} ${y2} Z`;

                const isEven = index % 2 === 0;

                return (
                  <g key={cat.id}>
                    <path
                      d={pathData}
                      fill={cat.color}
                      fillOpacity={isEven ? 0.85 : 0.65}
                      stroke="#0B0F1A"
                      strokeWidth="3"
                    />
                    
                    <g transform={`rotate(${startAngle + sliceAngle / 2}, 250, 250)`}>
                      {/* Icon */}
                      <text
                        x="345"
                        y="254"
                        fill="#FFFFFF"
                        fontSize="14"
                        textAnchor="middle"
                        transform={`rotate(90, 345, 254)`}
                        className="select-none"
                      >
                        {cat.icon}
                      </text>

                      {/* Text Label */}
                      <text
                        x="395"
                        y="254"
                        fill="#FFFFFF"
                        fontSize="12"
                        fontWeight="800"
                        fontFamily="Inter, sans-serif"
                        textAnchor="start"
                        transform={`rotate(90, 395, 254)`}
                        className="drop-shadow-md select-none"
                      >
                        {cat.shortCode}
                      </text>
                    </g>
                  </g>
                );
              })}

              <circle cx="250" cy="250" r="50" fill="#0B0F1A" stroke="#00E5FF" strokeWidth="4" />
              <circle cx="250" cy="250" r="25" fill="#6D5DF6" />
            </svg>
          </motion.div>

          <div className="absolute z-20 pointer-events-none">
            <div className="w-16 h-16 rounded-full glass-panel flex items-center justify-center border border-white/20 shadow-xl">
              <RotateCw className={`w-6 h-6 text-[#00E5FF] ${isSpinning ? 'animate-spin' : ''}`} />
            </div>
          </div>

        </div>

        {/* Winner Category & Department Overlay */}
        <AnimatePresence>
          {winnerDept && winnerCategory && (
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="mt-2 glass-panel-glow px-6 py-3.5 rounded-2xl border border-[#00E5FF]/40 max-w-md w-full shadow-2xl"
            >
              <div className="flex items-center justify-center space-x-2 text-amber-400 font-bold text-xs uppercase tracking-widest mb-0.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{winnerCategory.name}</span>
              </div>

              <h3 className="text-xl font-black text-white" style={{ color: winnerCategory.color }}>
                {winnerDept.name}
              </h3>
              
              <p className="text-[11px] text-gray-300 mt-1 font-medium leading-snug">
                {winnerDept.description}
              </p>

              <div className="mt-2 text-[11px] font-mono text-[#00E5FF] animate-pulse">
                Dealing Candidate Card Deck...
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {!isSpinning && !winnerDept && (
          <button
            onClick={handleSpin}
            className="mt-3 px-6 py-2.5 rounded-xl bg-[#6D5DF6] hover:bg-[#7C3AED] font-bold text-sm text-white shadow-lg transition-all transform hover:scale-105 cursor-pointer"
          >
            Spin Wheel 🎯
          </button>
        )}

      </div>
    </div>
  );
};
