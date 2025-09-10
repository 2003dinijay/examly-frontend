import { useState } from "react";
import { Link } from "react-router-dom";
import { AuthCard } from "@/components/AuthCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Package } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login
    toast({
      title: "Welcome back!",
      description: "Login successful. Redirecting to dashboard...",
    });
    // In a real app, you'd handle authentication here
    window.location.href = "/dashboard";
  };

  return (
    <AuthCard>
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-muted rounded-lg mb-4">
          <Package className="w-6 h-6 text-muted-foreground" />
        </div>
        <h1 className="text-2xl font-semibold text-foreground mb-2">Welcome Back</h1>
        <p className="text-muted-foreground">Please sign in to your account.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="remember"
              checked={rememberMe}
              onCheckedChange={(checked) => setRememberMe(checked as boolean)}
            />
            <Label htmlFor="remember" className="text-sm">
              Remember me
            </Label>
          </div>
          <Link
            to="/reset-password"
            className="text-sm text-auth-blue hover:underline"
          >
            Forgot your password?
          </Link>
        </div>

        <Button type="submit" className="w-full bg-auth-primary hover:bg-auth-primary/90">
          Sign in
        </Button>
      </form>
    </AuthCard>
  );
};

export default Login;