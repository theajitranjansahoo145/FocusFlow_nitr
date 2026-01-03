import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Bell } from 'lucide-react';
import type { DaySchedule } from '@/types/dashboard';
import { cn } from '@/lib/utils';

interface SmartScheduleProps {
  schedule: DaySchedule[];
}

export function SmartSchedule({ schedule }: SmartScheduleProps) {
  const weekSchedule = [
    { time: '6:00-8:00 AM', activity: 'Physics - Mechanics', type: 'peak' as const, label: 'Peak!' },
    { time: '9:00-12:00 PM', activity: 'Math - Calculus Problems', type: 'high' as const },
    { time: '12:00-2:00 PM', activity: 'Lunch + Light Review', type: 'break' as const },
    { time: '2:00-5:00 PM', activity: 'Practice Problems', type: 'normal' as const },
  ];

  const getTypeEmoji = (type: string) => {
    switch (type) {
      case 'peak': return '🌅';
      case 'high': return '📚';
      case 'break': return '☕';
      default: return '📖';
    }
  };

  return (
    <Card className="bg-card border-border">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold">SMART SCHEDULE</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="today" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-4">
            <TabsTrigger value="today">Today</TabsTrigger>
            <TabsTrigger value="tomorrow">Tomorrow</TabsTrigger>
            <TabsTrigger value="week">This Week</TabsTrigger>
          </TabsList>

          <TabsContent value="today" className="space-y-3 mt-0">
            <p className="text-sm text-muted-foreground mb-4">
              Optimized for your peak times:
            </p>
            {schedule.map((item, index) => (
              <div
                key={index}
                className={cn(
                  'flex items-center gap-3 p-3 rounded-lg border',
                  item.active ? 'border-primary bg-primary/5' : 'border-border'
                )}
              >
                <span className="text-xl">{getTypeEmoji(item.type)}</span>
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">{item.time}</p>
                  <p className="text-sm text-muted-foreground">{item.activity}</p>
                </div>
                {item.type === 'peak' && (
                  <Button variant="ghost" size="sm">
                    <Bell className="h-4 w-4" />
                  </Button>
                )}
              </div>
            ))}
          </TabsContent>

          <TabsContent value="tomorrow" className="space-y-3 mt-0">
            <p className="text-sm font-medium text-foreground mb-2">Tuesday, Dec 28:</p>
            {weekSchedule.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-3 rounded-lg border border-border"
              >
                <span className="text-xl">{getTypeEmoji(item.type)}</span>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium text-foreground">{item.time}</p>
                    {item.label && (
                      <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                        {item.label}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{item.activity}</p>
                </div>
                <Button variant="ghost" size="sm">
                  <Bell className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="week" className="mt-0">
            <div className="text-center py-8">
              <p className="text-muted-foreground mb-4">Generate an AI-powered weekly schedule based on your patterns</p>
              <Button>Generate Weekly Schedule</Button>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
