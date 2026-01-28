import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Users, Calendar, Star, ArrowRight, CheckCircle2 } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import MajorCard from '@/components/majors/MajorCard';
import { majors } from '@/data/mockData';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredMajors = majors.filter(
    (major) =>
      major.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      major.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const features = [
    {
      icon: Search,
      title: 'Explore Majors',
      description: 'Discover detailed information about university majors, career paths, and common misconceptions.',
    },
    {
      icon: Users,
      title: 'Connect with Mentors',
      description: 'Book one-on-one sessions with real university students studying your major of interest.',
    },
    {
      icon: Calendar,
      title: 'Flexible Scheduling',
      description: 'Choose a time that works for you with our easy-to-use booking system.',
    },
    {
      icon: Star,
      title: 'Honest Insights',
      description: 'Get transparent feedback from mentors, including their genuine satisfaction with their major.',
    },
  ];

  const steps = [
    { number: 1, title: 'Choose a Major', description: 'Browse and select the major you want to learn about.' },
    { number: 2, title: 'Pick a Mentor', description: 'Review mentor profiles and their satisfaction indicators.' },
    { number: 3, title: 'Book a Session', description: 'Select a time, enter your details, and pay securely.' },
    { number: 4, title: 'Get Guidance', description: 'Have your 90-minute mentorship session and gain insights.' },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-secondary/50 to-background py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-primary bg-primary/10 rounded-full">
                🎓 Your Future Starts Here
              </span>
              
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                Connect with Mentors.
                <br />
                <span className="text-gradient">Choose Your Major</span> with Confidence.
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Get personalized guidance from university students who've been in your shoes. 
                Book a 90-minute session for just $3.99.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="hero" size="xl" asChild>
                  <Link to="/majors">
                    Find a Mentor
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="hero-outline" size="xl" asChild>
                  <Link to="/how-it-works">How It Works</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose MajorConnect?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We connect you with real university students who can give you honest, firsthand insights about their majors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Getting guidance is simple. Follow these four steps to book your mentorship session.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative"
              >
                <div className="p-6 rounded-xl bg-card border border-border h-full">
                  <div className="w-10 h-10 rounded-full bg-gradient-hero flex items-center justify-center text-primary-foreground font-bold mb-4">
                    {step.number}
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 -right-3 text-primary">
                    <ArrowRight className="h-6 w-6" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Majors Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
                Popular Majors
              </h2>
              <p className="text-muted-foreground">
                Explore majors and find mentors who can guide you
              </p>
            </div>
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search majors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMajors.slice(0, 6).map((major, index) => (
              <MajorCard key={major.id} major={major} index={index} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Button variant="outline" size="lg" asChild>
              <Link to="/majors">
                View All Majors
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing Highlight */}
      <section className="py-16 md:py-24 bg-gradient-hero text-primary-foreground">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Affordable Guidance for Your Future
              </h2>
              
              <div className="inline-flex items-baseline gap-1 mb-6">
                <span className="text-5xl md:text-6xl font-bold">$3.99</span>
                <span className="text-xl opacity-80">/ 90 minutes</span>
              </div>
              
              <ul className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8 mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5" />
                  <span>One-on-one session</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5" />
                  <span>Real student insights</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5" />
                  <span>Flexible scheduling</span>
                </li>
              </ul>

              <Button
                variant="hero"
                size="xl"
                className="bg-white text-primary hover:bg-white/90"
                asChild
              >
                <Link to="/majors">
                  Start Exploring
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partner Schools CTA */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="rounded-2xl bg-secondary/50 border border-border p-8 md:p-12 text-center">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Are You a Partner School?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Students from partner schools can access free mentorship sessions using their school email or pilot code.
            </p>
            <Button variant="default" size="lg" asChild>
              <Link to="/majors">Get Started for Free</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
