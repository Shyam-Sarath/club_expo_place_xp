import React from "react";
import { motion } from "framer-motion";
import { SlidersHorizontal, X } from "lucide-react";
import { DEPARTMENTS } from "../data/departments";

interface FilterDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  selectedDeptId: string;
  setSelectedDeptId: (id: string) => void;
  difficultyFilter: string;
  setDifficultyFilter: (diff: string) => void;
  expFilter: string;
  setExpFilter: (exp: string) => void;
  tierFilter: string;
  setTierFilter: (tier: string) => void;
}

export const FilterDrawer: React.FC<FilterDrawerProps> = ({
  isOpen,
  onClose,
  selectedDeptId,
  setSelectedDeptId,
  difficultyFilter,
  setDifficultyFilter,
  expFilter,
  setExpFilter,
  tierFilter,
  setTierFilter
}) => {
  if (!isOpen) return null;

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
          <div className="w-12 h-12 rounded-2xl bg-[#00E5FF]/20 border border-[#00E5FF]/40 flex items-center justify-center text-[#00E5FF] shadow-lg">
            <SlidersHorizontal className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-2xl font-black text-white">Filter Placement Profiles</h3>
            <p className="text-xs text-gray-400">Customize target department, difficulty, and company tier</p>
          </div>
        </div>

        {/* 1. Department Filter */}
        <div className="mb-6">
          <label className="text-xs font-bold text-gray-300 uppercase tracking-wider block mb-2">
            Target Department (19 VIT Programmes):
          </label>
          <div className="flex flex-wrap gap-2 max-h-40 overflow-y-auto pr-1">
            <button
              onClick={() => setSelectedDeptId("ALL")}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all border ${
                selectedDeptId === "ALL"
                  ? "bg-[#6D5DF6] border-[#6D5DF6] text-white"
                  : "bg-white/5 border-white/10 text-gray-300 hover:border-white/30"
              }`}
            >
              🎯 All Departments (304 Profiles)
            </button>

            {DEPARTMENTS.map((dept) => (
              <button
                key={dept.id}
                onClick={() => setSelectedDeptId(dept.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all border ${
                  selectedDeptId === dept.id
                    ? "bg-[#00E5FF]/20 border-[#00E5FF] text-[#00E5FF]"
                    : "bg-white/5 border-white/10 text-gray-300 hover:border-white/30"
                }`}
              >
                {dept.shortCode}
              </button>
            ))}
          </div>
        </div>

        {/* 2. Difficulty Filter */}
        <div className="mb-6">
          <label className="text-xs font-bold text-gray-300 uppercase tracking-wider block mb-2">
            Guess Difficulty:
          </label>
          <div className="grid grid-cols-4 gap-2">
            {["ALL", "Easy", "Medium", "Hard"].map((diff) => (
              <button
                key={diff}
                onClick={() => setDifficultyFilter(diff)}
                className={`py-2 rounded-xl text-xs font-bold transition-all border ${
                  difficultyFilter === diff
                    ? "bg-[#6D5DF6] border-[#6D5DF6] text-white"
                    : "bg-white/5 border-white/10 text-gray-300 hover:border-white/30"
                }`}
              >
                {diff}
              </button>
            ))}
          </div>
        </div>

        {/* 3. Experience Level */}
        <div className="mb-6">
          <label className="text-xs font-bold text-gray-300 uppercase tracking-wider block mb-2">
            Experience Level:
          </label>
          <div className="grid grid-cols-3 gap-2">
            {["ALL", "Freshers", "Experienced"].map((exp) => (
              <button
                key={exp}
                onClick={() => setExpFilter(exp)}
                className={`py-2 rounded-xl text-xs font-bold transition-all border ${
                  expFilter === exp
                    ? "bg-[#00E5FF]/20 border-[#00E5FF] text-[#00E5FF]"
                    : "bg-white/5 border-white/10 text-gray-300 hover:border-white/30"
                }`}
              >
                {exp}
              </button>
            ))}
          </div>
        </div>

        {/* 4. Company Category / Tier */}
        <div className="mb-6">
          <label className="text-xs font-bold text-gray-300 uppercase tracking-wider block mb-2">
            Company Sector / Tier:
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
            {["ALL", "FAANG", "Startups", "Core", "International"].map((tier) => (
              <button
                key={tier}
                onClick={() => setTierFilter(tier)}
                className={`py-2 rounded-xl text-xs font-bold transition-all border ${
                  tierFilter === tier
                    ? "bg-purple-600 border-purple-500 text-white"
                    : "bg-white/5 border-white/10 text-gray-300 hover:border-white/30"
                }`}
              >
                {tier}
              </button>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-white/10 flex justify-end space-x-3">
          <button
            onClick={() => {
              setSelectedDeptId("ALL");
              setDifficultyFilter("ALL");
              setExpFilter("ALL");
              setTierFilter("ALL");
            }}
            className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 font-bold text-xs text-gray-300 transition-all"
          >
            Reset Filters
          </button>
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#6D5DF6] to-[#00E5FF] font-bold text-xs text-white transition-all shadow-lg"
          >
            Apply Filters
          </button>
        </div>

      </motion.div>
    </div>
  );
};
