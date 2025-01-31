import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative h-[80vh] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative container h-full flex items-center">
        <div className="max-w-2xl animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Professional Property Management Services
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Expert property management solutions for residential and commercial properties
          </p>
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-white/90"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
};