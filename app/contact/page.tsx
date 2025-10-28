import { PDFViewer } from "@/components/PDFViewer";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/data/siteConfig";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Sam Driver",
  description: `Get in touch with ${siteConfig.name}. Download resumes and contact information.`,
};

export default function ContactPage() {
  return (
    <>
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Contact Information */}
        <section className="mb-12 text-center">
          <h2 className="text-2xl font-bold mb-4">CONTACT</h2>
          <p className="text-xl">
            <a
              href={`mailto:${siteConfig.author.email}`}
              className="text-link-gray hover:text-black dark:hover:text-white underline"
            >
              {siteConfig.author.email}
            </a>
          </p>
        </section>

        {/* Resumes Section */}
        <section>
          <h2 className="text-2xl font-bold mb-8 text-center">RESUMES</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <PDFViewer
              src="/resumes/comp-resume.pdf"
              title="Computer Science Resume"
              downloadFilename="Sam_Driver_CS_Resume.pdf"
            />
            <PDFViewer
              src="/resumes/creative-resume.pdf"
              title="Creative/Theater Resume"
              downloadFilename="Sam_Driver_Creative_Resume.pdf"
            />
          </div>
        </section>

        {/* Events/Updates Section (Optional) */}
        <section className="mt-12 text-center">
          <h2 className="text-2xl font-bold mb-4">EVENTS & UPDATES</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Follow on social media for the latest updates and announcements.
          </p>
        </section>
      </div>
      <Footer />
    </>
  );
}
