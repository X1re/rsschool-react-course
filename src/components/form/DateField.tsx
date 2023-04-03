import { FieldErrors, Path, UseFormRegister } from 'react-hook-form';
import { IFormValues } from '../../pages/Survey';

type DateFieldProps = {
  label: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
  errors: FieldErrors<IFormValues>;
};

const DateField = ({ label, register, errors }: DateFieldProps) => {
  return (
    <div className="input-date">
      <label htmlFor={label}>{label}</label>
      <input {...register(label, { required: true })} type="date" id={label} />
      {errors[label] && <div className="error">Please pick your birthday date</div>}
    </div>
  );
};

export default DateField;
