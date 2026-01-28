import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

interface BookingStep {
  number: number;
  title: string;
  completed: boolean;
  current: boolean;
}

interface BookingProgressProps {
  steps: BookingStep[];
}

const BookingProgress = ({ steps }: BookingProgressProps) => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <div key={step.number} className="flex items-center flex-1">
            {/* Step Circle */}
            <div className="relative flex flex-col items-center">
              <div
                className={cn(
                  'flex h-10 w-10 items-center justify-center rounded-full border-2 transition-all duration-300',
                  step.completed
                    ? 'border-primary bg-primary text-primary-foreground'
                    : step.current
                    ? 'border-primary bg-primary/10 text-primary'
                    : 'border-border bg-background text-muted-foreground'
                )}
              >
                {step.completed ? (
                  <Check className="h-5 w-5" />
                ) : (
                  <span className="font-semibold">{step.number}</span>
                )}
              </div>
              <span
                className={cn(
                  'absolute -bottom-6 text-xs font-medium whitespace-nowrap',
                  step.current || step.completed
                    ? 'text-foreground'
                    : 'text-muted-foreground'
                )}
              >
                {step.title}
              </span>
            </div>

            {/* Connector Line */}
            {index < steps.length - 1 && (
              <div className="flex-1 h-0.5 mx-2">
                <div
                  className={cn(
                    'h-full transition-all duration-300',
                    step.completed ? 'bg-primary' : 'bg-border'
                  )}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingProgress;
