import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export interface ActionButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'variant'> {
  variant?: 'primary' | 'secondary';
  className?: string;
}

const ActionButton = React.forwardRef<HTMLButtonElement, ActionButtonProps>(
  ({ className, variant = 'primary', children, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        className={cn(
          "text-lg px-6 py-6 transition-colors duration-300",
          variant === 'primary' && "bg-eurotech-blue text-white hover:bg-eurotech-accent",
          variant === 'secondary' && "bg-white text-eurotech-blue hover:bg-eurotech-accent hover:text-white",
          className
        )}
        {...props}
      >
        {children}
      </Button>
    );
  }
);

ActionButton.displayName = "ActionButton";

export { ActionButton }; 