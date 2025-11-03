import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <div className="py-20">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">About ArioLabs</h1>
          <p className="text-xl text-muted-foreground mb-12">
            We empower small businesses with the power of AI automation.
          </p>

          <div className="prose prose-lg max-w-none">
            <h2 className="font-heading text-3xl font-bold mb-4">Our Mission</h2>
            
            <p className="text-muted-foreground mb-6">
              At ArioLabs, we believe that the power of artificial intelligence and automation shouldn't be reserved for large corporations. Our mission is to democratize this technology, making it accessible, affordable, and easy to implement for small and medium-sized businesses in the United States and the Philippines.
            </p>

            <p className="text-muted-foreground mb-6">
              We were founded on the principle that business owners should spend their time on what they do best—growing their business and serving their clients—not on repetitive, manual tasks. By building custom-tailored automation solutions, we help our clients reclaim their most valuable asset: their time.
            </p>

            <p className="text-muted-foreground mb-6">
              Our team of experts is passionate about problem-solving and dedicated to delivering tangible results quickly. We don't just build workflows; we build efficiency engines that power growth and reduce stress.
            </p>

            <p className="text-muted-foreground">
              Whether you're a coach trying to manage your client pipeline, a consultant drowning in scheduling emails, or an e-commerce business bogged down by manual order processing, ArioLabs is here to help you automate, optimize, and scale.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
