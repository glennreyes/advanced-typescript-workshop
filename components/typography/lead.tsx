import type { ComponentPropsWithoutRef, FC } from 'react';

type LeadProps = Omit<ComponentPropsWithoutRef<'p'>, 'className'>;

export const Lead: FC<LeadProps> = ({ children, ...props }) => (
  <p {...props} className="max-w-prose text-lg text-muted-foreground">
    {children}
  </p>
);
