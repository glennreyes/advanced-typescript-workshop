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

// Button component typed with React.ComponentPropsWithoutRef to exclude ref from props.
interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {}

const Button: FC<ButtonProps> = ({ className, ...props }) => {
  return <button {...props} className={cn(buttonVariants({ className }))} />;
};

// Input component typed with React.ComponentPropsWithoutRef to exclude ref from props.
interface InputProps extends React.ComponentPropsWithoutRef<'input'> {}

const Input: FC<InputProps> = ({ className, ...props }) => {
  return <input {...props} className={cn(inputClasses, className)} />;
};
