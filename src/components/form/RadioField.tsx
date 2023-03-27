import { Component, ReactNode, RefObject } from 'react';

interface RadioProps {
  label: string;
  radioRef: Array<RefObject<HTMLInputElement>>;
  options: Array<{ name: string; value: string }>;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

class RadioField extends Component<RadioProps> {
  render(): ReactNode {
    const { radioRef, label, options, onChange } = this.props;
    return (
      <div className="radio">
        <span>{label}</span>
        <span className="radio-input">
          {options.map((option, i) => (
            <span key={i}>
              <input
                ref={radioRef[i]}
                type="radio"
                id={option.name}
                name={label}
                value={option.value}
                onChange={onChange}
              />
              <label htmlFor={option.name}>{option.name}</label>
            </span>
          ))}
        </span>
      </div>
    );
  }
}
export default RadioField;
