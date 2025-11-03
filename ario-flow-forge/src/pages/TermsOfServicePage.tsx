import { motion } from 'framer-motion';

export default function TermsOfServicePage() {
  return (
    <div className="py-20">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-4">Terms of Service</h1>
          <p className="text-muted-foreground mb-12">Last Updated: October 27, 2025</p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="font-heading text-2xl font-bold mb-4">Acceptance of Terms</h2>
              <p className="text-muted-foreground">
                By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold mb-4">Services Description</h2>
              <p className="text-muted-foreground">
                ArioLabs provides AI automation consulting and implementation services for small and medium-sized businesses. Specific terms for each project will be outlined in individual client agreements.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold mb-4">Payment Terms</h2>
              <p className="text-muted-foreground">
                Payment for services is due as specified in your individual client agreement. Typically, payment is required before work begins or according to agreed-upon milestones.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold mb-4">Intellectual Property</h2>
              <p className="text-muted-foreground">
                Upon full payment, clients own the work product we deliver. However, ArioLabs retains the right to use general methodologies, techniques, and know-how developed during the engagement in future projects.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold mb-4">Limitation of Liability</h2>
              <p className="text-muted-foreground">
                ArioLabs provides services on an "as is" basis. We make no warranties, expressed or implied, and hereby disclaim all other warranties. In no event shall ArioLabs be liable for any damages arising out of the use of our services.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold mb-4">Governing Law</h2>
              <p className="text-muted-foreground">
                These terms shall be governed by and construed in accordance with the laws of the State of Texas, United States.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold mb-4">Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions about these Terms of Service, please contact us at info@ariolabs.tech.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
