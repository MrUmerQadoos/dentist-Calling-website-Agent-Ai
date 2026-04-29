


import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import PricingSection from "@/components/landing/PricingSection";
import WhatToAsk from "@/components/landing/WhatToAsk";
import { syncUser } from "@/lib/actions/users";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Home() {
  const user = await currentUser();
  await syncUser();
  if (user) redirect("/dashboard");

  return (
    <div className="min-h-screen bg-[#070815]">
      <Header />
      {/* Hero now includes HowItWorks section directly below */}
      <Hero />
      {/* <WhatToAsk /> */}
      <PricingSection />
      <Footer />
    </div>
  );
}