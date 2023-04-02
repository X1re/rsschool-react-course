import { RefObject } from 'react';

type InputProps = {
  label: string;
  inputRef: RefObject<HTMLInputElement>;
  error: string;
};

const TextField = ({ label, inputRef, error }: InputProps) => {
  return (
    <div className="input-text">
      <label htmlFor={label}>{label}</label>
      <input type="text" id={label} ref={inputRef} />
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default TextField;
