import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { 
  Recycle, 
  Bike, 
  Lightbulb, 
  Droplets, 
  Car, 
  Trash2, 
  Leaf,
  Plus,
  Calendar
} from "lucide-react";

const LogActionPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  const actionCategories = [
    { 
      id: "recycling", 
      name: "Recycling", 
      icon: Recycle, 
      color: "text-earth",
      bgColor: "bg-earth/20",
      unit: "kg",
      xpMultiplier: 10,
      examples: ["Plastic bottles", "Paper", "Glass", "Metal cans"]
    },
    { 
      id: "transport", 
      name: "Green Transport", 
      icon: Bike, 
      color: "text-energy",
      bgColor: "bg-energy/20",
      unit: "km",
      xpMultiplier: 5,
      examples: ["Biking", "Walking", "Public transport", "Electric vehicle"]
    },
    { 
      id: "energy", 
      name: "Energy Saving", 
      icon: Lightbulb, 
      color: "text-primary",
      bgColor: "bg-primary/20",
      unit: "hours",
      xpMultiplier: 8,
      examples: ["LED usage", "Appliances off", "Natural lighting", "Renewable energy"]
    },
    { 
      id: "water", 
      name: "Water Conservation", 
      icon: Droplets, 
      color: "text-water",
      bgColor: "bg-water/20",
      unit: "liters",
      xpMultiplier: 12,
      examples: ["Shorter showers", "Rain water collection", "Efficient irrigation", "Leak fixes"]
    },
    { 
      id: "waste", 
      name: "Waste Reduction", 
      icon: Trash2, 
      color: "text-destructive",
      bgColor: "bg-destructive/20",
      unit: "items",
      xpMultiplier: 15,
      examples: ["Composting", "Reusable bags", "Zero waste meals", "Upcycling"]
    },
    { 
      id: "green-living", 
      name: "Green Living", 
      icon: Leaf, 
      color: "text-leaf",
      bgColor: "bg-leaf/20",
      unit: "actions",
      xpMultiplier: 20,
      examples: ["Plant care", "Organic food", "Local shopping", "Eco-friendly products"]
    }
  ];

  const selectedCategoryData = actionCategories.find(cat => cat.id === selectedCategory);
  const calculatedXP = selectedCategoryData ? Math.round(parseFloat(amount || "0") * selectedCategoryData.xpMultiplier) : 0;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Action logged:", { selectedCategory, amount, description });
    // Reset form
    setSelectedCategory("");
    setAmount("");
    setDescription("");
    // Show success message
  };

  return (
    <div>
      <Navigation />
      <div className="min-h-screen bg-background p-6">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">
              Log Your <span className="gradient-eco bg-clip-text text-transparent">Eco Action</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Every action counts! Track your positive environmental impact and earn XP.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Action Categories */}
            <div className="lg:col-span-1 space-y-4">
              <h3 className="text-xl font-bold">Choose Action Type</h3>
              <div className="space-y-3">
                {actionCategories.map((category) => (
                  <Card 
                    key={category.id} 
                    className={`p-4 cursor-pointer transition-all duration-300 hover:shadow-md ${
                      selectedCategory === category.id 
                        ? 'ring-2 ring-primary bg-primary/5' 
                        : 'hover:bg-muted/50'
                    }`}
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${category.bgColor}`}>
                        <category.icon className={`w-5 h-5 ${category.color}`} />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">{category.name}</div>
                        <div className="text-sm text-muted-foreground">
                          +{category.xpMultiplier} XP per {category.unit}
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Action Form */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="card-eco">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-6">Action Details</h3>
                  
                  {selectedCategoryData ? (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${selectedCategoryData.bgColor}`}>
                          <selectedCategoryData.icon className={`w-6 h-6 ${selectedCategoryData.color}`} />
                        </div>
                        <div>
                          <div className="font-semibold">{selectedCategoryData.name}</div>
                          <div className="text-sm text-muted-foreground">
                            Track your {selectedCategoryData.name.toLowerCase()} activities
                          </div>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="amount">Amount ({selectedCategoryData.unit})</Label>
                          <Input
                            id="amount"
                            type="number"
                            step="0.1"
                            min="0"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            placeholder={`Enter ${selectedCategoryData.unit}`}
                            className="text-lg"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="date">Date</Label>
                          <Input
                            id="date"
                            type="date"
                            defaultValue={new Date().toISOString().split('T')[0]}
                            className="text-lg"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="description">Description (optional)</Label>
                        <Textarea
                          id="description"
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                          placeholder={`Describe your ${selectedCategoryData.name.toLowerCase()} action...`}
                          className="min-h-20"
                        />
                      </div>

                      <div className="space-y-4">
                        <div className="p-4 bg-success/10 border border-success/20 rounded-lg">
                          <div className="flex items-center justify-between">
                            <span className="text-success font-medium">Estimated XP Reward:</span>
                            <Badge className="bg-success/20 text-success border-success/30 text-lg px-3 py-1">
                              +{calculatedXP} XP
                            </Badge>
                          </div>
                        </div>

                        <Button 
                          type="submit" 
                          className="btn-eco w-full text-lg py-6"
                          disabled={!amount || parseFloat(amount) <= 0}
                        >
                          <Plus className="w-5 h-5 mr-2" />
                          Log Action & Earn {calculatedXP} XP
                        </Button>
                      </div>
                    </form>
                  ) : (
                    <div className="text-center py-12 text-muted-foreground">
                      <Calendar className="w-16 h-16 mx-auto mb-4 opacity-50" />
                      <p className="text-lg">Select an action category to get started</p>
                    </div>
                  )}
                </div>
              </Card>

              {/* Examples */}
              {selectedCategoryData && (
                <Card className="card-eco">
                  <div className="p-6">
                    <h4 className="font-semibold mb-4">Popular {selectedCategoryData.name} Actions</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedCategoryData.examples.map((example, index) => (
                        <Badge 
                          key={index} 
                          variant="outline" 
                          className="cursor-pointer hover:bg-primary/10 hover:border-primary"
                          onClick={() => setDescription(example)}
                        >
                          {example}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogActionPage;