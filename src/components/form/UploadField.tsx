import { RefObject } from 'react';

type UploadProps = {
  uploadRef: RefObject<HTMLInputElement>;
  name: string;
  label: string;
  error: string;
};

const UploadField = ({ uploadRef, name, label, error }: UploadProps) => {
  console.log(error);
  return (
    <div>
      <label>
        {label}
        <input accept="image/png, image/jpeg" type="file" name={name} ref={uploadRef} />
      </label>
      {error && <div className="error">{error}</div>}
    </div>
  );
};
export default UploadField;
