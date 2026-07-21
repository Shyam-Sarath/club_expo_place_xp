import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DEPARTMENTS, type Department } from "../data/departments";
import { soundFx } from "../utils/audio";
import { Trophy, RotateCw } from "lucide-react";

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
  const [winnerDept, setWinnerDept] = useState<Department | null>(null);
  const [isZoomed, setIsZoomed] = useState<boolean>(false);

  // Departments list (19 items)
  const departmentsToSpin = DEPARTMENTS;
  const numSlices = departmentsToSpin.length;
  const sliceAngle = 360 / numSlices;

  // Spin wheel action
  const handleSpin = () => {
    if (isSpinning) return;
    
    setIsSpinning(true);
    setWinnerDept(null);
    setIsZoomed(false);

    soundFx.playBuildup();

    // Determine winning index
    let targetIndex: number;
    if (selectedDeptId !== "ALL") {
      const idx = departmentsToSpin.findIndex(d => d.id === selectedDeptId);
      targetIndex = idx !== -1 ? idx : Math.floor(Math.random() * numSlices);
    } else {
      targetIndex = Math.floor(Math.random() * numSlices);
    }

    const winningDepartment = departmentsToSpin[targetIndex];

    const extraTurns = 360 * 6;
    const sliceCenterAngle = targetIndex * sliceAngle + sliceAngle / 2;
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
      setWinnerDept(winningDepartment);
      setIsZoomed(true);

      soundFx.playVictory();

      setTimeout(() => {
        onWheelComplete(winningDepartment);
      }, 2000);

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
          background: winnerDept 
            ? `radial-gradient(circle at center, ${winnerDept.color}40 0%, transparent 70%)` 
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
            Step 2: Department Selection
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-white mt-1">
            Department Placement Wheel
          </h2>
          <p className="text-xs text-gray-400">
            Spinning across 19 VIT programmes...
          </p>
        </motion.div>

        {/* Sleek Compact Wheel Container */}
        <div className="relative w-72 h-72 sm:w-[350px] sm:h-[350px] my-2 flex items-center justify-center perspective-1000 shrink-0">
          
          {/* Top Neon Pointer */}
          <div className="absolute -top-4 z-30 flex flex-col items-center pointer-events-none">
            <div className="w-7 h-7 bg-gradient-to-b from-[#00E5FF] to-[#6D5DF6] rotate-45 rounded-sm shadow-[0_0_20px_#00E5FF] border-2 border-white" />
          </div>

          {/* Animated Rotating Wheel SVG */}
          <motion.div
            className="w-full h-full rounded-full border-4 border-[#00E5FF]/40 shadow-[0_0_40px_rgba(109,93,246,0.3)] relative overflow-hidden"
            animate={{
              rotate: rotationDegree,
              scale: isZoomed ? 1.1 : 1
            }}
            transition={{
              rotate: { duration: 4.2, ease: [0.15, 0.99, 0.18, 1.0] },
              scale: { duration: 0.5, ease: "easeOut" }
            }}
          >
            <svg viewBox="0 0 500 500" className="w-full h-full transform -rotate-90">
              {departmentsToSpin.map((dept, index) => {
                const startAngle = index * sliceAngle;
                const endAngle = (index + 1) * sliceAngle;
                
                const x1 = 250 + 245 * Math.cos((Math.PI * startAngle) / 180);
                const y1 = 250 + 245 * Math.sin((Math.PI * startAngle) / 180);
                const x2 = 250 + 245 * Math.cos((Math.PI * endAngle) / 180);
                const y2 = 250 + 245 * Math.sin((Math.PI * endAngle) / 180);
                
                const largeArcFlag = sliceAngle > 180 ? 1 : 0;
                const pathData = `M 250 250 L ${x1} ${y1} A 245 245 0 ${largeArcFlag} 1 ${x2} ${y2} Z`;

                const isEven = index % 2 === 0;

                return (
                  <g key={dept.id}>
                    <path
                      d={pathData}
                      fill={dept.color}
                      fillOpacity={isEven ? 0.85 : 0.65}
                      stroke="#0B0F1A"
                      strokeWidth="2"
                    />
                    
                    <g transform={`rotate(${startAngle + sliceAngle / 2}, 250, 250)`}>
                      <text
                        x="375"
                        y="254"
                        fill="#FFFFFF"
                        fontSize="12"
                        fontWeight="800"
                        fontFamily="Inter, sans-serif"
                        textAnchor="start"
                        transform={`rotate(90, 375, 254)`}
                        className="drop-shadow-md select-none"
                      >
                        {dept.shortCode}
                      </text>
                    </g>
                  </g>
                );
              })}

              <circle cx="250" cy="250" r="45" fill="#0B0F1A" stroke="#00E5FF" strokeWidth="4" />
              <circle cx="250" cy="250" r="22" fill="#6D5DF6" />
            </svg>
          </motion.div>

          <div className="absolute z-20 pointer-events-none">
            <div className="w-14 h-14 rounded-full glass-panel flex items-center justify-center border border-white/20 shadow-xl">
              <RotateCw className={`w-5 h-5 text-[#00E5FF] ${isSpinning ? 'animate-spin' : ''}`} />
            </div>
          </div>

        </div>

        {/* Winner Overlay */}
        <AnimatePresence>
          {winnerDept && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="mt-2 glass-panel-glow px-6 py-4 rounded-2xl border border-[#00E5FF]/40 max-w-md w-full shadow-2xl"
            >
              <div className="flex items-center justify-center space-x-2 text-amber-400 font-bold text-xs uppercase tracking-widest mb-0.5">
                <Trophy className="w-3.5 h-3.5" />
                <span>Department Selected!</span>
              </div>

              <h3 className="text-xl font-black text-white" style={{ color: winnerDept.color }}>
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
