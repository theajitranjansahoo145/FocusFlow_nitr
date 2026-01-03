import { AlertTriangle, CheckCircle2, Clock, TrendingUp } from 'lucide-react';

interface PredictionsCardProps {
  goalProgress: number;
  burnoutRisk: number;
}

export function PredictionsCard({ goalProgress, burnoutRisk }: PredictionsCardProps) {
  const getRiskStatus = () => {
    if (burnoutRisk <= 30) return { label: 'Low', color: 'status-success', emoji: '🟢' };
    if (burnoutRisk <= 60) return { label: 'Medium', color: 'status-warning', emoji: '🟡' };
    return { label: 'High', color: 'status-danger', emoji: '🔴' };
  };

  const riskStatus = getRiskStatus();

  return (
    <div className="glass-card rounded-2xl overflow-hidden">
      <div className="p-5 border-b border-border/30">
        <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
          🔮 Predictions & Risks
        </h3>
      </div>
      <div className="p-4 space-y-6">
        {/* Goal Achievement Forecast */}
        <div>
          <h4 className="text-xs font-medium text-muted-foreground tracking-wider uppercase mb-3 flex items-center gap-2">
            <TrendingUp className="h-3 w-3" />
            Goal Achievement Forecast
          </h4>
          <div className="p-4 rounded-xl glass-subtle">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-foreground">JEE 2025</span>
              <span className="text-sm font-medium status-success">{goalProgress}% completion ✓</span>
            </div>
            <div className="h-1.5 rounded-full bg-muted/30 overflow-hidden">
              <div 
                className="h-full rounded-full bg-foreground/70"
                style={{ width: `${goalProgress}%` }}
              />
            </div>
          </div>
        </div>

        {/* Risk Assessment */}
        <div>
          <h4 className="text-xs font-medium text-muted-foreground tracking-wider uppercase mb-3 flex items-center gap-2">
            <AlertTriangle className="h-3 w-3" />
            Risk Assessment
          </h4>
          <div className="p-4 rounded-xl glass-subtle space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-foreground">Burnout Risk:</span>
              <span className={`text-sm font-medium ${riskStatus.color}`}>
                {riskStatus.emoji} {riskStatus.label}
              </span>
            </div>
            <div className="h-1.5 rounded-full bg-muted/30 overflow-hidden">
              <div 
                className="h-full rounded-full bg-yellow-500/70"
                style={{ width: `${burnoutRisk}%` }}
              />
            </div>
            
            <div className="space-y-2 pt-2">
              <h5 className="text-[10px] font-medium text-muted-foreground tracking-wider uppercase">Factors</h5>
              <ul className="text-sm space-y-1.5">
                <li className="flex items-center gap-2 status-success">
                  <CheckCircle2 className="h-3 w-3" />
                  Consistency: Excellent
                </li>
                <li className="flex items-center gap-2 status-warning">
                  <Clock className="h-3 w-3" />
                  Late study: Increasing
                </li>
                <li className="flex items-center gap-2 status-danger">
                  <AlertTriangle className="h-3 w-3" />
                  Break frequency: Low
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Recommendations */}
        <div>
          <h4 className="text-xs font-medium text-muted-foreground tracking-wider uppercase mb-3">💊 Recommendations</h4>
          <ul className="text-sm text-muted-foreground space-y-1.5">
            <li className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-foreground/50" />
              Add 1 rest day this week
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-foreground/50" />
              Limit evening study
            </li>
            <li className="flex items-center gap-2 status-success">
              <span className="h-1 w-1 rounded-full bg-green-500" />
              You're 20% above average! 🎉
            </li>
          </ul>
        </div>

        {/* Predicted Outcome */}
        <div className="p-4 rounded-xl glass-subtle border border-foreground/10">
          <h4 className="text-xs font-medium text-foreground tracking-wider uppercase mb-2">Predicted Outcome</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            "At current pace, high chance of achieving 90%+ of target by exam date. 
            Risk of burnout in Week 3-4 if no rest taken."
          </p>
        </div>
      </div>
    </div>
  );
}
