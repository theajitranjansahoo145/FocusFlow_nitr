import { Button } from '@/components/ui/button';
import { Mic } from 'lucide-react';

interface QuickReflectionCardProps {
  onMoodSelect: (mood: 'great' | 'okay' | 'tired') => void;
}

export function QuickReflectionCard({ onMoodSelect }: QuickReflectionCardProps) {
  return (
    <div className="glass-card rounded-2xl p-5">
      <h3 className="text-xs font-medium text-muted-foreground tracking-wider uppercase mb-4">
        How's your study going?
      </h3>
      <div className="flex gap-2 mb-4">
        {[
          { mood: 'great' as const, emoji: '😊', label: 'Great' },
          { mood: 'okay' as const, emoji: '😐', label: 'Okay' },
          { mood: 'tired' as const, emoji: '😫', label: 'Tired' },
        ].map((item) => (
          <button
            key={item.mood}
            onClick={() => onMoodSelect(item.mood)}
            className="flex-1 glass-subtle hover:bg-foreground/10 rounded-xl py-3 px-2 text-center transition-all duration-300 hover:scale-105"
          >
            <span className="text-xl block mb-1">{item.emoji}</span>
            <span className="text-xs text-muted-foreground">{item.label}</span>
          </button>
        ))}
      </div>
      <Button 
        variant="ghost" 
        size="sm" 
        className="w-full glass-subtle hover:bg-foreground/10"
      >
        <Mic className="h-4 w-4 mr-2" />
        Record Voice Note
      </Button>
    </div>
  );
}