import type { ElementType, FC, ReactNode } from 'react';

// Assuming these imports are placeholders for your actual component/utility imports
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';

export const Session2: FC = () => {
  return (
    <>
      {/* Compound Component Example */}
      <IconWrapper>
        <IconDownload size={5} />
      </IconWrapper>

      {/* Polymorphic Component Example */}
      <IconGeneric icon={IconDownload} size={5} />

      {/* Polymorphic Component with `as` Discriminant */}
      <Button
        onClick={() => {
          console.log('Redirecting...');
        }}
      />
      <Button as="a" href="https://x.com/glnnrys" />
      <Button as={Link} href="/glnnrys" />
    </>
  );
};

// Compound Component
interface IconWrapperProps {
  children: ReactNode;
}

const IconWrapper: FC<IconWrapperProps> = ({ children }) => {
  return <div>{children}</div>;
};

interface IconDownloadProps {
  size: number;
}

const IconDownload: FC<IconDownloadProps> = ({ size }) => {
  // Placeholder for an actual SVG or similar icon component
  return <svg height={size} width={size} /* SVG attributes */ />;
};

// Polymorphic Component
interface IconGenericProps {
  icon: ElementType;
  size?: number;
}

const IconGeneric: FC<IconGenericProps> = ({
  icon: IconComponent,
  size,
  ...props
}) => {
  return <IconComponent size={size} {...props} />;
};

// Button with polymorphic `as` prop
type AsProp<C extends React.ComponentType | React.ElementType> = Omit<
  React.ComponentPropsWithRef<C>,
  'as'
> & {
  as?: C;
  children?: ReactNode;
};

type ButtonProps<C extends React.ComponentType | React.ElementType = 'button'> =
  AsProp<C> & {
    className?: string;
  };

const Button = <C extends React.ComponentType | React.ElementType = 'button'>({
  as, // Default to 'button' element
  children,
  className,
  ...props
}: ButtonProps<C>) => {
  const Component = as ?? 'button';
  // Apply button variants using a utility function
  const buttonClassName = buttonVariants({ className });
  // Conditionally rendering the component based on `as` prop
  // This creates a flexible component that can effectively render as any ElementType or custom component like Link

  return (
    <Component {...props} className={buttonClassName}>
      {children}
    </Component>
  );
};
