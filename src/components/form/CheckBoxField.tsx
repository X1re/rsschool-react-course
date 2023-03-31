import { RefObject } from 'react';

type CheckRef = {
  checkRef: RefObject<HTMLInputElement>;
};

const CheckBoxField = ({ checkRef }: CheckRef) => {
  return (
    <div>
      <label>
        <input type="checkbox" name="agreement" ref={checkRef} /> I want to share my favourite
        animal!
      </label>
    </div>
  );
};
export default CheckBoxField;
