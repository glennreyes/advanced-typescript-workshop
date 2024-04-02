import type { ComponentPropsWithoutRef, FC } from 'react';

type H1Props = Omit<ComponentPropsWithoutRef<'h1'>, 'className'>;

export const H1: FC<H1Props> = ({ children, ...props }) => (
  <h1 {...props} className="scroll-m-20 text-4xl font-bold tracking-tight">
    {children}
  </h1>
);
