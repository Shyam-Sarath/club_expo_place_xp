import { useState, useEffect } from "react";
import { PLACEMENT_PROFILES, type PlacementProfile } from "../data/placementProfiles";
import { type Department } from "../data/departments";
import { soundFx } from "../utils/audio";

export type GameStep = 'LANDING' | 'WHEEL' | 'SHUFFLE' | 'PREDICT' | 'REVEAL' | 'PROFILE' | 'LEADERBOARD' | 'BADGES';

export interface LeaderboardEntry {
  id: string;
  name: string;
  avgAccuracy: number;
  gamesPlayed: number;
  bestStreak: number;
  avatar: string;
}

export interface Badge {
  id: string;
  title: string;
  description: string;
  icon: string;
  reqText: string;
}

export const ALL_BADGES: Badge[] = [
  { id: "first_win", title: "First Win", description: "Complete your first salary prediction round.", icon: "🎯", reqText: "Play 1 Game" },
  { id: "precision_master", title: "Precision Master", description: "Achieve an accuracy score of 90% or higher.", icon: "🔥", reqText: "90%+ Accuracy" },
  { id: "streak_5", title: "On Fire", description: "Maintain a 5-round streak of 70%+ accuracy.", icon: "⚡", reqText: "5 Streak" },
  { id: "century_club", title: "Century Club", description: "Play 100 placement prediction rounds.", icon: "🏆", reqText: "100 Games Played" },
  { id: "faang_hunter", title: "FAANG Specialist", description: "Correctly predict a FAANG salary within 10% error.", icon: "💻", reqText: "FAANG Precision" },
  { id: "golden_finder", title: "Golden Mystery", description: "Discover and reveal a rare Golden Candidate Card.", icon: "✨", reqText: "Mystery Card Reveal" },
  { id: "dept_master", title: "VIT Campus Guru", description: "Guess candidates across at least 10 different departments.", icon: "🎓", reqText: "10 Departments Explored" }
];

const INITIAL_LEADERBOARD: LeaderboardEntry[] = [
  { id: "1", name: "Aravind_VIT", avgAccuracy: 94.2, gamesPlayed: 45, bestStreak: 12, avatar: "👨‍💻" },
  { id: "2", name: "CyberNinja", avgAccuracy: 91.8, gamesPlayed: 38, bestStreak: 9, avatar: "🥷" },
  { id: "3", name: "Priya_DataSc", avgAccuracy: 89.5, gamesPlayed: 52, bestStreak: 11, avatar: "👩‍🔬" },
  { id: "4", name: "MechGeek99", avgAccuracy: 87.1, gamesPlayed: 29, bestStreak: 7, avatar: "⚙️" },
  { id: "5", name: "Rohan_EEDrive", avgAccuracy: 85.4, gamesPlayed: 31, bestStreak: 6, avatar: "⚡" },
  { id: "6", name: "Siddharth_SDE", avgAccuracy: 83.9, gamesPlayed: 24, bestStreak: 5, avatar: "🚀" },
  { id: "7", name: "Ananya_AI", avgAccuracy: 82.0, gamesPlayed: 19, bestStreak: 4, avatar: "🤖" },
  { id: "8", name: "Vikas_VLSI", avgAccuracy: 80.6, gamesPlayed: 22, bestStreak: 5, avatar: "🔬" },
  { id: "9", name: "Deepak_Biotech", avgAccuracy: 78.4, gamesPlayed: 15, bestStreak: 3, avatar: "🧬" },
  { id: "10", name: "Nisha_FashionTech", avgAccuracy: 76.2, gamesPlayed: 14, bestStreak: 3, avatar: "✨" }
];

const STORAGE_KEY_STATS = "guess_package_stats_v1";
const STORAGE_KEY_LEADERBOARD = "guess_package_leaderboard_v1";

export function useGameStore() {
  const [currentStep, setCurrentStep] = useState<GameStep>('LANDING');
  const [selectedDeptId, setSelectedDeptId] = useState<string>("ALL");
  const [difficultyFilter, setDifficultyFilter] = useState<string>("ALL");
  const [expFilter, setExpFilter] = useState<string>("ALL");
  const [tierFilter, setTierFilter] = useState<string>("ALL");
  
  const [winningDept, setWinningDept] = useState<Department | null>(null);
  const [currentCard, setCurrentCard] = useState<PlacementProfile | null>(null);
  const [deckCards, setDeckCards] = useState<PlacementProfile[]>([]);
  const [isGoldenRound, setIsGoldenRound] = useState<boolean>(false);
  
  const [predictedCTC, setPredictedCTC] = useState<number>(25.0);
  const [actualCTC, setActualCTC] = useState<number>(0);
  const [accuracy, setAccuracy] = useState<number>(0);
  const [accuracyRating, setAccuracyRating] = useState<string>("Good");
  const [difference, setDifference] = useState<number>(0);

  const [isDailyChallenge, setIsDailyChallenge] = useState<boolean>(false);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(!soundFx.isMuted);

  // Local storage state
  const [stats, setStats] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_STATS);
      if (saved) return JSON.parse(saved);
    } catch {
      // Fallback
    }
    return {
      roundsPlayed: 0,
      totalAccuracySum: 0,
      bestGuessDiff: 999,
      currentStreak: 0,
      highestStreak: 0,
      unlockedBadges: [] as string[],
      deptCounts: {} as Record<string, { count: number; accSum: number }>,
      bestPrediction: null as { company: string; role: string; diff: number; accuracy: number } | null,
      worstPrediction: null as { company: string; role: string; diff: number; accuracy: number } | null,
    };
  });

  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_LEADERBOARD);
      if (saved) return JSON.parse(saved);
    } catch {
      // Fallback
    }
    return INITIAL_LEADERBOARD;
  });

  // Sync stats to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_STATS, JSON.stringify(stats));
    } catch {
      // Storage error
    }
  }, [stats]);

  // Sync leaderboard to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_LEADERBOARD, JSON.stringify(leaderboard));
    } catch {
      // Storage error
    }
  }, [leaderboard]);

  const toggleSound = () => {
    const muted = soundFx.toggleMute();
    setSoundEnabled(!muted);
  };

  // Filter profiles based on current filter selections
  const getFilteredProfiles = (): PlacementProfile[] => {
    return PLACEMENT_PROFILES.filter((p) => {
      if (selectedDeptId !== "ALL" && p.departmentId !== selectedDeptId) return false;
      if (difficultyFilter !== "ALL" && p.difficulty !== difficultyFilter) return false;
      if (expFilter === "Freshers" && p.experience > 0) return false;
      if (expFilter === "Experienced" && p.experience === 0) return false;
      if (tierFilter === "FAANG" && !p.tier.includes("FAANG")) return false;
      if (tierFilter === "Startups" && !p.tier.includes("Startup") && !p.tier.includes("Unicorn")) return false;
      if (tierFilter === "Core" && !p.tier.includes("Core")) return false;
      if (tierFilter === "International" && p.employmentType !== "International Relocation") return false;
      return true;
    });
  };

  // Start round: spin wheel
  const startWheelSpin = () => {
    soundFx.playTick(500, 0.1);
    setCurrentStep('WHEEL');
  };

  // Wheel finished: pick department and generate card deck
  const handleWheelStop = (dept: Department) => {
    setWinningDept(dept);
    
    // Pick 20 cards from filtered or dept profiles
    let candidates = PLACEMENT_PROFILES.filter(p => p.departmentId === dept.id);
    if (candidates.length < 5) {
      candidates = PLACEMENT_PROFILES;
    }
    
    // Shuffle candidates
    const shuffled = [...candidates].sort(() => 0.5 - Math.random());
    const deck = shuffled.slice(0, 20);
    
    // Select 1 card as the main target
    const targetCard = deck[Math.floor(Math.random() * deck.length)];
    
    // 5% chance of Mystery Golden Card
    const isGolden = Math.random() < 0.08 || !!targetCard.isGolden;
    const finalCard = { ...targetCard, isGolden };

    setDeckCards(deck);
    setCurrentCard(finalCard);
    setIsGoldenRound(isGolden);
    setPredictedCTC(25.0); // Reset slider

    // Transition to shuffle step
    setCurrentStep('SHUFFLE');
  };

  // Card dealt -> proceed to prediction screen
  const proceedToPrediction = () => {
    setCurrentStep('PREDICT');
  };

  // Calculate reveal result
  const submitPrediction = () => {
    if (!currentCard) return;

    soundFx.playBuildup();

    const actual = currentCard.actualCTC;
    const pred = predictedCTC;
    const absDiff = Math.abs(actual - pred);
    
    // Accuracy Formula: clamp(100 - (abs(actual - pred) / actual) * 100, 0, 100)
    let acc = Math.max(0, 100 - (absDiff / actual) * 100);
    acc = Math.round(acc * 10) / 10; // 1 decimal place

    let rating = "Needs Improvement";
    if (acc >= 95) rating = "Excellent";
    else if (acc >= 85) rating = "Amazing";
    else if (acc >= 70) rating = "Good";

    setActualCTC(actual);
    setAccuracy(acc);
    setAccuracyRating(rating);
    setDifference(Math.round(absDiff * 10) / 10);

    // Update stats
    setStats((prev: typeof stats) => {
      const newRounds = prev.roundsPlayed + 1;
      const newAccSum = prev.totalAccuracySum + acc;
      const newBestDiff = Math.min(prev.bestGuessDiff, absDiff);
      
      const isStreakPassed = acc >= 70;
      const newStreak = isStreakPassed ? prev.currentStreak + 1 : 0;
      const newHighestStreak = Math.max(prev.highestStreak, newStreak);

      // Dept stats
      const deptId = currentCard.departmentId;
      const existingDept = prev.deptCounts[deptId] || { count: 0, accSum: 0 };
      const updatedDeptCounts = {
        ...prev.deptCounts,
        [deptId]: {
          count: existingDept.count + 1,
          accSum: existingDept.accSum + acc
        }
      };

      // Check badges
      const unlocked = [...prev.unlockedBadges];
      if (newRounds >= 1 && !unlocked.includes("first_win")) unlocked.push("first_win");
      if (acc >= 90 && !unlocked.includes("precision_master")) unlocked.push("precision_master");
      if (newStreak >= 5 && !unlocked.includes("streak_5")) unlocked.push("streak_5");
      if (newRounds >= 100 && !unlocked.includes("century_club")) unlocked.push("century_club");
      if (currentCard.tier.includes("FAANG") && acc >= 90 && !unlocked.includes("faang_hunter")) unlocked.push("faang_hunter");
      if (isGoldenRound && !unlocked.includes("golden_finder")) unlocked.push("golden_finder");
      if (Object.keys(updatedDeptCounts).length >= 10 && !unlocked.includes("dept_master")) unlocked.push("dept_master");

      // Best / Worst predictions
      let best = prev.bestPrediction;
      if (!best || acc > best.accuracy) {
        best = { company: currentCard.company, role: currentCard.role, diff: absDiff, accuracy: acc };
      }

      let worst = prev.worstPrediction;
      if (!worst || acc < worst.accuracy) {
        worst = { company: currentCard.company, role: currentCard.role, diff: absDiff, accuracy: acc };
      }

      return {
        ...prev,
        roundsPlayed: newRounds,
        totalAccuracySum: newAccSum,
        bestGuessDiff: newBestDiff,
        currentStreak: newStreak,
        highestStreak: newHighestStreak,
        unlockedBadges: unlocked,
        deptCounts: updatedDeptCounts,
        bestPrediction: best,
        worstPrediction: worst
      };
    });

    setCurrentStep('REVEAL');
  };

  // Play again
  const resetRound = () => {
    setCurrentStep('WHEEL');
  };

  return {
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
    resetRound,
    getFilteredProfiles
  };
}
