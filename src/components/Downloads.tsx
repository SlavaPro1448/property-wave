import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";

const documents = [
  { title: "Mietvertrag", filename: "mietvertrag.pdf" },
  { title: "Hausordnung", filename: "hausordnung.pdf" },
  { title: "Übergabeprotokoll", filename: "uebergabeprotokoll.pdf" },
];

export const Downloads = () => {
  return (
    <section id="downloads" className="py-20 bg-secondary">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Formulare Downloads</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {documents.map((doc) => (
            <div
              key={doc.title}
              className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold mb-4">{doc.title}</h3>
              <Button variant="outline" className="w-full">
                <FileDown className="mr-2" />
                Download
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};