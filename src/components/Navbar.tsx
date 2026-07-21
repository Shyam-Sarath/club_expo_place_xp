import React from "react";
import { Volume2, VolumeX, Medal, User, SlidersHorizontal, Flame, Sparkles } from "lucide-react";
import type { GameStep } from "../store/gameStore";
import { soundFx } from "../utils/audio";

interface NavbarProps {
  currentStep: GameStep;
  setCurrentStep: (step: GameStep) => void;
  streak: number;
  soundEnabled: boolean;
  onToggleSound: () => void;
  onOpenFilters: () => void;
  isDailyChallenge: boolean;
  onToggleDailyChallenge: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentStep,
  setCurrentStep,
  streak,
  soundEnabled,
  onToggleSound,
  onOpenFilters,
  isDailyChallenge,
  onToggleDailyChallenge
}) => {
  return (
    <header className="sticky top-0 z-50 w-full glass-panel border-b border-white/10 px-3 md:px-6 py-2">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand Logo & Club XP Motto */}
        <button
          onClick={() => {
            soundFx.playTick(600, 0.05);
            setCurrentStep('LANDING');
          }}
          className="flex items-center space-x-3 group cursor-pointer text-left focus:outline-none"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#6D5DF6] via-[#7C3AED] to-[#00E5FF] p-[2px] shadow-lg shadow-[#6D5DF6]/20 group-hover:shadow-[#00E5FF]/40 transition-all duration-300">
            <div className="w-full h-full bg-[#0B0F1A] rounded-[10px] flex items-center justify-center font-black text-lg text-[#00E5FF]">
              ⚡
            </div>
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h1 className="font-black text-base md:text-lg tracking-tight text-white group-hover:text-[#00E5FF] transition-colors">
                PLACE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6D5DF6] to-[#00E5FF]">XP</span>
              </h1>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-[#6D5DF6]/20 border border-[#6D5DF6]/40 text-[#00E5FF] uppercase font-mono">
                Club Expo
              </span>
            </div>
            <p className="text-[10px] text-gray-400 font-mono tracking-wide uppercase font-semibold hidden sm:block">
              Equip • Engage • Execute
            </p>
          </div>
        </button>

        {/* Center Actions / Mode Toggle */}
        <div className="hidden lg:flex items-center space-x-2 bg-[#111827]/90 px-3 py-1 rounded-full border border-white/10">
          <button
            onClick={() => {
              soundFx.playTick(500, 0.05);
              if (currentStep === 'LANDING') setCurrentStep('WHEEL');
              else setCurrentStep('LANDING');
            }}
            className={`px-3.5 py-1 rounded-full text-xs font-bold transition-all ${
              currentStep === 'LANDING' || currentStep === 'WHEEL'
                ? "bg-gradient-to-r from-[#6D5DF6] to-[#7C3AED] text-white shadow-md"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Play CTC Game
          </button>

          <button
            onClick={() => {
              soundFx.playTick(600, 0.05);
              onToggleDailyChallenge();
            }}
            className={`flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-bold transition-all ${
              isDailyChallenge
                ? "bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-[0_0_15px_rgba(245,158,11,0.3)]"
                : "text-gray-400 hover:text-amber-300"
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Expo Challenge</span>
          </button>
        </div>

        {/* Right Utility Buttons */}
        <div className="flex items-center space-x-2">
          
          {/* Streak Badge */}
          <div className="flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-gradient-to-r from-orange-500/20 to-amber-500/20 border border-orange-500/30 text-orange-400 font-mono font-bold text-xs shadow-inner">
            <Flame className="w-3.5 h-3.5 text-orange-500 animate-pulse" />
            <span>{streak}</span>
            <span className="text-[10px] text-gray-400 uppercase hidden sm:inline">Streak</span>
          </div>

          {/* Filter Button */}
          <button
            onClick={() => {
              soundFx.playTick(600, 0.05);
              onOpenFilters();
            }}
            className="p-1.5 rounded-xl bg-[#111827] border border-white/10 text-gray-300 hover:text-[#00E5FF] hover:border-[#00E5FF]/40 transition-all cursor-pointer"
            title="Filter Departments & Difficulty"
          >
            <SlidersHorizontal className="w-4 h-4" />
          </button>

          {/* Badges Trigger */}
          <button
            onClick={() => {
              soundFx.playTick(600, 0.05);
              setCurrentStep('BADGES');
            }}
            className={`p-1.5 rounded-xl border transition-all cursor-pointer ${
              currentStep === 'BADGES'
                ? "bg-[#6D5DF6]/20 border-[#6D5DF6] text-[#00E5FF]"
                : "bg-[#111827] border-white/10 text-gray-300 hover:text-purple-400 hover:border-purple-400/40"
            }`}
            title="Achievement Badges"
          >
            <Medal className="w-4 h-4 text-purple-400" />
          </button>

          {/* Profile / Stats */}
          <button
            onClick={() => {
              soundFx.playTick(600, 0.05);
              setCurrentStep('PROFILE');
            }}
            className={`p-1.5 rounded-xl border transition-all cursor-pointer ${
              currentStep === 'PROFILE'
                ? "bg-[#6D5DF6]/20 border-[#6D5DF6] text-[#00E5FF]"
                : "bg-[#111827] border-white/10 text-gray-300 hover:text-[#00E5FF] hover:border-[#00E5FF]/40"
            }`}
            title="Profile & Stats"
          >
            <User className="w-4 h-4" />
          </button>

          {/* Sound Toggle */}
          <button
            onClick={onToggleSound}
            className={`p-1.5 rounded-xl border transition-all cursor-pointer ${
              soundEnabled
                ? "bg-[#00E5FF]/10 border-[#00E5FF]/30 text-[#00E5FF]"
                : "bg-[#111827] border-white/10 text-gray-500"
            }`}
            title={soundEnabled ? "Mute Sound Effects" : "Enable Sound Effects"}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>

        </div>

      </div>
    </header>
  );
};
