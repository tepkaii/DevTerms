"use client";

import { useEffect } from "react";
import posthog from "posthog-js";
import { PostHogProvider as PHProvider } from "posthog-js/react";

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Check if PostHog is enabled via your custom env variable
    if (process.env.NEXT_PUBLIC_POSTHOG_ENABLED !== "true") {
      posthog.opt_out_capturing();
      return;
    }

    if (!process.env.NEXT_PUBLIC_POSTHOG_KEY) {
      console.warn("PostHog key is missing.");
      return;
    }

    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
      api_host:
        process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com",
      person_profiles: "identified_only",
      capture_pageview: false,
      capture_pageleave: true,
    });
  }, []);

  return <PHProvider client={posthog}>{children}</PHProvider>;
}
