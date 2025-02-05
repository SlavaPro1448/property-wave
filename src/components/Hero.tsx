
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative h-[90vh] w-full overflow-hidden mt-16">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("/hausverwaltung-logo.jpg")',
          backgroundColor: '#F0F2F5',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/10" />
      </div>
      <div className="relative container h-full flex items-center px-4 sm:px-6">
        <div className="max-w-2xl animate-fade-up">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-primary mb-4 sm:mb-6">
            Ihr Partner für Immobilienverwaltung
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-primary/90 mb-6 sm:mb-8">
            Die Brücke zwischen Vermieter und Mieter
          </p>
          <Button
            size="lg"
            className="bg-primary text-white hover:bg-primary/90 w-full sm:w-auto"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Kontakt aufnehmen
          </Button>
        </div>
      </div>
    </div>
  );
};
