import { Link } from 'react-router-dom';
import { Mentor } from '@/types';
import { Star, GraduationCap, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SatisfactionBadge from '@/components/ui/SatisfactionBadge';
import { motion } from 'framer-motion';

interface MentorCardProps {
  mentor: Mentor;
  index?: number;
}

const MentorCard = ({ mentor, index = 0 }: MentorCardProps) => {
  const availableSlots = mentor.availableSlots.filter(slot => slot.isAvailable).length;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="rounded-xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="font-display text-lg font-semibold text-foreground">
            {mentor.name}
          </h3>
          {mentor.nameKh && (
            <p className="text-sm text-muted-foreground">{mentor.nameKh}</p>
          )}
        </div>
        <SatisfactionBadge level={mentor.satisfaction} showLabel={false} size="sm" />
      </div>

      {/* Info */}
      <div className="space-y-2 mb-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Building2 className="h-4 w-4 text-primary" />
          <span>{mentor.university.name}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <GraduationCap className="h-4 w-4 text-primary" />
          <span>Year {mentor.yearOfStudy} • {mentor.major.name}</span>
        </div>
      </div>

      {/* Satisfaction Label */}
      <div className="mb-4">
        <SatisfactionBadge level={mentor.satisfaction} size="sm" />
      </div>

      {/* Bio */}
      <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
        {mentor.bio}
      </p>

      {/* Rating & Reviews */}
      <div className="flex items-center gap-4 mb-4 pb-4 border-b border-border">
        <div className="flex items-center gap-1">
          <Star className="h-4 w-4 fill-warning text-warning" />
          <span className="font-semibold text-foreground">{mentor.rating}</span>
        </div>
        <span className="text-sm text-muted-foreground">
          {mentor.reviewCount} reviews
        </span>
        <span className="text-sm text-muted-foreground">
          {availableSlots} slots available
        </span>
      </div>

      {/* Price & CTA */}
      <div className="flex items-center justify-between">
        <div>
          <span className="text-2xl font-bold text-foreground">$3.99</span>
          <span className="text-sm text-muted-foreground"> / 90 min</span>
        </div>
        <Button asChild>
          <Link to={`/book/${mentor.id}`}>Book Session</Link>
        </Button>
      </div>
    </motion.div>
  );
};

export default MentorCard;
