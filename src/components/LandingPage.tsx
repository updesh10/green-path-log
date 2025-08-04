import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Leaf, Users, Target, TrendingUp, Award, Recycle } from "lucide-react";
import heroImage from "@/assets/hero-eco.jpg";
import communityImage from "@/assets/community-impact.jpg";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Leaf className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold gradient-eco bg-clip-text text-transparent">
              EcoTracker
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-foreground hover:text-primary">
              Login
            </Button>
            <Button className="btn-eco">
              Sign Up
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-leaf/10 to-water/20" />
        <div className="container mx-auto px-4 py-20 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="badge-glow">
                  🌱 Track Your Environmental Impact
                </Badge>
                <h1 className="text-5xl font-bold leading-tight">
                  Make Every <span className="gradient-eco bg-clip-text text-transparent">Green Action</span> Count
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Join thousands of eco-warriors tracking their environmental impact, 
                  earning rewards, and building a sustainable future together.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="btn-eco text-lg px-8 py-4">
                  Start Your Eco Journey
                </Button>
                <Button size="lg" variant="outline" className="btn-eco-outline text-lg px-8 py-4">
                  Explore Community Impact
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">10K+</div>
                  <div className="text-sm text-muted-foreground">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">2.5M</div>
                  <div className="text-sm text-muted-foreground">Actions Logged</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">500T</div>
                  <div className="text-sm text-muted-foreground">CO₂ Saved</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Eco-friendly actions" 
                className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold">
              Transform Your <span className="gradient-nature bg-clip-text text-transparent">Environmental Impact</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive platform makes it easy to track, improve, and celebrate your eco-friendly actions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="card-eco hover:shadow-lg transition-all duration-300 group">
              <div className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-leaf to-primary rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Log Actions</h3>
                <p className="text-muted-foreground">
                  Track recycling, energy saving, sustainable transport, and more with our intuitive logging system.
                </p>
              </div>
            </Card>

            <Card className="card-eco hover:shadow-lg transition-all duration-300 group">
              <div className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-water to-primary rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold">View Impact</h3>
                <p className="text-muted-foreground">
                  Visualize your carbon footprint reduction, water saved, and environmental progress with beautiful charts.
                </p>
              </div>
            </Card>

            <Card className="card-eco hover:shadow-lg transition-all duration-300 group">
              <div className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-energy to-primary rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Compete & Collaborate</h3>
                <p className="text-muted-foreground">
                  Join challenges, earn badges, climb leaderboards, and connect with fellow eco-warriors worldwide.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Gamification Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="badge-glow">
                  🏆 Gamified Experience
                </Badge>
                <h2 className="text-4xl font-bold">
                  Level Up Your <span className="gradient-eco bg-clip-text text-transparent">Green Game</span>
                </h2>
                <p className="text-xl text-muted-foreground">
                  Earn XP points, unlock achievements, and compete with friends while making a real difference for our planet.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Achievement Badges</h4>
                    <p className="text-muted-foreground">Unlock special badges for milestones and challenges</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Level Progression</h4>
                    <p className="text-muted-foreground">Advance through eco-warrior levels as you take action</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <Recycle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Weekly Challenges</h4>
                    <p className="text-muted-foreground">Join community challenges for extra rewards</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src={communityImage} 
                alt="Community impact" 
                className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-leaf to-water relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="container mx-auto px-4 relative">
          <div className="text-center space-y-8 text-white">
            <h2 className="text-4xl font-bold">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Join our community of environmental champions and start tracking your positive impact today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4 font-semibold">
                Get Started Now
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Leaf className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">EcoTracker</span>
              </div>
              <p className="text-muted-foreground">
                Making environmental impact tracking simple, rewarding, and fun.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">Features</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Action Tracking</li>
                <li>Impact Visualization</li>
                <li>Community Challenges</li>
                <li>Achievement System</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Community</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Leaderboards</li>
                <li>Group Challenges</li>
                <li>Impact Statistics</li>
                <li>Success Stories</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Support</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Help Center</li>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 EcoTracker. Making the world greener, one action at a time.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;