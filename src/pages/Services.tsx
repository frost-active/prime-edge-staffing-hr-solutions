import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Button } from "@/components/ui/button";
import {
  Users, FileCheck, Shield, BarChart3, Heart, GraduationCap,
  ChevronDown, ChevronUp, ArrowRight, CheckCircle
} from "lucide-react";
import servicesImg from "@/assets/services-staffing.jpg";

const serviceCategories = [
  {
    icon: Users,
    title: "Staffing Solutions",
    items: [
      "Permanent Staffing",
      "Contract & Temporary Staffing",
      "Third-Party Payroll",
      "Manpower Supply",
      "Recruitment Process Outsourcing (RPO)",
    ],
  },
  {
    icon: FileCheck,
    title: "HR Operations & Consulting",
    items: [
      "End-to-End HR Management",
      "HR Policy & Process Design",
      "Employee Lifecycle Management",
      "Performance Management Support",
    ],
  },
  {
    icon: Shield,
    title: "Payroll & Statutory Compliance",
    items: [
      "Payroll Processing & Salary Administration",
      "PF, ESI, PT, LWF, Gratuity",
      "Labour Law Compliance & Documentation",
      "Liaising with government authorities for statutory registrations, inspections, and compliance matters",
      "Support under New Labour Codes",
    ],
  },
  {
    icon: Heart,
    title: "Employee Relations & Compliance Support",
    items: [
      "Grievance Handling",
      "Disciplinary Process Support",
      "Domestic Enquiry Assistance",
      "Workplace Investigations",
    ],
  },
  {
    icon: GraduationCap,
    title: "Learning & Development",
    items: [
      "POSH Awareness Programs",
      "Statutory & Compliance Training",
      "Behavioural & Leadership Training",
      "Safety & Workplace Ethics Programs",
    ],
  },
  {
    icon: BarChart3,
    title: "HR Digital Solutions",
    items: [
      "HRMS & Payroll System Implementation",
      "Attendance & Leave Management Systems",
      "HR Analytics & Reporting",
    ],
  },
];

const Services = () => {
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary py-20 md:py-28">
        <div className="absolute inset-0 opacity-20">
          <img src={servicesImg} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="container-wide relative z-10">
          <AnimateOnScroll>
            <h1 className="text-4xl font-extrabold text-primary-foreground md:text-5xl">
              Our <span className="text-accent">Services</span>
            </h1>
            <p className="mt-4 max-w-xl text-lg text-primary-foreground/80">
              Comprehensive, compliant, and customized HR solutions to power your workforce.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid gap-6 lg:grid-cols-2">
            {serviceCategories.map((cat, i) => (
              <AnimateOnScroll key={cat.title} delay={i * 80}>
                <div className="card-professional overflow-hidden border-t-4 border-t-primary">
                  <button
                    onClick={() => setExpanded(expanded === i ? null : i)}
                    className="flex w-full items-center gap-4 p-6 text-left"
                  >
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <cat.icon size={24} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold">{cat.title}</h3>
                      <p className="text-sm text-muted-foreground">{cat.items.length} services</p>
                    </div>
                    {expanded === i ? (
                      <ChevronUp size={20} className="text-muted-foreground" />
                    ) : (
                      <ChevronDown size={20} className="text-muted-foreground" />
                    )}
                  </button>
                  {expanded === i && (
                    <div className="border-t border-border/50 bg-muted/30 px-6 py-4">
                      <ul className="space-y-2.5">
                        {cat.items.map((item, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm">
                            <CheckCircle size={14} className="mt-0.5 flex-shrink-0 text-accent" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-muted/50">
        <div className="container-wide text-center">
          <AnimateOnScroll>
            <h2 className="text-3xl font-bold">Need a Customized HR Solution?</h2>
            <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
              Our team will design a tailored solution aligned to your business goals and compliance requirements.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2">
                  Request Staffing Proposal <ArrowRight size={16} />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="gap-2">
                  Schedule HR Audit <ArrowRight size={16} />
                </Button>
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
