import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar
} from 'recharts';
import type { WeeklyData, Reflection } from '@/types/dashboard';

interface InsightsChartsProps {
  weeklyData: WeeklyData[];
  hourlyFocus: { hour: string; focus: number }[];
  reflections: Reflection[];
  fatigue: number;
}

export function InsightsCharts({ weeklyData, hourlyFocus, reflections, fatigue }: InsightsChartsProps) {
  const getFatigueStatus = () => {
    if (fatigue <= 30) return { label: 'Low', color: 'status-success', emoji: '🟢' };
    if (fatigue <= 60) return { label: 'Medium', color: 'status-warning', emoji: '🟡' };
    if (fatigue <= 80) return { label: 'High', color: 'status-warning', emoji: '🟠' };
    return { label: 'Critical', color: 'status-danger', emoji: '🔴' };
  };

  const fatigueStatus = getFatigueStatus();

  const getMoodEmoji = (mood: string) => {
    switch (mood) {
      case 'great': return '😊';
      case 'okay': return '😐';
      case 'tired': return '😫';
      default: return '😐';
    }
  };

  return (
    <div className="glass-card rounded-2xl overflow-hidden">
      <div className="p-5 border-b border-border/30">
        <h3 className="text-sm font-semibold text-foreground">Insights & Analytics</h3>
      </div>
      <div className="p-4">
        <Tabs defaultValue="today" className="w-full">
          <TabsList className="glass-subtle p-1 rounded-xl border border-foreground/10 mb-4">
            <TabsTrigger value="today" className="rounded-lg text-xs data-[state=active]:bg-foreground data-[state=active]:text-background">
              Today
            </TabsTrigger>
            <TabsTrigger value="week" className="rounded-lg text-xs data-[state=active]:bg-foreground data-[state=active]:text-background">
              Week
            </TabsTrigger>
            <TabsTrigger value="month" className="rounded-lg text-xs data-[state=active]:bg-foreground data-[state=active]:text-background">
              Month
            </TabsTrigger>
            <TabsTrigger value="mood" className="rounded-lg text-xs data-[state=active]:bg-foreground data-[state=active]:text-background">
              Mood
            </TabsTrigger>
          </TabsList>

          <TabsContent value="today" className="space-y-6 mt-0">
            {/* Fatigue Gauge */}
            <div className="p-4 rounded-xl glass-subtle">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-foreground">🧠 Fatigue Level</span>
                <span className={`text-sm font-medium ${fatigueStatus.color}`}>
                  {fatigue}/100 {fatigueStatus.emoji} {fatigueStatus.label}
                </span>
              </div>
              <div className="h-2 rounded-full bg-muted/30 overflow-hidden">
                <div 
                  className="h-full rounded-full bg-foreground/70 transition-all duration-500"
                  style={{ width: `${fatigue}%` }}
                />
              </div>
            </div>

            {/* Focus Through Day */}
            <div>
              <h4 className="text-xs font-medium text-muted-foreground tracking-wider uppercase mb-3">Focus Through Day</h4>
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={hourlyFocus}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(220 15% 20%)" />
                    <XAxis dataKey="hour" tick={{ fill: 'hsl(220 10% 55%)', fontSize: 10 }} />
                    <YAxis tick={{ fill: 'hsl(220 10% 55%)', fontSize: 10 }} />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(220 20% 10%)', 
                        border: '1px solid hsl(220 15% 25%)',
                        borderRadius: '12px',
                        boxShadow: '0 8px 32px rgba(0,0,0,0.3)'
                      }}
                      labelStyle={{ color: 'hsl(0 0% 98%)' }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="focus" 
                      stroke="hsl(0 0% 80%)" 
                      strokeWidth={2}
                      dot={{ fill: 'hsl(0 0% 98%)', strokeWidth: 0, r: 3 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Key Insights */}
            <div className="space-y-2">
              <h4 className="text-xs font-medium text-muted-foreground tracking-wider uppercase">Key Insights</h4>
              <ul className="text-sm text-muted-foreground space-y-1.5">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                  Peak focus: 10 AM - 12 PM
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-yellow-500" />
                  Distraction at 4 PM
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                  Typing errors up after 7 PM
                </li>
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="week" className="mt-0">
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={weeklyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(220 15% 20%)" />
                  <XAxis dataKey="day" tick={{ fill: 'hsl(220 10% 55%)', fontSize: 10 }} />
                  <YAxis tick={{ fill: 'hsl(220 10% 55%)', fontSize: 10 }} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(220 20% 10%)', 
                      border: '1px solid hsl(220 15% 25%)',
                      borderRadius: '12px',
                      boxShadow: '0 8px 32px rgba(0,0,0,0.3)'
                    }}
                    labelStyle={{ color: 'hsl(0 0% 98%)' }}
                  />
                  <Bar dataKey="hours" fill="hsl(0 0% 70%)" radius={[6, 6, 0, 0]} />
                  <Bar dataKey="target" fill="hsl(0 0% 30%)" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>

          <TabsContent value="month" className="mt-0">
            <div className="text-center py-12">
              <p className="text-muted-foreground text-sm">Monthly analytics coming soon...</p>
            </div>
          </TabsContent>

          <TabsContent value="mood" className="space-y-4 mt-0">
            <h4 className="text-xs font-medium text-muted-foreground tracking-wider uppercase">📊 Mood This Week</h4>
            
            <div className="p-4 rounded-xl glass-subtle">
              <p className="text-sm text-foreground">
                📈 "You perform <span className="font-bold status-success">23% better</span> on days you rate as 'Good Mood'"
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-medium text-muted-foreground tracking-wider uppercase">Recent Reflections</h4>
              {reflections.map((reflection, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-xl glass-subtle"
                >
                  <span className="text-xs text-muted-foreground font-mono">{reflection.date}</span>
                  <span className="text-xl">{getMoodEmoji(reflection.mood)}</span>
                  <span className="text-sm text-foreground">"{reflection.note}"</span>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}