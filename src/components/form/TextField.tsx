import { RefObject } from 'react';

type InputProps = {
  label: string;
  inputRef: RefObject<HTMLInputElement>;
};

const TextField = ({ label, inputRef }: InputProps) => {
  return (
    <div className="input-text">
      <label htmlFor={label}>{label}</label>
      <input type="text" id={label} ref={inputRef} />
    </div>
  );
};

export default TextField;
