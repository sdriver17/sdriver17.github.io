import { Carousel } from "@/components/Carousel";
import { headshots } from "@/data/siteConfig";
import { bioContent } from "@/data/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home - Sam Driver",
  description: bioContent.intro,
};

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Headshot Carousel */}
        <div className="w-full">
          <Carousel images={headshots} />
        </div>

        {/* Bio Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">BIO</h2>
          <div className="space-y-4">
            <p>{bioContent.intro}</p>
            <p>{bioContent.artist}</p>
            <p>
              {bioContent.developer}{" "}
              <a
                href={bioContent.researchLink}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-black"
              >
                here.
              </a>{" "}
              {bioContent.developerContinued}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
