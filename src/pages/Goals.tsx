import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { GoalCard } from '@/components/goals/GoalCard';
import { SmartSchedule } from '@/components/goals/SmartSchedule';
import { goals, todaySchedule } from '@/data/mockData';
import { useToast } from '@/hooks/use-toast';

const Goals = () => {
  const { toast } = useToast();

  const handleQuickSession = (goalName: string) => {
    toast({
      title: "Focus Session Started! 🎯",
      description: `Starting a focus session for ${goalName}`,
    });
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">My Goals</h1>
            <p className="text-muted-foreground">Track and manage your study goals</p>
          </div>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add New
          </Button>
        </div>

        {/* Goals Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            {goals.map((goal) => (
              <GoalCard 
                key={goal.id} 
                goal={goal} 
                onQuickSession={() => handleQuickSession(goal.name)}
              />
            ))}
          </div>

          {/* Smart Schedule */}
          <div>
            <SmartSchedule schedule={todaySchedule} />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Goals;
