import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Briefcase, AlertCircle, BookOpen, Users } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import MentorCard from '@/components/mentors/MentorCard';
import { getMajorById, getMentorsByMajor } from '@/data/mockData';

const MajorDetailPage = () => {
  const { majorId } = useParams<{ majorId: string }>();
  const major = getMajorById(majorId || '');
  const mentors = getMentorsByMajor(majorId || '');

  if (!major) {
    return (
      <Layout>
        <div className="container py-16 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Major not found</h1>
          <Button asChild>
            <Link to="/majors">Back to Majors</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-secondary/30 py-12 md:py-16">
        <div className="container">
          <Link
            to="/majors"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Majors
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="text-5xl">{major.icon}</span>
              <span className="px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full">
                {major.category}
              </span>
            </div>

            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2">
              {major.name}
            </h1>
            {major.nameKh && (
              <p className="text-xl text-muted-foreground mb-4">{major.nameKh}</p>
            )}
            <p className="text-lg text-muted-foreground max-w-2xl">
              {major.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Overview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="rounded-xl border border-border bg-card p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <BookOpen className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="font-display text-xl font-semibold text-foreground">Overview</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">{major.overview}</p>
              </motion.div>

              {/* Misconceptions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="rounded-xl border border-border bg-card p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-warning/10 flex items-center justify-center">
                    <AlertCircle className="h-5 w-5 text-warning" />
                  </div>
                  <h2 className="font-display text-xl font-semibold text-foreground">
                    Common Misconceptions
                  </h2>
                </div>
                <ul className="space-y-3">
                  {major.misconceptions.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-destructive/10 text-destructive text-xs font-bold">
                        ✕
                      </span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Career Paths */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="rounded-xl border border-border bg-card p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center">
                    <Briefcase className="h-5 w-5 text-success" />
                  </div>
                  <h2 className="font-display text-xl font-semibold text-foreground">Career Paths</h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {major.careerPaths.map((path, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 text-sm font-medium bg-success/10 text-success rounded-full"
                    >
                      {path}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar - CTA */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="sticky top-24 rounded-xl border border-border bg-card p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Talk to a Mentor</h3>
                    <p className="text-sm text-muted-foreground">
                      {mentors.length} mentor{mentors.length !== 1 ? 's' : ''} available
                    </p>
                  </div>
                </div>

                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-3xl font-bold text-foreground">$3.99</span>
                  <span className="text-muted-foreground">/ 90 min</span>
                </div>

                <p className="text-sm text-muted-foreground mb-6">
                  Get personalized guidance from students studying {major.name}. Ask questions, learn about their experience, and make an informed decision.
                </p>

                <Button variant="hero" size="lg" className="w-full" asChild>
                  <a href="#mentors">View Mentors</a>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Mentors Section */}
      <section id="mentors" className="py-12 bg-secondary/30">
        <div className="container">
          <div className="mb-8">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
              Available Mentors for {major.name}
            </h2>
            <p className="text-muted-foreground">
              Connect with students who can share their firsthand experience
            </p>
          </div>

          {mentors.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mentors.map((mentor, index) => (
                <MentorCard key={mentor.id} mentor={mentor} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-card rounded-xl border border-border">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="font-semibold text-foreground mb-2">No mentors available yet</h3>
              <p className="text-muted-foreground mb-4">
                We're currently recruiting mentors for this major
              </p>
              <Button variant="outline" asChild>
                <Link to="/majors">Explore Other Majors</Link>
              </Button>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default MajorDetailPage;
