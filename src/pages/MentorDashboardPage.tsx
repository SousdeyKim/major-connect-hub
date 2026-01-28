import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Calendar, Bell, User, LogOut, CheckCircle2, Clock, 
  MessageCircle, Star, ChevronRight, Phone, Mail 
} from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const MentorDashboardPage = () => {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');

  // Mock data
  const upcomingSessions = [
    {
      id: '1',
      sessionCode: 'MC-9X3A7',
      menteeName: 'Chanra Sok',
      menteeEmail: 'chanra.sok@email.com',
      menteePhone: '+855 12 345 678',
      date: 'January 30, 2026',
      time: '1:00 PM - 2:30 PM',
      status: 'confirmed',
    },
    {
      id: '2',
      sessionCode: 'MC-K2B9P',
      menteeName: 'Dara Pheng',
      menteeEmail: 'dara.pheng@email.com',
      menteePhone: '+855 98 765 432',
      date: 'February 2, 2026',
      time: '3:00 PM - 4:30 PM',
      status: 'pending',
    },
  ];

  const pastSessions = [
    {
      id: '3',
      sessionCode: 'MC-H7YT2',
      menteeName: 'Srey Neang',
      date: 'January 15, 2026',
      time: '10:00 AM - 11:30 AM',
      status: 'completed',
      rating: 5,
    },
  ];

  const stats = [
    { label: 'Total Sessions', value: '23', icon: Calendar },
    { label: 'This Month', value: '4', icon: Clock },
    { label: 'Avg Rating', value: '4.8', icon: Star },
    { label: 'Pending', value: '2', icon: Bell },
  ];

  return (
    <Layout hideFooter>
      <div className="min-h-[calc(100vh-4rem)] bg-secondary/20">
        <div className="container py-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            <div>
              <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                Welcome back, Sokha! 👋
              </h1>
              <p className="text-muted-foreground">
                Manage your mentorship sessions and connect with students
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm" className="relative">
                <Bell className="h-4 w-4" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-accent text-accent-foreground text-[10px] font-bold rounded-full flex items-center justify-center">
                  2
                </span>
              </Button>
              <Button variant="outline" size="sm">
                <User className="h-4 w-4 mr-2" />
                Profile
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link to="/">
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </Link>
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="rounded-xl border border-border bg-card p-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <stat.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Sessions */}
          <div className="rounded-xl border border-border bg-card">
            {/* Tabs */}
            <div className="flex border-b border-border">
              <button
                onClick={() => setActiveTab('upcoming')}
                className={cn(
                  'flex-1 py-4 text-sm font-medium transition-colors border-b-2 -mb-px',
                  activeTab === 'upcoming'
                    ? 'border-primary text-primary'
                    : 'border-transparent text-muted-foreground hover:text-foreground'
                )}
              >
                Upcoming Sessions
              </button>
              <button
                onClick={() => setActiveTab('past')}
                className={cn(
                  'flex-1 py-4 text-sm font-medium transition-colors border-b-2 -mb-px',
                  activeTab === 'past'
                    ? 'border-primary text-primary'
                    : 'border-transparent text-muted-foreground hover:text-foreground'
                )}
              >
                Past Sessions
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              {activeTab === 'upcoming' && (
                <div className="space-y-4">
                  {upcomingSessions.map((session) => (
                    <motion.div
                      key={session.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="rounded-lg border border-border p-4 hover:border-primary/30 transition-colors"
                    >
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-sm bg-primary/10 text-primary px-2 py-0.5 rounded">
                              {session.sessionCode}
                            </span>
                            <span
                              className={cn(
                                'text-xs px-2 py-0.5 rounded-full',
                                session.status === 'confirmed'
                                  ? 'bg-success/10 text-success'
                                  : 'bg-warning/10 text-warning'
                              )}
                            >
                              {session.status === 'confirmed' ? 'Confirmed' : 'Pending'}
                            </span>
                          </div>
                          <h3 className="font-semibold text-foreground">{session.menteeName}</h3>
                          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Calendar className="h-3.5 w-3.5" />
                              {session.date}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="h-3.5 w-3.5" />
                              {session.time}
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                            <a href={`mailto:${session.menteeEmail}`} className="flex items-center gap-1 hover:text-primary">
                              <Mail className="h-3.5 w-3.5" />
                              {session.menteeEmail}
                            </a>
                            <a href={`tel:${session.menteePhone}`} className="flex items-center gap-1 hover:text-primary">
                              <Phone className="h-3.5 w-3.5" />
                              {session.menteePhone}
                            </a>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <MessageCircle className="h-4 w-4 mr-2" />
                            Message
                          </Button>
                          <Button variant="success" size="sm">
                            <CheckCircle2 className="h-4 w-4 mr-2" />
                            Mark Completed
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}

              {activeTab === 'past' && (
                <div className="space-y-4">
                  {pastSessions.map((session) => (
                    <motion.div
                      key={session.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="rounded-lg border border-border p-4"
                    >
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-sm bg-muted text-muted-foreground px-2 py-0.5 rounded">
                              {session.sessionCode}
                            </span>
                            <span className="text-xs px-2 py-0.5 rounded-full bg-success/10 text-success">
                              Completed
                            </span>
                          </div>
                          <h3 className="font-semibold text-foreground">{session.menteeName}</h3>
                          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Calendar className="h-3.5 w-3.5" />
                              {session.date}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="h-3.5 w-3.5" />
                              {session.time}
                            </span>
                          </div>
                        </div>
                        {session.rating && (
                          <div className="flex items-center gap-1 text-warning">
                            {[...Array(session.rating)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-warning" />
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MentorDashboardPage;
