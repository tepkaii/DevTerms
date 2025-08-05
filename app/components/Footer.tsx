import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 mb-5 border-t border-border pt-6 text-sm text-muted-foreground text-center">
      <p>
        © {new Date().getFullYear()} DevTerms. Built to boost your dev
        vocabulary and typing speed.
      </p>
      <div className="mt-2 flex justify-center gap-4">
        <Link href="/privacy" className="hover:underline">
          Privacy
        </Link>
        <Link href="/terms" className="hover:underline">
          Terms
        </Link>
        <a
          href="https://github.com/your-repo" // ← Replace with your actual GitHub or project link
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
}
