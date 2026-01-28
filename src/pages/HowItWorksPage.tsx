import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, UserCheck, Calendar, CreditCard, MessageCircle, Star, ArrowRight } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';

const HowItWorksPage = () => {
  const steps = [
    {
      icon: Search,
      title: 'Browse & Select Major',
      description: 'Explore our catalog of university majors. Each major page includes an overview, common misconceptions, and career paths to help you understand what to expect.',
    },
    {
      icon: UserCheck,
      title: 'Choose Your Mentor',
      description: 'View mentor profiles with their university, year of study, and satisfaction indicator. Read reviews from other students to find the right fit.',
    },
    {
      icon: Calendar,
      title: 'Pick a Time',
      description: 'Select an available 90-minute session slot that works with your schedule. Mentors set their own availability.',
    },
    {
      icon: CreditCard,
      title: 'Complete Booking',
      description: 'Enter your contact details and pay $3.99 (or use your school pilot code for free access). No account needed - just provide your name, email, and phone.',
    },
    {
      icon: MessageCircle,
      title: 'Connect & Learn',
      description: 'Receive mentor contact details via email. Coordinate your meeting time and have your 90-minute session via Google Meet or similar tools.',
    },
    {
      icon: Star,
      title: 'Share Feedback',
      description: 'After your session, leave a review to help other students find great mentors. Your feedback matters!',
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-secondary/30 py-16 md:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              How MajorConnect Works
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Get personalized guidance from university students in just a few simple steps. 
              No account required - just book, pay, and connect.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/majors">
                Start Exploring
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative flex gap-6 pb-12 last:pb-0"
              >
                {/* Timeline Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-6 top-14 w-0.5 h-[calc(100%-3.5rem)] bg-border" />
                )}

                {/* Step Number */}
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-hero text-primary-foreground flex items-center justify-center font-bold text-lg">
                  {index + 1}
                </div>

                {/* Content */}
                <div className="flex-1 pt-1">
                  <div className="flex items-center gap-3 mb-2">
                    <step.icon className="h-5 w-5 text-primary" />
                    <h3 className="font-display text-xl font-semibold text-foreground">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              One price for all sessions. No hidden fees, no subscriptions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* Paid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-xl border border-border bg-card p-8"
            >
              <div className="text-center">
                <h3 className="font-semibold text-foreground mb-2">Standard Session</h3>
                <div className="flex items-baseline justify-center gap-1 mb-4">
                  <span className="text-4xl font-bold text-foreground">$3.99</span>
                  <span className="text-muted-foreground">/ session</span>
                </div>
                <ul className="text-left space-y-3 mb-6">
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-5 h-5 rounded-full bg-success/10 flex items-center justify-center">
                      <span className="text-success text-xs">✓</span>
                    </div>
                    90-minute one-on-one session
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-5 h-5 rounded-full bg-success/10 flex items-center justify-center">
                      <span className="text-success text-xs">✓</span>
                    </div>
                    Direct mentor contact details
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-5 h-5 rounded-full bg-success/10 flex items-center justify-center">
                      <span className="text-success text-xs">✓</span>
                    </div>
                    Email confirmation & tracking
                  </li>
                </ul>
                <Button variant="default" className="w-full" asChild>
                  <Link to="/majors">Book a Session</Link>
                </Button>
              </div>
            </motion.div>

            {/* Pilot */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-xl border-2 border-primary bg-card p-8 relative"
            >
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                Partner Schools
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-foreground mb-2">Free Pilot Program</h3>
                <div className="flex items-baseline justify-center gap-1 mb-4">
                  <span className="text-4xl font-bold text-success">Free</span>
                </div>
                <ul className="text-left space-y-3 mb-6">
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-5 h-5 rounded-full bg-success/10 flex items-center justify-center">
                      <span className="text-success text-xs">✓</span>
                    </div>
                    All standard session benefits
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-5 h-5 rounded-full bg-success/10 flex items-center justify-center">
                      <span className="text-success text-xs">✓</span>
                    </div>
                    School email or pilot code required
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-5 h-5 rounded-full bg-success/10 flex items-center justify-center">
                      <span className="text-success text-xs">✓</span>
                    </div>
                    No payment needed
                  </li>
                </ul>
                <Button variant="hero" className="w-full" asChild>
                  <Link to="/majors">Use Pilot Access</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-muted-foreground mb-8">
              Find a mentor who can help you make the right decision about your future.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/majors">
                Explore Majors
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HowItWorksPage;
