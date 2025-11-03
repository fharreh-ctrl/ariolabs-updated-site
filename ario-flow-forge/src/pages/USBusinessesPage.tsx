import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle } from 'lucide-react';

export default function USBusinessesPage() {
  const packages = [
    {
      name: 'Pilot Sprint',
      price: '$497',
      description: 'Perfect for automating one specific, painful task.',
      features: [
        '1 Core Automation Workflow',
        'Discovery & Strategy Call',
        'Up to 3 App Integrations',
        'Delivered in 3 Days',
      ],
      featured: false,
    },
    {
      name: 'Quick Win Automation',
      price: '$2,497',
      description: 'Our most popular package to overhaul a key part of your business.',
      features: [
        'Up to 3 Core Workflows',
        'Automated Lead Nurturing',
        'Client Onboarding System',
        '30 Days of Support',
        'Delivered in 7 Days',
      ],
      featured: true,
    },
    {
      name: 'Department Suite',
      price: '$4,997',
      description: 'A complete automation solution for an entire business department.',
      features: [
        'Unlimited Workflows for 1 Dept.',
        'Custom CRM Integration',
        'Advanced Reporting Dashboard',
        'Team Training Session',
        '60 Days of Priority Support',
      ],
      featured: false,
    },
  ];

  return (
    <div className="py-20">
      {/* Hero */}
      <section className="container mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
            Stop Losing Leads in Your Inbox. Automate What's Killing Your Focus.
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            We help U.S. coaches, consultants, and service-based businesses save 10+ hours/week by automating client onboarding, scheduling, and follow-ups.
          </p>
          <Link to="/schedule">
            <Button size="lg">Book Free Strategy Session</Button>
          </Link>
        </motion.div>
      </section>

      {/* Pricing */}
      <section className="container">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground">
            Choose a package that fits your needs. One-time investment, lifetime of efficiency.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className={`p-8 h-full flex flex-col ${pkg.featured ? 'border-secondary border-2 shadow-xl' : ''}`}>
                {pkg.featured && (
                  <Badge className="mb-4 w-fit bg-secondary">Most Popular</Badge>
                )}
                <h3 className="font-heading text-2xl font-bold mb-2">{pkg.name}</h3>
                <div className="text-4xl font-bold mb-4">{pkg.price}</div>
                <p className="text-muted-foreground mb-6">{pkg.description}</p>
                <ul className="space-y-3 mb-8 flex-grow">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to={`/order?package=${encodeURIComponent(pkg.name)}`}>
                  <Button className="w-full" variant={pkg.featured ? 'default' : 'outline'}>
                    Get Started
                  </Button>
                </Link>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
