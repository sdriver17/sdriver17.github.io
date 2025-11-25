import { codingWorkExperience } from "@/data/credits";
import { codingContent } from "@/data/content";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Briefcase } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coding - Sam Driver",
  description:
    "Software engineering experience and education, specializing in backend development and programming language design.",
};

export default function CodingPage() {
  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* About Section */}
        <Card className="mb-8 shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl">ABOUT</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-base leading-relaxed">{codingContent.about}</p>
          </CardContent>
        </Card>

        {/* Work Experience Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
            <Briefcase className="h-7 w-7 text-primary" />
            WORK EXPERIENCE
          </h2>
          <div className="space-y-6">
            {codingWorkExperience.map((work, index) => (
              <Card key={index} className="shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                    <CardTitle className="text-xl">{work.company}</CardTitle>
                    <Badge variant="outline" className="w-fit">
                      {index === 0
                        ? "Mar 2025 - Present"
                        : index === 1
                        ? "Jul 2020 - Mar 2025"
                        : "Jun 2016 - Jan 2017"}
                    </Badge>
                  </div>
                  <p className="text-lg font-semibold text-primary">
                    {work.title}
                  </p>
                  {work.url && (
                    <a
                      href={work.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-primary underline inline-flex items-center gap-1 mt-1 transition-colors"
                    >
                      {work.url}
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                </CardHeader>
                <CardContent>
                  <p className="text-base leading-relaxed">{work.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Education & Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">EDUCATION</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base leading-relaxed">
                {codingContent.education}
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">SKILLS</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base leading-relaxed">{codingContent.skills}</p>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </PageTransition>
  );
}
