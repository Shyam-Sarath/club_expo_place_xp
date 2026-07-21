import React from "react";
import { motion } from "framer-motion";
import type { PlacementProfile } from "../data/placementProfiles";
import { CheckCircle2, Sparkles } from "lucide-react";

interface AIExplanationProps {
  card: PlacementProfile;
  actualCTC: number;
}

export const AIExplanation: React.FC<AIExplanationProps> = ({ card, actualCTC }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.6 }}
      className="w-full max-w-xl glass-panel p-6 rounded-3xl border border-white/10 shadow-xl my-4 text-left"
    >
      <div className="flex items-center space-x-2 text-xs font-bold text-[#00E5FF] uppercase tracking-wider mb-3">
        <Sparkles className="w-4 h-4 text-[#00E5FF] animate-pulse" />
        <span>AI Placement Analysis Breakdown</span>
      </div>

      <h4 className="text-lg font-extrabold text-white mb-4">
        Why was this candidate offered <span className="text-[#00E5FF]">₹{actualCTC.toFixed(1)} LPA</span>?
      </h4>

      {/* Animated Checklist Items */}
      <div className="space-y-3">
        {card.insights.map((insight, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 + idx * 0.12 }}
            className="flex items-start space-x-3 p-3 rounded-2xl bg-white/5 border border-white/5 hover:border-[#00E5FF]/30 transition-all"
          >
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <span className="text-xs sm:text-sm font-medium text-gray-200 leading-relaxed">
              {insight.replace(/^✓\s*/, "")}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
