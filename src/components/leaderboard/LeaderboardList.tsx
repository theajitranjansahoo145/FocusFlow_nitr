import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowUp, ArrowDown, Share2, Eye, Trophy, Users } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { LeaderboardEntry } from '@/types/dashboard';

interface LeaderboardListProps {
  entries: LeaderboardEntry[];
}

export function LeaderboardList({ entries }: LeaderboardListProps) {
  const getRankBadge = (rank: number) => {
    switch (rank) {
      case 1: return '🥇';
      case 2: return '🥈';
      case 3: return '🥉';
      default: return null;
    }
  };

  return (
    <div className="glass-card rounded-2xl overflow-hidden">
      <div className="p-5 border-b border-border/30">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-foreground flex items-center gap-2">
              <Trophy className="h-4 w-4" />
              JEE 2025 ASPIRANTS
            </h3>
            <span className="text-sm text-muted-foreground flex items-center gap-2 mt-1">
              <Users className="h-3 w-3" />
              127 members • This Week
            </span>
          </div>
          <Badge variant="outline" className="glass-subtle border-foreground/10">Active</Badge>
        </div>
      </div>

      <div className="divide-y divide-border/20">
        {entries.map((entry) => (
          <div 
            key={entry.rank}
            className={cn(
              'flex items-center gap-4 p-4 transition-all duration-300 hover:bg-foreground/5',
              entry.isCurrentUser && 'glass-subtle'
            )}
          >
            <span className="text-lg font-bold text-foreground w-8">
              {getRankBadge(entry.rank) || `#${entry.rank}`}
            </span>
            
            <div className="flex h-10 w-10 items-center justify-center rounded-xl glass-subtle border border-foreground/10 text-foreground font-semibold text-sm">
              {entry.avatar}
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className={cn(
                  'font-medium',
                  entry.isCurrentUser ? 'text-foreground' : 'text-foreground/80'
                )}>
                  {entry.name}
                </span>
                {entry.isCurrentUser && (
                  <Badge variant="outline" className="text-[10px] glass-subtle border-foreground/10">You</Badge>
                )}
              </div>
              {entry.isCurrentUser && (
                <span className="text-xs text-muted-foreground">
                  Keep going! +3h to #2 💪
                </span>
              )}
            </div>

            <div className="text-right">
              <span className="font-bold text-foreground">{entry.hours}h</span>
              <div className="flex items-center justify-end gap-1 text-xs">
                {entry.change > 0 ? (
                  <ArrowUp className="h-3 w-3 status-success" />
                ) : entry.change < 0 ? (
                  <ArrowDown className="h-3 w-3 status-danger" />
                ) : null}
                {entry.change !== 0 && (
                  <span className={entry.change > 0 ? 'status-success' : 'status-danger'}>
                    {Math.abs(entry.change)}
                  </span>
                )}
              </div>
            </div>

            <Button variant="ghost" size="sm" className="hover:bg-foreground/10">
              <Eye className="h-4 w-4 text-muted-foreground" />
            </Button>
          </div>
        ))}
      </div>

      {/* Current User Stats */}
      <div className="p-5 border-t border-border/30 glass-subtle">
        <h4 className="text-xs font-medium text-muted-foreground tracking-wider uppercase mb-4">Your Stats</h4>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-foreground">#3</div>
            <div className="text-xs text-muted-foreground">of 127</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-foreground">Top 2%</div>
            <div className="text-xs text-muted-foreground">Percentile</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-foreground">1,250</div>
            <div className="text-xs text-muted-foreground">Points 🪙</div>
          </div>
        </div>
        
        <Button className="w-full mt-4 glass-subtle hover:bg-foreground/10 border-0" variant="outline">
          <Share2 className="h-4 w-4 mr-2" />
          Share Progress
        </Button>
      </div>
    </div>
  );
}
