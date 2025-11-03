import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      id: 'media-company',
      title: 'Social Media Automation Workflow',
      industry: 'Digital Media & Marketing',
      result: '250% increase in engagement in 2 months',
      path: '/case-studies/media-company',
    },
    {
      id: 'finance-audit',
      title: 'Automated Compliance & Audit System',
      industry: 'Accounting & Compliance',
      result: 'Eliminated manual data entry and enabled real-time audit tracking, leading to 150% faster compliance in 3 weeks',
      path: '/case-studies/finance-audit',
    },
    {
      id: 'boss',
      title: 'AI-Powered Client Prospecting System',
      industry: 'Outsourcing / Business Development',
      result: 'Closed 2 new high-value clients within the first 2 weeks of deployment',
      path: '/case-studies/boss',
    },
    {
      id: 'livestream',
      title: 'Cost Reduction Mobile Application',
      industry: 'Multimedia & Streaming',
      result: 'Targeting savings of up to $150,000 USD per year upon completion',
      inProgress: true,
      path: '/case-studies/livestream',
    },
  ];

  return (
    <div className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
            Our Success Stories
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how we've helped businesses like yours save time and scale faster.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link to={study.path}>
                <Card className="p-8 h-full hover:shadow-xl transition-all group cursor-pointer">
                  <div className="flex items-start justify-between mb-4">
                    <Badge>{study.industry}</Badge>
                    {study.inProgress && (
                      <Badge variant="secondary">In Progress</Badge>
                    )}
                  </div>
                  <h3 className="font-heading text-2xl font-bold mb-4 group-hover:text-secondary transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    <span className="font-semibold text-accent">Result:</span> {study.result}
                  </p>
                  <div className="flex items-center text-secondary font-semibold group-hover:translate-x-2 transition-transform">
                    Read Case Study <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
