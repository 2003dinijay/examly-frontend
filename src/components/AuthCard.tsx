import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface AuthCardProps {
  children: React.ReactNode;
  className?: string;
}

export const AuthCard = ({ children, className }: AuthCardProps) => {
  return (
    <div className="min-h-screen bg-auth-background flex items-center justify-center p-4">
      <Card className={cn(
        "w-full max-w-md p-8 bg-auth-card border-0 shadow-lg",
        className
      )}>
        {children}
      </Card>
    </div>
  );
};