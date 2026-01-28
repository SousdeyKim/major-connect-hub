import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Building2, GraduationCap, Star, Clock, CreditCard, Check, Info } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import SatisfactionBadge from '@/components/ui/SatisfactionBadge';
import BookingProgress from '@/components/booking/BookingProgress';
import TimeSlotPicker from '@/components/booking/TimeSlotPicker';
import { getMentorById } from '@/data/mockData';
import { TimeSlot, MenteeInfo, BookingType } from '@/types';
import { cn } from '@/lib/utils';

type Step = 1 | 2 | 3 | 4;

const BookingPage = () => {
  const { mentorId } = useParams<{ mentorId: string }>();
  const navigate = useNavigate();
  const mentor = getMentorById(mentorId || '');

  const [currentStep, setCurrentStep] = useState<Step>(1);
  const [bookingType, setBookingType] = useState<'paid' | 'pilot'>('paid');
  const [pilotCode, setPilotCode] = useState('');
  const [selectedSlot, setSelectedSlot] = useState<TimeSlot | null>(null);
  const [menteeInfo, setMenteeInfo] = useState<MenteeInfo>({
    name: '',
    email: '',
    phone: '',
  });
  const [cardInfo, setCardInfo] = useState({
    number: '',
    expiry: '',
    cvc: '',
    name: '',
  });

  if (!mentor) {
    return (
      <Layout>
        <div className="container py-16 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Mentor not found</h1>
          <Button asChild>
            <Link to="/majors">Browse Majors</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const steps = [
    { number: 1, title: 'Select Session', completed: currentStep > 1, current: currentStep === 1 },
    { number: 2, title: 'Your Details', completed: currentStep > 2, current: currentStep === 2 },
    { number: 3, title: 'Payment', completed: currentStep > 3, current: currentStep === 3 },
    { number: 4, title: 'Confirmation', completed: false, current: currentStep === 4 },
  ];

  const canProceedStep1 = selectedSlot !== null;
  const canProceedStep2 = menteeInfo.name && menteeInfo.email && menteeInfo.phone;
  const canProceedStep3 = bookingType === 'pilot' || (cardInfo.number && cardInfo.expiry && cardInfo.cvc && cardInfo.name);

  const handleNext = () => {
    if (currentStep < 4) {
      if (currentStep === 3 && bookingType === 'pilot') {
        setCurrentStep(4);
      } else {
        setCurrentStep((currentStep + 1) as Step);
      }
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((currentStep - 1) as Step);
    }
  };

  const generateSessionCode = () => {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let code = 'MC-';
    for (let i = 0; i < 5; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
  };

  const sessionCode = generateSessionCode();

  return (
    <Layout hideFooter>
      <div className="min-h-[calc(100vh-4rem)] bg-secondary/20">
        <div className="container py-8">
          {/* Back Link */}
          <Link
            to={`/majors/${mentor.major.id}`}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to {mentor.major.name}
          </Link>

          {/* Progress */}
          <div className="mb-12">
            <BookingProgress steps={steps} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <AnimatePresence mode="wait">
                {/* Step 1: Select Session Type & Time */}
                {currentStep === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div className="rounded-xl border border-border bg-card p-6">
                      <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                        Select Booking Type
                      </h2>

                      <RadioGroup
                        value={bookingType}
                        onValueChange={(v) => setBookingType(v as 'paid' | 'pilot')}
                        className="space-y-3"
                      >
                        <label
                          className={cn(
                            'flex items-start gap-4 p-4 rounded-lg border cursor-pointer transition-all',
                            bookingType === 'paid'
                              ? 'border-primary bg-primary/5'
                              : 'border-border hover:border-primary/50'
                          )}
                        >
                          <RadioGroupItem value="paid" className="mt-1" />
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <span className="font-medium text-foreground">Paid Session</span>
                              <span className="font-bold text-foreground">$3.99</span>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">
                              90-minute mentorship session
                            </p>
                          </div>
                        </label>

                        <label
                          className={cn(
                            'flex items-start gap-4 p-4 rounded-lg border cursor-pointer transition-all',
                            bookingType === 'pilot'
                              ? 'border-primary bg-primary/5'
                              : 'border-border hover:border-primary/50'
                          )}
                        >
                          <RadioGroupItem value="pilot" className="mt-1" />
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <span className="font-medium text-foreground">Free Pilot (Partner School)</span>
                              <span className="font-bold text-success">Free</span>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">
                              Free sessions for students from partner schools
                            </p>
                          </div>
                        </label>
                      </RadioGroup>

                      {bookingType === 'pilot' && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          className="mt-4"
                        >
                          <Label htmlFor="pilotCode">School Pilot Code (Optional)</Label>
                          <Input
                            id="pilotCode"
                            placeholder="Enter pilot code"
                            value={pilotCode}
                            onChange={(e) => setPilotCode(e.target.value)}
                            className="mt-1.5"
                          />
                          <p className="text-xs text-muted-foreground mt-1.5 flex items-center gap-1">
                            <Info className="h-3 w-3" />
                            Pilot codes are provided by partner schools
                          </p>
                        </motion.div>
                      )}
                    </div>

                    <div className="rounded-xl border border-border bg-card p-6">
                      <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                        Select a Time Slot
                      </h2>
                      <TimeSlotPicker
                        slots={mentor.availableSlots}
                        selectedSlot={selectedSlot}
                        onSelect={setSelectedSlot}
                      />
                    </div>

                    <div className="flex justify-end">
                      <Button
                        variant="hero"
                        size="lg"
                        onClick={handleNext}
                        disabled={!canProceedStep1}
                      >
                        Continue
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Contact Info */}
                {currentStep === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <div className="rounded-xl border border-border bg-card p-6">
                      <h2 className="font-display text-xl font-semibold text-foreground mb-6">
                        Your Contact Information
                      </h2>

                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            placeholder="Enter your full name"
                            value={menteeInfo.name}
                            onChange={(e) => setMenteeInfo({ ...menteeInfo, name: e.target.value })}
                            className="mt-1.5"
                          />
                        </div>

                        <div>
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="you@example.com"
                            value={menteeInfo.email}
                            onChange={(e) => setMenteeInfo({ ...menteeInfo, email: e.target.value })}
                            className="mt-1.5"
                          />
                          <p className="text-xs text-muted-foreground mt-1">
                            We'll send session details to this email
                          </p>
                        </div>

                        <div>
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="+855 XX XXX XXXX"
                            value={menteeInfo.phone}
                            onChange={(e) => setMenteeInfo({ ...menteeInfo, phone: e.target.value })}
                            className="mt-1.5"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between mt-6">
                      <Button variant="outline" size="lg" onClick={handleBack}>
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back
                      </Button>
                      <Button
                        variant="hero"
                        size="lg"
                        onClick={handleNext}
                        disabled={!canProceedStep2}
                      >
                        {bookingType === 'pilot' ? 'Confirm Booking' : 'Continue to Payment'}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Payment */}
                {currentStep === 3 && bookingType === 'paid' && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <div className="rounded-xl border border-border bg-card p-6">
                      <h2 className="font-display text-xl font-semibold text-foreground mb-2">
                        Payment Details
                      </h2>
                      <p className="text-sm text-muted-foreground mb-6">
                        Enter your card information to complete the booking
                      </p>

                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="cardName">Name on Card</Label>
                          <Input
                            id="cardName"
                            placeholder="John Doe"
                            value={cardInfo.name}
                            onChange={(e) => setCardInfo({ ...cardInfo, name: e.target.value })}
                            className="mt-1.5"
                          />
                        </div>

                        <div>
                          <Label htmlFor="cardNumber">Card Number</Label>
                          <Input
                            id="cardNumber"
                            placeholder="1234 5678 9012 3456"
                            value={cardInfo.number}
                            onChange={(e) => setCardInfo({ ...cardInfo, number: e.target.value })}
                            className="mt-1.5"
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="expiry">Expiry Date</Label>
                            <Input
                              id="expiry"
                              placeholder="MM/YY"
                              value={cardInfo.expiry}
                              onChange={(e) => setCardInfo({ ...cardInfo, expiry: e.target.value })}
                              className="mt-1.5"
                            />
                          </div>
                          <div>
                            <Label htmlFor="cvc">CVC</Label>
                            <Input
                              id="cvc"
                              placeholder="123"
                              value={cardInfo.cvc}
                              onChange={(e) => setCardInfo({ ...cardInfo, cvc: e.target.value })}
                              className="mt-1.5"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 p-4 rounded-lg bg-muted/50 flex items-center justify-between">
                        <span className="font-medium text-foreground">Total</span>
                        <span className="text-2xl font-bold text-foreground">$3.99</span>
                      </div>
                    </div>

                    <div className="flex justify-between mt-6">
                      <Button variant="outline" size="lg" onClick={handleBack}>
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back
                      </Button>
                      <Button
                        variant="hero"
                        size="lg"
                        onClick={handleNext}
                        disabled={!canProceedStep3}
                      >
                        <CreditCard className="mr-2 h-4 w-4" />
                        Pay $3.99
                      </Button>
                    </div>
                  </motion.div>
                )}

                {/* Step 4: Confirmation */}
                {currentStep === 4 && (
                  <motion.div
                    key="step4"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center"
                  >
                    <div className="rounded-xl border border-border bg-card p-8">
                      <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-6">
                        <Check className="h-8 w-8 text-success" />
                      </div>

                      <h2 className="font-display text-2xl font-bold text-foreground mb-2">
                        Booking Confirmed!
                      </h2>
                      <p className="text-muted-foreground mb-6">
                        Your mentorship session has been booked successfully
                      </p>

                      <div className="inline-block px-6 py-3 rounded-lg bg-primary/10 mb-6">
                        <p className="text-sm text-muted-foreground mb-1">Session Code</p>
                        <p className="text-2xl font-bold text-primary font-mono">{sessionCode}</p>
                      </div>

                      <div className="text-left rounded-lg bg-muted/50 p-4 space-y-3 mb-6">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Mentor</span>
                          <span className="font-medium text-foreground">{mentor.name}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">University</span>
                          <span className="font-medium text-foreground">{mentor.university.name}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Date & Time</span>
                          <span className="font-medium text-foreground">
                            {selectedSlot?.date} • {selectedSlot?.startTime} - {selectedSlot?.endTime}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Duration</span>
                          <span className="font-medium text-foreground">90 minutes</span>
                        </div>
                      </div>

                      <p className="text-sm text-muted-foreground mb-6">
                        A confirmation email with mentor contact details has been sent to{' '}
                        <span className="font-medium text-foreground">{menteeInfo.email}</span>
                      </p>

                      <Button variant="hero" size="lg" asChild>
                        <Link to="/">Return to Home</Link>
                      </Button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Sidebar - Mentor Info */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 rounded-xl border border-border bg-card p-6">
                <h3 className="font-semibold text-foreground mb-4">Your Mentor</h3>

                <div className="mb-4">
                  <h4 className="font-display text-lg font-semibold text-foreground">
                    {mentor.name}
                  </h4>
                  {mentor.nameKh && (
                    <p className="text-sm text-muted-foreground">{mentor.nameKh}</p>
                  )}
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Building2 className="h-4 w-4 text-primary" />
                    <span>{mentor.university.name}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <GraduationCap className="h-4 w-4 text-primary" />
                    <span>Year {mentor.yearOfStudy} • {mentor.major.name}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Star className="h-4 w-4 text-warning fill-warning" />
                    <span>{mentor.rating} ({mentor.reviewCount} reviews)</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>90 minutes</span>
                  </div>
                </div>

                <SatisfactionBadge level={mentor.satisfaction} size="sm" />

                <div className="mt-6 pt-6 border-t border-border">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Session Price</span>
                    <span className="text-2xl font-bold text-foreground">
                      {bookingType === 'pilot' ? 'Free' : '$3.99'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BookingPage;
