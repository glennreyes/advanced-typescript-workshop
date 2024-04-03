'use client';

import type { FC, ReactNode } from 'react';

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

export const Session3: FC = () => {
  return (
    <>
      {/* Generic Component: Single value select */}
      <Select
        onValueChange={(value) => {
          // TODO: Ensure `value` is typed as a string
          console.log(value);
        }}
      >
        {options}
      </Select>

      {/* Generic Component: Multi value select */}
      <Select
        isMulti
        onValueChange={(values) => {
          // TODO: Ensure `values` is typed as an array of strings
          console.log(values);
        }}
      >
        {options}
      </Select>
    </>
  );
};

// TODO: Enhance SelectProps to be generic, accommodating both single and multi-select scenarios.
interface SelectProps {
  children: ReactNode;
  isMulti?: boolean;
  // Define a generic type for `onValueChange` to dynamically adjust to `isMulti`
}

const Select: FC<SelectProps> = ({ children, isMulti, onValueChange }) => {
  // TODO: Implement select logic, invoking `onValueChange` with either a string or an array of strings, based on `isMulti`.
  return <select>{children}</select>;
};
