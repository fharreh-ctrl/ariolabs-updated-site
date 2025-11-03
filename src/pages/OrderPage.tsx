import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useSearchParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { CheckCircle } from 'lucide-react';

const formSchema = z.object({
  package: z.string().min(1, 'Please select a package'),
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  businessType: z.string().min(1, 'Please select a business type'),
  projectDetails: z.string().min(20, 'Please provide at least 20 characters of detail'),
});

export default function OrderPage() {
  const [searchParams] = useSearchParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      package: searchParams.get('package') || '',
      name: '',
      email: '',
      phone: '',
      businessType: '',
      projectDetails: '',
    },
  });

  useEffect(() => {
    const packageParam = searchParams.get('package');
    if (packageParam) {
      form.setValue('package', packageParam);
    }
  }, [searchParams, form]);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('https://formspree.io/f/YOUR_ORDER_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...values,
          subject: `New Order: ${values.package}`,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        throw new Error('Failed to submit order');
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Oops! Something went wrong. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="py-20">
        <div className="container max-w-2xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="p-12 text-center">
              <CheckCircle className="w-20 h-20 mx-auto mb-6 text-accent" />
              <h1 className="font-heading text-4xl font-bold mb-4">Thank You!</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Thank you for your submission! Our team will review and contact you within 24 hours.
              </p>
              <Link to="/">
                <Button size="lg">Return to Homepage</Button>
              </Link>
            </Card>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20">
      <div className="container max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-4">Place Your Order</h1>
          <p className="text-xl text-muted-foreground mb-12">
            Fill out the form below to get started. We'll be in touch shortly!
          </p>

          <Card className="p-8">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="package"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Selected Package</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a package" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Pilot Sprint">Pilot Sprint - $497</SelectItem>
                          <SelectItem value="Quick Win Automation">Quick Win Automation - $2,497</SelectItem>
                          <SelectItem value="Department Suite">Department Suite - $4,997</SelectItem>
                          <SelectItem value="Starter Pack">Starter Pack - ₱15,000</SelectItem>
                          <SelectItem value="Growth Engine">Growth Engine - ₱80,000</SelectItem>
                          <SelectItem value="Business OS">Business OS - ₱150,000</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="you@company.com" type="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="+1 (555) 123-4567" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="businessType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Business Type</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your business type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="coach">Coach</SelectItem>
                          <SelectItem value="consultant">Consultant</SelectItem>
                          <SelectItem value="ecommerce">E-commerce</SelectItem>
                          <SelectItem value="realestate">Real Estate</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="projectDetails"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Project Details</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us a bit about your business and the problem you're trying to solve..."
                          className="min-h-[150px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? 'Submitting...' : 'Submit Order'}
                </Button>
              </form>
            </Form>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
