import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const caseStudies = [
  {
    client: "ABC Manufacturing",
    title: "Inventory Automation System",
    result: "40% faster processing, $50K saved annually",
    href: "/work/abc-manufacturing",
  },
  {
    client: "XYZ Retail",
    title: "Custom CRM Integration",
    result: "3x customer data accuracy",
    href: "/work/xyz-retail",
  },
  {
    client: "Tech Startup",
    title: "Workflow Automation",
    result: "20 hours/week saved",
    href: "/work/tech-startup",
  },
];

export function CaseStudies() {
  return (
    <section className="bg-muted/50 py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-12 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            See Our Work
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {caseStudies.map((study, index) => (
            <Card
              key={index}
              className="overflow-hidden border-2 transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5" />
              <CardHeader>
                <div className="mb-2 text-sm font-semibold text-primary">
                  {study.client}
                </div>
                <CardTitle className="text-xl">{study.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4 text-base">
                  {study.result}
                </CardDescription>
                <Link
                  href={study.href}
                  className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                >
                  Read case study <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
