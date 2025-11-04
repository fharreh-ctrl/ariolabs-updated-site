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
                AI AUTOMATION FOR SMALL BUSINESSES
              </p>
              <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
                Save 10+ Hours a Week Without Hiring More Staff
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Affordable AI automation for U.S. and Asia-based businesses — delivered by expert teams in days, not months.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/schedule">
                  <Button size="lg" className="w-full sm:w-auto">
                    Book Free Strategy Session
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection('how-it-works')}
                  className="w-full sm:w-auto"
                >
                  See How It Works
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
            Are You Drowning In...
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <Inbox className="w-12 h-12 mx-auto mb-4 text-destructive" />
              <h3 className="font-heading text-xl font-semibold mb-3">Inbox Chaos</h3>
              <p className="text-muted-foreground">
                Spending 2+ hours daily responding to the same questions and trying to keep track of leads.
              </p>
            </Card>
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <Calendar className="w-12 h-12 mx-auto mb-4 text-destructive" />
              <h3 className="font-heading text-xl font-semibold mb-3">Scheduling Hell</h3>
              <p className="text-muted-foreground">
                Endless back-and-forth emails just to book a single call, leading to lost opportunities.
              </p>
            </Card>
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <Clock className="w-12 h-12 mx-auto mb-4 text-destructive" />
              <h3 className="font-heading text-xl font-semibold mb-3">Manual Busywork</h3>
              <p className="text-muted-foreground">
                Copy-pasting data between tools, updating spreadsheets, and other repetitive tasks that drain your energy.
              </p>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button variant="default" size="lg" onClick={() => scrollToSection('services')}>
              See Our Solutions
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="py-20">
        <div className="container">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4">
            Choose Your Path
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Select your region to see pricing and services tailored for you.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 hover:shadow-xl transition-shadow">
              <h3 className="font-heading text-2xl font-bold mb-4">🇺🇸 For U.S. Businesses</h3>
              <p className="text-muted-foreground mb-6">
                Automate your client onboarding, lead management, and daily operations to reclaim your time and focus on growth.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                  <span>AI-Powered Inbox Management</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                  <span>Automated Scheduling & Follow-ups</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                  <span>Custom Workflow Automation</span>
                </li>
              </ul>
              <Link to="/us-businesses">
                <Button className="w-full">View Packages →</Button>
              </Link>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-shadow">
              <h3 className="font-heading text-2xl font-bold mb-4">🇵🇭 For PH Businesses</h3>
              <p className="text-muted-foreground mb-6">
                Affordable automation solutions to streamline your processes, from customer support to sales, without the high cost.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                  <span>Automated Social Media Inquiries</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                  <span>E-commerce Order Processing</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                  <span>Local-Friendly Integrations</span>
                </li>
              </ul>
              <Link to="/ph-businesses">
                <Button className="w-full">View Packages →</Button>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-muted/30">
        <div className="container">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12">
            How It Works in 4 Simple Steps
          </h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                step: '01',
                title: 'Book a Call',
                description: 'Schedule a free strategy session to discuss your challenges and goals.',
              },
              {
                step: '02',
                title: 'Get Your Blueprint',
                description: 'We map out a custom automation plan tailored to your specific business needs.',
              },
              {
                step: '03',
                title: 'We Build It',
                description: 'Our team builds, tests, and deploys your new automated workflows in just a few days.',
              },
              {
                step: '04',
                title: 'You Scale',
                description: 'Enjoy your newfound free time and watch your business run more efficiently than ever.',
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
              <Button size="lg">Ready to Start?</Button>
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
                quote: 'ArioLabs automated our entire lead follow-up process. We\'re now converting 30% more leads with zero extra effort.',
              },
              {
                name: 'Mike R.',
                title: 'Business Consultant',
                quote: 'I was spending 3 hours a day just scheduling calls. Now it\'s completely automated. It\'s like I hired a full-time assistant for a fraction of the cost.',
              },
              {
                name: 'Sarah L.',
                title: 'E-commerce Store Owner',
                quote: 'The team was incredible. They understood our unique needs and delivered a solution that saved us over 15 hours a week in manual data entry.',
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
              <AccordionTrigger>How long does it take to get started?</AccordionTrigger>
              <AccordionContent>
                Most projects are completed within 7-14 days from our initial strategy call. We prioritize speed and efficiency to get you results fast.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>What kind of software do you automate?</AccordionTrigger>
              <AccordionContent>
                We work with a wide range of popular tools like Zapier, Make, ActiveCampaign, HubSpot, Calendly, Google Workspace, and many more. If you use it, we can likely automate it.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is this only for tech-savvy business owners?</AccordionTrigger>
              <AccordionContent>
                Absolutely not! Our solutions are designed for you to be completely hands-off. We handle all the technical setup and provide simple instructions for you and your team.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>What's the ROI I can expect?</AccordionTrigger>
              <AccordionContent>
                Most clients save 10+ hours per week, which translates to thousands of dollars in reclaimed productivity. Plus, automated systems mean fewer missed leads and happier customers.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>Do you offer ongoing support?</AccordionTrigger>
              <AccordionContent>
                Yes, we offer optional support and maintenance packages to ensure your automations continue to run smoothly as your business evolves.
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
              Ready to Automate Your Business?
            </h2>
            <p className="text-xl text-muted-foreground">
              Book a free, no-obligation 20-minute strategy session to discover how much time and money you could be saving with AI automation.
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
