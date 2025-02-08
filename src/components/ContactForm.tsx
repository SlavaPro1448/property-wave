
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

export const ContactForm = () => {
  const { toast } = useToast();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
  
    try {
      const response = await fetch("https://hausverwaltung-natalie-frank.de/send_email.php", {
        method: "POST",
        body: formData,
      });
  
      const result = await response.text();
      console.log("Server response:", result);
  
      toast({
        title: result.includes("Vielen Dank") ? "Success" : "Error",
        description: result,
        variant: result.includes("Vielen Dank") ? "default" : "destructive",
      });
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    
    if (file) {
      // Check if file is PDF
      if (file.type !== "application/pdf") {
        toast({
          title: "Invalid file",
          description: "Only PDF files are allowed.",
          variant: "destructive",
        });
        return;
      }

      // Check size (5MB = 5 * 1024 * 1024 bytes)
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
              <label htmlFor="first-name" className="block mb-2 text-sm sm:text-base">
                Name
              </label>
              <Input id="first-name" name="first-name" required />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm sm:text-base">
                Email
              </label>
              <Input id="email" name="email" type="email" required />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block mb-2 text-sm sm:text-base">
              Message
            </label>
            <Textarea id="message" name="message" required className="min-h-[120px] sm:min-h-[150px]" />
          </div>
          <div>
            <label htmlFor="attachment" className="block mb-2 text-sm sm:text-base">
              Attach a file (PDF only, max 5MB)
            </label>
            <input 
              id="attachment" 
              name="attachment[]"
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
