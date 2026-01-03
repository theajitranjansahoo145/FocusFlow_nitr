import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Clock, Target } from "lucide-react";

interface ActiveSessionCardProps {
  mode: string;
  totalMinutes: number;
  minutesLeft: number;
}

export function ActiveSessionCard({
  mode,
  totalMinutes,
  minutesLeft,
}: ActiveSessionCardProps) {
  const progress = ((totalMinutes - minutesLeft) / totalMinutes) * 100;

  return (
    <Card className="glass-card border-border/50">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Target className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-foreground">{mode}</span>
          </div>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>{minutesLeft}m left</span>
          </div>
        </div>
        <Progress value={progress} className="h-2" />
        <div className="flex justify-between text-xs text-muted-foreground mt-2">
          <span>{totalMinutes - minutesLeft}m completed</span>
          <span>{totalMinutes}m total</span>
        </div>
      </CardContent>
    </Card>
  );
}
