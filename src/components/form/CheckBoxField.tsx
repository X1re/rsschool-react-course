import { Path, UseFormRegister } from 'react-hook-form';
import { IFormValues } from '../../pages/Survey';

type CheckRef = {
  label: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
};

const CheckBoxField = ({ register, label }: CheckRef) => {
  return (
    <div>
      <label>
        <input type="checkbox" {...register(label, { required: true })} /> I want to share my
        favourite animal!
      </label>
    </div>
  );
};
export default CheckBoxField;
