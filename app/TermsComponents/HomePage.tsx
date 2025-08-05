"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { categories, devTerms } from "../lib/terms";
import { Archery, PlaySolid, Timer } from "iconoir-react";
import Link from "next/link";
import type { SessionDuration } from "../lib/types";
import TypingDemo from "../components/TypingDemo";

const HomePage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedDuration, setSelectedDuration] = useState<SessionDuration>(60);

  const durations: { value: SessionDuration; label: string }[] = [
    { value: 60, label: "1 minute" },
    { value: 120, label: "2 minutes" },
    { value: 180, label: "3 minutes" },
  ];

  // Function to get term count for each category
  const getTermCount = (category: string): number => {
    if (category === "All") {
      return devTerms.length;
    }
    return devTerms.filter((term) => term.category === category).length;
  };

  return (
    <div className="space-y-8">
      {/* Demo Section */}

      <TypingDemo />

      {/* Configuration Section */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-foreground mb-2">
          Start Your Practice Session
        </h2>
        <p className="text-muted-foreground">
          Choose your category and session duration to begin
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Category Selection */}

        <Card className="border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground">
              <Archery className="size-5" />
              Choose Category
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={
                    selectedCategory === category ? "secondary" : "outline"
                  }
                  className="justify-start"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                  <Badge variant="secondary" className="ml-auto">
                    {getTermCount(category)} terms
                  </Badge>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Duration Selection */}
        <Card className="border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground">
              <Timer className="size-5" />
              Session Duration
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {durations.map((duration) => (
                <Button
                  key={duration.value}
                  variant={
                    selectedDuration === duration.value
                      ? "secondary"
                      : "outline"
                  }
                  className="w-full justify-start text-lg py-6"
                  onClick={() => setSelectedDuration(duration.value)}
                >
                  {duration.label}
                </Button>
              ))}

              <Link
                href={`/practice?category=${encodeURIComponent(
                  selectedCategory
                )}&duration=${selectedDuration}`}
              >
                <Button size="lg" className="w-full mt-6">
                  <PlaySolid className="size-5 mr-2" />
                  Start Typing Practice
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HomePage;