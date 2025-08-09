// app/components/ConfigurationDialog.tsx

"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { categories, devTerms } from "../lib/terms";
import { Settings, Timer, Archery } from "iconoir-react";
import type { SessionDuration } from "../lib/types";

interface ConfigurationDialogProps {
  currentCategories: string[];
  currentDuration: SessionDuration;
  onConfigurationChange: (
    categories: string[],
    duration: SessionDuration
  ) => void;
  children: React.ReactNode;
}

const ConfigurationDialog: React.FC<ConfigurationDialogProps> = ({
  currentCategories,
  currentDuration,
  onConfigurationChange,
  children,
}) => {
  const [selectedCategories, setSelectedCategories] =
    useState<string[]>(currentCategories);
  const [selectedDuration, setSelectedDuration] =
    useState<SessionDuration>(currentDuration);
  const [isOpen, setIsOpen] = useState(false);

  const durations: { value: SessionDuration; label: string }[] = [
    { value: 60, label: "1 minute" },
    { value: 120, label: "2 minutes" },
    { value: 180, label: "3 minutes" },
  ];

  // Get term count for selected categories
  const getTermCount = (categories: string[]): number => {
    if (categories.length === 0) return 0;

    const uniqueTerms = new Set<string>();
    categories.forEach((category) => {
      const categoryTerms = devTerms.filter(
        (term) => term.category === category
      );
      categoryTerms.forEach((term) => uniqueTerms.add(term.term));
    });

    return uniqueTerms.size;
  };

  const handleCategoryToggle = (category: string) => {
    setSelectedCategories((prev) => {
      const isSelected = prev.includes(category);
      if (isSelected) {
        return prev.filter((c) => c !== category);
      } else {
        return [...prev, category];
      }
    });
  };

  const handleSelectAll = () => {
    // Get all categories except "All"
    const allCategories = categories.filter((cat) => cat !== "All");
    setSelectedCategories(allCategories);
  };

  const handleDeselectAll = () => {
    setSelectedCategories([]);
  };

  const handleApply = () => {
    // Ensure at least one category is selected
    const categoriesToApply =
      selectedCategories.length > 0 ? selectedCategories : ["JavaScript"];
    onConfigurationChange(categoriesToApply, selectedDuration);
    setIsOpen(false);
  };

  const formatCategoriesDisplay = (categories: string[]): string => {
    if (categories.length === 0) return "No categories";
    if (categories.length === 1) return categories[0];
    if (categories.length === 2) return categories.join(" & ");
    return `${categories.slice(0, 2).join(", ")} +${
      categories.length - 2
    } more`;
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto border-2 border-black/20">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Settings className="size-5" />
            Practice Configuration
          </DialogTitle>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Category Selection */}
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <Archery className="size-5" />
                Choose Categories
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Select All/None buttons */}
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleSelectAll}
                    disabled={
                      selectedCategories.length ===
                      categories.filter((c) => c !== "All").length
                    }
                  >
                    Select All
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleDeselectAll}
                    disabled={selectedCategories.length === 0}
                  >
                    Clear All
                  </Button>
                </div>

                {/* Category checkboxes */}
                <div className="grid gap-3 max-h-64 overflow-y-auto">
                  {categories
                    .filter((category) => category !== "All")
                    .map((category) => {
                      const categoryTermCount = devTerms.filter(
                        (term) => term.category === category
                      ).length;
                      const isSelected = selectedCategories.includes(category);

                      return (
                        <div
                          key={category}
                          className="flex items-center space-x-3 p-3 border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors"
                          onClick={() => handleCategoryToggle(category)}
                        >
                          <Checkbox
                            id={category}
                            checked={isSelected}
                            onChange={() => handleCategoryToggle(category)}
                          />
                          <label
                            htmlFor={category}
                            className="flex-1 cursor-pointer flex justify-between items-center"
                          >
                            <span className="font-medium">{category}</span>
                            <Badge variant="secondary" className="ml-2">
                              {categoryTermCount} terms
                            </Badge>
                          </label>
                        </div>
                      );
                    })}
                </div>

                {/* Selected summary */}
                <div className="p-3 bg-muted rounded-lg">
                  <div className="text-sm text-muted-foreground mb-1">
                    Selected:
                  </div>
                  <div className="font-medium">
                    {selectedCategories.length === 0
                      ? "No categories selected"
                      : formatCategoriesDisplay(selectedCategories)}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    Total terms: {getTermCount(selectedCategories)}
                  </div>
                </div>
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
              <div className="space-y-3">
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
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Apply button */}
        <div className="flex justify-end pt-4 border-t">
          <Button
            onClick={handleApply}
            disabled={selectedCategories.length === 0}
            size="lg"
          >
            Apply Configuration
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ConfigurationDialog;
