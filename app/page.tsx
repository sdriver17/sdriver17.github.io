import { Carousel } from "@/components/Carousel";
import { Footer } from "@/components/Footer";
import { headshots } from "@/data/siteConfig";
import { bioContent } from "@/data/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home - Sam Driver",
  description: bioContent.intro,
};

export default function Home() {
  return (
    <div className="h-[calc(100vh-120px)] max-w-6xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
        {/* Headshot Carousel - Static on Desktop */}
        <div className="w-full h-fit">
          <Carousel images={headshots} />
        </div>

        {/* Bio Section - Scrollable Container with Footer */}
        <div className="overflow-y-auto h-full md:pr-4">
          <div className="space-y-6 pb-8">
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
                  className="underline hover:text-black dark:hover:text-white"
                >
                  here.
                </a>{" "}
                {bioContent.developerContinued}
              </p>
            </div>
          </div>
          {/* Footer inside scrollable area */}
          <Footer />
        </div>
      </div>
    </div>
  );
}
