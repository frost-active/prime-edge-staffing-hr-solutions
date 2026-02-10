import Layout from "@/components/Layout";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Factory, HardHat, Monitor, Truck, Stethoscope, ShoppingCart,
  ArrowRight, CheckCircle, Users, Shield, FileCheck
} from "lucide-react";
import manufacturingImg from "@/assets/industry-manufacturing.jpg";

const sectors = [
  {
    icon: Factory,
    title: "Manufacturing & Engineering",
    desc: "Labour law compliance, contract staffing, payroll management, and statutory adherence for manufacturing operations.",
    solutions: ["Contract staffing for production lines", "PF/ESI compliance management", "Safety training programs", "Labour law documentation"],
  },
  {
    icon: HardHat,
    title: "Infrastructure & EPC",
    desc: "Manpower supply, compliance management, and workforce solutions for construction and infrastructure projects.",
    solutions: ["Bulk manpower deployment", "Site-level compliance", "Third-party payroll", "Workforce planning"],
  },
  {
    icon: Monitor,
    title: "IT & ITES",
    desc: "Talent acquisition, RPO services, and HR operations for technology companies and IT-enabled services.",
    solutions: ["Tech talent acquisition", "RPO solutions", "HRMS implementation", "Performance management"],
  },
  {
    icon: Truck,
    title: "Logistics & Warehousing",
    desc: "Flexible staffing, attendance management, and compliance solutions for logistics and supply chain operations.",
    solutions: ["Flexible workforce deployment", "Attendance & shift management", "Statutory compliance", "Contract labour management"],
  },
  {
    icon: Stethoscope,
    title: "Healthcare",
    desc: "Specialized healthcare staffing, compliance training, and HR management for hospitals and healthcare facilities.",
    solutions: ["Healthcare staffing solutions", "POSH training", "Employee relations support", "Payroll administration"],
  },
  {
    icon: ShoppingCart,
    title: "Retail & Services",
    desc: "Seasonal staffing, workforce management, and HR digital solutions for retail and service-sector businesses.",
    solutions: ["Seasonal & temp staffing", "Workforce management", "Leave & attendance systems", "HR analytics"],
  },
];

const Industries = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary py-20 md:py-28">
        <div className="absolute inset-0 opacity-15">
          <img src={manufacturingImg} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="container-wide relative z-10">
          <AnimateOnScroll>
            <h1 className="text-4xl font-extrabold text-primary-foreground md:text-5xl">
              Industries We <span className="text-accent">Serve</span>
            </h1>
            <p className="mt-4 max-w-xl text-lg text-primary-foreground/80">
              Tailored HR and staffing solutions across six key industry verticals.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Industry overview stats */}
      <section className="border-b border-border/50 bg-card py-10">
        <div className="container-wide grid grid-cols-3 gap-6 text-center">
          {[
            { icon: Users, num: "6+", label: "Industries" },
            { icon: Shield, num: "100%", label: "Compliance" },
            { icon: FileCheck, num: "End-to-End", label: "HR Solutions" },
          ].map((stat, i) => (
            <AnimateOnScroll key={i} delay={i * 100}>
              <div>
                <stat.icon size={24} className="mx-auto mb-2 text-accent" />
                <div className="text-2xl font-extrabold text-primary md:text-3xl">{stat.num}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      {/* Sectors */}
      <section className="section-padding bg-background">
        <div className="container-wide space-y-8">
          {sectors.map((sector, i) => (
            <AnimateOnScroll key={sector.title} delay={i * 60}>
              <div className="card-professional overflow-hidden">
                <div className="grid md:grid-cols-3">
                  <div className="flex items-center gap-4 border-b border-border/50 bg-primary/5 p-6 md:border-b-0 md:border-r">
                    <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10">
                      <sector.icon size={28} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">{sector.title}</h3>
                    </div>
                  </div>
                  <div className="p-6 md:col-span-2">
                    <p className="mb-4 text-sm text-muted-foreground">{sector.desc}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {sector.solutions.map((sol, j) => (
                        <div key={j} className="flex items-start gap-2 text-sm">
                          <CheckCircle size={14} className="mt-0.5 flex-shrink-0 text-accent" />
                          <span>{sol}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-wide text-center">
          <AnimateOnScroll>
            <h2 className="text-3xl font-bold text-primary-foreground">
              Need Industry-Specific HR Support?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-primary-foreground/70">
              Our team understands the unique compliance and staffing challenges of your industry.
            </p>
            <Link to="/contact" className="mt-8 inline-block">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2">
                Get Consultation <ArrowRight size={16} />
              </Button>
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
    </Layout>
  );
};

export default Industries;
