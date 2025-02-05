import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

export const ContactForm = () => {
  const { toast } = useToast();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedFile) {
      console.log("File selected:", selectedFile.name);
    }
    toast({
      title: "Message sent",
      description: "We'll get back to you as soon as possible.",
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    
    if (file) {
      // Проверяем, что файл — PDF
      if (file.type !== "application/pdf") {
        toast({
          title: "Invalid file",
          description: "Only PDF files are allowed.",
          variant: "destructive",
        });
        return;
      }

      // Проверяем размер (5MB = 5 * 1024 * 1024 байт)
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: "File size should not exceed 5MB.",
          variant: "destructive",
        });
        return;
      }

      setSelectedFile(file);
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-20 bg-secondary">
      <div className="container px-4 sm:px-6 max-w-2xl">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm sm:text-base">
                Name
              </label>
              <Input id="name" required />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm sm:text-base">
                Email
              </label>
              <Input id="email" type="email" required />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block mb-2 text-sm sm:text-base">
              Message
            </label>
            <Textarea id="message" required className="min-h-[120px] sm:min-h-[150px]" />
          </div>
          <div>
            <label htmlFor="file" className="block mb-2 text-sm sm:text-base">
              Attach a file (PDF only, max 5MB)
            </label>
            <input 
              id="file" 
              type="file" 
              accept="application/pdf" 
              onChange={handleFileChange}
              className="block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded file:border-0
                file:text-sm file:font-semibold
                file:bg-primary file:text-white
                hover:file:bg-opacity-80"
            />
          </div>
          <Button type="submit" className="w-full sm:w-auto">
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
};