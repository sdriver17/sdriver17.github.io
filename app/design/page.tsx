import { Carousel } from "@/components/Carousel";
import { CreditsTable } from "@/components/CreditsTable";
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
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Portfolio Carousel */}
        <div className="w-full">
          <Carousel images={portfolioImages} />
          <p className="text-sm text-gray-600 mt-2 text-center">
            Image courtesy of Nicole Boyd
          </p>
        </div>

        {/* Credits and Work Experience */}
        <div>
          <h2 className="text-2xl font-bold mb-6">TECHNICAL THEATER CREDITS</h2>
          <CreditsTable credits={designCredits} className="mb-8" />

          <h2 className="text-2xl font-bold mb-6">WORK EXPERIENCE</h2>
          <div className="space-y-6">
            {designWorkExperience.map((work, index) => (
              <div key={index}>
                <h3 className="text-xl font-bold">
                  {work.company} {work.title && `– ${work.title}`}
                </h3>
                <p className="mt-2">{work.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
