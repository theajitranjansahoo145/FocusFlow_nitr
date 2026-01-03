import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Plus, Users, Search, Trophy } from 'lucide-react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { LeaderboardList } from '@/components/leaderboard/LeaderboardList';
import { ChallengesList } from '@/components/leaderboard/ChallengesList';
import { StudyBuddiesList } from '@/components/leaderboard/StudyBuddiesList';
import { leaderboard, challenges, studyBuddies } from '@/data/mockData';

const Leaderboard = () => {
  const popularGroups = [
    { name: 'JEE 2025 Aspirants', members: 127, avgHours: 38, joined: true },
    { name: 'NEET 2025 Prep', members: 94, avgHours: 42, joined: false },
    { name: 'Coding Marathon', members: 56, avgHours: 25, joined: false },
    { name: 'Book Lovers Club', members: 203, avgHours: 12, joined: false },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gradient flex items-center gap-2">
              <Trophy className="h-6 w-6" />
              Leaderboard
            </h1>
            <p className="text-muted-foreground text-sm">Compete with friends and stay motivated</p>
          </div>
        </div>

        <Tabs defaultValue="my-groups" className="w-full">
          <TabsList className="glass-subtle p-1 rounded-xl border border-foreground/10">
            <TabsTrigger value="my-groups" className="rounded-lg data-[state=active]:bg-foreground data-[state=active]:text-background">
              My Groups
            </TabsTrigger>
            <TabsTrigger value="discover" className="rounded-lg data-[state=active]:bg-foreground data-[state=active]:text-background">
              Discover
            </TabsTrigger>
            <TabsTrigger value="create" className="rounded-lg data-[state=active]:bg-foreground data-[state=active]:text-background">
              Create
            </TabsTrigger>
          </TabsList>

          <TabsContent value="my-groups" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Leaderboard */}
              <div className="lg:col-span-2">
                <LeaderboardList entries={leaderboard} />
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                <ChallengesList challenges={challenges} />
                <StudyBuddiesList buddies={studyBuddies} />

                {/* Group Stats */}
                <div className="glass-card rounded-2xl overflow-hidden">
                  <div className="p-5 border-b border-border/30">
                    <h3 className="text-sm font-semibold text-foreground">📊 Group Stats</h3>
                  </div>
                  <div className="p-4 space-y-3">
                    <div className="flex items-center justify-between p-2">
                      <span className="text-sm text-muted-foreground">Avg focus time:</span>
                      <span className="text-sm font-medium text-foreground">38h</span>
                    </div>
                    <div className="flex items-center justify-between p-2 glass-subtle rounded-lg">
                      <span className="text-sm text-muted-foreground">You:</span>
                      <span className="text-sm font-medium status-success">45h (+18%) 🎉</span>
                    </div>
                    <div className="flex items-center justify-between p-2">
                      <span className="text-sm text-muted-foreground">Top performer:</span>
                      <span className="text-sm font-medium text-foreground">52h</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="discover" className="mt-6">
            <div className="glass-card rounded-2xl overflow-hidden">
              <div className="p-5 border-b border-border/30">
                <h3 className="font-semibold text-foreground flex items-center gap-2">
                  <Search className="h-4 w-4" />
                  Discover Study Groups
                </h3>
              </div>
              <div className="p-4 space-y-3">
                {popularGroups.map((group, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-between p-4 rounded-xl glass-subtle border border-foreground/5"
                  >
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-xl glass-subtle border border-foreground/10 flex items-center justify-center">
                        <Users className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">{group.name}</h4>
                        <p className="text-xs text-muted-foreground">
                          {group.members} members • Avg: {group.avgHours}h/week
                        </p>
                      </div>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className={group.joined ? 'glass-subtle' : 'bg-foreground text-background hover:bg-foreground/90'}
                    >
                      {group.joined ? 'Joined ✓' : 'Join Group'}
                    </Button>
                  </div>
                ))}

                <div className="pt-4">
                  <h4 className="text-xs font-medium text-muted-foreground tracking-wider uppercase mb-3">Categories</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Exam Prep', 'Skills', 'Hobbies', 'Fitness', 'Languages'].map((cat) => (
                      <Badge key={cat} variant="outline" className="glass-subtle border-foreground/10 cursor-pointer hover:bg-foreground/10">
                        {cat}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="create" className="mt-6">
            <div className="glass-card rounded-2xl p-12 text-center">
              <div className="mx-auto h-16 w-16 rounded-2xl glass-subtle border border-foreground/10 flex items-center justify-center mb-4">
                <Plus className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Create a Study Group</h3>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto text-sm">
                Start your own community of learners. Invite friends and track progress together.
              </p>
              <Button className="bg-foreground text-background hover:bg-foreground/90">
                <Plus className="h-4 w-4 mr-2" />
                Create New Group
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Leaderboard;
