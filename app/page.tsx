import { Carousel } from "@/components/Carousel";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { headshots } from "@/data/siteConfig";
import { bioContent } from "@/data/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home - Sam Driver",
  description: bioContent.intro,
};

export default function Home() {
  return (
    <PageTransition>
      <div className="min-h-[calc(100vh-140px)] max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:items-stretch">
          {/* Headshot Carousel */}
          <Carousel images={headshots} />

          {/* Bio Section */}
          <Card className="shadow-lg border-border flex flex-col">
            <CardHeader>
              <CardTitle className="text-3xl">BIO</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-base leading-relaxed flex-1">
              <p>{bioContent.intro}</p>
              <p>{bioContent.artist}</p>
              <p>
                {bioContent.developer}{" "}
                <a
                  href={bioContent.researchLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-primary hover:text-primary/80 transition-colors font-medium"
                >
                  here.
                </a>{" "}
                {bioContent.developerContinued}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </PageTransition>
  );
}
