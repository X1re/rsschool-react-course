import { RefObject } from 'react';

type DateFieldProps = {
  dateRef: RefObject<HTMLInputElement>;
  label: string;
  error: string;
};

const DateField = ({ label, dateRef, error }: DateFieldProps) => {
  return (
    <div className="input-date">
      <label htmlFor={label}>{label}</label>
      <input type="date" id={label} ref={dateRef} />
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default DateField;
