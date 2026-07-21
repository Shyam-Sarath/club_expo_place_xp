import React from "react";
import { motion } from "framer-motion";
import type { PlacementProfile } from "../data/placementProfiles";
import type { Department } from "../data/departments";
import { soundFx } from "../utils/audio";
import { MapPin, Briefcase, Award, Sparkles, IndianRupee, Zap, Lock, Code2 } from "lucide-react";

interface PredictionScreenProps {
  card: PlacementProfile;
  dept: Department | null;
  predictedCTC: number;
  onPredictionChange: (value: number) => void;
  onSubmit: () => void;
  isGolden: boolean;
}

export const PredictionScreen: React.FC<PredictionScreenProps> = ({
  card,
  predictedCTC,
  onPredictionChange,
  onSubmit,
  isGolden
}) => {
  const PRESET_VALS = [6.0, 15.0, 30.0, 50.0, 75.0, 100.0];

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    onPredictionChange(val);
    soundFx.playTick(300 + val * 5, 0.02);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    if (!isNaN(val)) {
      onPredictionChange(Math.min(150, Math.max(1, val)));
    }
  };

  return (
    <div className="relative min-h-[calc(100vh-60px)] max-h-[calc(100vh-60px)] w-full flex flex-col items-center justify-center px-4 py-2 overflow-hidden">
      
      <div className="relative z-10 max-w-5xl w-full grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-center">
        
        {/* Left Column: Candidate Glassmorphism Card (Front) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-6 flex flex-col items-center lg:items-start"
        >
          <div className="w-full text-center lg:text-left mb-2">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#6D5DF6]/20 border border-[#6D5DF6]/40 text-[#00E5FF] uppercase tracking-wider">
              Step 4: Candidate Card Inspection
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-white mt-1">
              Analyze Candidate Profile
            </h2>
          </div>

          {/* Compact Candidate Card Component */}
          <div 
            className={`w-full rounded-2xl p-4 sm:p-5 flex flex-col justify-between shadow-2xl relative overflow-hidden transition-all border ${
              isGolden 
                ? "glass-golden border-amber-400/80 shadow-[0_0_35px_rgba(245,158,11,0.3)]"
                : "glass-panel-glow border-purple-500/30 shadow-[0_0_30px_rgba(109,93,246,0.2)]"
            }`}
          >
            {isGolden && (
              <div className="absolute top-3 right-3 flex items-center space-x-1 px-2.5 py-0.5 rounded-full bg-amber-500/20 border border-amber-400/60 text-amber-300 font-bold text-[10px] shadow-lg">
                <Sparkles className="w-3 h-3" />
                <span>Golden Card (2x Score)</span>
              </div>
            )}

            {/* Company & Role Header */}
            <div className="flex items-center space-x-3 mb-3">
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl font-black shadow-lg border border-white/20 shrink-0"
                style={{ backgroundColor: `${card.companyColor}25` }}
              >
                {card.companyLogo || "🏢"}
              </div>

              <div>
                <span className="text-[11px] font-bold font-mono tracking-wider text-[#00E5FF] uppercase">
                  {card.company}
                </span>
                <h3 className="text-base sm:text-lg font-black text-white leading-tight">
                  {card.role}
                </h3>
                <span className="inline-block mt-0.5 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-white/10 text-gray-300">
                  {card.tier}
                </span>
              </div>
            </div>

            {/* Candidate Metadata Grid */}
            <div className="grid grid-cols-2 gap-2 mb-3 p-3 rounded-xl bg-black/40 border border-white/5">
              <div className="flex items-center space-x-2 text-[11px] text-gray-300">
                <Award className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                <div>
                  <div className="text-[9px] text-gray-500 uppercase font-semibold">Experience</div>
                  <div className="font-bold text-white">
                    {card.experience === 0 ? "Fresher (0 YOE)" : `${card.experience} Years Exp`}
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-2 text-[11px] text-gray-300">
                <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <div>
                  <div className="text-[9px] text-gray-500 uppercase font-semibold">Location</div>
                  <div className="font-bold text-white truncate">{card.location}</div>
                </div>
              </div>

              <div className="flex items-center space-x-2 text-[11px] text-gray-300">
                <Briefcase className="w-3.5 h-3.5 text-[#00E5FF] shrink-0" />
                <div>
                  <div className="text-[9px] text-gray-500 uppercase font-semibold">Type</div>
                  <div className="font-bold text-white">{card.employmentType}</div>
                </div>
              </div>

              <div className="flex items-center space-x-2 text-[11px] text-gray-300">
                <Code2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <div>
                  <div className="text-[9px] text-gray-500 uppercase font-semibold">Department</div>
                  <div className="font-bold text-white truncate">{card.departmentId.toUpperCase()}</div>
                </div>
              </div>
            </div>

            {/* Skills Tech Tags */}
            <div className="mb-3">
              <div className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-1">
                Key Skills & Stack:
              </div>
              <div className="flex flex-wrap gap-1">
                {card.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-[#6D5DF6]/15 border border-[#6D5DF6]/30 text-purple-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Hidden Salary Lock Banner */}
            <div className="w-full p-2.5 rounded-xl bg-gradient-to-r from-[#6D5DF6]/20 via-purple-900/30 to-[#00E5FF]/20 border border-[#00E5FF]/40 flex items-center justify-between">
              <div className="flex items-center space-x-1.5 text-xs font-bold text-gray-200">
                <Lock className="w-3.5 h-3.5 text-[#00E5FF]" />
                <span>Placement Package:</span>
              </div>
              <span className="px-2.5 py-0.5 rounded-md bg-black/60 font-mono font-extrabold text-xs text-[#00E5FF] tracking-widest">
                ₹ ?? . ? LPA
              </span>
            </div>

          </div>
        </motion.div>

        {/* Right Column: Salary Prediction Controls */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-6 flex flex-col items-center lg:items-start"
        >
          <div className="w-full glass-panel p-4 sm:p-6 rounded-2xl border border-white/10 shadow-2xl">
            
            <h3 className="text-xl sm:text-2xl font-black text-white mb-0.5">
              Predict Candidate CTC
            </h3>
            <p className="text-[11px] text-gray-400 mb-4">
              Use slider or type predicted package in Lakhs Per Annum (LPA).
            </p>

            {/* Display / Input Control Box */}
            <div className="mb-4 p-3 rounded-xl bg-black/50 border border-white/10 flex items-center justify-between">
              <div className="flex items-center space-x-1.5 text-gray-400">
                <IndianRupee className="w-4 h-4 text-[#00E5FF]" />
                <span className="text-xs font-semibold uppercase">Prediction:</span>
              </div>

              <div className="flex items-center space-x-1.5">
                <input
                  type="number"
                  step="0.5"
                  min="1"
                  max="150"
                  value={predictedCTC}
                  onChange={handleInputChange}
                  className="w-20 sm:w-24 text-right bg-[#111827] border border-[#00E5FF]/40 focus:border-[#00E5FF] rounded-lg px-2 py-1 font-mono text-lg sm:text-xl font-extrabold text-[#00E5FF] focus:outline-none shadow-inner"
                />
                <span className="text-xs font-extrabold text-gray-300 font-mono">LPA</span>
              </div>
            </div>

            {/* Precision Range Slider */}
            <div className="mb-4">
              <div className="flex justify-between text-[11px] font-mono font-semibold text-gray-400 mb-1">
                <span>3.0 LPA</span>
                <span className="text-[#00E5FF]">₹ {predictedCTC.toFixed(1)} LPA</span>
                <span>110.0 LPA</span>
              </div>

              <input
                type="range"
                min="3"
                max="110"
                step="0.5"
                value={predictedCTC}
                onChange={handleSliderChange}
                className="w-full h-2.5 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-[#00E5FF]"
              />
            </div>

            {/* Quick Preset Buttons */}
            <div className="mb-5">
              <div className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-1.5">
                Quick Salary Presets:
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-1.5">
                {PRESET_VALS.map((val) => (
                  <button
                    key={val}
                    onClick={() => {
                      onPredictionChange(val);
                      soundFx.playTick(450, 0.05);
                    }}
                    className={`py-1 px-1.5 rounded-lg text-xs font-mono font-bold transition-all border cursor-pointer ${
                      predictedCTC === val
                        ? "bg-[#00E5FF]/20 border-[#00E5FF] text-[#00E5FF] shadow-[0_0_10px_rgba(0,229,255,0.3)]"
                        : "bg-white/5 border-white/10 text-gray-300 hover:border-white/30"
                    }`}
                  >
                    {val >= 100 ? `${(val / 100).toFixed(1)} CR` : `${val} LPA`}
                  </button>
                ))}
              </div>
            </div>

            {/* Large Submit CTA Button */}
            <button
              onClick={() => {
                onSubmit();
              }}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#6D5DF6] via-[#7C3AED] to-[#00E5FF] font-extrabold text-base text-white shadow-2xl flex items-center justify-center space-x-2 transform hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer border border-white/20"
            >
              <Zap className="w-5 h-5 text-[#00E5FF]" />
              <span>Reveal Package 🎯</span>
            </button>

          </div>
        </motion.div>

      </div>
    </div>
  );
};
