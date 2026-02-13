import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { MessageCircle } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/919886665201?text=" +
  encodeURIComponent("Hello, I would like to know more about your services.");

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />

      {/* Floating WhatsApp Button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-4 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-transform duration-200 hover:scale-110"
        style={{ backgroundColor: "#25D366" }}
      >
        <svg viewBox="0 0 32 32" className="h-7 w-7 fill-white">
          <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16.004c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958A15.9 15.9 0 0016.004 32C24.826 32 32 24.826 32 16.004S24.826 0 16.004 0zm9.302 22.602c-.39 1.1-1.932 2.012-3.178 2.278-.854.18-1.968.324-5.72-1.23-4.802-1.988-7.894-6.856-8.132-7.174-.228-.318-1.924-2.562-1.924-4.888 0-2.326 1.218-3.468 1.65-3.942.39-.428 1.028-.638 1.64-.638.198 0 .376.01.536.018.474.02.71.048 1.022.792.39.93 1.338 3.264 1.456 3.502.12.238.198.516.04.832-.15.318-.228.516-.456.792-.228.278-.478.62-.684.832-.228.238-.466.496-.2.97.268.474 1.188 1.96 2.552 3.174 1.754 1.562 3.23 2.046 3.69 2.274.46.228.728.19.996-.116.278-.318 1.178-1.37 1.494-1.842.308-.474.624-.39 1.052-.238.43.158 2.756 1.3 3.228 1.538.474.238.788.358.908.554.118.198.118 1.14-.272 2.24z" />
        </svg>
      </a>
    </div>
  );
};

export default Layout;
