import type { ChangeEvent, FC, ReactNode } from 'react';

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
          console.log(value); // value is string
        }}
      >
        {options}
      </Select>
      <Select
        isMulti
        onValueChange={(values) => {
          console.log(values); // values is string[]
        }}
      >
        {options}
      </Select>
    </>
  );
};

interface SelectProps {
  children: ReactNode;
  isMulti?: boolean;
  onValueChange: (value: string[] | string) => void;
}

const Select: FC<SelectProps> = ({ children, isMulti, onValueChange }) => {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    if (isMulti) {
      // Safely handle the multi-select scenario with a more specific type assertion
      const selectedOptions = Array.from(
        event.target.selectedOptions,
        (option) => option.value,
      );

      onValueChange(selectedOptions);
    } else {
      // This remains safe as it aligns with the expected single string value
      onValueChange(event.target.value);
    }
  };

  return (
    <select multiple={isMulti} onChange={handleChange}>
      {children}
    </select>
  );
};
