import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Users, Award, TrendingUp } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-auth-background">
      {/* Hero Section */}
      <div className="bg-background">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Academic Excellence Platform
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Track your academic progress, manage assignments, and achieve your educational goals with our comprehensive examination system.
            </p>
            <div className="flex gap-4 justify-center">
              <Link to="/login">
                <Button size="lg" className="bg-auth-primary hover:bg-auth-primary/90">
                  Student Login
                </Button>
              </Link>
              <Link to="/dashboard">
                <Button size="lg" variant="outline">
                  View Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Everything You Need for Academic Success
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our platform provides comprehensive tools to help students excel in their academic journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-12 h-12 bg-auth-blue/10 rounded-lg mb-4">
                  <BookOpen className="w-6 h-6 text-auth-blue" />
                </div>
                <CardTitle className="text-lg">Course Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Organize and track all your courses, assignments, and deadlines in one place.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-12 h-12 bg-auth-success/10 rounded-lg mb-4">
                  <TrendingUp className="w-6 h-6 text-auth-success" />
                </div>
                <CardTitle className="text-lg">Progress Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Monitor your GPA, grades, and academic performance with detailed analytics.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-12 h-12 bg-auth-warning/10 rounded-lg mb-4">
                  <Award className="w-6 h-6 text-auth-warning" />
                </div>
                <CardTitle className="text-lg">Assignment Submission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Submit assignments easily with file uploads and link sharing capabilities.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Collaborative Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Connect with classmates and instructors for a better learning experience.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-background py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Excel in Your Studies?
          </h2>
          <p className="text-muted-foreground mb-8">
            Join thousands of students who are already using our platform to achieve academic success.
          </p>
          <Link to="/login">
            <Button size="lg" className="bg-auth-primary hover:bg-auth-primary/90">
              Get Started Today
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
