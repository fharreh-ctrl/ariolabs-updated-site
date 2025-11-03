import { motion } from 'framer-motion';

export default function PrivacyPolicyPage() {
  return (
    <div className="py-20">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground mb-12">Last Updated: October 27, 2025</p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="font-heading text-2xl font-bold mb-4">Information We Collect</h2>
              <p className="text-muted-foreground">
                We collect information you provide directly to us, such as your name, email address, business information, and any other information you choose to provide. We may also collect non-personal data via analytics tools like Google Analytics to improve our services.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold mb-4">How We Use Your Information</h2>
              <p className="text-muted-foreground">
                We use the information we collect to respond to your inquiries, provide and improve our services, send marketing communications (with your consent), and comply with legal obligations.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold mb-4">Data Security</h2>
              <p className="text-muted-foreground">
                We are committed to protecting your personal information and use industry-standard security measures to prevent unauthorized access. We will never sell, rent, or lease your personal information to third parties.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold mb-4">Cookies</h2>
              <p className="text-muted-foreground">
                We use cookies and similar tracking technologies to track activity on our website and improve user experience. You can control cookie preferences through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold mb-4">Your Rights</h2>
              <p className="text-muted-foreground">
                You have the right to access, update, or delete your personal information. Contact us if you wish to exercise these rights.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold mb-4">Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions about this Privacy Policy, please contact us at info@ariolabs.tech or at our office in Houston, Texas.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
