import { Component, ReactNode, RefObject } from 'react';

interface CheckProps {
  checkRef: RefObject<HTMLInputElement>;
}

class CheckBoxField extends Component<CheckProps> {
  render(): ReactNode {
    const { checkRef } = this.props;
    return (
      <div>
        <label>
          <input type="checkbox" name="agreement" ref={checkRef} /> I want to share my favourite
          animal!
        </label>
      </div>
    );
  }
}
export default CheckBoxField;
