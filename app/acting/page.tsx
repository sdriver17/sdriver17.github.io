import { CreditsTable } from "@/components/CreditsTable";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { actingCredits, actingTraining } from "@/data/credits";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Acting - Sam Driver",
  description:
    "Acting training and performance credits including work at RADA, Wesleyan University, and professional theaters.",
};

export default function ActingPage() {
  return (
    <PageTransition>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Training Section */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-3xl">TRAINING</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {actingTraining.map((training, index) => (
                <div key={index} className="space-y-2">
                  <h4 className="font-bold text-lg">{training.institution}</h4>
                  <p className="text-muted-foreground mb-3">
                    {training.description}
                  </p>
                  {training.faculty.map((dept, deptIndex) => (
                    <p key={deptIndex} className="text-sm">
                      <strong className="text-foreground">
                        {dept.department}:
                      </strong>{" "}
                      <span className="text-muted-foreground">
                        {dept.instructors}
                      </span>
                    </p>
                  ))}
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Training Image */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-square rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/portfolio/ppic2.jpg"
                alt="Sam Driver performance photo"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 770px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>

        {/* Credits Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-6">SELECTED CREDITS</h2>
          <CreditsTable credits={actingCredits} />
        </div>
      </div>
      <Footer />
    </PageTransition>
  );
}
