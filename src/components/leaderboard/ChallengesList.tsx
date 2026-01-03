import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Flame, Trophy, Users } from 'lucide-react';
import type { Challenge } from '@/types/dashboard';

interface ChallengesListProps {
  challenges: Challenge[];
}

export function ChallengesList({ challenges }: ChallengesListProps) {
  return (
    <div className="glass-card rounded-2xl overflow-hidden">
      <div className="p-5 border-b border-border/30">
        <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
          🎯 Active Challenges
        </h3>
      </div>
      <div className="p-4 space-y-3">
        {challenges.map((challenge) => (
          <div 
            key={challenge.id}
            className="p-4 rounded-xl glass-subtle border border-foreground/5 hover:border-foreground/10 transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <h4 className="font-medium text-foreground flex items-center gap-2 text-sm">
                  <Flame className="h-4 w-4 text-orange-400" />
                  {challenge.name}
                </h4>
                <div className="flex items-center gap-3 text-xs text-muted-foreground mt-1">
                  <span className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    {challenge.participants}
                  </span>
                  <span>•</span>
                  <span>{challenge.daysLeft} days left</span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-xs font-semibold text-foreground flex items-center gap-1">
                  <Trophy className="h-3 w-3" />
                  {challenge.reward} 🪙
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-muted-foreground">Progress</span>
                <span className="font-medium text-foreground">
                  {challenge.progress}/{challenge.total} ✓
                </span>
              </div>
              <div className="h-1.5 rounded-full bg-muted/30 overflow-hidden">
                <div 
                  className="h-full rounded-full bg-foreground/70 transition-all duration-500"
                  style={{ width: `${(challenge.progress / challenge.total) * 100}%` }}
                />
              </div>
            </div>

            <Button className="w-full mt-3 glass-subtle hover:bg-foreground/10 border-0 text-sm" size="sm" variant="ghost">
              Continue Challenge
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}