import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import Layout from "@/components/Layout";
import heroImage from "@/assets/hero-workforce.jpg";
import {
  Shield,
  Users,
  FileCheck,
  BarChart3,
  Eye,
  Target,
  CheckCircle,
  Heart,
  Award,
  Handshake,
  Factory,
  HardHat,
  Monitor,
  Truck,
  Stethoscope,
  ShoppingCart,
  ArrowRight,
  Star,
} from "lucide-react";

const services = [
  {
    icon: Users,
    title: "Staffing Solutions",
    desc: "Permanent, contract & temporary staffing, manpower supply, and RPO to meet your workforce needs.",
  },
  {
    icon: FileCheck,
    title: "HR Operations & Consulting",
    desc: "End-to-end HR management, policy design, employee lifecycle, and performance management support.",
  },
  {
    icon: Shield,
    title: "Payroll & Compliance",
    desc: "Payroll processing, PF, ESI, PT, LWF, Gratuity, labour law compliance, and New Labour Codes support.",
  },
  {
    icon: BarChart3,
    title: "HR Digital Solutions",
    desc: "HRMS implementation, attendance management, leave systems, and HR analytics & reporting.",
  },
];

const values = [
  { icon: Eye, title: "Integrity", desc: "Honesty, transparency, and ethical standards" },
  { icon: Shield, title: "Compliance First", desc: "Statutory and regulatory adherence", highlight: true },
  { icon: Heart, title: "People Centricity", desc: "People as the foundation of success" },
  { icon: Handshake, title: "Accountability", desc: "Ownership of commitments and outcomes" },
  { icon: Award, title: "Excellence", desc: "Continuous improvement and quality" },
];

const industries = [
  { icon: Factory, label: "Manufacturing" },
  { icon: HardHat, label: "Infrastructure" },
  { icon: Monitor, label: "IT & ITES" },
  { icon: Truck, label: "Logistics" },
  { icon: Stethoscope, label: "Healthcare" },
  { icon: ShoppingCart, label: "Retail" },
];

const whyChoose = [
  "Strong focus on compliance and governance",
  "Experienced HR professionals with industry exposure",
  "Customized solutions aligned to business needs",
  "Transparent processes and ethical practices",
  "Reliable support across the employee lifecycle",
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden md:-mt-16">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Professional workforce" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-hero-gradient" />
        </div>
        <div className="container-wide relative z-10 py-20">
          <div className="max-w-2xl">
            <AnimateOnScroll>
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">
                <Shield size={14} /> Compliance-First HR Partner
              </span>
            </AnimateOnScroll>
            <AnimateOnScroll delay={100}>
              <h1 className="mt-4 text-4xl font-extrabold leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
                Trusted HR Partner for <span className="text-accent">Sustainable Growth</span>
              </h1>
            </AnimateOnScroll>
            <AnimateOnScroll delay={200}>
              <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80 md:text-xl">
                Delivering compliant, people-centric HR solutions that enable organizations to focus on their core
                business while we manage their workforce needs.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={300}>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/services">
                  <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2">
                    Explore Services <ArrowRight size={16} />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary-foreground text-primary-foreground bg-transparent hover:bg-primary-foreground hover:text-primary transition-colors duration-300"
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Trusted By strip */}
      <section className="border-b border-border/50 bg-card py-8">
        <div className="container-wide text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Trusted by HR & Operations Leaders Across Industries
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {industries.map((ind) => (
              <div key={ind.label} className="flex items-center gap-2 text-muted-foreground/60">
                <ind.icon size={20} />
                <span className="text-sm font-medium">{ind.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission – Redesigned */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Vision */}
            <AnimateOnScroll>
              <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-card p-10 shadow-sm">
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/10 blur-2xl" />

                <div className="mb-6 inline-flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <Target className="text-primary" size={26} />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Our Vision</h2>
                </div>

                <p className="mb-6 leading-relaxed text-muted-foreground">
                  To be a trusted and preferred HR partner for organizations by delivering reliable workforce solutions,
                  compliant HR practices, and people-centric services that drive sustainable business growth.
                </p>

                <div className="space-y-4">
                  {[
                    "Build long-term partnerships based on trust and transparency",
                    "Empower organizations with the right talent and HR strategy",
                    "Promote ethical employment and responsible workforce practices",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="mt-1 text-primary" size={18} />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>

            {/* Mission */}
            <AnimateOnScroll delay={150}>
              <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-card p-10 shadow-sm">
                <div className="absolute -left-10 -bottom-10 h-32 w-32 rounded-full bg-accent/10 blur-2xl" />

                <div className="mb-6 inline-flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                    <Star className="text-accent" size={26} />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Our Mission</h2>
                </div>

                <p className="mb-6 leading-relaxed text-muted-foreground">
                  To deliver end-to-end HR and staffing solutions aligned with business objectives while ensuring
                  compliance, operational efficiency, and a strong focus on people and performance.
                </p>

                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    "Provide scalable staffing and HR services",
                    "Ensure statutory compliance and governance",
                    "Enhance employee lifecycle management",
                    "Drive continuous HR process improvement",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="mt-1 text-accent" size={18} />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-muted/50">
        <div className="container-wide">
          <AnimateOnScroll>
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold md:text-4xl">
                What We <span className="text-accent">Do</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                Comprehensive HR solutions designed to reduce operational complexity and ensure compliance.
              </p>
            </div>
          </AnimateOnScroll>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, i) => (
              <AnimateOnScroll key={service.title} delay={i * 100}>
                <div className="card-professional group h-full border-t-4 border-t-primary p-6">
                  <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-primary/10 p-3 transition-colors duration-300 group-hover:bg-accent/10">
                    <service.icon
                      size={24}
                      className="text-primary transition-colors duration-300 group-hover:text-accent"
                    />
                  </div>
                  <h3 className="mb-2 text-lg font-bold">{service.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{service.desc}</p>
                  <Link
                    to="/services"
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent transition-colors hover:text-primary"
                  >
                    Learn More <ArrowRight size={14} />
                  </Link>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <AnimateOnScroll>
              <div>
                <h2 className="text-3xl font-bold md:text-4xl">
                  Why Choose <span className="text-accent">Prime Edge</span>
                </h2>
                <p className="mt-4 text-muted-foreground">
                  We combine deep HR domain expertise, strong compliance knowledge, and a people-first mindset.
                </p>
                <ul className="mt-8 space-y-4">
                  {whyChoose.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-accent/10">
                        <CheckCircle size={14} className="text-accent" />
                      </div>
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/about" className="mt-8 inline-block">
                  <Button variant="default" className="gap-2">
                    Learn More About Us <ArrowRight size={16} />
                  </Button>
                </Link>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={200}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { num: "100%", label: "Compliance Adherence" },
                  { num: "6+", label: "Industries Served" },
                  { num: "50+", label: "HR Professionals" },
                  { num: "24/7", label: "Support Availability" },
                ].map((stat, i) => (
                  <div key={i} className="card-professional p-6 text-center">
                    <div className="text-3xl font-extrabold text-primary">{stat.num}</div>
                    <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-muted/50">
        <div className="container-wide">
          <AnimateOnScroll>
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold md:text-4xl">
                Our Core <span className="text-accent">Values</span>
              </h2>
            </div>
          </AnimateOnScroll>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {values.map((v, i) => (
              <AnimateOnScroll key={v.title} delay={i * 80}>
                <div
                  className={`card-professional group p-6 text-center ${v.highlight ? "border-2 border-accent/30 ring-2 ring-accent/10" : ""}`}
                >
                  <div
                    className={`mx-auto mb-3 inline-flex items-center justify-center rounded-full p-3 ${v.highlight ? "bg-accent/10" : "bg-primary/10"}`}
                  >
                    <v.icon size={22} className={v.highlight ? "text-accent" : "text-primary"} />
                  </div>
                  <h3 className="text-sm font-bold">{v.title}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{v.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <AnimateOnScroll>
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold md:text-4xl">
                Industries We <span className="text-accent">Serve</span>
              </h2>
            </div>
          </AnimateOnScroll>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind, i) => (
              <AnimateOnScroll key={ind.label} delay={i * 80}>
                <Link
                  to="/industries"
                  className="card-professional group flex items-center gap-4 p-6 transition-all hover:border-accent/30"
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-accent/10">
                    <ind.icon size={24} className="text-primary transition-colors group-hover:text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold">{ind.label}</h3>
                    <p className="text-sm text-muted-foreground">Tailored workforce solutions</p>
                  </div>
                  <ArrowRight
                    size={16}
                    className="ml-auto text-muted-foreground/40 transition-colors group-hover:text-accent"
                  />
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-primary py-16 md:py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-accent" />
          <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-accent" />
        </div>
        <div className="container-wide relative z-10 text-center">
          <AnimateOnScroll>
            <h2 className="text-3xl font-bold text-primary-foreground md:text-4xl">
              Ready to Streamline Your HR Operations?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-primary-foreground/70">
              Get a free compliance consultation and discover how Prime Edge can help your organization grow
              sustainably.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2">
                  Get Compliance Consultation <ArrowRight size={16} />
                </Button>
              </Link>
              <Link to="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground text-primary-foreground bg-transparent hover:bg-primary-foreground hover:text-primary transition-colors duration-300"
                >
                  Download Service Brochure
                </Button>
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
