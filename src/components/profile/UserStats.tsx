import { Clock, Calendar, Flame, Target, Timer, Users } from 'lucide-react';

interface UserStatsProps {
  stats: {
    totalFocusTime: number;
    bestWeek: number;
    longestStreak: number;
    goalsCompleted: number;
    pomodoroSessions: number;
    communityRank: number;
    totalMembers: number;
  };
}

export function UserStats({ stats }: UserStatsProps) {
  const statItems = [
    { icon: Clock, label: 'Total Focus Time', value: `${stats.totalFocusTime}h` },
    { icon: Calendar, label: 'Best Week', value: `${stats.bestWeek}h` },
    { icon: Flame, label: 'Longest Streak', value: `${stats.longestStreak} days` },
    { icon: Target, label: 'Goals Completed', value: stats.goalsCompleted.toString() },
    { icon: Timer, label: 'Pomodoro Sessions', value: stats.pomodoroSessions.toString() },
    { icon: Users, label: 'Community Rank', value: `#${stats.communityRank}` },
  ];

  return (
    <div className="glass-card rounded-2xl overflow-hidden">
      <div className="p-5 border-b border-border/30">
        <h3 className="text-sm font-semibold text-foreground">Your Statistics</h3>
      </div>
      <div className="p-4">
        <div className="grid grid-cols-2 gap-3">
          {statItems.map((item, index) => (
            <div 
              key={index}
              className="flex items-center gap-3 p-3 rounded-xl glass-subtle"
            >
              <item.icon className="h-4 w-4 text-muted-foreground" />
              <div>
                <div className="text-sm font-semibold text-foreground">{item.value}</div>
                <div className="text-[10px] text-muted-foreground">{item.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
