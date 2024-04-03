'use client';

import type { FC } from 'react';

import { X } from '@/components/icons/x';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export const Session1: FC = () => {
  return (
    <>
      {/* String Literal Union */}
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>

      {/* Discriminated Union */}
      <Button as="link" href="https://x.com/glnnrys">
        Follow on <X className="h-4 w-4 p-1" />
      </Button>
      <Button
        onClick={() => {
          alert('Click');
        }}
      >
        Click Me
      </Button>
    </>
  );
};

// TODO: Exercise
interface ButtonProps {}

const Button: FC<ButtonProps> = ({ className, ...props }) => {
  return <button {...props} className={cn(buttonVariants({ className }))} />;
};
