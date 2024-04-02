'use client';

import type { FC } from 'react';

import { buttonVariants } from '@/components/ui/button';
import { inputClasses } from '@/components/ui/input';
import { cn } from '@/lib/utils';

export const WarmUp: FC = () => {
  return (
    <>
      <Button
        onClick={() => {
          alert('Click');
        }}
      >
        Click Me
      </Button>
      <Input placeholder="Type something" type="email" />
    </>
  );
};

// TODO: Warm-up Exercise:
// Enhance the components below with standard HTML attribute types.
// Start with exploring a button of following types and understand the differences:
// - React.HTMLAttributes<HTMLInputElement>
// - React.HTMLProps<HTMLButtonElement>
// - JSX.IntrinsicElements['button'];
// - React.ButtonHTMLAttributes<HTMLButtonElement>
// - React.ComponentProps<'button'>
// - React.ComponentPropsWith<'button'>
// - React.ComponentPropsWithoutRef<'button'>
interface ButtonProps {}

const Button: FC<ButtonProps> = ({ className, ...props }) => {
  return <button {...props} className={cn(buttonVariants({ className }))} />;
};

// TODO
interface InputProps {}

const Input: FC<InputProps> = ({ className, ...props }) => {
  return <input {...props} className={cn(inputClasses, className)} />;
};
