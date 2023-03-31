import { RefObject } from 'react';

type DateFieldProps = {
  dateRef: RefObject<HTMLInputElement>;
  label: string;
};

const DateField = ({ label, dateRef }: DateFieldProps) => {
  return (
    <div className="input-date">
      <label htmlFor={label}>{label}</label>
      <input type="date" id={label} ref={dateRef} />
    </div>
  );
};

export default DateField;
