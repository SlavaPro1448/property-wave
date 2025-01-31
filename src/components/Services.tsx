import { Building2, ClipboardCheck, HeartHandshake, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Property Management",
    description: "Comprehensive management services for your property portfolio",
    icon: Building2,
  },
  {
    title: "Maintenance",
    description: "Regular maintenance and emergency repair services",
    icon: ClipboardCheck,
  },
  {
    title: "Tenant Relations",
    description: "Professional tenant communication and support",
    icon: HeartHandshake,
  },
  {
    title: "Security",
    description: "Ensuring the safety and security of your properties",
    icon: Shield,
  },
];

export const Services = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card key={service.title} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <service.icon className="w-12 h-12 mb-4 text-primary" />
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};