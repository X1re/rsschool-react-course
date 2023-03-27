import { Component, ReactNode, RefObject } from 'react';

interface InputProps {
  label: string;
  inputRef: RefObject<HTMLInputElement>;
}

class TextField extends Component<InputProps> {
  render(): ReactNode {
    const { label, inputRef } = this.props;
    return (
      <div className="input-text">
        <label htmlFor={label}>{label}</label>
        <input type="text" id={label} ref={inputRef} />
      </div>
    );
  }
}

export default TextField;
