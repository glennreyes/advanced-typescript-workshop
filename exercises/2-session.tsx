'use client';

import type { FC } from 'react';

import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';

export const Session2: FC = () => {
  return (
    <>
      {/* Compound: Use distinct Icon component for a compound example. */}
      <IconWrapper>
        <IconDownload size={5} />
      </IconWrapper>

      {/* Polymorphic: Use distinct Icon component, supporting polymorphism via props. */}
      <IconGeneric icon={IconDownload} size={5} />

      {/* Polymorphic with `as` as discriminant: Adapt Button to change its rendering element based on `as` prop. */}
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

// TODO: Implement IconWrapper for compound component pattern.
interface IconWrapperProps {}

const IconWrapper: FC<IconWrapperProps> = ({ children }) => {
  return <div>{children}</div>;
};

// Icon to be used in the compound component pattern.
interface IconDownloadProps {
  size: number;
}

const IconDownload: FC<IconDownloadProps> = ({ size }) => {
  return <svg height={size} width={size} /* SVG props */ />;
};

// TODO: Define IconGeneric for polymorphic component usage.
interface IconGenericProps {}

const IconGeneric: FC<IconGenericProps> = ({ icon, ...props }) => {
  // Implementation depends on how you decide to render `icon` and pass `props`.
  return <></>;
};

// TODO: Adjust ButtonProps to support polymorphic `as` prop for element type change.
interface ButtonProps {
  className?: string;
  // TODO: Add polymorphic 'as' prop and other necessary props here.
}

const Button: FC<ButtonProps> = ({ className, ...props }) => {
  // TODO: Implement logic to render different elements based on `as` prop.
  return <div {...props} className={buttonVariants({ className })} />;
};
