import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

const ModuleDetail = () => {
  const { moduleId } = useParams();

  const moduleData = {
    se301: {
      name: "SE301: Advanced Algorithms",
      grade: "85%",
      gradeLevel: "A",
      goal: "To maintain an 'A' in this module, you need to average at least 80% on the remaining assignments.",
      assessments: [
        {
          title: "Week 5 Essay",
          status: "Graded",
          grade: "88 / 100",
          action: "View Grade",
          actionType: "view",
        },
        {
          title: "Quiz 2: Data Types", 
          status: "Graded",
          grade: "82 / 100",
          action: "View Results",
          actionType: "view",
        },
        {
          title: "Final Project",
          status: "Pending",
          grade: "--",
          action: "Submit Now",
          actionType: "submit",
        },
      ],
    },
  };

  const module = moduleData[moduleId as keyof typeof moduleData];

  if (!module) {
    return <div>Module not found</div>;
  }

  return (
    <div className="min-h-screen bg-auth-background">
      {/* Header */}
      <header className="bg-background border-b px-6 py-4">
        <div className="flex items-center gap-4 max-w-7xl mx-auto">
          <Link to="/dashboard">
            <Button variant="ghost" size="sm">
              <ChevronLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Button>
          </Link>
          <h1 className="text-2xl font-semibold text-foreground">{module.name}</h1>
        </div>
      </header>

      <div className="max-w-4xl mx-auto p-6">
        {/* Current Grade */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-sm text-muted-foreground font-normal">
              CURRENT MODULE GRADE
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-baseline gap-4">
                <span className="text-4xl font-bold">{module.grade}</span>
                <Badge className="bg-grade-a/10 text-grade-a border-grade-a/20">
                  ({module.gradeLevel})
                </Badge>
              </div>
              <div className="bg-muted p-4 rounded-lg">
                <p className="text-sm text-auth-blue">
                  <strong>Goal:</strong> {module.goal}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Assessments */}
        <Card>
          <CardHeader>
            <CardTitle>Assessments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">Title</th>
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">Status</th>
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">Grade</th>
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {module.assessments.map((assessment, index) => (
                    <tr key={index} className="border-b last:border-0">
                      <td className="py-4 px-4 font-medium">{assessment.title}</td>
                      <td className="py-4 px-4">
                        <Badge 
                          variant="secondary"
                          className={
                            assessment.status === "Graded" 
                              ? "bg-grade-a/10 text-grade-a border-grade-a/20"
                              : "bg-auth-warning/10 text-auth-warning border-auth-warning/20"
                          }
                        >
                          {assessment.status}
                        </Badge>
                      </td>
                      <td className="py-4 px-4 font-medium">{assessment.grade}</td>
                      <td className="py-4 px-4">
                        {assessment.actionType === "submit" ? (
                          <Link to={`/assignment/${moduleId}/${assessment.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}>
                            <Button 
                              size="sm" 
                              className="text-auth-blue hover:text-auth-blue/80"
                              variant="ghost"
                            >
                              {assessment.action}
                            </Button>
                          </Link>
                        ) : (
                          <Button 
                            size="sm" 
                            className="text-auth-blue hover:text-auth-blue/80"
                            variant="ghost"
                          >
                            {assessment.action}
                          </Button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ModuleDetail;