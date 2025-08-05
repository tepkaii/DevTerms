"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { categories } from "../lib/terms";
import { Archery, PlaySolid, Timer } from "iconoir-react";
import Link from "next/link";
import type { SessionDuration } from "../lib/types";

const HomePage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedDuration, setSelectedDuration] = useState<SessionDuration>(60);

  const durations: { value: SessionDuration; label: string }[] = [
    { value: 30, label: "30 seconds" },
    { value: 60, label: "1 minute" },
    { value: 120, label: "2 minutes" },
  ];

  return (
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
                  {category === "All"
                    ? "15"
                    : category === "JavaScript"
                    ? "3"
                    : category === "React"
                    ? "3"
                    : category === "Frontend"
                    ? "3"
                    : category === "Backend"
                    ? "3"
                    : category === "Interview"
                    ? "3"
                    : "0"}{" "}
                  terms
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
                  selectedDuration === duration.value ? "secondary" : "outline"
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
  );
};

export default HomePage;
