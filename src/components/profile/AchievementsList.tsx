import { Progress } from '@/components/ui/progress';
import { Lock } from 'lucide-react';
import type { Achievement } from '@/types/dashboard';

interface AchievementsListProps {
  achievements: Achievement[];
}

export function AchievementsList({ achievements }: AchievementsListProps) {
  const unlocked = achievements.filter(a => a.unlocked);
  const locked = achievements.filter(a => !a.unlocked);

  return (
    <div className="glass-card rounded-2xl overflow-hidden">
      <div className="p-5 border-b border-border/30">
        <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
          🏅 Achievements
          <span className="text-xs font-normal text-muted-foreground">
            ({unlocked.length}/{achievements.length})
          </span>
        </h3>
      </div>
      <div className="p-4 space-y-4">
        {/* Unlocked */}
        <div>
          <h4 className="text-xs font-medium text-muted-foreground tracking-wider uppercase mb-3">Unlocked</h4>
          <div className="flex flex-wrap gap-2">
            {unlocked.map((achievement) => (
              <div
                key={achievement.id}
                className="flex items-center gap-2 px-3 py-2 rounded-xl glass-subtle border border-foreground/10"
              >
                <span className="text-lg">{achievement.icon}</span>
                <span className="text-sm font-medium text-foreground">{achievement.name}</span>
                <span className="text-green-400 text-xs">✓</span>
              </div>
            ))}
          </div>
        </div>

        {/* Locked */}
        <div>
          <h4 className="text-xs font-medium text-muted-foreground tracking-wider uppercase mb-3">In Progress</h4>
          <div className="space-y-2">
            {locked.map((achievement) => (
              <div
                key={achievement.id}
                className="flex items-center gap-3 p-3 rounded-xl glass-subtle opacity-60"
              >
                <div className="relative">
                  <span className="text-lg grayscale">{achievement.icon}</span>
                  <Lock className="absolute -bottom-1 -right-1 h-3 w-3 text-muted-foreground" />
                </div>
                <div className="flex-1">
                  <span className="text-sm font-medium text-foreground">{achievement.name}</span>
                  {achievement.progress !== undefined && achievement.total !== undefined && (
                    <div className="mt-1.5">
                      <div className="h-1 rounded-full bg-muted/30 overflow-hidden">
                        <div 
                          className="h-full rounded-full bg-foreground/50"
                          style={{ width: `${(achievement.progress / achievement.total) * 100}%` }}
                        />
                      </div>
                      <span className="text-[10px] text-muted-foreground">
                        {achievement.progress}/{achievement.total}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
