import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Play, Clock, Coffee, AlertTriangle, Flame, Target } from 'lucide-react';
import { FocusEnergyCard } from '@/components/dashboard/FocusEnergyCard';
import { ActiveSessionCard } from '@/components/dashboard/ActiveSessionCard';
import { ScheduleCard } from '@/components/dashboard/ScheduleCard';
import { RecentActivityCard } from '@/components/dashboard/RecentActivityCard';
import { StudyBuddyCard } from '@/components/dashboard/StudyBuddyCard';
import { QuickReflectionCard } from '@/components/dashboard/QuickReflectionCard';
import { SOSModeButton } from '@/components/dashboard/SOSModeButton';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { 
  goals, 
  recentSessions, 
  todaySchedule 
} from '@/data/mockData';

const Index = () => {
  const [showSession] = useState(true);
  
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'short',
    day: 'numeric'
  });

  const getGreeting = () => {
    const hour = currentDate.getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 17) return 'Good Afternoon';
    return 'Good Evening';
  };

  const totalHours = goals.reduce((sum, g) => sum + g.current, 0);
  const targetHours = goals.reduce((sum, g) => sum + g.target, 0);

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gradient">
              {getGreeting()}, Rahul! 👋
            </h1>
            <p className="text-muted-foreground text-sm">{formattedDate}</p>
          </div>
          <div className="flex items-center gap-2">
            <SOSModeButton />
            <Button className="glass-card hover:bg-foreground/10 border-0">
              <Play className="h-4 w-4 mr-2" />
              Focus Timer
            </Button>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Stats Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <FocusEnergyCard score={82} maxScore={100} />
              
              <div className="glass-card rounded-2xl p-5 hover-lift">
                <h3 className="text-xs font-medium text-muted-foreground tracking-wider uppercase mb-3">
                  Productive Today
                </h3>
                <div className="text-3xl font-bold text-foreground tracking-tight">
                  {totalHours.toFixed(1)}h
                </div>
                <div className="text-sm text-muted-foreground">
                  of {targetHours}h target
                </div>
                <div className="mt-3 h-1.5 rounded-full bg-muted/30 overflow-hidden">
                  <div 
                    className="h-full rounded-full bg-foreground/80"
                    style={{ width: '69%' }}
                  />
                </div>
              </div>

              <div className="glass-card rounded-2xl p-5 hover-lift">
                <div className="grid grid-cols-2 gap-4 h-full">
                  <div className="flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-1">
                      <Target className="h-4 w-4 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground uppercase tracking-wider">Goals</span>
                    </div>
                    <div className="text-2xl font-bold text-foreground">{goals.length}</div>
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-1">
                      <Flame className="h-4 w-4 text-orange-400" />
                      <span className="text-xs text-muted-foreground uppercase tracking-wider">Points</span>
                    </div>
                    <div className="text-2xl font-bold text-foreground">+125</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Active Session */}
            {showSession && (
              <ActiveSessionCard 
                mode="Deep Work Mode" 
                totalMinutes={45} 
                minutesLeft={18}
              />
            )}

            {/* Schedule */}
            <ScheduleCard schedule={todaySchedule} />

            {/* Recent Activity */}
            <RecentActivityCard sessions={recentSessions} />
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Study Buddy */}
            <StudyBuddyCard 
              message="Great focus! You're crushing your morning goals. Remember to hydrate! 💧"
            />

            {/* Quick Reflection */}
            <QuickReflectionCard onMoodSelect={(mood) => console.log('Mood:', mood)} />

            {/* Quick Actions */}
            <div className="glass-card rounded-2xl p-5">
              <h3 className="text-xs font-medium text-muted-foreground tracking-wider uppercase mb-4">
                Quick Actions
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { icon: Play, label: 'Focus Session' },
                  { icon: Clock, label: 'Add Time' },
                  { icon: Coffee, label: 'Take Break' },
                  { icon: AlertTriangle, label: 'Emergency' },
                ].map((action) => (
                  <button
                    key={action.label}
                    className="glass-subtle hover:bg-foreground/10 rounded-xl p-3 text-left transition-all duration-300 hover:scale-[1.02] flex items-center gap-2"
                  >
                    <action.icon className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-foreground">{action.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Goals Preview */}
            <div className="glass-card rounded-2xl p-5">
              <h3 className="text-xs font-medium text-muted-foreground tracking-wider uppercase mb-4">
                Today's Goals
              </h3>
              <div className="space-y-3">
                {goals.slice(0, 2).map((goal) => (
                  <div key={goal.id} className="flex items-center gap-3 p-2 rounded-lg hover:bg-foreground/5 transition-colors">
                    <span className="text-xl">{goal.icon}</span>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-foreground truncate">{goal.name}</div>
                      <div className="text-xs text-muted-foreground">
                        {goal.current}{goal.unit} / {goal.target}{goal.unit}
                      </div>
                    </div>
                    <span className="text-xs text-orange-400 flex items-center gap-1">
                      <Flame className="h-3 w-3" />
                      {goal.streak}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;
