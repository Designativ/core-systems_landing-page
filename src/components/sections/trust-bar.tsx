import { Star } from "lucide-react";

const softwareLogos = [
  "Google Analytics",
  "Semrush",
  "Cursor",
  "Vercel",
  "GitHub",
  "Webflow",
  "Figma",
];

export function TrustBar() {
  return (
    <section className="bg-muted/50 py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <h2 className="mb-4 text-lg font-semibold text-muted-foreground">
            Trusted by leading companies in BC
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <span className="ml-2 text-sm font-medium">
              4.9/5 from 50+ clients on Google
            </span>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-8 opacity-60 grayscale">
          {softwareLogos.map((software, index) => (
            <div
              key={index}
              className="flex h-12 items-center justify-center text-sm font-medium text-muted-foreground transition-opacity hover:opacity-100"
            >
              {software}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
