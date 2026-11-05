import "./globals.css";

export const metadata = {
  title: "Roman2Urdu — Roman Urdu to Urdu Converter",
  description: "Convert Roman Urdu into Urdu script instantly. A free, simple transliteration tool with copy and share controls.",
  keywords: ["Roman Urdu to Urdu", "Urdu converter", "Roman Urdu transliteration", "Urdu typing"],
  openGraph: { title: "Roman2Urdu — Write Urdu Easily", description: "Convert Roman Urdu into Urdu script instantly.", type: "website" }
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}
