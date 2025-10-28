import { codingWorkExperience } from "@/data/credits";
import { codingContent } from "@/data/content";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coding - Sam Driver",
  description:
    "Software engineering experience and education, specializing in backend development and programming language design.",
};

export default function CodingPage() {
  return (
    <>
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Code Snippet Image */}
        {/* <div className="mb-8 flex justify-center">
          <div className="relative w-full max-w-2xl aspect-video">
            <Image
              src="/code_snippet.png"
              alt="Code snippet"
              fill
              className="object-contain"
              sizes="(max-width: 770px) 100vw, 800px"
            />
          </div>
        </div> */}

        {/* About Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">ABOUT</h2>
          <p>{codingContent.about}</p>
        </section>

        {/* Work Experience Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">WORK EXPERIENCE</h2>
          <div className="space-y-8">
            {codingWorkExperience.map((work, index) => (
              <div key={index}>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                  <h3 className="text-xl font-bold">{work.company}</h3>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {index === 0 ? "Mar 2025 - Present" : index === 1 ? "Jul 2020 - Mar 2025" : "Jun 2016 - Jan 2017"}
                  </span>
                </div>
                <p className="text-lg mb-2 text-accent-green">{work.title}</p>
                {work.url && (
                  <a
                    href={work.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-link-gray hover:text-accent-green dark:hover:text-accent-green underline text-sm mb-2 inline-block"
                  >
                    {work.url}
                  </a>
                )}
                <p className="mt-2">{work.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">EDUCATION</h2>
          <p>{codingContent.education}</p>
        </section>

        {/* Skills Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">SKILLS</h2>
          <p>{codingContent.skills}</p>
        </section>

        {/* Volunteer Experience Section */}
        {/* <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">VOLUNTEER EXPERIENCE</h2>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
            <h3 className="text-xl font-bold">{codingContent.volunteer.organization}</h3>
            <span className="text-sm text-gray-600 dark:text-gray-400">{codingContent.volunteer.period}</span>
          </div>
          <p className="text-lg mb-2 text-accent-green">{codingContent.volunteer.role}</p>
          <p>{codingContent.volunteer.achievements}</p>
        </section> */}
      </div>
      <Footer />
    </>
  );
}
