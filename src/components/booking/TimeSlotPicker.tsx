import { TimeSlot } from '@/types';
import { cn } from '@/lib/utils';
import { format, parseISO } from 'date-fns';
import { Calendar, Clock } from 'lucide-react';

interface TimeSlotPickerProps {
  slots: TimeSlot[];
  selectedSlot: TimeSlot | null;
  onSelect: (slot: TimeSlot) => void;
}

const TimeSlotPicker = ({ slots, selectedSlot, onSelect }: TimeSlotPickerProps) => {
  // Group slots by date
  const slotsByDate = slots.reduce((acc, slot) => {
    if (!acc[slot.date]) {
      acc[slot.date] = [];
    }
    acc[slot.date].push(slot);
    return acc;
  }, {} as Record<string, TimeSlot[]>);

  return (
    <div className="space-y-6">
      {Object.entries(slotsByDate).map(([date, dateSlots]) => (
        <div key={date} className="space-y-3">
          <div className="flex items-center gap-2 text-sm font-medium text-foreground">
            <Calendar className="h-4 w-4 text-primary" />
            <span>{format(parseISO(date), 'EEEE, MMMM d, yyyy')}</span>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
            {dateSlots.map((slot) => (
              <button
                key={slot.id}
                onClick={() => slot.isAvailable && onSelect(slot)}
                disabled={!slot.isAvailable}
                className={cn(
                  'flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg border text-sm font-medium transition-all',
                  slot.isAvailable
                    ? selectedSlot?.id === slot.id
                      ? 'border-primary bg-primary text-primary-foreground shadow-md'
                      : 'border-border bg-card hover:border-primary/50 hover:bg-primary/5 text-foreground'
                    : 'border-border/50 bg-muted/50 text-muted-foreground cursor-not-allowed'
                )}
              >
                <Clock className="h-3.5 w-3.5" />
                <span>
                  {slot.startTime} - {slot.endTime}
                </span>
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TimeSlotPicker;
