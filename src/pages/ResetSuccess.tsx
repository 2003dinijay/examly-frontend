import { Link } from "react-router-dom";
import { AuthCard } from "@/components/AuthCard";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const ResetSuccess = () => {
  return (
    <AuthCard>
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-auth-success/10 rounded-full mb-6">
          <CheckCircle className="w-8 h-8 text-auth-success" />
        </div>
        
        <h1 className="text-2xl font-semibold text-foreground mb-2">Password Reset!</h1>
        <p className="text-muted-foreground mb-8">
          Your password has been successfully updated.
        </p>

        <Link to="/login">
          <Button className="w-full bg-auth-primary hover:bg-auth-primary/90">
            Back to Login
          </Button>
        </Link>
      </div>
    </AuthCard>
  );
};

export default ResetSuccess;