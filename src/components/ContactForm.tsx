import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

export const ContactForm = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent",
      description: "We'll get back to you as soon as possible.",
    });
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
          <Button type="submit" className="w-full sm:w-auto">
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
};