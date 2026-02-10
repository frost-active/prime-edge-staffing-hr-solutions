import Layout from "@/components/Layout";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Eye, Shield, Heart, Handshake, Award,
  ArrowRight, CheckCircle, Target
} from "lucide-react";
import teamImg from "@/assets/about-team.jpg";

const values = [
  { icon: Eye, title: "Integrity", desc: "We operate with honesty, transparency, and ethical standards in every engagement." },
  { icon: Shield, title: "Compliance First", desc: "We prioritize statutory and regulatory adherence in all engagements.", highlight: true },
  { icon: Heart, title: "People Centricity", desc: "We value people as the foundation of organizational success." },
  { icon: Handshake, title: "Accountability", desc: "We take ownership of commitments and outcomes." },
  { icon: Award, title: "Excellence", desc: "We strive for continuous improvement and service quality." },
];

const approach = [
  { step: "01", title: "Understand", desc: "Client workforce and compliance requirements" },
  { step: "02", title: "Design", desc: "Structured and scalable HR solutions" },
  { step: "03", title: "Ensure", desc: "Statutory adherence and risk mitigation" },
  { step: "04", title: "Deliver", desc: "Consistent service quality and support" },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary py-20 md:py-28">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="container-wide relative z-10">
          <AnimateOnScroll>
            <h1 className="text-4xl font-extrabold text-primary-foreground md:text-5xl">
              About <span className="text-accent">Prime Edge</span>
            </h1>
            <p className="mt-4 max-w-xl text-lg text-primary-foreground/80">
              A professional staffing and HR services firm built on compliance, transparency, and people-first values.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* About section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <AnimateOnScroll>
              <div>
                <h2 className="text-3xl font-bold">Who We Are</h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Prime Edge Staffing & HR Solutions is a professional staffing and human resource
                  services firm specializing in end-to-end HR management, workforce solutions, payroll,
                  outsourcing and statutory compliance.
                </p>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  We partner with organizations across manufacturing, infrastructure, IT, services, and
                  emerging sectors to support their workforce requirements through structured, compliant,
                  and scalable HR solutions.
                </p>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Our approach combines deep HR domain expertise, strong compliance knowledge, and a
                  people-first mindset. At Prime Edge, we focus on delivering practical HR solutions
                  that reduce operational complexity, ensure compliance, and enable organizations to
                  focus on their core business.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={200}>
              <img
                src={teamImg}
                alt="Prime Edge team"
                className="rounded-xl shadow-lg"
              />
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
                <div className={`card-professional h-full p-6 text-center ${v.highlight ? "border-2 border-accent/30 ring-2 ring-accent/10" : ""}`}>
                  <div className={`mx-auto mb-4 inline-flex items-center justify-center rounded-full p-4 ${v.highlight ? "bg-accent/10" : "bg-primary/10"}`}>
                    <v.icon size={28} className={v.highlight ? "text-accent" : "text-primary"} />
                  </div>
                  <h3 className="font-bold">{v.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <AnimateOnScroll>
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold md:text-4xl">
                Our <span className="text-accent">Approach</span>
              </h2>
            </div>
          </AnimateOnScroll>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {approach.map((a, i) => (
              <AnimateOnScroll key={a.step} delay={i * 100}>
                <div className="card-professional relative p-6">
                  <span className="text-5xl font-extrabold text-primary/10">{a.step}</span>
                  <h3 className="mt-2 text-lg font-bold">{a.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{a.desc}</p>
                  {i < approach.length - 1 && (
                    <ArrowRight size={16} className="absolute right-4 top-1/2 hidden -translate-y-1/2 text-accent/30 lg:block" />
                  )}
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="section-padding bg-primary">
        <div className="container-wide text-center">
          <AnimateOnScroll>
            <div className="mx-auto inline-flex items-center justify-center rounded-full bg-accent/10 p-4">
              <Shield size={32} className="text-accent" />
            </div>
            <h2 className="mt-6 text-3xl font-bold text-primary-foreground">
              Commitment to Compliance
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/70">
              We are committed to operating in full compliance with applicable central and state
              labour laws, promoting fair employment practices, employee welfare, and workplace ethics.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {["PF", "ESI", "PT", "LWF", "Gratuity", "POSH", "Labour Law"].map((badge) => (
                <span key={badge} className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-3 py-1.5 text-sm font-medium text-accent">
                  <CheckCircle size={12} /> {badge}
                </span>
              ))}
            </div>
            <Link to="/contact" className="mt-8 inline-block">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2">
                Get Compliance Consultation <ArrowRight size={16} />
              </Button>
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
    </Layout>
  );
};

export default About;
