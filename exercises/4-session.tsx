'use client';

import { selectClasses } from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { type FC, forwardRef, useRef } from 'react';

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

  // TODO
  return (
    <>
      <Select<true> isMulti>{options}</Select>
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

interface GenericSelectProps<TMulti> {
  children: React.ReactNode;
  isMulti?: TMulti;
}

// TODO:
const GenericSelect = forwardRef(function Select<
  TMulti extends boolean = false,
>({ children, isMulti }: GenericSelectProps<TMulti>) {
  return (
    <select className={selectClasses} multiple={isMulti}>
      {children}
    </select>
  );
});
