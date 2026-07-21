import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { PlacementProfile } from "../data/placementProfiles";
import type { Department } from "../data/departments";
import { soundFx } from "../utils/audio";
import { ArrowRight, ShieldCheck } from "lucide-react";

interface PokerCardDeckProps {
  dept: Department | null;
  deckCards: PlacementProfile[];
  targetCard: PlacementProfile | null;
  isGolden: boolean;
  onCardSelected: () => void;
}

export const PokerCardDeck: React.FC<PokerCardDeckProps> = ({
  dept,
  deckCards,
  targetCard,
  isGolden,
  onCardSelected
}) => {
  const [shuffleState, setShuffleState] = useState<'STACKED' | 'SHUFFLING' | 'SPREAD' | 'DEALT'>('STACKED');

  useEffect(() => {
    const t1 = setTimeout(() => {
      setShuffleState('SHUFFLING');
      soundFx.playCardSwish();
    }, 400);

    const t2 = setTimeout(() => {
      setShuffleState('SPREAD');
      soundFx.playCardSwish();
    }, 1400);

    const t3 = setTimeout(() => {
      setShuffleState('DEALT');
      if (isGolden) {
        soundFx.playGoldChime();
      } else {
        soundFx.playTick(800, 0.08);
      }
    }, 2400);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [isGolden]);

  return (
    <div className="relative min-h-[calc(100vh-60px)] max-h-[calc(100vh-60px)] w-full flex flex-col items-center justify-center px-4 py-2 overflow-hidden">
      
      {isGolden && (
        <div className="absolute inset-0 bg-gradient-to-t from-amber-500/20 via-yellow-500/10 to-transparent pointer-events-none animate-pulse-glow" />
      )}

      <div className="relative z-10 max-w-4xl w-full flex flex-col items-center text-center">
        
        {/* Step Indicator Header */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-3"
        >
          <span className="px-3 py-0.5 rounded-full text-[11px] font-bold bg-[#6D5DF6]/20 border border-[#6D5DF6]/40 text-[#00E5FF] uppercase tracking-wider">
            Step 3: Card Deck Shuffle
          </span>

          <h2 className="text-2xl sm:text-4xl font-black text-white mt-1">
            {isGolden ? (
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500">
                ✨ Rare Golden Mystery Round!
              </span>
            ) : (
              <span>Drawing Candidate Card</span>
            )}
          </h2>

          <p className="text-xs text-gray-400 mt-0.5">
            Shuffling 20 cards from {dept?.name || "VIT Placement Drive"}...
          </p>
        </motion.div>

        {/* 3D Stacked / Spread Poker Card Container */}
        <div className="relative w-64 h-80 sm:w-72 sm:h-96 my-2 flex items-center justify-center perspective-1000 shrink-0">
          
          {/* Card Back Deck Stack */}
          {deckCards.slice(0, 10).map((card, idx) => {
            const isWinnerCard = card.id === targetCard?.id;

            let xOffset = 0;
            let yOffset = idx * -2;
            let rotateAngle = (idx - 5) * 1.5;
            let scaleVal = 1;
            let opacityVal = 1;

            if (shuffleState === 'SHUFFLING') {
              xOffset = (idx % 2 === 0 ? 1 : -1) * (idx * 12);
              rotateAngle = (idx % 2 === 0 ? 8 : -8);
            } else if (shuffleState === 'SPREAD') {
              xOffset = (idx - 5) * 18;
              rotateAngle = (idx - 5) * 3.5;
            } else if (shuffleState === 'DEALT') {
              if (isWinnerCard) {
                xOffset = 0;
                yOffset = -15;
                scaleVal = 1.1;
                rotateAngle = 0;
              } else {
                xOffset = (idx - 5) * 28;
                scaleVal = 0.85;
                opacityVal = 0.2;
              }
            }

            return (
              <motion.div
                key={card.id || idx}
                animate={{
                  x: xOffset,
                  y: yOffset,
                  rotate: rotateAngle,
                  scale: scaleVal,
                  opacity: opacityVal,
                  zIndex: isWinnerCard && shuffleState === 'DEALT' ? 50 : 10 - idx
                }}
                transition={{
                  type: "spring",
                  stiffness: 180,
                  damping: 20
                }}
                className={`absolute w-full h-full rounded-2xl p-5 flex flex-col justify-between cursor-pointer border shadow-2xl transition-all ${
                  isGolden && isWinnerCard
                    ? "glass-golden border-amber-400/80 shadow-[0_0_40px_rgba(245,158,11,0.5)]"
                    : "glass-panel-glow border-purple-500/30"
                }`}
                style={{
                  background: isWinnerCard && shuffleState === 'DEALT'
                    ? (isGolden ? 'linear-gradient(135deg, #1C1917, #451A03)' : 'linear-gradient(135deg, #111827, #1E1B4B)')
                    : 'linear-gradient(135deg, #0F172A, #1E1B4B)'
                }}
              >
                <div className="w-full h-full border border-white/10 rounded-xl p-3 flex flex-col items-center justify-between relative overflow-hidden">
                  
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#6D5DF6_1px,transparent_1px)] [background-size:14px_14px]" />

                  <div className="w-full flex justify-between items-center z-10">
                    <span className="text-[10px] font-mono font-bold text-gray-400">PLACE XP</span>
                    <ShieldCheck className="w-4 h-4 text-[#00E5FF]" />
                  </div>

                  <div className="my-auto text-center z-10">
                    <div className="w-16 h-16 mx-auto rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-3xl mb-2 shadow-inner">
                      {isGolden ? "✨" : "🎯"}
                    </div>
                    <div className="font-mono text-xs font-extrabold text-[#00E5FF] tracking-wider">
                      CARD #{(idx + 1).toString().padStart(2, '0')}
                    </div>
                    <div className="text-[9px] text-gray-400 mt-0.5 uppercase tracking-widest font-semibold">
                      {card.departmentId.toUpperCase()}
                    </div>
                  </div>

                  <div className="w-full flex justify-between items-center z-10 text-[9px] text-gray-500 font-mono">
                    <span>EQUIP • ENGAGE</span>
                    <span>SALARY HIDDEN</span>
                  </div>

                </div>
              </motion.div>
            );
          })}

        </div>

        {/* Action Button after Dealt */}
        <AnimatePresence>
          {shuffleState === 'DEALT' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className="mt-4 flex flex-col items-center"
            >
              <button
                onClick={onCardSelected}
                className="px-8 py-3 rounded-xl bg-gradient-to-r from-[#6D5DF6] to-[#00E5FF] font-extrabold text-base text-white shadow-2xl flex items-center space-x-2 transform hover:scale-105 transition-all cursor-pointer border border-white/20"
              >
                <span>Inspect Card & Predict CTC</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-[11px] text-gray-400 mt-2 font-mono">
                Card Selected: {targetCard?.role} at {targetCard?.company}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
};
