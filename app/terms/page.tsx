import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - DevTerms",
  description: "Privacy policy for DevTerms typing practice application.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="flex items-center justify-between mb-10">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/dt-logo.png"
              alt="DevTerms Logo"
              width={32}
              height={32}
              className="h-8 w-8"
              priority
            />
            <h1 className="text-xl font-bold text-foreground">DevTerms</h1>
          </Link>
          <Link href="/">
            <Button variant="secondary" size="sm">
              Back to Home
            </Button>
          </Link>
        </header>

        {/* Privacy Policy Content */}
        <Card className="border-border">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground">
              Privacy Policy
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              Last updated: 2025-08-5
            </p>
          </CardHeader>
          <CardContent className="prose prose-sm max-w-none">
            <div className="space-y-6 text-foreground">
              <section>
                <h2 className="text-lg font-semibold mb-3">Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  DevTerms ("we," "our," or "us") is committed to protecting
                  your privacy. This Privacy Policy explains how we collect,
                  use, and safeguard your information when you use our typing
                  practice application.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold mb-3">
                  Information We Collect
                </h2>
                <div className="text-muted-foreground leading-relaxed space-y-2">
                  <p>
                    <strong>Local Data Only:</strong> DevTerms operates entirely
                    in your browser. We do not collect, store, or transmit any
                    personal information to external servers.
                  </p>
                  <p>
                    <strong>Session Data:</strong> Your typing statistics (WPM,
                    accuracy, etc.) are temporarily stored in your browser's
                    memory during your session and are not saved permanently.
                  </p>
                  <p>
                    <strong>No Account Required:</strong> We do not require user
                    accounts or collect any identifying information.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-lg font-semibold mb-3">
                  How We Use Information
                </h2>
                <div className="text-muted-foreground leading-relaxed space-y-2">
                  <p>The temporary session data is used solely to:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Display your current typing statistics</li>
                    <li>Track your progress during a typing session</li>
                    <li>Provide feedback on completed terms</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-lg font-semibold mb-3">Data Storage</h2>
                <p className="text-muted-foreground leading-relaxed">
                  All data processing occurs locally in your browser. No
                  information is sent to external servers, databases, or
                  third-party services. When you close your browser or navigate
                  away from the site, all session data is automatically cleared.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold mb-3">
                  Cookies and Tracking
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  DevTerms does not use cookies, tracking pixels, or any form of
                  persistent storage. We do not track users across sessions or
                  collect analytics data.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold mb-3">
                  Third-Party Services
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  DevTerms does not integrate with any third-party analytics,
                  advertising, or tracking services. The application is designed
                  to function completely independently.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold mb-3">
                  Children's Privacy
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Since we do not collect any personal information, DevTerms is
                  safe for users of all ages. We do not knowingly collect any
                  information from children under 13.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold mb-3">
                  Changes to Privacy Policy
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Privacy Policy from time to time. Any
                  changes will be posted on this page with an updated "Last
                  updated" date. Since we do not collect contact information, we
                  cannot notify users directly of changes.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold mb-3">
                  Contact Information
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about this Privacy Policy, please
                  contact us through our GitHub repository or support channels
                  linked on our main website.
                </p>
              </section>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
