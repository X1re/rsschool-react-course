import { RefObject } from 'react';

type UploadProps = {
  uploadRef: RefObject<HTMLInputElement>;
  name: string;
  label: string;
};

const UploadField = ({ uploadRef, name, label }: UploadProps) => {
  return (
    <div>
      <label>
        {label}
        <input accept="image/png, image/jpeg" type="file" name={name} ref={uploadRef} />
      </label>
    </div>
  );
};
export default UploadField;
