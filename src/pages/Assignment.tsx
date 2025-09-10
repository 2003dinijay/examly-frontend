import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronLeft, Upload, X, Plus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Assignment = () => {
  const { moduleId, assignmentId } = useParams();
  const [links, setLinks] = useState<string[]>([]);
  const [newLink, setNewLink] = useState("");
  const [uploadedFile, setUploadedFile] = useState<string | null>(null);
  const { toast } = useToast();

  const assignmentData = {
    title: "Final Project",
    instructions: `For your final project, you must submit a proposal of at least 5 pages covering:
Project Vision Statement
Core Features & Objectives
Target Audience Analysis
Technology Stack
System Architecture Diagram
Submit as a PDF or link (e.g., Google Docs).`,
    rubric: [
      { criteria: "Feasibility", points: "40 pts" },
      { criteria: "Innovation", points: "30 pts" },
      { criteria: "Clarity & Writing", points: "30 pts" },
      { criteria: "Total", points: "100 pts" },
    ],
    status: "Not Submitted",
    dueDate: "Sep 15, 2025, 11:59 PM",
  };

  const addLink = () => {
    if (newLink.trim()) {
      setLinks([...links, newLink.trim()]);
      setNewLink("");
    }
  };

  const removeLink = (index: number) => {
    setLinks(links.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    toast({
      title: "Assignment Submitted",
      description: "Your assignment has been successfully submitted.",
    });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedFile(file.name);
      toast({
        title: "File uploaded",
        description: `${file.name} has been uploaded successfully.`,
      });
    }
  };

  return (
    <div className="min-h-screen bg-auth-background">
      {/* Header */}
      <header className="bg-background border-b px-6 py-4">
        <div className="flex items-center gap-4 max-w-7xl mx-auto">
          <Link to={`/module/${moduleId}`}>
            <Button variant="ghost" size="sm">
              <ChevronLeft className="w-4 h-4 mr-2" />
              Back to Module
            </Button>
          </Link>
          <h1 className="text-2xl font-semibold text-foreground">{assignmentData.title}</h1>
        </div>
      </header>

      <div className="max-w-4xl mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Instructions */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Instructions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="whitespace-pre-line text-sm">{assignmentData.instructions}</div>
            </CardContent>
          </Card>

          {/* Submission Status */}
          <Card>
            <CardHeader>
              <CardTitle>Your Submission</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm"><strong>Status:</strong></p>
                <span className="text-auth-warning font-medium">{assignmentData.status}</span>
              </div>
              <div>
                <p className="text-sm"><strong>Due Date:</strong></p>
                <p className="text-sm">{assignmentData.dueDate}</p>
              </div>
              <Button 
                onClick={handleSubmit}
                className="w-full bg-auth-primary hover:bg-auth-primary/90"
                disabled={!uploadedFile && links.length === 0}
              >
                Make Submission
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Submission Form */}
        <Card className="mt-6">
          <CardContent className="p-6">
            <Tabs defaultValue="upload" className="space-y-6">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="upload">File Upload</TabsTrigger>
                <TabsTrigger value="links">Link(s)</TabsTrigger>
              </TabsList>

              <TabsContent value="upload" className="space-y-4">
                <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center">
                  <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <div className="space-y-2">
                    <p className="font-medium text-auth-blue">Upload a file</p>
                    <p className="text-sm text-muted-foreground">
                      or drag and drop<br />
                      PDF, DOCX, etc. up to 10MB
                    </p>
                  </div>
                  <input
                    type="file"
                    className="hidden"
                    id="file-upload"
                    onChange={handleFileUpload}
                    accept=".pdf,.docx,.doc"
                  />
                  <Label htmlFor="file-upload" className="cursor-pointer">
                    <Button asChild className="mt-4">
                      <span>Choose File</span>
                    </Button>
                  </Label>
                </div>

                {uploadedFile && (
                  <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                    <div>
                      <p className="font-medium">Uploaded File:</p>
                      <p className="text-sm text-muted-foreground">{uploadedFile}</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setUploadedFile(null)}
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="links" className="space-y-4">
                <div className="flex gap-2">
                  <Input
                    placeholder="https://example.com"
                    value={newLink}
                    onChange={(e) => setNewLink(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && addLink()}
                  />
                  <Button onClick={addLink} size="icon">
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>

                {links.map((link, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-auth-blue hover:underline truncate"
                    >
                      {link}
                    </a>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeLink(index)}
                    >
                      <X className="w-4 h-4 text-destructive" />
                    </Button>
                  </div>
                ))}
              </TabsContent>
            </Tabs>

            <Button 
              onClick={handleSubmit}
              className="w-full mt-6 bg-auth-primary hover:bg-auth-primary/90"
              disabled={!uploadedFile && links.length === 0}
            >
              Confirm Submission
            </Button>
          </CardContent>
        </Card>

        {/* Grading Rubric */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Grading Rubric</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {assignmentData.rubric.map((item, index) => (
                <div key={index} className="flex justify-between items-center py-2">
                  <span className={item.criteria === "Total" ? "font-semibold" : ""}>{item.criteria}</span>
                  <span className={item.criteria === "Total" ? "font-semibold" : ""}>{item.points}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Assignment;