import { Button } from '@/components/ui/button';
import { MessageCircle, ChevronRight, Sparkles } from 'lucide-react';

interface StudyBuddyCardProps {
  message: string;
}

export function StudyBuddyCard({ message }: StudyBuddyCardProps) {
  return (
    <div className="glass-card rounded-2xl p-5 hover-lift relative overflow-hidden">
      {/* Subtle gradient accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-foreground/5 to-transparent rounded-full blur-2xl" />
      
      <div className="relative">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl glass-subtle border border-foreground/10">
            <Sparkles className="h-5 w-5 text-foreground" />
          </div>
          <div className="flex-1">
            <h3 className="text-sm font-semibold text-foreground mb-1">Study Buddy Says:</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{message}</p>
          </div>
        </div>
        <Button 
          variant="ghost" 
          size="sm" 
          className="mt-4 w-full justify-center glass-subtle hover:bg-foreground/10 text-foreground"
        >
          <MessageCircle className="h-4 w-4 mr-2" />
          Chat with Study Buddy <ChevronRight className="h-4 w-4 ml-1" />
        </Button>
      </div>
    </div>
  );
}