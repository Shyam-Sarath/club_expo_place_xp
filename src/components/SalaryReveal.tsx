import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import type { PlacementProfile } from "../data/placementProfiles";
import type { Department } from "../data/departments";
import { soundFx } from "../utils/audio";
import { Trophy, RefreshCw, Share2 } from "lucide-react";
import { AIExplanation } from "./AIExplanation";

interface SalaryRevealProps {
  card: PlacementProfile;
  dept: Department | null;
  predictedCTC: number;
  actualCTC: number;
  accuracy: number;
  accuracyRating: string;
  difference: number;
  isGolden: boolean;
  onPlayAgain: () => void;
  onOpenLeaderboard: () => void;
  onExportResult: () => void;
}

export const SalaryReveal: React.FC<SalaryRevealProps> = ({
  card,
  predictedCTC,
  actualCTC,
  accuracy,
  accuracyRating,
  difference,
  isGolden,
  onPlayAgain,
  onOpenLeaderboard,
  onExportResult
}) => {
  const [displayedActual, setDisplayedActual] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  useEffect(() => {
    const tFlip = setTimeout(() => {
      setIsFlipped(true);

      if (accuracy >= 70) {
        confetti({
          particleCount: accuracy >= 90 ? 120 : 60,
          spread: 80,
          origin: { y: 0.6 }
        });
      }

      if (isGolden) {
        confetti({
          particleCount: 100,
          spread: 100,
          colors: ['#F59E0B', '#FDE68A', '#00E5FF']
        });
        soundFx.playGoldChime();
      } else {
        soundFx.playVictory();
      }
    }, 400);

    const duration = 1200;
    const steps = 30;
    const stepTime = duration / steps;
    let stepCount = 0;

    const timer = setInterval(() => {
      stepCount++;
      const currentVal = (actualCTC / steps) * stepCount;
      setDisplayedActual(Math.min(actualCTC, currentVal));

      if (stepCount >= steps) {
        clearInterval(timer);
        setDisplayedActual(actualCTC);
      }
    }, stepTime);

    return () => {
      clearTimeout(tFlip);
      clearInterval(timer);
    };
  }, [actualCTC, accuracy, isGolden]);

  const getRatingBadge = () => {
    if (accuracyRating === "Excellent") {
      return { label: "🎯 Excellent", bg: "bg-emerald-500/20 text-emerald-400 border-emerald-500/40" };
    }
    if (accuracyRating === "Amazing") {
      return { label: "🔥 Amazing", bg: "bg-[#00E5FF]/20 text-[#00E5FF] border-[#00E5FF]/40" };
    }
    if (accuracyRating === "Good") {
      return { label: "👍 Good", bg: "bg-purple-500/20 text-purple-300 border-purple-500/40" };
    }
    return { label: "💡 Needs Improvement", bg: "bg-amber-500/20 text-amber-300 border-amber-500/40" };
  };

  const ratingBadge = getRatingBadge();

  return (
    <div className="relative min-h-[calc(100vh-60px)] max-h-[calc(100vh-60px)] w-full flex flex-col items-center justify-center px-4 py-2 overflow-y-auto">
      
      <div className="relative z-10 max-w-4xl w-full flex flex-col items-center text-center my-auto">
        
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-2"
        >
          <span className="px-3 py-0.5 rounded-full text-[11px] font-bold bg-[#6D5DF6]/20 border border-[#6D5DF6]/40 text-[#00E5FF] uppercase tracking-wider">
            Step 5: Package Unveiled
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-white mt-1">
            Official Placement CTC Revealed!
          </h2>
        </motion.div>

        <div className="relative w-full max-w-lg my-2 perspective-1000">
          
          <motion.div
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full transform-style-3d relative"
          >
            <div className="w-full rounded-2xl glass-panel p-4 border border-white/10 backface-hidden flex flex-col items-center justify-center min-h-[180px]">
              <div className="animate-spin text-3xl">🎯</div>
              <p className="mt-2 text-xs text-gray-400 font-mono">Flipping Candidate Card...</p>
            </div>

            <div 
              className={`w-full rounded-2xl p-5 sm:p-6 backface-hidden rotate-y-180 border shadow-2xl flex flex-col items-center justify-center ${
                isGolden 
                  ? "glass-golden border-amber-400 shadow-[0_0_50px_rgba(245,158,11,0.4)]"
                  : "glass-panel-glow border-purple-500/40 shadow-[0_0_40px_rgba(109,93,246,0.3)]"
              }`}
            >
              <div className="flex items-center space-x-2 text-gray-300 font-bold text-xs uppercase tracking-widest mb-0.5">
                <span>{card.company}</span>
                <span>•</span>
                <span>{card.role}</span>
              </div>

              <div className="my-2">
                <span className="text-[10px] font-mono text-gray-400 block uppercase font-bold">
                  Actual Placement Package
                </span>
                <span className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] via-white to-purple-300 font-mono tracking-tight">
                  ₹ {displayedActual.toFixed(1)} LPA
                </span>
              </div>

              <div className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-extrabold border ${ratingBadge.bg} my-1 shadow-lg`}>
                <span>{ratingBadge.label}</span>
              </div>

              <div className="grid grid-cols-3 gap-2 w-full mt-3 p-3 rounded-xl bg-black/40 border border-white/10 text-center font-mono">
                <div>
                  <div className="text-[9px] text-gray-400 uppercase font-semibold">You Predicted</div>
                  <div className="text-xs sm:text-sm font-extrabold text-white mt-0.5">
                    ₹{predictedCTC.toFixed(1)} LPA
                  </div>
                </div>

                <div>
                  <div className="text-[9px] text-gray-400 uppercase font-semibold">Difference</div>
                  <div className="text-xs sm:text-sm font-extrabold text-amber-400 mt-0.5">
                    ₹{difference.toFixed(1)} LPA
                  </div>
                </div>

                <div>
                  <div className="text-[9px] text-gray-400 uppercase font-semibold">Accuracy</div>
                  <div className="text-xs sm:text-sm font-extrabold text-[#00E5FF] mt-0.5">
                    {accuracy}%
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>

        <AIExplanation card={card} actualCTC={actualCTC} />

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-4 flex flex-wrap justify-center gap-3 w-full max-w-md"
        >
          <button
            onClick={() => {
              soundFx.playTick(600, 0.05);
              onPlayAgain();
            }}
            className="flex-1 py-3 px-5 rounded-xl bg-gradient-to-r from-[#6D5DF6] to-[#7C3AED] font-extrabold text-xs text-white shadow-xl flex items-center justify-center space-x-2 transform hover:scale-105 transition-all cursor-pointer border border-white/20"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Play Again</span>
          </button>

          <button
            onClick={() => {
              soundFx.playTick(600, 0.05);
              onExportResult();
            }}
            className="flex-1 py-3 px-5 rounded-xl glass-panel font-extrabold text-xs text-[#00E5FF] hover:border-[#00E5FF]/40 shadow-xl flex items-center justify-center space-x-2 transform hover:scale-105 transition-all cursor-pointer border border-white/10"
          >
            <Share2 className="w-4 h-4" />
            <span>Share Result</span>
          </button>

          <button
            onClick={() => {
              soundFx.playTick(600, 0.05);
              onOpenLeaderboard();
            }}
            className="py-3 px-4 rounded-xl glass-panel font-extrabold text-xs text-yellow-400 hover:border-yellow-400/40 shadow-xl flex items-center justify-center space-x-2 transform hover:scale-105 transition-all cursor-pointer border border-white/10"
          >
            <Trophy className="w-4 h-4" />
            <span>Leaderboard</span>
          </button>
        </motion.div>

      </div>
    </div>
  );
};
