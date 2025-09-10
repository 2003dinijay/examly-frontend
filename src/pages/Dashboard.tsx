import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bell, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const modules = [
    {
      id: "se301",
      name: "SE301: Advanced Algorithms",
      professor: "Prof. Ada Lovelace",
      grade: "85%",
      gradeLevel: "A",
      color: "grade-a",
    },
    {
      id: "se302", 
      name: "SE302: Software Architecture",
      professor: "Prof. Charles Babbage",
      grade: "78%",
      gradeLevel: "B+",
      color: "grade-b",
    },
  ];

  const upcomingDeadlines = [
    {
      title: "Final Project",
      dueDate: "Due in 5 days",
      urgent: true,
    },
    {
      title: "Quiz 3: Data Structures",
      dueDate: "Due in 10 days",
      urgent: false,
    },
  ];

  return (
    <div className="min-h-screen bg-auth-background">
      {/* Header */}
      <header className="bg-background border-b px-6 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div>
            <h1 className="text-2xl font-semibold text-foreground">Dashboard</h1>
            <p className="text-muted-foreground">Welcome back, Saman!</p>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Bell className="w-5 h-5" />
            </Button>
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-medium">
              SP
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* GPA Card */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-sm text-muted-foreground font-normal">
                OVERALL CUMULATIVE GPA
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold">3.50</span>
                    <span className="text-xl text-muted-foreground">/ 4.0</span>
                  </div>
                  <p className="text-auth-blue font-medium">Second Class - Upper Division</p>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <p className="text-sm text-auth-blue">
                    <strong>Goal:</strong> To raise your GPA to 3.55 this semester, you need an average module GPA of 3.70 in your current courses.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Deadlines */}
          <Card>
            <CardHeader>
              <CardTitle className="text-sm text-muted-foreground font-normal">
                UPCOMING DEADLINES
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {upcomingDeadlines.map((deadline, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className={`w-2 h-2 rounded-full mt-2 ${
                    deadline.urgent ? 'bg-auth-danger' : 'bg-auth-warning'
                  }`} />
                  <div className="flex-1">
                    <p className="font-medium text-sm">{deadline.title}</p>
                    <p className="text-xs text-muted-foreground">{deadline.dueDate}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Current Modules */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="text-sm text-muted-foreground font-normal">
              CURRENT MODULES
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {modules.map((module) => (
              <Link key={module.id} to={`/module/${module.id}`}>
                <div className="flex items-center justify-between p-4 rounded-lg border hover:bg-muted/50 transition-colors cursor-pointer">
                  <div className="flex-1">
                    <h3 className="font-medium">{module.name}</h3>
                    <p className="text-sm text-muted-foreground">{module.professor}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Badge 
                      variant="secondary" 
                      className={`bg-${module.color}/10 text-${module.color} border-${module.color}/20`}
                    >
                      {module.grade} ({module.gradeLevel})
                    </Badge>
                    <ChevronRight className="w-4 h-4 text-muted-foreground" />
                  </div>
                </div>
              </Link>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;