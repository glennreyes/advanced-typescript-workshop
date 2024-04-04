'use client';

import type { FC, ForwardedRef } from 'react';

import { selectClasses } from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { forwardRef, useRef } from 'react';

const currencies = {
  chf: 'CHF',
  dkk: 'DKK',
  eur: 'EUR',
  gbp: 'GBP',
  php: 'PHP',
  sek: 'SEK',
  sgd: 'SGD',
  usd: 'USD',
};
const options = Object.entries(currencies).map(([key, value]) => (
  <option key={key} value={key}>
    {value}
  </option>
));

export const Session4: FC = () => {
  const selectRef = useRef<HTMLSelectElement>(null);

  return (
    <>
      <Select<true> isMulti>{options}</Select>
      {/* TODO */}
      <GenericSelect<true> ref={selectRef}>{options}</GenericSelect>
    </>
  );
};

interface SelectProps<TMulti> {
  children: React.ReactNode;
  isMulti?: TMulti;
}

function Select<TMulti extends boolean = false>({
  children,
  isMulti,
}: SelectProps<TMulti>) {
  return (
    <select className={cn(selectClasses, 'h-auto')} multiple={isMulti}>
      {children}
    </select>
  );
}

// interface ParagraphProps extends ComponentProps<'p'> {}

// const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(function Paragraph(
//   { children }: { children: React.ReactNode },
//   ref: React.Ref<HTMLParagraphElement>,
// ) {
//   return <p ref={ref}>{children}</p>;
// }

declare module 'react' {
  function forwardRef<T, P>(
    render: (props: P, ref: Ref<T>) => ReactNode | null,
  ): (props: P & RefAttributes<T>) => ReactNode | null;
}

interface GenericSelectProps<TMulti> {
  children: React.ReactNode;
  isMulti?: TMulti;
}

const GenericSelect = forwardRef(function Select123<
  TMulti extends boolean = false,
>(
  { children, isMulti }: GenericSelectProps<TMulti>,
  ref: ForwardedRef<HTMLSelectElement>,
) {
  console.log(ref);

  return (
    <select className={selectClasses} multiple={isMulti}>
      {children}
    </select>
  );
});
