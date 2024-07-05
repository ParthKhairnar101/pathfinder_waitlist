import { Suspense } from "react";

import { NavBar } from "~/components/navbar";
import { SiteFooter } from "~/components/site-footer";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <Suspense fallback="...">
        <NavBar
          scroll={true}
          dropdown={{ dashboard: "Dashboard" }}
        />
      </Suspense>
      <main className="flex-1">{children}</main>
      <SiteFooter className="border-t" />
    </div>
  );
}
