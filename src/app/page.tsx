import { CartXHero } from "@/components/cartx-hero";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* CartX Production Hero Showcase */}
      <CartXHero />

      {/* CartX Design System Token Inspector */}
      <section className="border-t border-border bg-slate-50/50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <Badge variant="subtle" className="mb-3 font-mono">
              DESIGN SYSTEM TOKENS
            </Badge>
            <h2 className="text-cartx-h2 text-foreground">
              CartX Brand Identity & Accessibility Matrix
            </h2>
            <p className="text-cartx-body text-muted-foreground mt-2 max-w-2xl mx-auto">
              Every token is rigorously calibrated for WCAG AAA/AA compliance,
              subtle SaaS aesthetics, and seamless dual-language typography.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Color Swatches */}
            <Card className="rounded-2xl shadow-cartx-card bg-card">
              <CardHeader>
                <CardTitle className="text-base">Brand Colors</CardTitle>
                <CardDescription>Mapped HSL CSS Tokens</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between p-2.5 rounded-lg border border-border bg-background">
                  <div className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded-md bg-primary shadow-xs" />
                    <span className="text-xs font-semibold text-foreground">Primary Brand</span>
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">#2563EB</span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-lg border border-border bg-background">
                  <div className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded-md bg-[#1D4ED8] shadow-xs" />
                    <span className="text-xs font-semibold text-foreground">Primary Hover</span>
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">#1D4ED8</span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-lg border border-border bg-background">
                  <div className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded-md bg-secondary shadow-xs" />
                    <span className="text-xs font-semibold text-foreground">Secondary Accent</span>
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">#38BDF8</span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-lg border border-border bg-background">
                  <div className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded-md bg-[#0F172A] shadow-xs" />
                    <span className="text-xs font-semibold text-foreground">Dark Navy Text</span>
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">#0F172A</span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-lg border border-border bg-background">
                  <div className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded-md bg-[#475569] shadow-xs" />
                    <span className="text-xs font-semibold text-foreground">Slate Body</span>
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">#475569</span>
                </div>
              </CardContent>
            </Card>

            {/* shadcn Button Variants */}
            <Card className="rounded-2xl shadow-cartx-card bg-card">
              <CardHeader>
                <CardTitle className="text-base">Button Component Matrix</CardTitle>
                <CardDescription>Accessible shadcn Buttons</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full">Primary CTA (#2563EB)</Button>
                <Button variant="secondary" className="w-full">Secondary Button</Button>
                <Button variant="outline" className="w-full">Outline Variant</Button>
                <Button variant="subtle" className="w-full">Subtle Pill Variant</Button>
                <Button variant="destructive" className="w-full">Destructive (#DC2626)</Button>
              </CardContent>
            </Card>

            {/* Status & Feedback Tokens */}
            <Card className="rounded-2xl shadow-cartx-card bg-card">
              <CardHeader>
                <CardTitle className="text-base">System Status & Badges</CardTitle>
                <CardDescription>Operational Indicators</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between p-2.5 rounded-lg border border-emerald-200 bg-emerald-50">
                  <span className="text-xs font-medium text-emerald-800">Success / Active</span>
                  <Badge variant="success">#16A34A</Badge>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-lg border border-amber-200 bg-amber-50">
                  <span className="text-xs font-medium text-amber-800">Warning / Delayed</span>
                  <Badge variant="warning">#D97706</Badge>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-lg border border-red-200 bg-red-50">
                  <span className="text-xs font-medium text-red-800">Error / NDR</span>
                  <Badge variant="destructive">#DC2626</Badge>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-lg border border-sky-200 bg-sky-50">
                  <span className="text-xs font-medium text-sky-800">Transit Accent</span>
                  <Badge variant="subtle">#38BDF8</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
