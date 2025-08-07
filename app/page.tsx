// app/page.tsx
import PracticeView from "./TermsComponents/PracticeView";
import type { Metadata } from "next";

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
export default function PracticePage() {
  return <PracticeView />;
}
