import React from "react";
import { motion } from "framer-motion";
import { X, Flame, Target, Award, Star, TrendingUp } from "lucide-react";
import { DEPARTMENTS } from "../data/departments";

interface ProfileStatsModalProps {
  isOpen: boolean;
  onClose: () => void;
  stats: {
    roundsPlayed: number;
    totalAccuracySum: number;
    bestGuessDiff: number;
    currentStreak: number;
    highestStreak: number;
    unlockedBadges: string[];
    deptCounts: Record<string, { count: number; accSum: number }>;
    bestPrediction: { company: string; role: string; diff: number; accuracy: number } | null;
    worstPrediction: { company: string; role: string; diff: number; accuracy: number } | null;
  };
}

export const ProfileStatsModal: React.FC<ProfileStatsModalProps> = ({
  isOpen,
  onClose,
  stats
}) => {
  if (!isOpen) return null;

  const avgAccuracy = stats.roundsPlayed > 0 
    ? (stats.totalAccuracySum / stats.roundsPlayed).toFixed(1) 
    : "0.0";

  let favDeptId = "N/A";
  let maxCount = 0;
  let bestDeptId = "N/A";
  let bestDeptAcc = 0;

  Object.entries(stats.deptCounts).forEach(([deptId, data]) => {
    if (data.count > maxCount) {
      maxCount = data.count;
      favDeptId = deptId;
    }
    const acc = data.count > 0 ? data.accSum / data.count : 0;
    if (acc > bestDeptAcc) {
      bestDeptAcc = acc;
      bestDeptId = deptId;
    }
  });

  const favoriteDeptObj = DEPARTMENTS.find(d => d.id === favDeptId);
  const bestDeptObj = DEPARTMENTS.find(d => d.id === bestDeptId);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="w-full max-w-3xl glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 shadow-2xl relative max-h-[90vh] overflow-y-auto"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center space-x-4 mb-8">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#6D5DF6] to-[#00E5FF] p-[2px] shadow-lg">
            <div className="w-full h-full bg-[#0B0F1A] rounded-2xl flex items-center justify-center text-3xl">
              🎓
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-black text-white">Placement Analytics Dashboard</h3>
            <p className="text-xs text-gray-400 font-mono">Student Predictor ID: VIT-2026-CH</p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          <div className="p-4 rounded-2xl bg-white/5 border border-white/5 text-center">
            <div className="text-2xl font-black text-white font-mono">{stats.roundsPlayed}</div>
            <div className="text-[10px] text-gray-400 uppercase font-semibold mt-1">Rounds Played</div>
          </div>

          <div className="p-4 rounded-2xl bg-white/5 border border-white/5 text-center">
            <div className="text-2xl font-black text-[#00E5FF] font-mono">{avgAccuracy}%</div>
            <div className="text-[10px] text-gray-400 uppercase font-semibold mt-1">Avg Accuracy</div>
          </div>

          <div className="p-4 rounded-2xl bg-white/5 border border-white/5 text-center">
            <div className="text-2xl font-black text-orange-400 font-mono flex items-center justify-center space-x-1">
              <Flame className="w-5 h-5 inline" />
              <span>{stats.currentStreak}</span>
            </div>
            <div className="text-[10px] text-gray-400 uppercase font-semibold mt-1">Current Streak</div>
          </div>

          <div className="p-4 rounded-2xl bg-white/5 border border-white/5 text-center">
            <div className="text-2xl font-black text-purple-400 font-mono">{stats.highestStreak}</div>
            <div className="text-[10px] text-gray-400 uppercase font-semibold mt-1">Best Streak</div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          
          <div className="p-4 rounded-2xl bg-black/40 border border-white/10 flex items-start space-x-3">
            <Award className="w-6 h-6 text-emerald-400 shrink-0 mt-1" />
            <div>
              <div className="text-xs text-gray-400 font-semibold uppercase">Most Accurate Dept</div>
              <div className="text-base font-extrabold text-white mt-0.5">
                {bestDeptObj ? bestDeptObj.name : "Play more rounds"}
              </div>
              <div className="text-[11px] text-emerald-400 font-mono mt-1">
                {bestDeptAcc > 0 ? `${bestDeptAcc.toFixed(1)}% Avg Precision` : "--"}
              </div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-black/40 border border-white/10 flex items-start space-x-3">
            <Star className="w-6 h-6 text-amber-400 shrink-0 mt-1" />
            <div>
              <div className="text-xs text-gray-400 font-semibold uppercase">Favorite Department</div>
              <div className="text-base font-extrabold text-white mt-0.5">
                {favoriteDeptObj ? favoriteDeptObj.name : "All Departments"}
              </div>
              <div className="text-[11px] text-gray-400 font-mono mt-1">
                {maxCount > 0 ? `${maxCount} rounds played` : "No rounds yet"}
              </div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-black/40 border border-white/10 flex items-start space-x-3">
            <Target className="w-6 h-6 text-[#00E5FF] shrink-0 mt-1" />
            <div>
              <div className="text-xs text-gray-400 font-semibold uppercase">Best Prediction</div>
              <div className="text-base font-extrabold text-white mt-0.5">
                {stats.bestPrediction ? `${stats.bestPrediction.company} (${stats.bestPrediction.role})` : "None yet"}
              </div>
              <div className="text-[11px] text-[#00E5FF] font-mono mt-1">
                {stats.bestPrediction ? `${stats.bestPrediction.accuracy}% accuracy (Diff ₹${stats.bestPrediction.diff.toFixed(1)}L)` : "--"}
              </div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-black/40 border border-white/10 flex items-start space-x-3">
            <TrendingUp className="w-6 h-6 text-red-400 shrink-0 mt-1" />
            <div>
              <div className="text-xs text-gray-400 font-semibold uppercase">Worst Prediction</div>
              <div className="text-base font-extrabold text-white mt-0.5">
                {stats.worstPrediction ? `${stats.worstPrediction.company} (${stats.worstPrediction.role})` : "None yet"}
              </div>
              <div className="text-[11px] text-red-400 font-mono mt-1">
                {stats.worstPrediction ? `${stats.worstPrediction.accuracy}% accuracy (Diff ₹${stats.worstPrediction.diff.toFixed(1)}L)` : "--"}
              </div>
            </div>
          </div>

        </div>

        <div className="pt-4 border-t border-white/10 text-center">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 font-bold text-xs text-white transition-all"
          >
            Close Dashboard
          </button>
        </div>

      </motion.div>
    </div>
  );
};
