import { useState } from "react";
import Layout from "@/components/Layout";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Phone,
  Mail,
  MapPin,
  Shield,
  CheckCircle,
  Send,
  ArrowRight,
  FileText,
  ClipboardCheck,
  Calendar } from
"lucide-react";
import { useToast } from "@/hooks/use-toast";

const leadMagnets = [
{
  icon: ClipboardCheck,
  title: "Download Compliance Checklist",
  desc: "Essential statutory compliance checklist for Indian businesses"
},
{ icon: FileText, title: "Free HR Compliance Audit", desc: "Get a comprehensive audit of your HR compliance status" },
{
  icon: Calendar,
  title: "Request Staffing Proposal",
  desc: "Custom staffing proposal tailored to your requirements"
}];


const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", message: "" });

  const scriptURL =
  "https://script.google.com/macros/s/AKfycbywIky-mGCVck1tz_SniigfAy3Lj9yddFNYretz7tmnBfcGVHa4s0RY6Z-eixBtEEM2/exec";

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validatePhone = (phone: string) => /^(\+91[\-\s]?)?[6-9]\d{9}$/.test(phone);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateEmail(form.email)) {
      toast({ title: "Invalid Email", description: "Please enter a valid email address." });
      return;
    }

    if (form.phone && !validatePhone(form.phone)) {
      toast({ title: "Invalid Phone Number", description: "Enter a valid Indian phone number." });
      return;
    }

    try {
      const res = await fetch(scriptURL, {
        method: "POST",
        body: JSON.stringify(form)
      });

      const result = await res.json();

      if (result.result === "success") {
        toast({
          title: "Message Sent!",
          description: "Thank you for contacting us."
        });

        setForm({ name: "", email: "", phone: "", company: "", message: "" });
      } else {
        throw new Error("Error submitting form");
      }
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Something went wrong. Please try again later.",
        variant: "destructive"
      });
    }
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary py-20 md:py-28">
        <div className="container-wide">
          <AnimateOnScroll>
            <h1 className="text-4xl font-extrabold text-primary-foreground md:text-5xl">
              Contact <span className="text-accent">Us</span>
            </h1>
            <p className="mt-4 max-w-xl text-lg text-primary-foreground/80">
              Let's discuss how Prime Edge can support your HR and staffing requirements.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Lead Magnets */}
      <section className="border-b border-border/50 bg-muted/50 py-10">
        <div className="container-wide grid gap-4 sm:grid-cols-3">
          {leadMagnets.map((lm, i) =>
          <AnimateOnScroll key={lm.title} delay={i * 100}>
              <button className="card-professional group w-full p-5 text-left transition-all hover:border-accent/30">
                <div className="mb-3 inline-flex items-center justify-center rounded-lg bg-accent/10 p-2.5">
                  <lm.icon size={20} className="text-accent" />
                </div>
                <h3 className="text-sm font-bold">{lm.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{lm.desc}</p>
              </button>
            </AnimateOnScroll>
          )}
        </div>
      </section>

      {/* Contact Form + Details */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Form */}
            <div className="lg:col-span-3">
              <AnimateOnScroll>
                <h2 className="text-2xl font-bold">Send Us a Message</h2>
                <p className="mt-2 text-muted-foreground">
                  Fill out the form below and our team will respond within 24 hours.
                </p>
                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-sm font-medium">Full Name *</label>
                      <Input
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Your full name" />

                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium">Email Address *</label>
                      <Input
                        required
                        type="email"
                        pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="you@company.com" />

                    </div>
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-sm font-medium">Phone Number</label>
                      <Input
                        pattern="^(\+91[\-\s]?)?[6-9]\d{9}$"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+91-9876543210" />

                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium">Company Name</label>
                      <Input
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        placeholder="Your company" />

                    </div>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium">Message *</label>
                    <Textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us about your HR requirements..." />

                  </div>
                  <Button type="submit" size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2">
                    Send Message <Send size={16} />
                  </Button>
                </form>
              </AnimateOnScroll>
            </div>

            {/* Contact info */}
            <div className="lg:col-span-2">
              <AnimateOnScroll delay={200}>
                <div className="card-professional p-8">
                  <h3 className="text-lg font-bold">Get in Touch</h3>
                  <div className="mt-6 space-y-5">
                    {/* Phone */}
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <Phone size={18} className="text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Phone</p>
                        <a
                          href="tel:+919886665201"
                          className="text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          +91 98866 65201
                        </a>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <Mail size={18} className="text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Email</p>
                        <a
                          href="mailto:info@primeedgehr.com"
                          className="text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          info@primeedgehr.com
                        </a>
                      </div>
                    </div>

                    {/* Location */}
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <MapPin size={18} className="text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Location</p>
                        <p className="text-sm text-muted-foreground">Bengaluru, Karnataka</p>
                      </div>
                    </div>
                  </div>

                  {/* Compliance */}
                  <div className="mt-8 rounded-lg border border-accent/20 bg-accent/5 p-4">
                    <div className="flex items-center gap-2">
                      <Shield size={18} className="text-accent" />
                      <h4 className="text-sm font-bold">Commitment to Compliance</h4>
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      Operating in full compliance with applicable central and state labour laws, promoting fair
                      employment practices and workplace ethics.
                    </p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {["PF", "ESI", "Labour Law", "POSH"].map((b) =>
                      <span
                        key={b}
                        className="inline-flex items-center gap-1 rounded-full border border-accent/20 bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent">

                          <CheckCircle size={8} /> {b}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>
    </Layout>);

};

export default Contact;