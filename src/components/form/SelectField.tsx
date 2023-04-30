import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import { IFormValues } from '../../pages/Survey';
import countries from '../../mockdata/countries.json';
import { forwardRef } from 'react';

type CountryProps = {
  phone: number;
  name: string;
};
type SelectProps = {
  label: string;
  errors: FieldErrors<FieldValues>;
  name: string;
};

const SelectField = forwardRef<
  HTMLSelectElement,
  SelectProps & ReturnType<UseFormRegister<IFormValues>>
>(({ label, name, onChange, errors }, ref) => {
  return (
    <>
      <label>{label}</label>
      <select name={name} ref={ref} onChange={onChange}>
        <option value="">Select a country</option>
        {countries.map((country: CountryProps) => (
          <option key={country.phone} value={country.name}>
            {country.name}
          </option>
        ))}
      </select>
      {errors[label] && <div className="error">Please select Country</div>}
    </>
  );
});

export default SelectField;
