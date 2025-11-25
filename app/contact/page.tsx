import { PDFViewer } from "@/components/PDFViewer";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, FileText, Bell } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Sam Driver",
  description: `Get in touch with ${siteConfig.name}. Download resumes and contact information.`,
};

export default function ContactPage() {
  return (
    <PageTransition>
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Contact Information */}
        <Card className="mb-12 shadow-lg text-center">
          <CardHeader>
            <CardTitle className="text-3xl flex items-center justify-center gap-2">
              <Mail className="h-7 w-7 text-primary" />
              CONTACT
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-lg hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <a href={`mailto:${siteConfig.author.email}`}>
                {siteConfig.author.email}
              </a>
            </Button>
          </CardContent>
        </Card>

        {/* Resumes Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-2">
            <FileText className="h-7 w-7 text-primary" />
            RESUMES
          </h2>
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

        {/* Events/Updates Section */}
        <Card className="shadow-lg text-center">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center justify-center gap-2">
              <Bell className="h-6 w-6 text-primary" />
              EVENTS & UPDATES
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Follow on social media for the latest updates and announcements.
            </p>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </PageTransition>
  );
}
