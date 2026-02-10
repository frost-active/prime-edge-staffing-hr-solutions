import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Shield, CheckCircle } from "lucide-react";
import logo from "@/assets/primedge-logo.png";
const Footer = () => {
  return <footer className="bg-primary text-primary-foreground">
      {/* Compliance ribbon */}
      <div className="bg-accent py-3 text-center">
        <div className="container-wide flex items-center justify-center gap-2 text-sm font-semibold text-accent-foreground">
          <Shield size={16} />
          Statutory Compliance Certified — Operating in Full Compliance with Central & State Labour Laws
          <Shield size={16} />
        </div>
      </div>

      <div className="container-wide py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <img src={logo} alt="Prime Edge" className="mb-4 h-10 brightness-0 invert" />
            <p className="text-sm leading-relaxed text-primary-foreground/70">
              Professional staffing and HR services firm specializing in end-to-end HR management,
              workforce solutions, payroll, and statutory compliance.
            </p>
            {/* Compliance badges */}
            <div className="mt-4 flex flex-wrap gap-2">
              {["PF", "ESI", "Labour Law", "POSH"].map(badge => <span key={badge} className="inline-flex items-center gap-1 rounded-full border border-accent/40 bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent">
                  <CheckCircle size={10} /> {badge}
                </span>)}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-accent">Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              {["Staffing Solutions", "HR Operations", "Payroll & Compliance", "Employee Relations", "HR Digital Solutions"].map(s => <li key={s}>
                  <Link to="/services" className="transition-colors hover:text-accent">{s}</Link>
                </li>)}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-accent">Industries</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              {["Manufacturing", "Infrastructure & EPC", "IT & ITES", "Logistics", "Healthcare", "Retail"].map(i => <li key={i}>
                  <Link to="/industries" className="transition-colors hover:text-accent">{i}</Link>
                </li>)}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-accent">Contact</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-start gap-2">
                <Phone size={14} className="mt-0.5 flex-shrink-0 text-accent" />
                ​+91-98866 65201
 
              </li>
              <li className="flex items-start gap-2">
                <Mail size={14} className="mt-0.5 flex-shrink-0 text-accent" />
                info@primeedgehr.com
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 flex-shrink-0 text-accent" />
                India
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 py-4">
        <div className="container-wide text-center text-xs text-primary-foreground/50">
          © {new Date().getFullYear()} Prime Edge Staffing & HR Solutions. All rights reserved.
        </div>
      </div>
    </footer>;
};
export default Footer;