import { useState } from "react";
import { useGameStore, type LeaderboardEntry } from "./store/gameStore";
import { Navbar } from "./components/Navbar";
import { HeroLanding } from "./components/HeroLanding";
import { DepartmentWheel } from "./components/DepartmentWheel";
import { PokerCardDeck } from "./components/PokerCardDeck";
import { PredictionScreen } from "./components/PredictionScreen";
import { SalaryReveal } from "./components/SalaryReveal";
import { LeaderboardModal } from "./components/LeaderboardModal";
import { ProfileStatsModal } from "./components/ProfileStatsModal";
import { BadgesModal } from "./components/BadgesModal";
import { FilterDrawer } from "./components/FilterDrawer";
import { ResultExporter } from "./components/ResultExporter";

export function App() {
  const {
    currentStep,
    setCurrentStep,
    selectedDeptId,
    setSelectedDeptId,
    difficultyFilter,
    setDifficultyFilter,
    expFilter,
    setExpFilter,
    tierFilter,
    setTierFilter,
    winningDept,
    currentCard,
    deckCards,
    isGoldenRound,
    predictedCTC,
    setPredictedCTC,
    actualCTC,
    accuracy,
    accuracyRating,
    difference,
    stats,
    leaderboard,
    setLeaderboard,
    soundEnabled,
    toggleSound,
    isDailyChallenge,
    setIsDailyChallenge,
    startWheelSpin,
    handleWheelStop,
    proceedToPrediction,
    submitPrediction,
    resetRound
  } = useGameStore();

  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
  const [isExportOpen, setIsExportOpen] = useState<boolean>(false);

  const handleUpdateLeaderboardName = (id: string, newName: string) => {
    setLeaderboard((prev: LeaderboardEntry[]) =>
      prev.map(item => (item.id === id ? { ...item, name: newName } : item))
    );
  };

  return (
    <div className="min-h-screen bg-[#0B0F1A] text-[#F8FAFC] flex flex-col font-['Inter',sans-serif] selection:bg-[#6D5DF6]/30 selection:text-[#00E5FF]">
      
      {/* Top Navbar */}
      <Navbar
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        streak={stats.currentStreak}
        soundEnabled={soundEnabled}
        onToggleSound={toggleSound}
        onOpenFilters={() => setIsFilterOpen(true)}
        isDailyChallenge={isDailyChallenge}
        onToggleDailyChallenge={() => {
          setIsDailyChallenge(!isDailyChallenge);
          startWheelSpin();
        }}
      />

      {/* Main Content Step Router */}
      <main className="flex-1 w-full flex flex-col">
        {currentStep === 'LANDING' && (
          <HeroLanding
            onSpinClick={startWheelSpin}
            onOpenStats={() => setCurrentStep('PROFILE')}
            roundsPlayed={stats.roundsPlayed}
            highestStreak={stats.highestStreak}
          />
        )}

        {currentStep === 'WHEEL' && (
          <DepartmentWheel
            selectedDeptId={selectedDeptId}
            onWheelComplete={handleWheelStop}
          />
        )}

        {currentStep === 'SHUFFLE' && (
          <PokerCardDeck
            dept={winningDept}
            deckCards={deckCards}
            targetCard={currentCard}
            isGolden={isGoldenRound}
            onCardSelected={proceedToPrediction}
          />
        )}

        {currentStep === 'PREDICT' && currentCard && (
          <PredictionScreen
            card={currentCard}
            dept={winningDept}
            predictedCTC={predictedCTC}
            onPredictionChange={setPredictedCTC}
            onSubmit={submitPrediction}
            isGolden={isGoldenRound}
          />
        )}

        {currentStep === 'REVEAL' && currentCard && (
          <>
            <SalaryReveal
              card={currentCard}
              dept={winningDept}
              predictedCTC={predictedCTC}
              actualCTC={actualCTC}
              accuracy={accuracy}
              accuracyRating={accuracyRating}
              difference={difference}
              isGolden={isGoldenRound}
              onPlayAgain={resetRound}
              onOpenLeaderboard={() => setCurrentStep('LEADERBOARD')}
              onExportResult={() => setIsExportOpen(true)}
            />

            {/* Optional Export Modal */}
            {isExportOpen && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
                <div className="glass-panel p-6 rounded-3xl border border-white/10 text-center max-w-md w-full">
                  <h3 className="text-xl font-bold text-white mb-2">Export Placement Card</h3>
                  <p className="text-xs text-gray-400 mb-4">Generate custom shareable PNG snapshot</p>
                  
                  <ResultExporter
                    card={currentCard}
                    predictedCTC={predictedCTC}
                    actualCTC={actualCTC}
                    accuracy={accuracy}
                    accuracyRating={accuracyRating}
                  />

                  <button
                    onClick={() => setIsExportOpen(false)}
                    className="mt-4 px-6 py-2 rounded-xl bg-white/10 text-xs font-bold text-gray-300 hover:text-white"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </main>

      {/* Leaderboard Modal */}
      <LeaderboardModal
        isOpen={currentStep === 'LEADERBOARD'}
        onClose={() => setCurrentStep('LANDING')}
        leaderboard={leaderboard}
        onUpdateName={handleUpdateLeaderboardName}
      />

      {/* Profile & Statistics Modal */}
      <ProfileStatsModal
        isOpen={currentStep === 'PROFILE'}
        onClose={() => setCurrentStep('LANDING')}
        stats={stats}
      />

      {/* Badges Modal */}
      <BadgesModal
        isOpen={currentStep === 'BADGES'}
        onClose={() => setCurrentStep('LANDING')}
        unlockedBadges={stats.unlockedBadges}
      />

      {/* Filter Drawer Modal */}
      <FilterDrawer
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        selectedDeptId={selectedDeptId}
        setSelectedDeptId={setSelectedDeptId}
        difficultyFilter={difficultyFilter}
        setDifficultyFilter={setDifficultyFilter}
        expFilter={expFilter}
        setExpFilter={setExpFilter}
        tierFilter={tierFilter}
        setTierFilter={setTierFilter}
      />

    </div>
  );
}

export default App;
