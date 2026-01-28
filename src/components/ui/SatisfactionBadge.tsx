import { SatisfactionLevel } from '@/types';
import { cn } from '@/lib/utils';
import { Heart, Meh, ThumbsDown } from 'lucide-react';

interface SatisfactionBadgeProps {
  level: SatisfactionLevel;
  showLabel?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const satisfactionConfig = {
  enjoys: {
    label: 'Enjoys the major',
    icon: Heart,
    className: 'bg-satisfaction-enjoy/10 text-satisfaction-enjoy border-satisfaction-enjoy/20',
  },
  neutral: {
    label: 'Feels neutral',
    icon: Meh,
    className: 'bg-satisfaction-neutral/10 text-satisfaction-neutral border-satisfaction-neutral/20',
  },
  dislikes: {
    label: 'Does not enjoy',
    icon: ThumbsDown,
    className: 'bg-satisfaction-dislike/10 text-satisfaction-dislike border-satisfaction-dislike/20',
  },
};

const sizeConfig = {
  sm: 'px-2 py-1 text-xs gap-1',
  md: 'px-3 py-1.5 text-sm gap-1.5',
  lg: 'px-4 py-2 text-base gap-2',
};

const iconSizeConfig = {
  sm: 'h-3 w-3',
  md: 'h-4 w-4',
  lg: 'h-5 w-5',
};

const SatisfactionBadge = ({ level, showLabel = true, size = 'md' }: SatisfactionBadgeProps) => {
  const config = satisfactionConfig[level];
  const Icon = config.icon;

  return (
    <div
      className={cn(
        'inline-flex items-center rounded-full border font-medium',
        config.className,
        sizeConfig[size]
      )}
    >
      <Icon className={cn(iconSizeConfig[size], level === 'enjoys' && 'fill-current')} />
      {showLabel && <span>{config.label}</span>}
    </div>
  );
};

export default SatisfactionBadge;
