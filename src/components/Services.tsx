import { Building2, ClipboardCheck, HeartHandshake, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Technische Verwaltung",
    description: "Wartung, Instandhaltung und Modernisierung Ihrer Immobilie",
    icon: Building2,
    details: [
      "Regelmäßige Gebäudeinspektion",
      "Koordination von Handwerkern",
      "Modernisierungsplanung",
    ],
  },
  {
    title: "Mietverwaltung",
    description: "Professionelle Verwaltung Ihrer Mietobjekte",
    icon: ClipboardCheck,
    details: [
      "Mietvertragsgestaltung",
      "Nebenkostenabrechnung",
      "Mieterkommunikation",
    ],
  },
  {
    title: "WEG-Verwaltung",
    description: "Kompetente Verwaltung von Wohnungseigentümergemeinschaften",
    icon: HeartHandshake,
    details: [
      "Eigentümerversammlungen",
      "Wirtschaftsplanung",
      "Beschlussumsetzung",
    ],
  },
  {
    title: "Sondereigentumsverwaltung",
    description: "Individuelle Betreuung Ihrer Eigentumseinheiten",
    icon: Shield,
    details: [
      "Vermietungsservice",
      "Objektbetreuung",
      "Reporting",
    ],
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-12 sm:py-20 bg-secondary">
      <div className="container px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Unsere Dienstleistungen</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {services.map((service) => (
            <Card key={service.title} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <service.icon className="w-10 h-10 sm:w-12 sm:h-12 mb-4 text-primary" />
                <CardTitle className="text-lg sm:text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.details.map((detail) => (
                    <li key={detail} className="text-xs sm:text-sm text-muted-foreground">
                      • {detail}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};