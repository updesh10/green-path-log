import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  User, 
  Bell, 
  Shield, 
  Trash2, 
  Edit,
  Save,
  Mail,
  Calendar,
  Award,
  Settings as SettingsIcon
} from "lucide-react";

const SettingsPage = () => {
  const user = {
    name: "Alex Green",
    email: "alex@example.com",
    joinDate: "January 2024",
    level: 7,
    totalActions: 124,
    streak: 12
  };

  return (
    <div>
      <Navigation />
      <div className="min-h-screen bg-background p-6">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">
              Account <span className="gradient-eco bg-clip-text text-transparent">Settings</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Manage your profile, preferences, and account settings
            </p>
          </div>

          {/* Profile Section */}
          <Card className="card-eco">
            <div className="p-6">
              <div className="flex items-center gap-2 mb-6">
                <User className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-bold">Profile Information</h2>
              </div>

              <div className="flex items-start gap-6">
                <div className="relative">
                  <Avatar className="w-24 h-24 border-4 border-primary/20">
                    <AvatarImage src="/placeholder-avatar.jpg" />
                    <AvatarFallback className="bg-gradient-to-br from-primary to-primary-glow text-white text-2xl">
                      {user.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <Button size="sm" className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full p-0">
                    <Edit className="w-4 h-4" />
                  </Button>
                </div>

                <div className="flex-1 space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" defaultValue={user.name} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" defaultValue={user.email} />
                    </div>
                  </div>

                  <div className="flex items-center gap-4 pt-4">
                    <Badge className="badge-glow">Level {user.level} Eco-Warrior</Badge>
                    <Badge variant="outline">{user.totalActions} Actions Logged</Badge>
                    <Badge variant="outline">🔥 {user.streak} Day Streak</Badge>
                  </div>
                </div>
              </div>

              <Separator className="my-6" />

              <div className="flex justify-between items-center">
                <div className="text-sm text-muted-foreground">
                  Member since {user.joinDate}
                </div>
                <Button className="btn-eco">
                  <Save className="w-4 h-4 mr-2" />
                  Save Changes
                </Button>
              </div>
            </div>
          </Card>

          {/* Notifications */}
          <Card className="card-eco">
            <div className="p-6">
              <div className="flex items-center gap-2 mb-6">
                <Bell className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-bold">Notification Preferences</h2>
              </div>

              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="font-medium">Daily Reminders</div>
                    <div className="text-sm text-muted-foreground">
                      Get reminded to log your daily eco-actions
                    </div>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="font-medium">Challenge Updates</div>
                    <div className="text-sm text-muted-foreground">
                      Notifications about new challenges and your progress
                    </div>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="font-medium">Achievement Alerts</div>
                    <div className="text-sm text-muted-foreground">
                      Get notified when you earn badges and level up
                    </div>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="font-medium">Community Updates</div>
                    <div className="text-sm text-muted-foreground">
                      Updates about community milestones and leaderboards
                    </div>
                  </div>
                  <Switch />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="font-medium">Email Newsletter</div>
                    <div className="text-sm text-muted-foreground">
                      Weekly eco-tips and platform updates
                    </div>
                  </div>
                  <Switch />
                </div>
              </div>
            </div>
          </Card>

          {/* Privacy & Security */}
          <Card className="card-eco">
            <div className="p-6">
              <div className="flex items-center gap-2 mb-6">
                <Shield className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-bold">Privacy & Security</h2>
              </div>

              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="font-medium">Profile Visibility</div>
                    <div className="text-sm text-muted-foreground">
                      Allow others to see your profile and achievements
                    </div>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="font-medium">Leaderboard Participation</div>
                    <div className="text-sm text-muted-foreground">
                      Show your name and stats on community leaderboards
                    </div>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="font-medium">Data Analytics</div>
                    <div className="text-sm text-muted-foreground">
                      Help improve EcoTracker by sharing anonymous usage data
                    </div>
                  </div>
                  <Switch defaultChecked />
                </div>

                <Separator />

                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <Mail className="w-4 h-4 mr-2" />
                    Change Password
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Award className="w-4 h-4 mr-2" />
                    Export My Data
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <SettingsIcon className="w-4 h-4 mr-2" />
                    Privacy Policy
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          {/* Danger Zone */}
          <Card className="card-eco border-destructive/20">
            <div className="p-6">
              <div className="flex items-center gap-2 mb-6">
                <Trash2 className="w-5 h-5 text-destructive" />
                <h2 className="text-xl font-bold text-destructive">Danger Zone</h2>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
                  <div className="space-y-2">
                    <div className="font-medium text-destructive">Delete Account</div>
                    <div className="text-sm text-muted-foreground">
                      Permanently delete your account and all associated data. This action cannot be undone.
                    </div>
                  </div>
                </div>

                <Button variant="destructive" className="w-full">
                  <Trash2 className="w-4 h-4 mr-2" />
                  Delete My Account
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;