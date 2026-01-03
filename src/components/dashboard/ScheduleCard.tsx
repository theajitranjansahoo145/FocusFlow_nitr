import { Button } from '@/components/ui/button';
import { ChevronRight, CheckCircle2, Circle, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { DaySchedule } from '@/types/dashboard';

interface ScheduleCardProps {
  schedule: DaySchedule[];
}

export function ScheduleCard({ schedule }: ScheduleCardProps) {
  const getTypeIcon = (type: DaySchedule['type']) => {
    switch (type) {
      case 'peak': return '🌅';
      case 'high': return '📚';
      case 'break': return '☕';
      default: return '📖';
    }
  };

  return (
    <div className="glass-card rounded-2xl overflow-hidden">
      <div className="p-5 border-b border-border/30">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-foreground">Today's Smart Schedule</h3>
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
            View Full <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
      </div>
      <div className="p-4 space-y-2">
        {schedule.map((item, index) => (
          <div 
            key={index}
            className={cn(
              'flex items-center gap-3 p-3 rounded-xl transition-all duration-300',
              item.active && 'glass-subtle border border-foreground/10',
              item.completed && 'opacity-50'
            )}
          >
            <span className="text-xl">{getTypeIcon(item.type)}</span>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-foreground">{item.time}</span>
                {item.active && (
                  <span className="text-[10px] bg-foreground text-background px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider">
                    Now
                  </span>
                )}
              </div>
              <span className="text-sm text-muted-foreground">{item.activity}</span>
            </div>
            {item.completed ? (
              <CheckCircle2 className="h-5 w-5 status-success" />
            ) : item.active ? (
              <Clock className="h-5 w-5 text-foreground animate-glow-pulse" />
            ) : (
              <Circle className="h-5 w-5 text-muted-foreground/30" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}