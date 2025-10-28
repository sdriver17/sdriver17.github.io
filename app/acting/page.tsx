import { CreditsTable } from "@/components/CreditsTable";
import { Footer } from "@/components/Footer";
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
    <>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Training Section */}
          <div>
            <h2 className="text-2xl font-bold mb-6">TRAINING</h2>
            <div className="space-y-6">
              {actingTraining.map((training, index) => (
                <div key={index}>
                  <h4 className="font-bold mb-2">{training.institution}</h4>
                  <p className="mb-3">{training.description}</p>
                  {training.faculty.map((dept, deptIndex) => (
                    <p key={deptIndex} className="text-sm mb-1">
                      <strong>{dept.department}:</strong> {dept.instructors}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Training Image */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-square">
              <Image
                src="/images/portfolio/ppic2.jpg"
                alt="Sam Driver performance photo"
                fill
                className="object-cover rounded"
                sizes="(max-width: 770px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>

        {/* Credits Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">SELECTED CREDITS</h2>
          <CreditsTable credits={actingCredits} />
        </div>
      </div>
      <Footer />
    </>
  );
}
