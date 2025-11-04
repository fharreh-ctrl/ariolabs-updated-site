import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { InlineWidget } from 'react-calendly';
import { ArrowLeft } from 'lucide-react';

export default function SchedulePage() {
  return (
    <div className="py-20">
      <div className="container max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/" className="inline-flex items-center text-secondary hover:underline mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-4">
            Book Your Free Strategy Session
          </h1>
          <p className="text-xl text-muted-foreground mb-12">
            Schedule a quick 20-minute AI consultation call with our team to discover your automation opportunities.
          </p>

          <div className="bg-card rounded-lg p-4">
            <InlineWidget url="https://calendly.com/ariolabs/ariolabs-ai-consultation" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
