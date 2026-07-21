import React from "react";
import { motion } from "framer-motion";
import { Medal, X, Lock, CheckCircle2 } from "lucide-react";
import { ALL_BADGES } from "../store/gameStore";

interface BadgesModalProps {
  isOpen: boolean;
  onClose: () => void;
  unlockedBadges: string[];
}

export const BadgesModal: React.FC<BadgesModalProps> = ({
  isOpen,
  onClose,
  unlockedBadges
}) => {
  if (!isOpen) return null;

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

        <div className="flex items-center space-x-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-400 shadow-lg">
            <Medal className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-2xl font-black text-white">Achievement Badges</h3>
            <p className="text-xs text-gray-400">Unlock placement predictor achievements</p>
          </div>
        </div>

        {/* Badges Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          {ALL_BADGES.map((badge) => {
            const isUnlocked = unlockedBadges.includes(badge.id);

            return (
              <div
                key={badge.id}
                className={`p-4 rounded-2xl border flex items-start space-x-3 transition-all ${
                  isUnlocked
                    ? "glass-panel-glow border-purple-500/40 shadow-lg"
                    : "bg-white/5 border-white/5 opacity-50 grayscale"
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0 border ${
                  isUnlocked ? "bg-purple-500/20 border-purple-500/50" : "bg-black/40 border-white/10"
                }`}>
                  {badge.icon}
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-extrabold text-white">{badge.title}</h4>
                    {isUnlocked ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Lock className="w-3.5 h-3.5 text-gray-500" />
                    )}
                  </div>

                  <p className="text-xs text-gray-300 mt-1 leading-relaxed">{badge.description}</p>
                  
                  <div className="text-[10px] font-mono text-purple-300 mt-2">
                    Requirement: {badge.reqText}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="pt-4 border-t border-white/10 text-center">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 font-bold text-xs text-white transition-all"
          >
            Close Badges
          </button>
        </div>

      </motion.div>
    </div>
  );
};
