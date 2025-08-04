import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { 
  Leaf, 
  Home, 
  Users, 
  Target, 
  Award, 
  Settings, 
  LogOut,
  Plus,
  Menu,
  X
} from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Mock user data
  const user = {
    name: "Alex Green",
    email: "alex@example.com",
    level: 7
  };

  const navItems = [
    { href: "/dashboard", label: "Dashboard", icon: Home },
    { href: "/community", label: "Community", icon: Users },
    { href: "/log-action", label: "Log Action", icon: Target },
    { href: "/rewards", label: "Rewards", icon: Award },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Leaf className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold gradient-eco bg-clip-text text-transparent">
              EcoTracker
            </span>
          </Link>

          <div className="flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors hover:bg-muted ${
                  isActive(item.href) 
                    ? 'bg-primary/10 text-primary font-medium' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <Button className="btn-eco gap-2">
              <Plus className="w-4 h-4" />
              Quick Log
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                  <Avatar className="h-10 w-10 border-2 border-primary/20">
                    <AvatarImage src="/placeholder-avatar.jpg" />
                    <AvatarFallback className="bg-gradient-to-br from-primary to-primary-glow text-white">
                      {user.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-popover" align="end" forceMount>
                <div className="flex items-center justify-start gap-2 p-2">
                  <div className="flex flex-col space-y-1 leading-none">
                    <p className="font-medium">{user.name}</p>
                    <p className="text-xs text-muted-foreground">Level {user.level} Eco-Warrior</p>
                    <p className="text-xs text-muted-foreground">{user.email}</p>
                  </div>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/settings" className="flex items-center gap-2 w-full">
                    <Settings className="w-4 h-4" />
                    Settings
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/rewards" className="flex items-center gap-2 w-full">
                    <Award className="w-4 h-4" />
                    My Rewards
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="flex items-center gap-2 text-destructive focus:text-destructive">
                  <LogOut className="w-4 h-4" />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Leaf className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold gradient-eco bg-clip-text text-transparent">
              EcoTracker
            </span>
          </Link>

          <div className="flex items-center space-x-2">
            <Button size="sm" className="btn-eco">
              <Plus className="w-4 h-4" />
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="border-t border-border bg-background">
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors hover:bg-muted ${
                    isActive(item.href) 
                      ? 'bg-primary/10 text-primary font-medium' 
                      : 'text-muted-foreground'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  {item.label}
                </Link>
              ))}
              
              <div className="border-t border-border pt-4 mt-4">
                <div className="flex items-center gap-3 px-4 py-3">
                  <Avatar className="h-10 w-10 border-2 border-primary/20">
                    <AvatarImage src="/placeholder-avatar.jpg" />
                    <AvatarFallback className="bg-gradient-to-br from-primary to-primary-glow text-white">
                      {user.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">{user.name}</div>
                    <div className="text-sm text-muted-foreground">Level {user.level} Eco-Warrior</div>
                  </div>
                </div>
                
                <Link
                  to="/settings"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 text-muted-foreground hover:bg-muted rounded-lg"
                >
                  <Settings className="w-5 h-5" />
                  Settings
                </Link>
                
                <button className="flex items-center gap-3 px-4 py-3 text-destructive hover:bg-muted rounded-lg w-full">
                  <LogOut className="w-5 h-5" />
                  Log out
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navigation;