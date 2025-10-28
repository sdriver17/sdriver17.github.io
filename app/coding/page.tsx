import { codingWorkExperience } from "@/data/credits";
import { codingContent } from "@/data/content";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coding - Sam Driver",
  description:
    "Software engineering experience and education, specializing in backend development and programming language design.",
};

export default function CodingPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Code Snippet Image */}
      <div className="mb-8 flex justify-center">
        <div className="relative w-full max-w-2xl aspect-video">
          <Image
            src="/code_snippet.png"
            alt="Code snippet"
            fill
            className="object-contain"
            sizes="(max-width: 770px) 100vw, 800px"
          />
        </div>
      </div>

      {/* Education Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">EDUCATION</h2>
        <p className="mb-3">{codingContent.education}</p>
        <p>{codingContent.coursework}</p>
      </section>

      {/* Work Experience Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">WORK EXPERIENCE</h2>
        <div className="space-y-8">
          {codingWorkExperience.map((work, index) => (
            <div key={index}>
              <h3 className="text-xl font-bold">
                {work.company}
                {work.title && ` (${work.title})`}
                {index === 0 && " - Current"}
              </h3>
              {work.url && (
                <a
                  href={work.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link-gray hover:text-black underline"
                >
                  {work.url}
                </a>
              )}
              <p className="mt-2">{work.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section>
        <h2 className="text-2xl font-bold mb-4">SKILLS</h2>
        <p>{codingContent.skills}</p>
      </section>
    </div>
  );
}
