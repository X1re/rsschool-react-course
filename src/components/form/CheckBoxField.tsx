import { RefObject } from 'react';

type CheckRef = {
  checkRef: RefObject<HTMLInputElement>;
  error: string;
};

const CheckBoxField = ({ checkRef, error }: CheckRef) => {
  return (
    <div>
      <label>
        <input type="checkbox" name="agreement" ref={checkRef} /> I want to share my favourite
        animal!
      </label>
      {error && <div className="error">{error}</div>}
    </div>
  );
};
export default CheckBoxField;
