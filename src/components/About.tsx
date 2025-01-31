export const About = () => {
  return (
    <section id="about" className="py-12 sm:py-20">
      <div className="container px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Über uns</h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6">
              Hausverwaltung Natalie Frank steht seit über 20 Jahren für professionelle
              und zuverlässige Immobilienverwaltung in der Region.
            </p>
            <ul className="space-y-3 sm:space-y-4 text-base sm:text-lg text-muted-foreground">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                Persönliche Betreuung und kurze Reaktionszeiten
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                Transparente Kommunikation und faire Konditionen
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                Langjährige Erfahrung im Immobilienmanagement
              </li>
            </ul>
          </div>
          <div className="relative h-[300px] sm:h-[400px] mt-8 lg:mt-0">
            <img
              src="https://images.unsplash.com/photo-1486718448742-163732cd1544?auto=format&fit=crop&q=80"
              alt="Unser Team"
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};