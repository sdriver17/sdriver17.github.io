import { Carousel } from "@/components/Carousel";
import { CreditsTable } from "@/components/CreditsTable";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { designCredits, designWorkExperience } from "@/data/credits";
import { portfolioImages } from "@/data/siteConfig";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Design - Sam Driver",
  description:
    "Lighting design and technical theater credits from professional and educational productions.",
};

export default function DesignPage() {
  return (
    <PageTransition>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Portfolio Carousel */}
          <div className="w-full">
            <Carousel images={portfolioImages} />
            <p className="text-sm text-muted-foreground mt-3 text-center">
              Image courtesy of Nicole Boyd
            </p>
          </div>

          {/* Work Experience */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-3xl">WORK EXPERIENCE</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {designWorkExperience.map((work, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-start gap-2 flex-wrap">
                    <h3 className="text-xl font-bold">{work.company}</h3>
                    {work.title && (
                      <Badge variant="secondary" className="mt-1">
                        {work.title}
                      </Badge>
                    )}
                  </div>
                  <p className="text-muted-foreground">{work.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Credits Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-6">TECHNICAL THEATER CREDITS</h2>
          <CreditsTable credits={designCredits} />
        </div>
      </div>
      <Footer />
    </PageTransition>
  );
}
