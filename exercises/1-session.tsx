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

// Defining ButtonProps type
interface ButtonVariantProps {
  children: React.ReactNode;
  className?: string;
  variant: 'primary' | 'secondary';
}

interface ButtonLinkProps {
  as: 'link';
  children: React.ReactNode;
  className?: string;
  href: string;
}

interface ButtonClickProps {
  children: React.ReactNode;
  className?: string;
  onClick: () => void;
}

// Discriminated Union of ButtonProps
type ButtonProps = ButtonClickProps | ButtonLinkProps | ButtonVariantProps;

const Button: FC<ButtonProps> = ({ children, className, ...props }) => {
  if ('as' in props) {
    // Assuming buttonVariants function can handle className for anchor as well
    return (
      <a {...props} className={buttonVariants({ className })}>
        {children}
      </a>
    );
  }

  // Fallback to button for onClick and variant props
  return (
    <button {...props} className={buttonVariants({ className })}>
      {children}
    </button>
  );
};
