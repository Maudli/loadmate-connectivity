
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Vehicle {
  name: string;
  image: string;
  capacity: string;
  baseFare: number | string;
  perKm: number | string;
  features: string[];
}

const vehicles: Vehicle[] = [
  {
    name: "Mini Auto",
    image: "/https://i.ibb.co/DfcHYhcK/mini.png
",
    capacity: "350-500 kg",
    baseFare: 50,
    perKm: 10,
    features: [
      "Ideal for small loads",
      "Easy navigation in narrow streets",
      "Cost-effective solution",
    ],
  },
  {
    name: "Pickup Van",
    image: "/placeholder.svg",
    capacity: "700-1000 kg",
    baseFare: 80,
    perKm: 12,
    features: [
      "Perfect for small business",
      "Durable and fuel-efficient",
      "Weather protection",
    ],
  },
  {
    name: "Light Commercial Vehicle",
    image: "/placeholder.svg",
    capacity: "1.5 - 2.5 tonnes",
    baseFare: 150,
    perKm: 15,
    features: [
      "Medium-sized shipments",
      "Secure and spacious",
      "Professional drivers",
    ],
  },
  {
    name: "Medium Truck",
    image: "/placeholder.svg",
    capacity: "3 - 4 tonnes",
    baseFare: 250,
    perKm: 18,
    features: [
      "Bulk goods transport",
      "Long-distance capable",
      "GPS tracking included",
    ],
  },
  {
    name: "Heavy-Duty Truck",
    image: "/placeholder.svg",
    capacity: "5 - 7 tonnes",
    baseFare: 400,
    perKm: 20,
    features: [
      "Heavy load specialist",
      "High load-bearing capacity",
      "24/7 support available",
    ],
  },
  {
    name: "Large Container Truck",
    image: "/placeholder.svg",
    capacity: "10+ tonnes",
    baseFare: "Custom",
    perKm: "Quote",
    features: [
      "Industrial shipments",
      "Advanced GPS tracking",
      "Temperature control",
    ],
  },
];

const VehicleSection = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Choose Your Vehicle
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Select from our wide range of vehicles tailored to meet your specific logistics needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicles.map((vehicle, index) => (
            <motion.div
              key={vehicle.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="p-0">
                  <div className="aspect-video relative overflow-hidden rounded-t-lg">
                    <img
                      src={vehicle.image}
                      alt={vehicle.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-primary/90 text-white px-3 py-1 rounded-full text-sm">
                      {vehicle.capacity}
                    </div>
                    <Button
                      size="icon"
                      variant="outline"
                      className="absolute top-4 right-4 bg-white/80 hover:bg-white"
                      onClick={() => {
                        // This functionality will be implemented by Lovable's image upload system
                        console.log("Edit image for", vehicle.name);
                      }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                      </svg>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{vehicle.name}</h3>
                  <div className="mb-4">
                    <div className="text-lg font-medium text-primary">
                      ₹{vehicle.baseFare} base + ₹{vehicle.perKm}/km
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {vehicle.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button className="w-full group" size="lg">
                    Book Now
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VehicleSection;
