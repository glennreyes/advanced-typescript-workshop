'use client';

import type { FC } from 'react';

import { X } from '@/components/icons/x';
import { buttonVariants } from '@/components/ui/button';

export const Session1: FC = () => {
  return (
    <>
      {/* String Literal Union: Ensure 'variant' accepts only 'primary' or 'secondary'. */}
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>

      {/* Discriminated Union: Create prop types for different 'as' prop values. */}
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

// TODO: Define ButtonProps type for string literal and discriminated union props.
interface ButtonProps {}

const Button: FC<ButtonProps> = ({ className, ...props }) => {
  return <button {...props} className={buttonVariants({ className })} />;
};
