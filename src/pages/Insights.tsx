import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { InsightsCharts } from '@/components/insights/InsightsCharts';
import { PredictionsCard } from '@/components/insights/PredictionsCard';
import { weeklyData, hourlyFocus, reflections } from '@/data/mockData';
import { BarChart3 } from 'lucide-react';

const Insights = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-gradient flex items-center gap-2">
            <BarChart3 className="h-6 w-6" />
            Insights & Analytics
          </h1>
          <p className="text-muted-foreground text-sm">Understand your patterns and optimize your study</p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <InsightsCharts 
            weeklyData={weeklyData}
            hourlyFocus={hourlyFocus}
            reflections={reflections}
            fatigue={35}
          />
          <PredictionsCard 
            goalProgress={85}
            burnoutRisk={40}
          />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Insights;
