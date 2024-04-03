'use client';

import type { FC } from 'react';

import { selectClasses } from '@/components/ui/select';

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
      <Select
        onValueChange={(value) => {
          // TODO: Make sure value is a string
          console.log(value);
        }}
      >
        {options}
      </Select>
      <Select
        isMulti
        onValueChange={(values) => {
          // TODO: Make sure values is an array of strings
          console.log(values);
        }}
      >
        {options}
      </Select>
    </>
  );
};

interface SelectProps {
  children: React.ReactNode;
}

const Select: FC<SelectProps> = ({ children }) => {
  return <select className={selectClasses}>{children}</select>;
};
