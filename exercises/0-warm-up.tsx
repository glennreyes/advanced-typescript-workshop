import type { FC } from 'react';

export const WarmUp: FC = () => {
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
  return (
    <>
      <Button>Click Me</Button>
      <Input type="email" />
    </>
  );
};

interface ButtonProps {}

const Button: FC<ButtonProps> = (props) => {
  return <button {...props} />;
};

interface InputProps {}

const Input: FC<InputProps> = (props) => {
  return <input {...props} />;
};
