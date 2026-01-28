import { Link } from 'react-router-dom';
import { Major } from '@/types';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface MajorCardProps {
  major: Major;
  index?: number;
}

const MajorCard = ({ major, index = 0 }: MajorCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Link
        to={`/majors/${major.id}`}
        className="group block h-full"
      >
        <div className="h-full rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-primary/30 hover:-translate-y-1">
          <div className="flex items-start justify-between mb-4">
            <span className="text-4xl">{major.icon}</span>
            <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded-full">
              {major.category}
            </span>
          </div>
          
          <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
            {major.name}
          </h3>
          
          {major.nameKh && (
            <p className="text-sm text-muted-foreground mb-3">{major.nameKh}</p>
          )}
          
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
            {major.description}
          </p>
          
          <div className="flex items-center text-primary font-medium text-sm">
            <span>Explore Major</span>
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default MajorCard;
