import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

interface CaseStudyLayoutProps {
  title: string;
  industry: string;
  problem: string;
  approach: string | ReactNode;
  solution: string;
  results: {
    metric: string;
    value: string;
  }[];
  highlight?: string;
  quote?: string;
  tools: string[];
}

export const CaseStudyLayout = ({
  title,
  industry,
  problem,
  approach,
  solution,
  results,
  highlight,
  quote,
  tools,
}: CaseStudyLayoutProps) => {
  return (
    <div className="py-20">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Badge className="mb-4">{industry}</Badge>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-8">{title}</h1>

          <Card className="p-8 mb-8">
            <h2 className="font-heading text-2xl font-semibold mb-4 text-destructive">The Problem</h2>
            <p className="text-muted-foreground">{problem}</p>
          </Card>

          <Card className="p-8 mb-8">
            <h2 className="font-heading text-2xl font-semibold mb-4 text-primary">Our Approach</h2>
            <div className="text-muted-foreground">{approach}</div>
          </Card>

          <Card className="p-8 mb-8">
            <h2 className="font-heading text-2xl font-semibold mb-4 text-secondary">The Solution</h2>
            <p className="text-muted-foreground">{solution}</p>
          </Card>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {results.map((result, index) => (
              <Card key={index} className="p-6 text-center">
                <p className="text-3xl font-bold text-accent mb-2">{result.value}</p>
                <p className="text-sm text-muted-foreground">{result.metric}</p>
              </Card>
            ))}
          </div>

          {highlight && (
            <Card className="p-8 mb-8 bg-accent/10 border-accent">
              <p className="text-lg font-semibold">{highlight}</p>
            </Card>
          )}

          {quote && (
            <Card className="p-8 mb-8 bg-muted/30">
              <blockquote className="text-xl italic text-center">"{quote}"</blockquote>
            </Card>
          )}

          <Card className="p-8">
            <h3 className="font-heading text-xl font-semibold mb-4">Tools & Platforms Used</h3>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool, index) => (
                <Badge key={index} variant="secondary">{tool}</Badge>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};
