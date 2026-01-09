"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils/cn";

const testimonials = [
  {
    quote:
      "Working with this team transformed our operations. They built a custom inventory system that cut our processing time by 40% and paid for itself in 3 months.",
    name: "John Smith",
    title: "Operations Director",
    company: "ABC Manufacturing",
    stars: 5,
  },
  {
    quote:
      "Finally, a team that actually listens. They didn't just sell us software - they took time to understand our business and built exactly what we needed.",
    name: "Sarah Johnson",
    title: "CEO",
    company: "Tech Startup Inc.",
    stars: 5,
  },
  {
    quote:
      "Best investment we made this year. The automation they built saves us 15 hours a week and eliminated human errors in our order processing.",
    name: "Mike Chen",
    title: "Founder",
    company: "E-commerce Co.",
    stars: 5,
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-12 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            What Our Clients Say
          </h2>
        </div>
        <div className="mx-auto max-w-3xl">
          <Card className="border-2">
            <CardContent className="p-8 md:p-12">
              <div className="mb-6 flex">
                {[...Array(current.stars)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <blockquote className="mb-6 text-lg italic text-muted-foreground md:text-xl">
                "{current.quote}"
              </blockquote>
              <div>
                <p className="font-semibold">{current.name}</p>
                <p className="text-sm text-muted-foreground">
                  {current.title}, {current.company}
                </p>
              </div>
            </CardContent>
          </Card>
          <div className="mt-8 flex items-center justify-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={cn(
                    "h-2 w-2 rounded-full transition-colors",
                    index === currentIndex
                      ? "bg-primary"
                      : "bg-muted-foreground/30"
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
