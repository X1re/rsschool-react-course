import { forwardRef } from 'react';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import { IFormValues } from '../../pages/Survey';

type RadioProps = {
  label: string;
  options: Array<{ name: string; value: string }>;
  errors: FieldErrors<FieldValues>;
};

const RadioField = forwardRef<
  HTMLInputElement,
  RadioProps & ReturnType<UseFormRegister<IFormValues>>
>(({ label, onChange, options, errors }, ref) => (
  <div className="radio">
    <span>{label}</span>
    <span className="radio-input">
      {options.map((option, i) => (
        <span key={i}>
          <input
            type="radio"
            id={option.name}
            name={label}
            value={option.value}
            onChange={onChange}
            ref={ref}
          />
          <label htmlFor={option.name}>{option.name}</label>
        </span>
      ))}
    </span>
    {errors[label] && <div className="error">Should be selected</div>}
  </div>
));
export default RadioField;
