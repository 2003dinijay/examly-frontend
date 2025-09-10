import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthCard } from "@/components/AuthCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Recovery link sent",
      description: "Check your email for further instructions.",
    });
    navigate("/verify-reset");
  };

  return (
    <AuthCard>
      <div className="text-center mb-8">
        <h1 className="text-2xl font-semibold text-foreground mb-2">Reset Password</h1>
        <p className="text-muted-foreground">
          Enter your email to receive a recovery link.
        </p>
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

        <Button type="submit" className="w-full bg-auth-primary hover:bg-auth-primary/90">
          Send Recovery Link
        </Button>

        <div className="text-center">
          <Link
            to="/login"
            className="text-sm text-auth-blue hover:underline"
          >
            Back to Login
          </Link>
        </div>
      </form>
    </AuthCard>
  );
};

export default ResetPassword;