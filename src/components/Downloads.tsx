import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";

const documents = [
  { title: "Mietvertrag", filename: "mietvertrag.pdf" },
  { title: "Hausordnung", filename: "hausordnung.pdf" },
  { title: "Übergabeprotokoll", filename: "uebergabeprotokoll.pdf" },
];

export const Downloads = () => {
  return (
    <section id="downloads" className="py-12 sm:py-20 bg-secondary">
      <div className="container px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Formulare Downloads</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {documents.map((doc) => (
            <div
              key={doc.title}
              className="p-4 sm:p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold mb-4 text-base sm:text-lg">{doc.title}</h3>
              <Button variant="outline" className="w-full">
                <FileDown className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Download
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};