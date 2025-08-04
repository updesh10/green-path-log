import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Award, 
  Trophy, 
  Star, 
  Crown, 
  Shield, 
  Zap,
  Leaf,
  Recycle,
  Bike,
  Droplets,
  Target,
  TrendingUp,
  Lock
} from "lucide-react";

const RewardsPage = () => {
  const userStats = {
    level: 7,
    xp: 2850,
    nextLevelXp: 3000,
    totalBadges: 12,
    streakDays: 12
  };

  const unlockedBadges = [
    {
      id: 1,
      name: "Green Commuter",
      description: "Bike or walk to work 10 times",
      icon: Bike,
      color: "text-energy",
      bgColor: "bg-energy/20",
      date: "2024-01-15",
      rarity: "Common"
    },
    {
      id: 2,
      name: "Recycling Champion",
      description: "Recycle 50kg of materials",
      icon: Recycle,
      color: "text-earth",
      bgColor: "bg-earth/20",
      date: "2024-01-10",
      rarity: "Rare"
    },
    {
      id: 3,
      name: "Energy Saver",
      description: "Save 100 hours of energy",
      icon: Zap,
      color: "text-primary",
      bgColor: "bg-primary/20",
      date: "2024-01-08",
      rarity: "Common"
    },
    {
      id: 4,
      name: "Water Guardian",
      description: "Conserve 1000L of water",
      icon: Droplets,
      color: "text-water",
      bgColor: "bg-water/20",
      date: "2024-01-05",
      rarity: "Epic"
    },
    {
      id: 5,
      name: "Streak Master",
      description: "Maintain a 7-day streak",
      icon: Target,
      color: "text-success",
      bgColor: "bg-success/20",
      date: "2024-01-20",
      rarity: "Rare"
    },
    {
      id: 6,
      name: "Eco Warrior",
      description: "Reach Level 5",
      icon: Shield,
      color: "text-primary",
      bgColor: "bg-primary/20",
      date: "2024-01-12",
      rarity: "Legendary"
    }
  ];

  const progressBadges = [
    {
      name: "Community Leader",
      description: "Invite 5 friends to EcoTracker",
      icon: Crown,
      progress: 2,
      target: 5,
      rarity: "Epic"
    },
    {
      name: "Century Rider",
      description: "Bike 100km in green transport",
      icon: Bike,
      progress: 67,
      target: 100,
      rarity: "Rare"
    },
    {
      name: "Plastic-Free Hero",
      description: "Complete 30 plastic-free days",
      icon: Leaf,
      progress: 18,
      target: 30,
      rarity: "Legendary"
    },
    {
      name: "Impact Multiplier",
      description: "Reach Level 10",
      icon: TrendingUp,
      progress: 7,
      target: 10,
      rarity: "Mythic"
    }
  ];

  const levels = [
    { level: 1, title: "Eco Newbie", xp: 0, color: "text-gray-500" },
    { level: 2, title: "Green Starter", xp: 100, color: "text-green-500" },
    { level: 3, title: "Earth Friend", xp: 250, color: "text-green-600" },
    { level: 4, title: "Eco Enthusiast", xp: 500, color: "text-blue-500" },
    { level: 5, title: "Green Guardian", xp: 1000, color: "text-blue-600" },
    { level: 6, title: "Planet Protector", xp: 1750, color: "text-purple-500" },
    { level: 7, title: "Eco Warrior", xp: 2500, color: "text-purple-600" },
    { level: 8, title: "Sustainability Star", xp: 3500, color: "text-yellow-500" },
    { level: 9, title: "Climate Champion", xp: 5000, color: "text-orange-500" },
    { level: 10, title: "Earth Master", xp: 7500, color: "text-red-500" }
  ];

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "Common": return "text-gray-600 bg-gray-100";
      case "Rare": return "text-blue-600 bg-blue-100";
      case "Epic": return "text-purple-600 bg-purple-100";
      case "Legendary": return "text-yellow-600 bg-yellow-100";
      case "Mythic": return "text-red-600 bg-red-100";
      default: return "text-gray-600 bg-gray-100";
    }
  };

  return (
    <div>
      <Navigation />
      <div className="min-h-screen bg-background p-6">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">
              Rewards & <span className="gradient-eco bg-clip-text text-transparent">Achievements</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Celebrate your environmental impact with badges, levels, and exclusive rewards
            </p>
          </div>

          {/* Level Progress */}
          <Card className="card-eco">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold flex items-center gap-2">
                  <Crown className="w-6 h-6 text-primary" />
                  Level Progress
                </h2>
                <Badge className="badge-glow text-lg px-4 py-2">
                  Level {userStats.level}
                </Badge>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold">Eco Warrior</h3>
                    <p className="text-muted-foreground">
                      {userStats.xp} / {userStats.nextLevelXp} XP to next level
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground">Next Level</div>
                    <div className="font-semibold">Sustainability Star</div>
                  </div>
                </div>
                
                <Progress value={(userStats.xp / userStats.nextLevelXp) * 100} className="h-4" />
                
                <div className="text-center text-sm text-muted-foreground">
                  {userStats.nextLevelXp - userStats.xp} XP needed to reach Level {userStats.level + 1}
                </div>
              </div>
            </div>
          </Card>

          <Tabs defaultValue="badges" className="space-y-6">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
              <TabsTrigger value="badges">My Badges</TabsTrigger>
              <TabsTrigger value="progress">In Progress</TabsTrigger>
              <TabsTrigger value="levels">Level System</TabsTrigger>
            </TabsList>

            <TabsContent value="badges" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {unlockedBadges.map((badge) => (
                  <Card key={badge.id} className="card-eco hover:shadow-lg transition-all duration-300 group">
                    <div className="p-6 text-center space-y-4">
                      <div className={`w-16 h-16 ${badge.bgColor} rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform`}>
                        <badge.icon className={`w-8 h-8 ${badge.color}`} />
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center justify-center gap-2">
                          <h3 className="font-bold">{badge.name}</h3>
                          <Badge className={`text-xs ${getRarityColor(badge.rarity)}`}>
                            {badge.rarity}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{badge.description}</p>
                        <p className="text-xs text-muted-foreground">Earned on {badge.date}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="progress" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {progressBadges.map((badge, index) => (
                  <Card key={index} className="card-eco">
                    <div className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                          <Lock className="w-6 h-6 text-muted-foreground" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-bold">{badge.name}</h3>
                            <Badge className={`text-xs ${getRarityColor(badge.rarity)}`}>
                              {badge.rarity}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{badge.description}</p>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Progress</span>
                          <span>{badge.progress} / {badge.target}</span>
                        </div>
                        <Progress value={(badge.progress / badge.target) * 100} className="h-2" />
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="levels" className="space-y-6">
              <div className="grid gap-4">
                {levels.map((levelData, index) => (
                  <Card 
                    key={levelData.level} 
                    className={`p-4 transition-all duration-300 ${
                      levelData.level === userStats.level 
                        ? 'ring-2 ring-primary bg-primary/5' 
                        : levelData.level < userStats.level 
                          ? 'bg-success/5 border-success/20' 
                          : 'opacity-60'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold ${
                        levelData.level <= userStats.level ? 'bg-gradient-to-br from-primary to-primary-glow' : 'bg-muted'
                      }`}>
                        {levelData.level}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h3 className="font-bold">{levelData.title}</h3>
                          {levelData.level === userStats.level && (
                            <Badge className="badge-glow">Current</Badge>
                          )}
                          {levelData.level < userStats.level && (
                            <Badge className="bg-success/20 text-success border-success/30">Unlocked</Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {levelData.xp} XP required
                        </p>
                      </div>
                      
                      {levelData.level <= userStats.level && (
                        <Trophy className="w-6 h-6 text-primary" />
                      )}
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* Stats Summary */}
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="stat-card text-center p-6">
              <Award className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold">{userStats.totalBadges}</div>
              <div className="text-sm text-muted-foreground">Badges Earned</div>
            </Card>
            
            <Card className="stat-card text-center p-6">
              <Target className="w-8 h-8 text-success mx-auto mb-2" />
              <div className="text-2xl font-bold">{userStats.streakDays}</div>
              <div className="text-sm text-muted-foreground">Day Streak</div>
            </Card>
            
            <Card className="stat-card text-center p-6">
              <TrendingUp className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold">{userStats.level}</div>
              <div className="text-sm text-muted-foreground">Current Level</div>
            </Card>
            
            <Card className="stat-card text-center p-6">
              <Star className="w-8 h-8 text-energy mx-auto mb-2" />
              <div className="text-2xl font-bold">{userStats.xp}</div>
              <div className="text-sm text-muted-foreground">Total XP</div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RewardsPage;