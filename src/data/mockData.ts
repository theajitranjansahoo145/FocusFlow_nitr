import type { 
  Goal, 
  Session, 
  LeaderboardEntry, 
  Achievement, 
  DaySchedule, 
  WeeklyData,
  Challenge,
  StudyBuddy,
  Reflection
} from '@/types/dashboard';

export const goals: Goal[] = [
  {
    id: '1',
    name: 'JEE 2025 Preparation',
    icon: '🎯',
    target: 8,
    current: 5.5,
    unit: 'h',
    streak: 12,
    points: 125,
    category: 'Exam Prep'
  },
  {
    id: '2',
    name: 'Daily Reading',
    icon: '📚',
    target: 60,
    current: 30,
    unit: 'min',
    streak: 5,
    points: 45,
    category: 'Personal'
  },
  {
    id: '3',
    name: 'Android Dev Practice',
    icon: '💻',
    target: 2,
    current: 1.5,
    unit: 'h',
    streak: 8,
    points: 80,
    category: 'Skills'
  }
];

export const recentSessions: Session[] = [
  { id: '1', type: 'study', app: 'Study', duration: 80, startTime: '3:00 PM' },
  { id: '2', type: 'break', app: 'Break', duration: 15, startTime: '4:20 PM' },
  { id: '3', type: 'distraction', app: 'Instagram', duration: 25, startTime: '4:35 PM' }
];

export const leaderboard: LeaderboardEntry[] = [
  { rank: 1, name: 'Priya K.', avatar: 'PK', hours: 52, change: 2 },
  { rank: 2, name: 'Arjun M.', avatar: 'AM', hours: 48, change: -1 },
  { rank: 3, name: 'You', avatar: 'RK', hours: 45, change: 0, isCurrentUser: true },
  { rank: 4, name: 'Sneha R.', avatar: 'SR', hours: 43, change: 5 },
  { rank: 5, name: 'Rahul P.', avatar: 'RP', hours: 40, change: 2 },
  { rank: 6, name: 'Amit S.', avatar: 'AS', hours: 32, change: -2 }
];

export const achievements: Achievement[] = [
  { id: '1', name: '7-Day Streak', icon: '🔥', description: 'Study for 7 consecutive days', unlocked: true },
  { id: '2', name: 'Early Bird', icon: '⏰', description: 'Start studying at 5 AM', unlocked: true },
  { id: '3', name: '100 Hours Club', icon: '📚', description: 'Accumulate 100 hours of study time', unlocked: true },
  { id: '4', name: 'Bookworm', icon: '📖', description: 'Read for 30 hours total', unlocked: false, progress: 15, total: 30 },
  { id: '5', name: '30-Day Streak', icon: '💪', description: 'Study for 30 consecutive days', unlocked: false, progress: 12, total: 30 },
  { id: '6', name: 'Pomodoro Pro', icon: '🍅', description: 'Complete 100 Pomodoro sessions', unlocked: false, progress: 47, total: 100 }
];

export const todaySchedule: DaySchedule[] = [
  { time: '6-8 AM', activity: 'Peak Focus', type: 'peak', completed: true },
  { time: '9-12 PM', activity: 'Problem Solving', type: 'high', active: true },
  { time: '12-2 PM', activity: 'Lunch Break', type: 'break' },
  { time: '2-5 PM', activity: 'Reading & Notes', type: 'normal' }
];

export const weeklyData: WeeklyData[] = [
  { day: 'Mon', hours: 7, target: 8 },
  { day: 'Tue', hours: 8, target: 8 },
  { day: 'Wed', hours: 6, target: 8 },
  { day: 'Thu', hours: 9, target: 8 },
  { day: 'Fri', hours: 7, target: 8 },
  { day: 'Sat', hours: 5, target: 6 },
  { day: 'Sun', hours: 3, target: 4 }
];

export const hourlyFocus = [
  { hour: '6AM', focus: 85 },
  { hour: '8AM', focus: 90 },
  { hour: '10AM', focus: 95 },
  { hour: '12PM', focus: 70 },
  { hour: '2PM', focus: 75 },
  { hour: '4PM', focus: 55 },
  { hour: '6PM', focus: 60 },
  { hour: '8PM', focus: 40 }
];

export const challenges: Challenge[] = [
  { 
    id: '1', 
    name: '7-Day Consistency Challenge', 
    participants: 89, 
    daysLeft: 3, 
    progress: 5, 
    total: 7,
    reward: 200
  },
  { 
    id: '2', 
    name: 'Weekend Warrior', 
    participants: 56, 
    daysLeft: 2, 
    progress: 8, 
    total: 15,
    reward: 500
  }
];

export const studyBuddies: StudyBuddy[] = [
  { name: 'Priya', activity: 'Physics', duration: '45 mins', status: 'online' },
  { name: 'Arjun', activity: 'Math', duration: '1h 20m', status: 'online' },
  { name: 'Sneha', activity: 'Break', duration: '10 mins', status: 'break' }
];

export const reflections: Reflection[] = [
  { date: 'Dec 27', mood: 'great', note: 'Understood calculus finally!' },
  { date: 'Dec 26', mood: 'okay', note: 'Distracted today' },
  { date: 'Dec 25', mood: 'tired', note: 'Feeling burnout' }
];

export const userProfile = {
  name: 'Rahul Kumar',
  email: 'rahul@example.com',
  avatar: 'RK',
  streak: 12,
  points: 1250,
  level: 7,
  levelTitle: 'Focus Master',
  levelProgress: 45,
  totalFocusTime: 240,
  bestWeek: 56,
  longestStreak: 28,
  goalsCompleted: 3,
  pomodoroSessions: 47,
  communityRank: 3,
  totalMembers: 127
};
