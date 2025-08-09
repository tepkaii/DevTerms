// app/components/loading.tsx

"use client";
import Lottie from "lottie-react";
import animationData from "../../public/assets/DT-Logo.json";

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Lottie
        animationData={animationData}
        loop
        autoplay
        style={{ height: 70 }}
      />
    </div>
  );
}
