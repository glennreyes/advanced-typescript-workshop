import type { ReactNode } from 'react';

import React, { forwardRef, useRef } from 'react';

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

export const Session4: React.FC = () => {
  const selectRef = useRef<HTMLSelectElement>(null);

  return (
    <>
      {/* Usage examples with true passed explicitly */}
      <Select<true> isMulti>{options}</Select>
      <GenericSelect<true> isMulti ref={selectRef}>
        {options}
      </GenericSelect>
    </>
  );
};

interface SelectProps<TMulti> {
  children: ReactNode;
  isMulti?: TMulti;
}

function Select<TMulti extends boolean = false>({
  children,
  isMulti,
}: SelectProps<TMulti>) {
  return <select multiple={isMulti}>{children}</select>;
}

// Augmenting forwardRef to handle generics
interface GenericSelectProps<TMulti> extends SelectProps<TMulti> {}

const GenericSelect: <TMulti extends boolean = false>(
  props: GenericSelectProps<TMulti> & {
    ref?: React.ForwardedRef<HTMLSelectElement>;
  },
) => ReactNode = forwardRef(function GenericSelect<
  TMulti extends boolean = false,
>(
  { children, isMulti }: GenericSelectProps<TMulti>,
  ref: React.ForwardedRef<HTMLSelectElement>,
) {
  return (
    <select multiple={isMulti} ref={ref}>
      {children}
    </select>
  );
});
