import { Component, ReactNode, RefObject } from 'react';

interface DateFieldProps {
  dateRef: RefObject<HTMLInputElement>;
  label: string;
}

class DateField extends Component<DateFieldProps> {
  render(): ReactNode {
    const { label, dateRef } = this.props;
    return (
      <div className="input-date">
        <label htmlFor={label}>{label}</label>
        <input type="date" id={label} ref={dateRef} />
      </div>
    );
  }
}

export default DateField;
