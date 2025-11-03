import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle } from 'lucide-react';

export default function PHBusinessesPage() {
  const packages = [
    {
      name: 'Starter Pack',
      price: '₱15,000',
      description: 'Solusyon para sa isang paulit-ulit na gawain.',
      features: [
        '1 Core Automation',
        'Strategy Call',
        'FB Messenger/IG DM Integration',
        'Delivery in 3 Days',
      ],
      featured: false,
    },
    {
      name: 'Growth Engine',
      price: '₱80,000',
      description: 'Pinaka-sikat na package para i-level up ang iyong sales at operations.',
      features: [
        'Hanggang 3 Core Automations',
        'Automated Lead Follow-up',
        'E-commerce Order Processing',
        '30 Days Support',
        'Delivery in 7 Days',
      ],
      featured: true,
    },
    {
      name: 'Business OS',
      price: '₱150,000',
      description: 'Buong automation system para sa isang department.',
      features: [
        'Unlimited Automations (1 Dept.)',
        'Custom System Integration',
        'Sales & Ops Dashboard',
        'Team Training',
        '60 Days Priority Support',
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
            Pagod na sa Manual na Trabaho? Automate na para Lumago!
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Tinutulungan namin ang mga SMEs sa Pilipinas na makatipid ng oras at pera. AI automation na abot-kaya at madaling intindihin, walang overcomplication.
          </p>
          <Link to="/schedule">
            <Button size="lg">Book Free Assessment</Button>
          </Link>
        </motion.div>
      </section>

      {/* Pricing */}
      <section className="container">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Affordable Packages Para Sa'yo
          </h2>
          <p className="text-xl text-muted-foreground">
            Pumili ng package na swak sa budget at pangangailangan ng iyong negosyo.
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
                    Simulan Na!
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
