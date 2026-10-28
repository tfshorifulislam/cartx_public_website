"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Truck,
  PackageCheck,
  Zap,
  Globe,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

export function CartXHero() {
  const [language, setLanguage] = useState<"en" | "bn">("en");

  const content = {
    en: {
      badge: "CartX Enterprise Logistics v2.4",
      h1: "Next-Gen Logistics Built for High-Growth E-Commerce",
      h2: "Scale deliveries across nationwide hubs with automated dispatch.",
      body: "CartX unifies courier routing, automated cash-on-delivery reconciliation, and sub-second parcel tracking in a single modern platform.",
      primaryCta: "Start Free Trial",
      secondaryCta: "Schedule Live Demo",
      statsTitle: "Real-Time Fleet Velocity",
      statsDesc: "Live telemetry across 64 distribution centers",
      stat1Label: "On-Time Delivery",
      stat1Value: "99.4%",
      stat2Label: "COD Settlement",
      stat2Value: "T+1 Day",
      stat3Label: "Parcels / Day",
      stat3Value: "185,000+",
      deliveryStatus: "Dispatched & In Transit",
      deliveryEta: "Estimated Delivery: 2:30 PM",
      features: [
        "Dynamic multi-courier AI routing",
        "Automated reverse logistics & NDR",
        "Instant merchant payout settlement",
      ],
      switchPrompt: "বাংলায় দেখুন",
    },
    bn: {
      badge: "কার্টএক্স এন্টারপ্রাইজ লজিস্টিকস ২.৪",
      h1: "উচ্চ প্রবৃদ্ধিশীল ই-কমার্সের জন্য আধুনিক লজিস্টিকস প্ল্যাটফর্ম",
      h2: "স্বয়ংক্রিয় ডিসপ্যাচ ও দ্রুততম ডেলিভারির সমন্বিত নেটওয়ার্ক।",
      body: "কার্টএক্স কুরিয়ার রাউটিং, ক্যাশ-অন-ডেলিভারি স্বয়ংক্রিয় সমন্বয় এবং রিয়েল-টাইম পার্সেল ট্র্যাকিং এনে দেয় এক ক্লিকে।",
      primaryCta: "ফ্রি ট্রায়াল শুরু করুন",
      secondaryCta: "লাইভ ডেমো দেখুন",
      statsTitle: "রিয়েল-টাইম ডেলিভারি পারফরম্যান্স",
      statsDesc: "সারাদেশের ৬৪টি ডিস্ট্রিবিউশন হাবের লাইভ ট্র্যাকিং",
      stat1Label: "অন-টাইম ডেলিভারি",
      stat1Value: "৯৯.৪%",
      stat2Label: "সিওডি সেটেলমেন্ট",
      stat2Value: "১ কার্যদিবস",
      stat3Label: "দৈনিক পার্সেল",
      stat3Value: "১,৮৫,০০০+",
      deliveryStatus: "ডেলিভারির পথে চলমান",
      deliveryEta: "সম্ভাব্য সময়: দুপুর ২:৩০",
      features: [
        "স্মার্ট মাল্টি-কুরিয়ার এআই রাউটিং",
        "স্বয়ংক্রিয় রিটার্ন ও এনডিআর হ্যান্ডলিং",
        "তাত্ক্ষণিক মার্চেন্ট পেমেন্ট সেটেলমেন্ট",
      ],
      switchPrompt: "View in English",
    },
  };

  const t = content[language];
  const isBn = language === "bn";

  return (
    <section className="relative overflow-hidden bg-background py-16 sm:py-24 lg:py-28">
      {/* Subtle SaaS decorative background accents */}
      <div
        className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-sky-200 to-blue-300 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Language Switcher Bar */}
        <div className="mb-8 flex items-center justify-between border-b border-border pb-4">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground font-black text-lg shadow-cartx-subtle">
              C
            </div>
            <span className="text-xl font-bold tracking-tight text-foreground">
              Cart<span className="text-primary">X</span>
            </span>
          </div>

          <button
            onClick={() => setLanguage(isBn ? "en" : "bn")}
            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold text-foreground shadow-cartx-subtle transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label="Toggle language between English and Bengali"
          >
            <Globe className="h-3.5 w-3.5 text-secondary" />
            <span>{t.switchPrompt}</span>
          </button>
        </div>

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Typography & CTAs */}
          <div
            className={`space-y-6 lg:col-span-7 ${
              isBn ? "font-bengali" : "font-sans"
            }`}
          >
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2">
              <Badge
                variant="subtle"
                className="flex items-center gap-1.5 px-3 py-1 text-xs font-medium text-sky-900 border-sky-200 bg-sky-50"
              >
                <Sparkles className="h-3.5 w-3.5 text-sky-600" />
                <span>{t.badge}</span>
              </Badge>
            </div>

            {/* H1 Heading */}
            <h1 className="text-cartx-h1 text-foreground leading-[1.12]">
              {isBn ? (
                <span>
                  উচ্চ প্রবৃদ্ধিশীল ই-কমার্সের জন্য{" "}
                  <span className="text-primary">আধুনিক লজিস্টিকস</span>
                </span>
              ) : (
                <span>
                  Next-Gen Logistics Built for{" "}
                  <span className="text-primary">High-Growth</span> E-Commerce
                </span>
              )}
            </h1>

            {/* H2 Subtitle */}
            <h2 className="text-cartx-h3 font-medium text-slate-700 leading-snug">
              {t.h2}
            </h2>

            {/* Body Text */}
            <p className="text-cartx-body text-muted-foreground max-w-2xl leading-relaxed">
              {t.body}
            </p>

            {/* Feature Checklist */}
            <ul className="space-y-2.5 pt-2">
              {t.features.map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-2.5 text-sm font-medium text-foreground"
                >
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Button
                size="lg"
                className="h-12 rounded-xl bg-primary px-7 text-base font-semibold text-primary-foreground shadow-sm hover:bg-primary-hover active:scale-[0.99] transition-all"
              >
                <span>{t.primaryCta}</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="h-12 rounded-xl border-border bg-card px-6 text-base font-semibold text-foreground shadow-cartx-subtle hover:bg-slate-100"
              >
                <Truck className="mr-2 h-4 w-4 text-slate-600" />
                <span>{t.secondaryCta}</span>
              </Button>
            </div>

            {/* Trust Micro-copy */}
            <div className="flex items-center gap-3 pt-2 text-xs text-muted-foreground">
              <div className="flex items-center gap-1 text-emerald-700">
                <ShieldCheck className="h-4 w-4" />
                <span className="font-medium">SOC-2 Type II Certified</span>
              </div>
              <span className="text-border">•</span>
              <span>14-day full access trial</span>
              <span className="text-border">•</span>
              <span>No credit card required</span>
            </div>
          </div>

          {/* Right Column: Interactive SaaS Cards Preview */}
          <div className="space-y-6 lg:col-span-5">
            {/* Primary Metrics Card */}
            <Card className="rounded-2xl border-border bg-card shadow-cartx-card transition-all duration-300 hover:shadow-cartx-hover">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-100 text-sky-700">
                      <TrendingUp className="h-4 w-4" />
                    </div>
                    <CardTitle
                      className={`text-lg font-bold ${
                        isBn ? "font-bengali" : "font-sans"
                      }`}
                    >
                      {t.statsTitle}
                    </CardTitle>
                  </div>
                  <Badge
                    variant="subtle"
                    className="border-emerald-200 bg-emerald-50 text-emerald-700 text-xs font-semibold"
                  >
                    ● 99.98% SLA
                  </Badge>
                </div>
                <CardDescription
                  className={isBn ? "font-bengali text-xs" : "text-xs"}
                >
                  {t.statsDesc}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* 3 Metric Pills */}
                <div className="grid grid-cols-3 gap-3 rounded-xl border border-border bg-slate-50/70 p-3.5">
                  <div className="text-center">
                    <p className="text-xs text-muted-foreground font-medium">
                      {t.stat1Label}
                    </p>
                    <p className="mt-1 text-base font-extrabold text-foreground">
                      {t.stat1Value}
                    </p>
                  </div>
                  <div className="border-x border-border text-center">
                    <p className="text-xs text-muted-foreground font-medium">
                      {t.stat2Label}
                    </p>
                    <p className="mt-1 text-base font-extrabold text-primary">
                      {t.stat2Value}
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-muted-foreground font-medium">
                      {t.stat3Label}
                    </p>
                    <p className="mt-1 text-base font-extrabold text-foreground">
                      {t.stat3Value}
                    </p>
                  </div>
                </div>

                {/* Live Parcel Status Strip */}
                <div className="rounded-xl border border-border bg-card p-4 shadow-cartx-subtle">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-primary">
                        <PackageCheck className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-foreground">
                          Parcel #CX-948201
                        </p>
                        <p
                          className={`text-xs text-muted-foreground ${
                            isBn ? "font-bengali" : "font-sans"
                          }`}
                        >
                          {t.deliveryEta}
                        </p>
                      </div>
                    </div>
                    <Badge className="bg-sky-50 text-sky-800 border-sky-200 text-[11px] font-semibold">
                      {t.deliveryStatus}
                    </Badge>
                  </div>

                  {/* Progress Line */}
                  <div className="mt-3.5 space-y-1">
                    <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
                      <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-blue-600 to-sky-400" />
                    </div>
                    <div className="flex justify-between text-[11px] text-muted-foreground font-medium">
                      <span>Warehouse</span>
                      <span>Hub Sort</span>
                      <span className="font-bold text-primary">Out for Delivery</span>
                      <span>Delivered</span>
                    </div>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="border-t border-border pt-4 text-xs text-muted-foreground justify-between">
                <span className="flex items-center gap-1.5 font-medium">
                  <Zap className="h-3.5 w-3.5 text-amber-600" />
                  Auto-routed via CartX SmartFlow™
                </span>
                <span className="font-mono text-[11px] text-slate-400">
                  Latency: 14ms
                </span>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
