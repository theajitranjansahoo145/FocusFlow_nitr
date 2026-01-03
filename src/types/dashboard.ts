export interface Goal {
  id: string;
  name: string;
  icon: string;
  target: number;
  current: number;
  unit: string;
  streak: number;
  points: number;
  category: string;
}

export interface Session {
  id: string;
  type: 'study' | 'break' | 'distraction';
  app: string;
  duration: number;
  startTime: string;
}

export interface LeaderboardEntry {
  rank: number;
  name: string;
  avatar: string;
  hours: number;
  change: number;
  isCurrentUser?: boolean;
}

export interface Achievement {
  id: string;
  name: string;
  icon: string;
  description: string;
  unlocked: boolean;
  progress?: number;
  total?: number;
}

export interface DaySchedule {
  time: string;
  activity: string;
  type: 'peak' | 'high' | 'break' | 'normal';
  completed?: boolean;
  active?: boolean;
}

export interface WeeklyData {
  day: string;
  hours: number;
  target: number;
}

export interface FatigueLevel {
  value: number;
  status: 'low' | 'medium' | 'high' | 'critical';
}

export interface Challenge {
  id: string;
  name: string;
  participants: number;
  daysLeft: number;
  progress: number;
  total: number;
  reward: number;
}

export interface StudyBuddy {
  name: string;
  activity: string;
  duration: string;
  status: 'online' | 'break' | 'offline';
}

export interface Reflection {
  date: string;
  mood: 'great' | 'okay' | 'tired';
  note: string;
}
