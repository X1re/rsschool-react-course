import { FieldErrors, Path, UseFormRegister } from 'react-hook-form';
import { IFormValues } from '../../pages/Survey';

type InputProps = {
  label: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
  errors: FieldErrors<IFormValues>;
  name: Path<IFormValues>;
};

const TextField = ({ label, register, errors, name }: InputProps) => {
  return (
    <div className="input-text">
      <label htmlFor={label}>{label}</label>
      <input type="text" id={label} {...register(name, { required: true })} />
      {errors[name] && <p className="error">Please fill this field</p>}
    </div>
  );
};

export default TextField;
