import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - DevTerms",
  description: "Terms of service for DevTerms typing practice application.",
};

export default function TermsPage() {
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

        {/* Terms of Service Content */}
        <Card className="border-border">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground">
              Terms of Service
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              Last updated: 2025-08-5
            </p>
          </CardHeader>
          <CardContent className="prose prose-sm max-w-none">
            <div className="space-y-6 text-foreground">
              <section>
                <h2 className="text-lg font-semibold mb-3">
                  Acceptance of Terms
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing and using DevTerms, you accept and agree to be
                  bound by the terms and provision of this agreement. If you do
                  not agree to abide by the above, please do not use this
                  service.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold mb-3">
                  Description of Service
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  DevTerms is a free typing practice application focused on
                  developer terminology. The service provides timed typing
                  sessions with randomly generated sentences containing
                  programming and development-related terms to help users
                  improve their typing skills and coding vocabulary.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold mb-3">Use License</h2>
                <div className="text-muted-foreground leading-relaxed space-y-2">
                  <p>
                    Permission is granted to temporarily access DevTerms for
                    personal, non-commercial transitory viewing only. This is
                    the grant of a license, not a transfer of title, and under
                    this license you may not:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Modify or copy the materials</li>
                    <li>
                      Use the materials for any commercial purpose or for any
                      public display
                    </li>
                    <li>
                      Attempt to reverse engineer any software contained on the
                      website
                    </li>
                    <li>
                      Remove any copyright or other proprietary notations from
                      the materials
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-lg font-semibold mb-3">User Conduct</h2>
                <div className="text-muted-foreground leading-relaxed space-y-2">
                  <p>
                    You agree to use DevTerms only for lawful purposes and in a
                    way that does not infringe the rights of, restrict, or
                    inhibit anyone else's use and enjoyment of the service. You
                    may not:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>
                      Attempt to gain unauthorized access to any portion of the
                      service
                    </li>
                    <li>Use any automated means to access the service</li>
                    <li>Interfere with or disrupt the service or servers</li>
                    <li>
                      Use the service for any illegal or unauthorized purpose
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-lg font-semibold mb-3">Educational Use</h2>
                <p className="text-muted-foreground leading-relaxed">
                  DevTerms is designed for educational purposes to help users
                  learn developer terminology and improve typing skills. The
                  definitions and terms provided are for educational reference
                  and may not be comprehensive or suitable for all professional
                  contexts.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold mb-3">Disclaimer</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The materials on DevTerms are provided on an 'as is' basis.
                  DevTerms makes no warranties, expressed or implied, and hereby
                  disclaims and negates all other warranties including without
                  limitation, implied warranties or conditions of
                  merchantability, fitness for a particular purpose, or
                  non-infringement of intellectual property or other violation
                  of rights.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold mb-3">Limitations</h2>
                <p className="text-muted-foreground leading-relaxed">
                  In no event shall DevTerms or its suppliers be liable for any
                  damages (including, without limitation, damages for loss of
                  data or profit, or due to business interruption) arising out
                  of the use or inability to use DevTerms, even if DevTerms or a
                  DevTerms authorized representative has been notified orally or
                  in writing of the possibility of such damage.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold mb-3">
                  Accuracy of Materials
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  The materials appearing on DevTerms could include technical,
                  typographical, or photographic errors. DevTerms does not
                  warrant that any of the materials on its website are accurate,
                  complete, or current. DevTerms may make changes to the
                  materials contained on its website at any time without notice.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold mb-3">Modifications</h2>
                <p className="text-muted-foreground leading-relaxed">
                  DevTerms may revise these terms of service at any time without
                  notice. By using this application, you are agreeing to be
                  bound by the then current version of these terms of service.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold mb-3">Governing Law</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These terms and conditions are governed by and construed in
                  accordance with applicable laws, and you irrevocably submit to
                  the exclusive jurisdiction of the courts in that state or
                  locality.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold mb-3">
                  Contact Information
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about these Terms of Service, please
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
