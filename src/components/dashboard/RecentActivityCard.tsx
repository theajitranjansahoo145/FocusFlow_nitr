import { cn } from '@/lib/utils';
import type { Session } from '@/types/dashboard';

interface RecentActivityCardProps {
  sessions: Session[];
}

export function RecentActivityCard({ sessions }: RecentActivityCardProps) {
  const getTypeColor = (type: Session['type']) => {
    switch (type) {
      case 'study': return 'bg-green-500';
      case 'break': return 'bg-yellow-500';
      case 'distraction': return 'bg-red-500';
    }
  };

  const formatDuration = (minutes: number) => {
    if (minutes >= 60) {
      const hours = Math.floor(minutes / 60);
      const mins = minutes % 60;
      return `${hours}h ${mins}m`;
    }
    return `${minutes}m`;
  };

  return (
    <div className="glass-card rounded-2xl overflow-hidden">
      <div className="p-5 border-b border-border/30">
        <h3 className="text-sm font-semibold text-foreground">Recent Activity</h3>
      </div>
      <div className="p-4 space-y-3">
        {sessions.map((session) => (
          <div key={session.id} className="flex items-center gap-3 p-2 rounded-lg hover:bg-foreground/5 transition-colors">
            <div className={cn('w-2 h-2 rounded-full', getTypeColor(session.type))} />
            <span className="text-sm text-muted-foreground font-mono">{session.startTime}</span>
            <span className="text-sm font-medium text-foreground flex-1">{session.app}</span>
            <span className="text-sm text-muted-foreground font-mono">
              {formatDuration(session.duration)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}