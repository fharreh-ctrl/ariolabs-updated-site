import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { InlineWidget } from 'react-calendly';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Inbox, Calendar, Clock, CheckCircle } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function HomePage() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-background to-muted/20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-secondary font-semibold mb-4 uppercase tracking-wide">
                INQUIRY-FLOW MINI-AUDIT
              </p>
              <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
                Find the Leaks in Your Inquiry Flow Before They Cost You Clients
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                ArioLabs reviews your contact, booking, and follow-up flow, then sends a simple 1-page mini-audit with 3 practical fixes. No call needed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/schedule">
                  <Button size="lg" className="w-full sm:w-auto">
                    Request a Mini-Audit
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection('how-it-works')}
                  className="w-full sm:w-auto"
                >
                  See What We Check
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hidden md:block"
            >
              <div className="relative w-full h-[400px] bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-lg">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-secondary rounded-full animate-pulse"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12">
            Are You Losing Inquiries To...
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <Inbox className="w-12 h-12 mx-auto mb-4 text-destructive" />
              <h3 className="font-heading text-xl font-semibold mb-3">A Confusing Contact Form</h3>
              <p className="text-muted-foreground">
                Potential clients fill out your form but never hear back — or give up before they even submit.
              </p>
            </Card>
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <Calendar className="w-12 h-12 mx-auto mb-4 text-destructive" />
              <h3 className="font-heading text-xl font-semibold mb-3">A Broken Booking Page</h3>
              <p className="text-muted-foreground">
                Your booking link is buried, confusing, or missing entirely — making it hard for anyone to take the next step.
              </p>
            </Card>
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <Clock className="w-12 h-12 mx-auto mb-4 text-destructive" />
              <h3 className="font-heading text-xl font-semibold mb-3">No Follow-Up at All</h3>
              <p className="text-muted-foreground">
                Leads go cold because there's no system to follow up after the first inquiry — just silence.
              </p>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button variant="default" size="lg" onClick={() => scrollToSection('how-it-works')}>
              See What We Check
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="py-20">
        <div className="container">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4">
            Who This Is For
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Small service businesses in the U.S. and PH who want a quick outside-eye review of how inquiries actually move through their system.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 hover:shadow-xl transition-shadow">
              <h3 className="font-heading text-2xl font-bold mb-4">🇺🇸 U.S. Service Businesses</h3>
              <p className="text-muted-foreground mb-6">
                Coaches, consultants, and local service providers who are getting traffic but losing inquiries before they convert.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                  <span>Contact & intake form review</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                  <span>Booking page check</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                  <span>Follow-up flow assessment</span>
                </li>
              </ul>
              <Link to="/schedule">
                <Button className="w-full">Request a Mini-Audit →</Button>
              </Link>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-shadow">
              <h3 className="font-heading text-2xl font-bold mb-4">🇵🇭 PH Service Businesses</h3>
              <p className="text-muted-foreground mb-6">
                Small businesses and freelancers in the Philippines who want practical, affordable feedback on their inquiry process.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                  <span>Social & website inquiry check</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                  <span>Response & follow-up review</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                  <span>Simple tracker recommendation</span>
                </li>
              </ul>
              <Link to="/ph-businesses">
                <Button className="w-full">Request a Mini-Audit →</Button>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-muted/30">
        <div className="container">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12">
            How the Mini-Audit Works
          </h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                step: '01',
                title: 'Request It',
                description: 'Fill out a short form — no call needed. Tell us your website and how you currently handle inquiries.',
              },
              {
                step: '02',
                title: 'We Review',
                description: 'We go through your contact form, booking page, and follow-up flow as an outside eye.',
              },
              {
                step: '03',
                title: 'You Get the Note',
                description: 'We send a 1-page mini-audit with 3 practical fixes — clear, specific, and ready to act on.',
              },
              {
                step: '04',
                title: 'Optional Quick Fix',
                description: 'If you want help implementing, we can handle one small fix for you — no large commitment.',
              },
            ].map((item, index) => (
              <Card key={index} className="p-6 text-center">
                <div className="text-4xl font-bold text-secondary mb-4">{item.step}</div>
                <h3 className="font-heading text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/schedule">
              <Button size="lg">Request a Mini-Audit</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Jane D.',
                title: 'Real Estate Coach',
                quote: 'The mini-audit was eye-opening. I had no idea my contact form was the reason half my leads were going cold. Fixed it in a day.',
              },
              {
                name: 'Mike R.',
                title: 'Business Consultant',
                quote: 'Straightforward, practical, no fluff. Got 3 specific things to fix and they actually made a difference in how quickly leads responded.',
              },
              {
                name: 'Sarah L.',
                title: 'E-commerce Store Owner',
                quote: 'I expected generic advice. Instead I got a specific note about my booking page that I fixed the same afternoon. Worth every peso.',
              },
            ].map((testimonial, index) => (
              <Card key={index} className="p-6">
                <div className="mb-4">
                  <p className="italic text-muted-foreground mb-4">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-muted/30">
        <div className="container max-w-3xl">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>What exactly do you review?</AccordionTrigger>
              <AccordionContent>
                We look at your contact form, booking page, and follow-up flow — the path from first inquiry to next step. We check for friction, missing steps, and anything that might cause a lead to drop off before converting.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Do I need to get on a call?</AccordionTrigger>
              <AccordionContent>
                No call needed. You fill out a short form telling us your website and how you currently handle inquiries. We do the review and send back a 1-page note with 3 practical fixes.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>How long does it take to get the audit back?</AccordionTrigger>
              <AccordionContent>
                Most mini-audits are delivered within 2–3 business days. We keep it quick so you can act on the fixes fast.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>What's the optional quick fix?</AccordionTrigger>
              <AccordionContent>
                After you receive your 1-page note, you can optionally hire us to implement one of the fixes for you — no large project, no retainer. Just one small, specific improvement done for you.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>Is this only for tech-savvy businesses?</AccordionTrigger>
              <AccordionContent>
                Not at all. The fixes we recommend are written in plain language — no jargon. Most of them can be done by anyone who manages their own website or booking tool.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Ready for a Simple Outside-Eye Review?
            </h2>
            <p className="text-xl text-muted-foreground">
              ArioLabs helps small service businesses clean up the path from first inquiry to next step — contact forms, booking pages, follow-up messages, and simple trackers. No call needed.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <InlineWidget url="https://calendly.com/ariolabs/ariolabs-ai-consultation" />
          </div>
        </div>
      </section>
    </div>
  );
}
