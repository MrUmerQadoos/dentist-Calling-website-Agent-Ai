"use client";

import { CheckCircleIcon, CrownIcon, SparklesIcon, ZapIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

function CheckItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3">
      <CheckCircleIcon className="shrink-0 mt-1 text-green-500" size={16} />
      <span className="text-sm text-muted-foreground">{text}</span>
    </div>
  );
}

export function PricingCards() {
  const router = useRouter();
  const [loading, setLoading] = useState<string | null>(null);

  const handlePayment = async (plan: 'AI_BASIC' | 'AI_PRO') => {
    setLoading(plan);
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ plan }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Payment failed');
      }

      // Redirect to Stripe checkout
      if (data.url) {
        window.location.href = data.url;
      }
    } catch (error) {
      console.error('Payment error:', error);
      toast.error('Failed to initiate payment. Please try again.');
    } finally {
      setLoading(null);
    }
  };

  const handleFreePlan = () => {
    router.push('/dashboard');
    toast.success('Free plan activated!');
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {/* Free Plan */}
      <Card className="relative border-2 border-muted hover:border-primary/30 transition-all duration-300">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-2xl">Free</CardTitle>
            <Badge variant="neutral">
              Essential
            </Badge>
          </div>
          <CardDescription>Essential Dental Appointment Booking</CardDescription>
          
          <div className="mt-4">
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-bold">$0</span>
              <span className="text-muted-foreground">/month</span>
            </div>
            <p className="text-sm text-muted-foreground mt-1">Always free</p>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <CheckItem text="Unlimited appointment booking" />
          <CheckItem text="Basic Text Chat Support" />
          <CheckItem text="Appointment Reminders" />
          <CheckItem text="Find dentists in your area" />
        </CardContent>
        
        <CardFooter>
          <Button
            variant="outline"
            className="w-full"
            size="lg"
            onClick={handleFreePlan}
            disabled={loading !== null}
          >
            {loading === 'FREE' ? 'Activating...' : 'Get Started'}
          </Button>
        </CardFooter>
      </Card>

      {/* AI Basic Plan */}
      <Card className="relative border-2 border-primary/50 hover:border-primary transition-all duration-300 scale-105 shadow-lg">
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium inline-flex items-center gap-1">
            <SparklesIcon size={14} />
            Most Popular
          </div>
        </div>
        
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-2xl">AI Basic</CardTitle>
            <Badge variant="green">
              Active
            </Badge>
          </div>
          <CardDescription>AI consultations + appointment booking</CardDescription>
          
          <div className="mt-4">
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-bold">$10</span>
              <span className="text-muted-foreground">/month</span>
            </div>
            <p className="text-sm text-muted-foreground mt-1">Billed monthly</p>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <CheckItem text="Everything in Free" />
          <CheckItem text="10 AI Voice Calls Per Month" />
          <CheckItem text="AI Dental Guidance" />
          <CheckItem text="Priority Support" />
        </CardContent>
        
        <CardFooter>
          <Button
            className="w-full"
            size="lg"
            onClick={() => handlePayment('AI_BASIC')}
            disabled={loading !== null}
          >
            {loading === 'AI_BASIC' ? (
              <>
                <ZapIcon size={18} className="mr-2 animate-spin" />
                Processing...
              </>
            ) : (
              <>
                <ZapIcon size={18} className="mr-2" />
                Upgrade Now
              </>
            )}
          </Button>
        </CardFooter>
      </Card>

      {/* AI Pro Plan */}
      <Card className="relative border-2 border-purple-500/50 hover:border-purple-500 transition-all duration-300">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-2xl">AI Pro</CardTitle>
            <Badge variant="purple" icon={<CrownIcon size={14} />}>
              Premium
            </Badge>
          </div>
          <CardDescription>Unlimited AI consultations</CardDescription>
          
          <div className="mt-4">
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-bold">$19</span>
              <span className="text-muted-foreground">/month</span>
            </div>
            <p className="text-sm text-muted-foreground mt-1">Only billed monthly</p>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <CheckItem text="Everything in Basic" />
          <CheckItem text="Unlimited AI Voice Calls" />
          <CheckItem text="Personalized Care Plans" />
          <CheckItem text="Detailed Health Reports" />
        </CardContent>
        
        <CardFooter>
          <Button
            variant="outline"
            className="w-full border-purple-500 text-purple-500 hover:bg-purple-500/10"
            size="lg"
            onClick={() => handlePayment('AI_PRO')}
            disabled={loading !== null}
          >
            {loading === 'AI_PRO' ? (
              <>
                <CrownIcon size={18} className="mr-2 animate-spin" />
                Processing...
              </>
            ) : (
              <>
                <CrownIcon size={18} className="mr-2" />
                Go Pro
              </>
            )}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}