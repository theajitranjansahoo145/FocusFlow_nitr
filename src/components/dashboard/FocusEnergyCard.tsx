import { Card, CardContent } from '@/components/ui/card';

interface FocusEnergyCardProps {
  score: number;
  maxScore: number;
}

export function FocusEnergyCard({ score, maxScore }: FocusEnergyCardProps) {
  const percentage = (score / maxScore) * 100;
  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  const getStatus = () => {
    if (percentage >= 70) return { color: 'hsl(142 70% 55%)', emoji: '🟢' };
    if (percentage >= 40) return { color: 'hsl(45 90% 55%)', emoji: '🟡' };
    return { color: 'hsl(0 70% 55%)', emoji: '🔴' };
  };

  const status = getStatus();

  return (
    <div className="glass-card rounded-2xl p-6 hover-lift">
      <h3 className="text-xs font-medium text-muted-foreground tracking-wider uppercase mb-4">
        Focus Energy Today
      </h3>
      <div className="flex items-center justify-center">
        <div className="relative">
          <svg className="w-32 h-32 transform -rotate-90">
            <circle
              cx="64"
              cy="64"
              r="45"
              stroke="currentColor"
              strokeWidth="6"
              fill="none"
              className="text-muted/30"
            />
            <circle
              cx="64"
              cy="64"
              r="45"
              stroke={status.color}
              strokeWidth="6"
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="transition-all duration-1000 ease-out drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-3xl font-bold text-foreground">{score}</span>
            <span className="text-sm text-muted-foreground">/{maxScore}</span>
          </div>
        </div>
      </div>
    </div>
  );
}