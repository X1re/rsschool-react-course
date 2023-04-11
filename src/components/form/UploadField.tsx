import { FieldError, Path, UseFormRegister } from 'react-hook-form';
import { IFormValues } from '../../pages/Survey';

type UploadProps = {
  label: Path<IFormValues>;
  name: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
  imageError: FieldError | undefined;
};

const UploadField = ({ label, name, register, imageError }: UploadProps) => {
  return (
    <div>
      <label>
        {label}
        <input
          accept="image/png, image/jpeg"
          type="file"
          {...register(name, {
            required: {
              value: true,
              message: 'Image should be uploaded',
            },
          })}
        />
      </label>
      {imageError && <div className="error">{imageError.message}</div>}
    </div>
  );
};
export default UploadField;
