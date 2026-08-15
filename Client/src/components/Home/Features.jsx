import React from "react";
import FeatureCard from "./FeatureCard";
import { BarChart3, ShieldCheck, Zap } from "lucide-react";

const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Everything you need in one place
          </h2>
          <p className="text-sm sm:text-base text-slate-500 mt-2">
            Built for creators, marketers, and developers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          <FeatureCard
            icon={<Zap className="text-amber-500" />}
            title="Lightning Fast"
            description="Our global edge network ensures your redirects happen in the blink of an eye."
          />
          <FeatureCard
            icon={<BarChart3 className="text-indigo-500" />}
            title="Detailed Analytics"
            description="Track clicks, geographic data, and referrers to see who is clicking your links."
          />
          <FeatureCard
            icon={<ShieldCheck className="text-emerald-500" />}
            title="Secure & Reliable"
            description="Automatic HTTPS and phishing protection to keep your audience safe."
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
