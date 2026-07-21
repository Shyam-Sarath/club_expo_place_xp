import React, { useState } from "react";
import { motion } from "framer-motion";
import { Trophy, X, Flame, Edit2, Check } from "lucide-react";
import type { LeaderboardEntry } from "../store/gameStore";

interface LeaderboardModalProps {
  isOpen: boolean;
  onClose: () => void;
  leaderboard: LeaderboardEntry[];
  onUpdateName: (id: string, newName: string) => void;
}

export const LeaderboardModal: React.FC<LeaderboardModalProps> = ({
  isOpen,
  onClose,
  leaderboard,
  onUpdateName
}) => {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [nameInput, setNameInput] = useState<string>("");

  if (!isOpen) return null;

  const handleEdit = (entry: LeaderboardEntry) => {
    setEditingId(entry.id);
    setNameInput(entry.name);
  };

  const handleSave = (id: string) => {
    if (nameInput.trim()) {
      onUpdateName(id, nameInput.trim());
    }
    setEditingId(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="w-full max-w-2xl glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 shadow-2xl relative max-h-[90vh] overflow-y-auto"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center space-x-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-yellow-500/20 border border-yellow-500/40 flex items-center justify-center text-yellow-400 shadow-lg">
            <Trophy className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-2xl font-black text-white">VIT Placement Leaderboard</h3>
            <p className="text-xs text-gray-400">Top 10 highest accuracy predictors (Saved locally)</p>
          </div>
        </div>

        {/* Leaderboard Table */}
        <div className="space-y-2.5">
          {leaderboard.map((entry, idx) => {
            const isTop3 = idx < 3;
            const rankColors = [
              "bg-yellow-500/20 text-yellow-300 border-yellow-500/40",
              "bg-gray-300/20 text-gray-200 border-gray-300/40",
              "bg-amber-700/20 text-amber-300 border-amber-600/40"
            ];

            return (
              <div
                key={entry.id}
                className={`flex items-center justify-between p-3.5 sm:p-4 rounded-2xl border transition-all ${
                  isTop3
                    ? rankColors[idx]
                    : "bg-white/5 border-white/5 hover:border-white/15"
                }`}
              >
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className={`w-8 h-8 rounded-xl font-mono font-black text-sm flex items-center justify-center border ${
                    isTop3 ? rankColors[idx] : "bg-black/40 text-gray-400 border-white/10"
                  }`}>
                    #{idx + 1}
                  </div>

                  <span className="text-2xl">{entry.avatar}</span>

                  <div>
                    {editingId === entry.id ? (
                      <div className="flex items-center space-x-2">
                        <input
                          type="text"
                          value={nameInput}
                          onChange={(e) => setNameInput(e.target.value)}
                          className="bg-black/60 border border-[#00E5FF] rounded-lg px-2 py-0.5 text-xs text-white focus:outline-none"
                        />
                        <button
                          onClick={() => handleSave(entry.id)}
                          className="p-1 rounded bg-[#00E5FF] text-black hover:bg-white"
                        >
                          <Check className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-2">
                        <span className="font-extrabold text-sm sm:text-base text-white">
                          {entry.name}
                        </span>
                        <button
                          onClick={() => handleEdit(entry)}
                          className="opacity-40 hover:opacity-100 text-gray-400 hover:text-[#00E5FF] transition-opacity"
                        >
                          <Edit2 className="w-3 h-3" />
                        </button>
                      </div>
                    )}

                    <div className="text-[11px] text-gray-400 flex items-center space-x-3 mt-0.5 font-mono">
                      <span>{entry.gamesPlayed} games</span>
                      <span>•</span>
                      <span className="text-orange-400 flex items-center space-x-1">
                        <Flame className="w-3 h-3 inline" />
                        <span>{entry.bestStreak} streak</span>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="text-right font-mono">
                  <div className="text-base sm:text-lg font-black text-[#00E5FF]">
                    {entry.avgAccuracy}%
                  </div>
                  <div className="text-[10px] text-gray-400 uppercase font-semibold">Avg Precision</div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 pt-4 border-t border-white/10 text-center">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 font-bold text-xs text-white transition-all"
          >
            Close Leaderboard
          </button>
        </div>

      </motion.div>
    </div>
  );
};
