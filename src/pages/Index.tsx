
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Truck, ArrowRight, Leaf, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import VehicleSection from "@/components/VehicleSection";

const Index = () => {
  const [isHovered, setIsHovered] = useState(false);
  const howItWorksRef = useRef<HTMLElement>(null);
  const vehiclesRef = useRef<HTMLElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const benefits = [
    {
      icon: <Building2 className="w-6 h-6 text-primary" />,
      title: "For Businesses",
      description: "Affordable, on-demand logistics with flexible pricing",
    },
    {
      icon: <Truck className="w-6 h-6 text-primary" />,
      title: "For Transporters",
      description: "Increased earnings through optimized trips",
    },
    {
      icon: <Leaf className="w-6 h-6 text-primary" />,
      title: "For Cities",
      description: "Reduced congestion and emissions",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Resource Pooling",
      description: "Connect transporters with businesses seamlessly",
    },
    {
      number: "02",
      title: "Smart Routing",
      description: "AI-driven optimization of delivery paths",
    },
    {
      number: "03",
      title: "Multi-Load Trips",
      description: "Maximize vehicle capacity and efficiency",
    },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-green-50 to-white -z-10" />
        <div className="container mx-auto px-4 py-32 flex flex-col items-center text-center gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl"
          >
            <div className="flex items-center justify-center mb-8">
              <div className="flex items-center gap-2 text-2xl font-bold">
                <Truck className="w-8 h-8 text-primary" />
                <span className="text-gray-900">LOAD</span>
                <span className="text-primary">MATE</span>
              </div>
            </div>
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6 inline-block">
              Welcome to LOADMATE
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Revolutionizing Urban Logistics with{" "}
              <span className="text-primary">Smart Shared Solutions</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join the future of efficient, sustainable, and cost-effective urban
              delivery solutions.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => scrollToSection(vehiclesRef)}
              >
                Get Started
                <ArrowRight
                  className={`ml-2 transition-transform duration-300 ${
                    isHovered ? "translate-x-1" : ""
                  }`}
                />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 hover:bg-gray-50"
                onClick={() => scrollToSection(howItWorksRef)}
              >
                How It Works
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section ref={howItWorksRef} className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our platform simplifies urban logistics through three key steps,
              making deliveries more efficient and sustainable.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="relative p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl font-bold text-primary/20 mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Benefits for Everyone
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our platform creates value for all stakeholders in the urban logistics
              ecosystem.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="mb-4 inline-block p-3 bg-primary/10 rounded-lg">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicle Selection Section */}
      <section ref={vehiclesRef}>
        <VehicleSection />
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-90" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Logistics?
            </h2>
            <p className="text-lg mb-8 text-white/90">
              Join LOADMATE today and be part of the future of urban delivery.
            </p>
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-gray-100"
            >
              Get Started Now
              <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
