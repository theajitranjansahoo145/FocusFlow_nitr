import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  Settings, 
  Bell, 
  Clock, 
  Shield, 
  Users, 
  MessageCircle, 
  Trophy,
  FileText,
  Download,
  LogOut,
  ChevronRight,
  Flame
} from 'lucide-react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { AchievementsList } from '@/components/profile/AchievementsList';
import { UserStats } from '@/components/profile/UserStats';
import { achievements, userProfile } from '@/data/mockData';

const Profile = () => {
  const settingsItems = [
    { icon: Bell, label: 'Notifications & Reminders' },
    { icon: Clock, label: 'Break Schedule' },
    { icon: Shield, label: 'Focus Modes' },
    { icon: Settings, label: 'Privacy & Data' },
    { icon: Users, label: 'Parent/Mentor Access', isNew: true },
    { icon: MessageCircle, label: 'Study Buddy Settings', isNew: true },
    { icon: Trophy, label: 'Leaderboard Privacy', isNew: true },
    { icon: FileText, label: 'Export Reports', isNew: true },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Profile Header */}
        <div className="glass-card rounded-2xl p-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            {/* Avatar */}
            <div className="relative">
              <div className="h-24 w-24 rounded-2xl glass-subtle border border-foreground/10 flex items-center justify-center text-foreground text-3xl font-bold">
                {userProfile.avatar}
              </div>
              <div className="absolute -bottom-2 -right-2 bg-foreground text-background text-xs font-bold px-2 py-1 rounded-lg">
                Lvl {userProfile.level}
              </div>
            </div>

            {/* Info */}
            <div className="flex-1 text-center sm:text-left">
              <h1 className="text-2xl font-bold text-gradient">{userProfile.name}</h1>
              <p className="text-muted-foreground text-sm">{userProfile.email}</p>
              
              <div className="flex flex-wrap justify-center sm:justify-start gap-4 mt-4">
                <div className="flex items-center gap-1 text-sm glass-subtle px-3 py-1.5 rounded-lg">
                  <Flame className="h-4 w-4 text-orange-400" />
                  <span className="font-medium text-foreground">{userProfile.streak} Day Streak</span>
                </div>
                <div className="flex items-center gap-1 text-sm glass-subtle px-3 py-1.5 rounded-lg">
                  <span className="text-lg">🪙</span>
                  <span className="font-medium text-foreground">{userProfile.points.toLocaleString()}</span>
                </div>
                <div className="flex items-center gap-1 text-sm glass-subtle px-3 py-1.5 rounded-lg">
                  <Trophy className="h-4 w-4 text-foreground" />
                  <span className="font-medium text-foreground">"{userProfile.levelTitle}"</span>
                </div>
              </div>

              {/* Level Progress */}
              <div className="mt-4 max-w-xs">
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="text-muted-foreground">Progress to Level {userProfile.level + 1}</span>
                  <span className="text-foreground font-medium">{userProfile.levelProgress}%</span>
                </div>
                <div className="h-1.5 rounded-full bg-muted/30 overflow-hidden">
                  <div 
                    className="h-full rounded-full bg-foreground/70"
                    style={{ width: `${userProfile.levelProgress}%` }}
                  />
                </div>
              </div>
            </div>

            <Button variant="ghost" size="sm" className="glass-subtle hover:bg-foreground/10">
              Edit Profile
            </Button>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            <AchievementsList achievements={achievements} />
            <UserStats stats={userProfile} />
          </div>

          {/* Right Column - Settings */}
          <div className="space-y-6">
            {/* Settings */}
            <div className="glass-card rounded-2xl overflow-hidden">
              <div className="p-5 border-b border-border/30">
                <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
                  <Settings className="h-4 w-4" />
                  Settings
                </h3>
              </div>
              <div className="divide-y divide-border/20">
                {settingsItems.map((item, index) => (
                  <button
                    key={index}
                    className="w-full flex items-center justify-between px-5 py-3 hover:bg-foreground/5 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <item.icon className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-foreground">{item.label}</span>
                      {item.isNew && (
                        <span className="text-[10px] glass-subtle text-foreground px-2 py-0.5 rounded-full font-medium">
                          NEW
                        </span>
                      )}
                    </div>
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  </button>
                ))}
              </div>
            </div>

            {/* Shared With */}
            <div className="glass-card rounded-2xl overflow-hidden">
              <div className="p-5 border-b border-border/30">
                <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
                  👨‍👩‍👧 Shared With
                  <span className="text-[10px] glass-subtle text-foreground px-2 py-0.5 rounded-full font-medium">NEW</span>
                </h3>
              </div>
              <div className="p-4 space-y-3">
                <div className="flex items-center justify-between p-3 rounded-xl glass-subtle">
                  <div>
                    <div className="text-sm font-medium text-foreground">Mom (priya@gmail.com)</div>
                    <div className="text-xs text-muted-foreground">Can see: Goals, Weekly reports</div>
                  </div>
                  <Button variant="ghost" size="sm" className="hover:bg-foreground/10">Manage</Button>
                </div>
                <Button variant="ghost" className="w-full glass-subtle hover:bg-foreground/10">
                  <Users className="h-4 w-4 mr-2" />
                  Invite Parent/Mentor
                </Button>
              </div>
            </div>

            {/* Export & Backup */}
            <div className="glass-card rounded-2xl overflow-hidden">
              <div className="p-5 border-b border-border/30">
                <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
                  📄 Export & Backup
                  <span className="text-[10px] glass-subtle text-foreground px-2 py-0.5 rounded-full font-medium">NEW</span>
                </h3>
              </div>
              <div className="p-4 space-y-3">
                <div className="text-xs text-muted-foreground">
                  Last backup: Today, 2:30 PM
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="ghost" size="sm" className="glass-subtle hover:bg-foreground/10">
                    <Download className="h-4 w-4 mr-2" />
                    Backup
                  </Button>
                  <Button variant="ghost" size="sm" className="glass-subtle hover:bg-foreground/10">
                    <FileText className="h-4 w-4 mr-2" />
                    Weekly PDF
                  </Button>
                </div>
              </div>
            </div>

            {/* Sign Out */}
            <Button variant="ghost" className="w-full glass-subtle hover:bg-red-500/10 text-red-400">
              <LogOut className="h-4 w-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Profile;
