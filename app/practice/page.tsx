import PracticeView from "../TermsComponents/PracticeView";
import { devTerms } from "../lib/terms";
import type { SessionDuration, Term } from "../lib/types";
import type { Metadata } from "next";

interface PracticePageProps {
  searchParams: Promise<{
    category?: string;
    duration?: string;
  }>;
}

export const metadata: Metadata = {
  title: "Practice Session - DevTerms",
  description:
    "Active typing practice session for developer terms. Improve your coding vocabulary and typing speed.",
  openGraph: {
    type: "website",
    title: "Practice Session - DevTerms",
    description:
      "Active typing practice session for developer terms. Improve your coding vocabulary and typing speed.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Practice Session - DevTerms",
    description:
      "Active typing practice session for developer terms. Improve your coding vocabulary and typing speed.",
  },
};

export default async function PracticePage({
  searchParams,
}: PracticePageProps) {
  const params = await searchParams;
  const category = params.category || "All";
  const duration = parseInt(params.duration || "60") as SessionDuration;

  const getFilteredTerms = (): Term[] => {
    if (category === "All") {
      return devTerms;
    }
    return devTerms.filter((term) => term.category === category);
  };

  return (
    <PracticeView
      terms={getFilteredTerms()}
      category={category}
      duration={duration}
    />
  );
}