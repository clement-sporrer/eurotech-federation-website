import React, { useRef, ReactNode } from 'react';
import { motion, useInView } from 'framer-motion';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  amount?: number;
  duration?: number;
}

const AnimatedSection = ({ 
  children, 
  className = "", 
  amount = 0.1, 
  duration = 0.8 
}: AnimatedSectionProps) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: amount });

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: duration }}
      className={className}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection; 