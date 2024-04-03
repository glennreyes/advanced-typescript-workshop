'use client';

import type { FC } from 'react';

import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export const Session2: FC = () => {
  return (
    <>
      {/* Compound */}
      <Icon icon={<Download size={5} />} />

      {/* Polymorphic */}
      <Icon icon={Download} size={5} />

      {/* Polymorphic with `as` as discriminant */}
      <Button onClick="https://x.com/glnnrys" />
      <Button as="a" href="https://x.com/glnnrys" />
      <Button as={Link} href="https://x.com/glnnrys" />
    </>
  );
};

// TODO: Exercise
interface IconProps {}

const Icon: FC<IconProps> = (props) => {
  return <button {...props} />;
};

interface DownloadProps {}

const Download: FC<DownloadProps> = (props) => {
  return <button {...props} />;
};

// TODO: Exercise
interface ButtonProps {
  className?: string;
}

const Button: FC<ButtonProps> = ({ className, ...props }) => {
  return <button {...props} className={cn(buttonVariants({ className }))} />;
};
