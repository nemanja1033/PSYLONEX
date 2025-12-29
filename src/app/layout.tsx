import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import SiteHeader from "../components/ui/SiteHeader";
import IntroOverlay from "../components/ui/IntroOverlay";
import PageTransition from "../components/ui/PageTransition";
import NetworkBackground from "../components/ui/NetworkBackground";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans"
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono"
});

export const metadata: Metadata = {
  title: "Psylonex | Mycelium Network Systems",
  description:
    "Psylonex designs reliable information systems that simplify complexity and quietly power better organizations."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${plexMono.variable}`}>
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <IntroOverlay />
        <div className="page-shell">
          <NetworkBackground
            density={0.6}
            speed={0.2}
            opacity={0.35}
            animated={false}
          />
          <SiteHeader />
          <PageTransition>
            <div id="main-content">{children}</div>
          </PageTransition>
          <footer className="site-footer">
            <div>Psylonex. Systems that quietly power better organizations.</div>
            <div className="footer-meta">
              <span>hello@psylonex.com</span>
              <span>Engineered for clarity.</span>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
