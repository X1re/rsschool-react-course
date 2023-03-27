import { Component, RefObject } from 'react';
import countries from '../../mockdata/countries.json';

interface CountryProps {
  phone: number;
  name: string;
}

interface SelectProps {
  label: string;
  selectRef: RefObject<HTMLSelectElement>;
}

class SelectField extends Component<SelectProps> {
  constructor(props: SelectProps) {
    super(props);
  }

  render() {
    const { selectRef, label } = this.props;

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
      </div>
    );
  }
}

export default SelectField;
