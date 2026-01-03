import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { StudyBuddy } from '@/types/dashboard';

interface StudyBuddiesListProps {
  buddies: StudyBuddy[];
}

export function StudyBuddiesList({ buddies }: StudyBuddiesListProps) {
  const getStatusColor = (status: StudyBuddy['status']) => {
    switch (status) {
      case 'online': return 'bg-green-500';
      case 'break': return 'bg-yellow-500';
      case 'offline': return 'bg-gray-500';
    }
  };

  const getStatusLabel = (status: StudyBuddy['status']) => {
    switch (status) {
      case 'online': return 'studying now';
      case 'break': return 'on break';
      case 'offline': return 'offline';
    }
  };

  return (
    <div className="glass-card rounded-2xl overflow-hidden">
      <div className="p-5 border-b border-border/30">
        <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
          👥 Study Buddies Online
        </h3>
      </div>
      <div className="p-4 space-y-2">
        {buddies.map((buddy, index) => (
          <div 
            key={index}
            className="flex items-center gap-3 p-3 rounded-xl glass-subtle border border-foreground/5"
          >
            <div className="relative">
              <div className="h-10 w-10 rounded-xl glass-subtle border border-foreground/10 flex items-center justify-center text-foreground font-semibold text-sm">
                {buddy.name[0]}
              </div>
              <div className={cn(
                'absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-background',
                getStatusColor(buddy.status)
              )} />
            </div>
            
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="font-medium text-foreground text-sm">{buddy.name}</span>
                <span className="text-[10px] text-muted-foreground">{getStatusLabel(buddy.status)}</span>
              </div>
              <span className="text-xs text-muted-foreground">
                {buddy.activity} • {buddy.duration}
              </span>
            </div>
          </div>
        ))}

        <Button variant="ghost" className="w-full glass-subtle hover:bg-foreground/10 mt-2">
          <MessageCircle className="h-4 w-4 mr-2" />
          Study Together Chat
        </Button>
      </div>
    </div>
  );
}
