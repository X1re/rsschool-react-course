import { RefObject } from 'react';
import countries from '../../mockdata/countries.json';

type CountryProps = {
  phone: number;
  name: string;
};

type SelectProps = {
  label: string;
  selectRef: RefObject<HTMLSelectElement>;
  error: string;
};

const SelectField = ({ selectRef, label, error }: SelectProps) => {
  return (
    <div>
      <label>{label}</label>
      <select ref={selectRef}>
        <option value="">Select a country</option>
        {countries.map((country: CountryProps) => (
          <option key={country.phone} value={country.name}>
            {country.name}
          </option>
        ))}
      </select>
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default SelectField;
