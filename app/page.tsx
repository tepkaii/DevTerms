import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowArchery, LightBulbOn } from "iconoir-react";
import HomePage from "./TermsComponents/HomePage";
import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "DevTerms – Practice Developer Terms Typing",
  description:
    "Practice typing developer terms in real sentences to boost your coding vocabulary and typing speed. Improve your fluency and understanding of software terminology.",
  metadataBase: new URL("https://devterms.site"),

  openGraph: {
    title: "DevTerms – Practice Developer Terms Typing",
    description:
      "Boost your typing speed and programming vocabulary with real-time developer term practice.",
    url: "https://devterms.site",
    siteName: "DevTerms",
    type: "website",
    locale: "en",
  },
  twitter: {
    card: "summary_large_image",
    title: "DevTerms – Practice Developer Terms Typing",
    description:
      "Boost your typing speed and programming vocabulary with real-time developer term practice.",
    creator: "@tepkaii",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// Server-side rendered main page
export default function MainPage() {
  return (
    <div className="min-h-screen bg-background p-6 select-none max-w-6xl mx-auto">
      {/* Header */}
      <header className="flex items-center justify-between gap-3 mb-16">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/dt-logo.png"
            alt="DevTerms Logo"
            width={32}
            height={32}
            className="h-8 w-8"
            priority
          />{" "}
          <h1 className="text-xl font-bold text-foreground">DevTerms</h1>{" "}
        </Link>
        <Link target="_blank" href="https://x.com/tepkaii">
          {" "}
          <Button variant={"secondary"}>Support</Button>{" "}
        </Link>
      </header>

      <div>
        <div className="text-center mb-12">
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Type developer terms in random sentences. Practice coding vocabulary
            while improving your typing speed!
          </p>
        </div>

        {/* Interactive HomePage Component */}
        <HomePage />

        {/* Instructions */}
        <Card className="mt-8 border-border">
          <CardHeader>
            <CardTitle className="text-foreground">How to Play</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <h4 className="font-semibold mb-2 flex items-center text-foreground">
                  <ArrowArchery className="size-5 mr-2" /> Typing Rules
                </h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Type the highlighted developer terms</li>
                  <li>• Press SPACE or Skip to move to next word</li>
                  <li>• Focus on accuracy over speed</li>
                  <li>• New sentences generate automatically</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2 flex items-center text-foreground">
                  <LightBulbOn className="size-5 mr-2" /> Features
                </h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Hover over completed words for definitions</li>
                  <li>• Real-time WPM and accuracy tracking</li>
                  <li>• Timer-based sessions</li>
                  <li>• Category-specific practice</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
