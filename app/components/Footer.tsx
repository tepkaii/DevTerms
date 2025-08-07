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
        <Link
          target="_blank"
          href="https://x.com/tepkaii"
          className="hover:underline"
        >
          Support
        </Link>
        {/* <a
          href="https://github.com/your-repo"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          GitHub
        </a> */}
      </div>
    </footer>
  );
}
