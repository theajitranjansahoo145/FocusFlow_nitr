import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

interface ProgressCardProps {
  label: string;
  current: number;
  target: number;
  unit: string;
}

export function ProgressCard({ label, current, target, unit }: ProgressCardProps) {
  const percentage = Math.min((current / target) * 100, 100);

  return (
    <Card className="bg-card border-border">
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-foreground">{label}</span>
          <span className="text-sm text-muted-foreground">
            {current}{unit} / {target}{unit}
          </span>
        </div>
        <Progress value={percentage} className="h-2" />
        <span className="text-xs text-muted-foreground mt-1 inline-block">
          {Math.round(percentage)}%
        </span>
      </CardContent>
    </Card>
  );
}