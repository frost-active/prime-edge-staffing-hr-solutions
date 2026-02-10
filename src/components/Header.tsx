import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/primedge-logo.png";
const navItems = [{
  label: "Home",
  path: "/"
}, {
  label: "Services",
  path: "/services"
}, {
  label: "Industries",
  path: "/industries"
}, {
  label: "About",
  path: "/about"
}, {
  label: "Contact",
  path: "/contact"
}];
const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  return <header className="sticky top-0 z-50 border-b border-border/40 bg-card/95 backdrop-blur-md">
      {/* Top bar */}
      <div className="hidden border-b border-border/30 bg-primary md:block">
        <div className="container-wide flex items-center justify-end gap-6 py-2 text-xs text-primary-foreground/90">
          <a className="flex items-center gap-1.5 transition-opacity hover:opacity-80" href="tel:+919886665201">
            <Phone size={12} /> +91-98866 65201 
          </a>
          <a href="mailto:info@primeedgehr.com" className="flex items-center gap-1.5 transition-opacity hover:opacity-80">
            <Mail size={12} /> info@primeedgehr.com
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="container-wide flex items-center justify-between py-3 md:py-4">
        <Link to="/" className="flex-shrink-0">
          <img src={logo} alt="Prime Edge Staffing & HR Solutions" className="h-10 w-auto md:h-12" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map(item => <Link key={item.path} to={item.path} className={`nav-link rounded-md px-4 py-2 ${location.pathname === item.path ? "text-accent font-semibold" : "text-foreground/80 hover:text-foreground"}`}>
              {item.label}
            </Link>)}
          <Link to="/contact">
            <Button variant="default" size="sm" className="ml-3 bg-accent text-accent-foreground hover:bg-accent/90">
              Get Consultation
            </Button>
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button className="p-2 md:hidden" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && <nav className="border-t border-border/30 bg-card px-4 pb-4 md:hidden">
          {navItems.map(item => <Link key={item.path} to={item.path} onClick={() => setMobileOpen(false)} className={`block rounded-md px-4 py-3 text-sm font-medium ${location.pathname === item.path ? "text-accent bg-accent/5" : "text-foreground/80"}`}>
              {item.label}
            </Link>)}
          <Link to="/contact" onClick={() => setMobileOpen(false)}>
            <Button variant="default" size="sm" className="mt-2 w-full bg-accent text-accent-foreground hover:bg-accent/90">
              Get Consultation
            </Button>
          </Link>
        </nav>}
    </header>;
};
export default Header;