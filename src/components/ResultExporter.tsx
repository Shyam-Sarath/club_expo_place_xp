import React, { useRef } from "react";
import { toPng } from "html-to-image";
import type { PlacementProfile } from "../data/placementProfiles";
import { Download } from "lucide-react";
import { soundFx } from "../utils/audio";

interface ResultExporterProps {
  card: PlacementProfile;
  predictedCTC: number;
  actualCTC: number;
  accuracy: number;
  accuracyRating: string;
}

export const ResultExporter: React.FC<ResultExporterProps> = ({
  card,
  predictedCTC,
  actualCTC,
  accuracy,
  accuracyRating
}) => {
  const exportCardRef = useRef<HTMLDivElement | null>(null);

  const handleDownloadImage = async () => {
    if (!exportCardRef.current) return;
    soundFx.playTick(700, 0.08);

    try {
      const dataUrl = await toPng(exportCardRef.current, { cacheBust: true, quality: 0.95 });
      const link = document.createElement("a");
      link.download = `GuessThePackage-${card.company}-${accuracy}pct.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error("Export error:", err);
    }
  };

  return (
    <div className="flex flex-col items-center my-4">
      
      <button
        onClick={handleDownloadImage}
        className="px-6 py-3 rounded-2xl bg-gradient-to-r from-[#6D5DF6] to-[#00E5FF] font-extrabold text-sm text-white shadow-xl flex items-center space-x-2 transform hover:scale-105 transition-all cursor-pointer border border-white/20"
      >
        <Download className="w-4 h-4" />
        <span>Export Result Image (PNG)</span>
      </button>

      <div className="absolute top-[-9999px] left-[-9999px]">
        <div
          ref={exportCardRef}
          className="w-[600px] h-[750px] bg-[#0B0F1A] text-white p-10 flex flex-col justify-between relative overflow-hidden font-['Inter',sans-serif]"
          style={{
            backgroundImage: "radial-gradient(circle at 50% 0%, rgba(109, 93, 246, 0.3) 0%, rgba(11, 15, 26, 1) 75%)"
          }}
        >
          <div className="flex items-center justify-between border-b border-white/10 pb-6">
            <div className="flex items-center space-x-3">
              <span className="text-3xl">🎯</span>
              <div>
                <h1 className="text-2xl font-black text-white">
                  Guess <span className="text-[#00E5FF]">The Package</span>
                </h1>
                <p className="text-xs text-gray-400 font-mono">VIT Placement Simulator</p>
              </div>
            </div>

            <div className="px-3 py-1 rounded-full bg-[#6D5DF6]/20 border border-[#6D5DF6]/40 text-[#00E5FF] font-mono text-xs font-bold">
              VERIFIED SCORE
            </div>
          </div>

          <div className="my-auto bg-[#111827] border border-white/15 rounded-3xl p-8 shadow-2xl flex flex-col items-center text-center">
            
            <div className="text-4xl mb-2">{card.companyLogo || "🏢"}</div>
            <div className="text-xs font-bold text-[#00E5FF] uppercase tracking-wider">{card.company}</div>
            <h2 className="text-2xl font-black text-white mt-1">{card.role}</h2>
            <div className="text-xs text-gray-400 mt-1">{card.departmentId.toUpperCase()} • {card.location}</div>

            <div className="my-6 w-full py-4 rounded-2xl bg-black/60 border border-white/10 flex flex-col items-center">
              <span className="text-xs text-gray-400 uppercase font-semibold">Actual Placement CTC</span>
              <span className="text-5xl font-black text-[#00E5FF] font-mono mt-1">
                ₹{actualCTC.toFixed(1)} LPA
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 w-full font-mono">
              <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                <div className="text-[10px] text-gray-400 uppercase">My Prediction</div>
                <div className="text-lg font-bold text-white">₹{predictedCTC.toFixed(1)} LPA</div>
              </div>

              <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                <div className="text-[10px] text-gray-400 uppercase">Accuracy Score</div>
                <div className="text-lg font-bold text-amber-400">{accuracy}% ({accuracyRating})</div>
              </div>
            </div>

          </div>

          <div className="flex items-center justify-between pt-6 border-t border-white/10 text-xs text-gray-400 font-mono">
            <span>Play at place-xp.vit.ac.in</span>
            <span>#GuessThePackage</span>
          </div>

        </div>
      </div>

    </div>
  );
};
