"use client";

import { useState } from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const categories = [
  {
    name: "Branding",
    projects: Array.from({ length: 6 }, (_, i) => ({
      title: `Brand Project ${i + 1}`,
      description:
        "Brand identity and strategy development for industry leaders.",
    })),
  },
  {
    name: "Design",
    projects: Array.from({ length: 6 }, (_, i) => ({
      title: `Design Project ${i + 1}`,
      description: "Creative design solutions that capture brand essence.",
    })),
  },
  {
    name: "Digital",
    projects: Array.from({ length: 6 }, (_, i) => ({
      title: `Digital Project ${i + 1}`,
      description: "Digital transformation and online presence optimization.",
    })),
  },
  {
    name: "Video",
    projects: Array.from({ length: 6 }, (_, i) => ({
      title: `Video Project ${i + 1}`,
      description: "Engaging video content that tells your brand story.",
    })),
  },
  {
    name: "PR / Social Media",
    projects: Array.from({ length: 6 }, (_, i) => ({
      title: `PR Project ${i + 1}`,
      description: "Strategic communications and social media management.",
    })),
  },
  {
    name: "Logistics Marketing",
    projects: Array.from({ length: 6 }, (_, i) => ({
      title: `Logistics Project ${i + 1}`,
      description: "Specialized marketing solutions for logistics sector.",
    })),
  },
];

export function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap justify-center gap-4">
        {categories.map((category) => (
          <Button
            key={category.name}
            variant={
              selectedCategory.name === category.name ? "default" : "outline"
            }
            onClick={() => setSelectedCategory(category)}
          >
            {category.name}
          </Button>
        ))}
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {selectedCategory.projects.map((project, index) => (
          <Card
            key={`${selectedCategory.name}-${index}`}
            className="overflow-hidden"
          >
            <div className="aspect-video relative">
              <Image
                src={`/placeholder.svg?height=250&width=500`}
                alt={project.title}
                className="object-cover"
                fill
              />
            </div>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}
