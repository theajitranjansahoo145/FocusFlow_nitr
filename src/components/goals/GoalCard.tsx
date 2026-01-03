import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Flame, Trophy, ChevronRight, Play } from 'lucide-react';
import type { Goal } from '@/types/dashboard';

interface GoalCardProps {
  goal: Goal;
  onViewDetails?: () => void;
  onQuickSession?: () => void;
}

export function GoalCard({ goal, onViewDetails, onQuickSession }: GoalCardProps) {
  const progress = (goal.current / goal.target) * 100;

  return (
    <Card className="bg-card border-border hover:border-primary/50 transition-colors">
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            <span className="text-2xl">{goal.icon}</span>
            <div>
              <h3 className="font-semibold text-foreground">{goal.name}</h3>
              <span className="text-xs text-muted-foreground">{goal.category}</span>
            </div>
          </div>
        </div>

        <div className="mb-3">
          <div className="flex items-center justify-between text-sm mb-1">
            <span className="text-muted-foreground">Progress</span>
            <span className="font-medium text-foreground">
              {goal.current}{goal.unit} / {goal.target}{goal.unit}
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <div className="flex items-center justify-between text-sm mb-4">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-muted-foreground">
              <Flame className="h-4 w-4 text-orange-500" />
              {goal.streak} day streak
            </span>
            <span className="flex items-center gap-1 text-muted-foreground">
              <Trophy className="h-4 w-4 text-primary" />
              +{goal.points} pts
            </span>
          </div>
        </div>

        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="flex-1" onClick={onViewDetails}>
            View Details
            <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
          <Button size="sm" className="flex-1" onClick={onQuickSession}>
            <Play className="h-4 w-4 mr-1" />
            Quick Session
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
