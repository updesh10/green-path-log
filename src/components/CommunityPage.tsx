import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Trophy, 
  TrendingUp, 
  Users, 
  Leaf, 
  Droplets, 
  Recycle, 
  Zap,
  Calendar,
  Target,
  Award
} from "lucide-react";

const CommunityPage = () => {
  const leaderboard = [
    { rank: 1, name: "Sarah Chen", xp: 15420, level: 12, badge: "Eco Master", streak: 45 },
    { rank: 2, name: "Mike Rodriguez", xp: 14890, level: 12, badge: "Green Guardian", streak: 38 },
    { rank: 3, name: "Emma Wilson", xp: 14230, level: 11, badge: "Earth Protector", streak: 42 },
    { rank: 4, name: "James Park", xp: 13850, level: 11, badge: "Climate Champion", streak: 35 },
    { rank: 5, name: "Lisa Zhang", xp: 13440, level: 10, badge: "Sustainability Star", streak: 29 }
  ];

  const communityStats = {
    totalUsers: 10847,
    carbonSaved: 2847.5,
    waterSaved: 189420,
    milesWalked: 45890,
    plasticRecycled: 3420.8
  };

  const globalChallenges = [
    {
      name: "Global Plastic-Free July",
      description: "Join millions worldwide in reducing plastic waste",
      participants: 125000,
      progress: 68,
      timeLeft: "12 days",
      reward: "500 XP + Special Badge",
      category: "Recycling"
    },
    {
      name: "International Bike Week",
      description: "Commit to sustainable transportation",
      participants: 89000,
      progress: 45,
      timeLeft: "5 days",
      reward: "300 XP + Green Commuter Badge",
      category: "Transportation"
    },
    {
      name: "Earth Hour Energy Challenge",
      description: "Reduce energy consumption worldwide",
      participants: 156000,
      progress: 82,
      timeLeft: "3 days",
      reward: "400 XP + Energy Saver Pro",
      category: "Energy"
    }
  ];

  const weeklyImpact = [
    { category: "CO₂ Saved", value: "847.2", unit: "tons", icon: Leaf, color: "text-leaf" },
    { category: "Water Conserved", value: "23.4K", unit: "liters", icon: Droplets, color: "text-water" },
    { category: "Plastic Recycled", value: "1.2", unit: "tons", icon: Recycle, color: "text-earth" },
    { category: "Clean Energy", value: "45.8", unit: "MWh", icon: Zap, color: "text-energy" }
  ];

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">
            Community <span className="gradient-nature bg-clip-text text-transparent">Impact</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Together, we're creating a massive positive impact on our planet. See how our community is leading the change.
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid md:grid-cols-4 gap-6">
          {weeklyImpact.map((stat, index) => (
            <Card key={index} className="stat-card">
              <div className="p-6 text-center space-y-3">
                <div className={`w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div>
                  <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.unit}</div>
                </div>
                <div className="text-xs text-muted-foreground font-medium">{stat.category}</div>
              </div>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="leaderboard" className="space-y-6">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
            <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
            <TabsTrigger value="challenges">Challenges</TabsTrigger>
            <TabsTrigger value="impact">Global Impact</TabsTrigger>
          </TabsList>

          <TabsContent value="leaderboard" className="space-y-6">
            <Card className="card-eco">
              <div className="p-6">
                <div className="flex items-center gap-2 mb-6">
                  <Trophy className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-bold">Top Eco-Warriors</h2>
                  <Badge className="badge-glow ml-auto">This Month</Badge>
                </div>

                <div className="space-y-4">
                  {leaderboard.map((user, index) => (
                    <div key={user.rank} className={`flex items-center gap-4 p-4 rounded-lg transition-all duration-300 hover:bg-muted/50 ${
                      index < 3 ? 'bg-gradient-to-r from-primary/10 to-transparent border border-primary/20' : 'bg-muted/30'
                    }`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                        index === 0 ? 'bg-yellow-500 text-white' :
                        index === 1 ? 'bg-gray-400 text-white' :
                        index === 2 ? 'bg-amber-600 text-white' :
                        'bg-muted text-muted-foreground'
                      }`}>
                        {user.rank}
                      </div>

                      <Avatar className="w-12 h-12">
                        <AvatarImage src={`/placeholder-avatar-${user.rank}.jpg`} />
                        <AvatarFallback className="bg-primary/20 text-primary">
                          {user.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>

                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold">{user.name}</span>
                          <Badge variant="secondary" className="text-xs">Level {user.level}</Badge>
                        </div>
                        <div className="text-sm text-muted-foreground">{user.badge}</div>
                      </div>

                      <div className="text-right">
                        <div className="font-bold text-primary">{user.xp.toLocaleString()} XP</div>
                        <div className="text-sm text-muted-foreground">🔥 {user.streak} streak</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-border">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>Your current rank: #847</span>
                    <Button variant="outline" size="sm">View Full Leaderboard</Button>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="challenges" className="space-y-6">
            <div className="grid gap-6">
              {globalChallenges.map((challenge, index) => (
                <Card key={index} className="card-eco hover:shadow-lg transition-all duration-300">
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <h3 className="text-xl font-bold">{challenge.name}</h3>
                          <Badge variant="outline">{challenge.category}</Badge>
                        </div>
                        <p className="text-muted-foreground">{challenge.description}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-muted-foreground">Ends in</div>
                        <div className="font-semibold text-primary">{challenge.timeLeft}</div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span>{challenge.participants.toLocaleString()} participants</span>
                        <span>{challenge.progress}% complete</span>
                      </div>
                      <Progress value={challenge.progress} className="h-2" />
                      
                      <div className="flex items-center justify-between mt-4">
                        <div className="text-sm">
                          <span className="text-muted-foreground">Reward: </span>
                          <span className="font-medium text-primary">{challenge.reward}</span>
                        </div>
                        <Button className="btn-eco">
                          Join Challenge
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="impact" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card className="card-eco">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    Community Growth
                  </h3>
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-primary">{communityStats.totalUsers.toLocaleString()}</div>
                      <div className="text-muted-foreground">Active Eco-Warriors</div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-success">+1,247</div>
                        <div className="text-sm text-muted-foreground">This Month</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-success">+89</div>
                        <div className="text-sm text-muted-foreground">Today</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="card-eco">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <Target className="w-5 h-5 text-primary" />
                    Cumulative Impact
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">CO₂ Reduced</span>
                      <span className="font-bold text-leaf">{communityStats.carbonSaved}T</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Water Saved</span>
                      <span className="font-bold text-water">{communityStats.waterSaved.toLocaleString()}L</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Green Miles</span>
                      <span className="font-bold text-energy">{communityStats.milesWalked.toLocaleString()} mi</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Plastic Recycled</span>
                      <span className="font-bold text-earth">{communityStats.plasticRecycled}T</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="card-eco">
              <div className="p-6 text-center space-y-4">
                <h3 className="text-2xl font-bold">
                  Together, We're Making History
                </h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Our community's collective efforts are equivalent to removing 1,200 cars from the road for an entire year, 
                  or saving enough water to supply a small town for 3 months.
                </p>
                <Button className="btn-eco gap-2">
                  <Users className="w-4 h-4" />
                  Invite Friends
                </Button>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CommunityPage;