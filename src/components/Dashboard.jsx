import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Leaf, 
  Target, 
  TrendingUp, 
  Award, 
  Plus, 
  Recycle, 
  Bike, 
  Lightbulb,
  Droplets,
  Sun,
  Calendar,
  Users
} from "lucide-react";

const Dashboard = () => {
  // Mock user data
  const user = {
    name: "Alex Green",
    level: 7,
    xp: 2850,
    nextLevelXp: 3000,
    badges: ["Green Commuter", "Recycling Champion", "Energy Saver"],
    streak: 12
  };

  const stats = {
    carbonSaved: 245.8,
    waterSaved: 1240,
    milesWalked: 89.5,
    plasticRecycled: 15.2
  };

  const recentActions = [
    { id: 1, type: "Recycled plastic bottles", amount: "2kg", xp: 25, date: "Today", icon: Recycle },
    { id: 2, type: "Biked to work", amount: "5km", xp: 20, date: "Today", icon: Bike },
    { id: 3, type: "Used LED bulbs", amount: "3 hours", xp: 15, date: "Yesterday", icon: Lightbulb },
    { id: 4, type: "Water conservation", amount: "30L", xp: 30, date: "Yesterday", icon: Droplets }
  ];

  const challenges = [
    { name: "Zero Waste Week", progress: 65, participants: 1250, reward: "50 XP" },
    { name: "Green Commute Challenge", progress: 40, participants: 890, reward: "30 XP" },
    { name: "Energy Saver Month", progress: 85, participants: 2100, reward: "100 XP" }
  ];

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">
              Welcome back, <span className="gradient-eco bg-clip-text text-transparent">{user.name}</span>!
            </h1>
            <p className="text-muted-foreground">Ready to make a positive impact today?</p>
          </div>
          <Button className="btn-eco gap-2">
            <Plus className="w-4 h-4" />
            Log New Action
          </Button>
        </div>

        {/* Profile Summary */}
        <Card className="card-eco">
          <div className="p-6">
            <div className="flex items-center gap-6">
              <Avatar className="w-20 h-20 border-4 border-primary/20">
                <AvatarImage src="/placeholder-avatar.jpg" />
                <AvatarFallback className="bg-gradient-to-br from-primary to-primary-glow text-white text-2xl">
                  {user.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-4">
                  <div>
                    <h3 className="text-2xl font-bold">Level {user.level} Eco-Warrior</h3>
                    <p className="text-muted-foreground">{user.xp} / {user.nextLevelXp} XP</p>
                  </div>
                  <Badge className="badge-glow">
                    🔥 {user.streak} day streak
                  </Badge>
                </div>
                
                <Progress 
                  value={(user.xp / user.nextLevelXp) * 100} 
                  className="h-3"
                />
                
                <div className="flex gap-2 flex-wrap">
                  {user.badges.map((badge, index) => (
                    <Badge key={index} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      <Award className="w-3 h-3 mr-1" />
                      {badge}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6">
          <Card className="stat-card">
            <div className="p-6 text-center space-y-2">
              <div className="w-12 h-12 bg-leaf/20 rounded-full flex items-center justify-center mx-auto">
                <Leaf className="w-6 h-6 text-leaf" />
              </div>
              <div className="text-2xl font-bold text-leaf">{stats.carbonSaved}kg</div>
              <div className="text-sm text-muted-foreground">CO₂ Saved</div>
            </div>
          </Card>

          <Card className="stat-card">
            <div className="p-6 text-center space-y-2">
              <div className="w-12 h-12 bg-water/20 rounded-full flex items-center justify-center mx-auto">
                <Droplets className="w-6 h-6 text-water" />
              </div>
              <div className="text-2xl font-bold text-water">{stats.waterSaved}L</div>
              <div className="text-sm text-muted-foreground">Water Saved</div>
            </div>
          </Card>

          <Card className="stat-card">
            <div className="p-6 text-center space-y-2">
              <div className="w-12 h-12 bg-energy/20 rounded-full flex items-center justify-center mx-auto">
                <Bike className="w-6 h-6 text-energy" />
              </div>
              <div className="text-2xl font-bold text-energy">{stats.milesWalked} mi</div>
              <div className="text-sm text-muted-foreground">Green Miles</div>
            </div>
          </Card>

          <Card className="stat-card">
            <div className="p-6 text-center space-y-2">
              <div className="w-12 h-12 bg-earth/20 rounded-full flex items-center justify-center mx-auto">
                <Recycle className="w-6 h-6 text-earth" />
              </div>
              <div className="text-2xl font-bold text-earth">{stats.plasticRecycled}kg</div>
              <div className="text-sm text-muted-foreground">Recycled</div>
            </div>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Recent Actions */}
          <Card className="card-eco">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  Recent Actions
                </h3>
                <Button variant="outline" size="sm">View All</Button>
              </div>
              
              <div className="space-y-4">
                {recentActions.map((action) => (
                  <div key={action.id} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                        <action.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium">{action.type}</div>
                        <div className="text-sm text-muted-foreground">{action.amount} • {action.date}</div>
                      </div>
                    </div>
                    <Badge className="bg-success/20 text-success border-success/30">
                      +{action.xp} XP
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Active Challenges */}
          <Card className="card-eco">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  Active Challenges
                </h3>
                <Button variant="outline" size="sm">Browse More</Button>
              </div>
              
              <div className="space-y-6">
                {challenges.map((challenge, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">{challenge.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {challenge.participants} participants • Reward: {challenge.reward}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium">{challenge.progress}%</div>
                      </div>
                    </div>
                    <Progress value={challenge.progress} className="h-2" />
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="card-eco">
          <div className="p-6">
            <h3 className="text-xl font-bold mb-6">Quick Log Actions</h3>
            <div className="grid md:grid-cols-4 gap-4">
              <Button variant="outline" className="h-20 flex-col gap-2 hover:bg-primary/10 hover:border-primary">
                <Recycle className="w-6 h-6" />
                Recycling
              </Button>
              <Button variant="outline" className="h-20 flex-col gap-2 hover:bg-primary/10 hover:border-primary">
                <Bike className="w-6 h-6" />
                Transport
              </Button>
              <Button variant="outline" className="h-20 flex-col gap-2 hover:bg-primary/10 hover:border-primary">
                <Lightbulb className="w-6 h-6" />
                Energy
              </Button>
              <Button variant="outline" className="h-20 flex-col gap-2 hover:bg-primary/10 hover:border-primary">
                <Droplets className="w-6 h-6" />
                Water
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;