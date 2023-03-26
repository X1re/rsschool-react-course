import { Component, ReactNode, RefObject } from 'react';

interface UploadProps {
  uploadRef: RefObject<HTMLInputElement>;
  name: string;
  label: string;
}

class UploadField extends Component<UploadProps> {
  render(): ReactNode {
    const { uploadRef, name, label } = this.props;
    return (
      <div>
        <label>
          {label}
          <input accept="image/png, image/jpeg" type="file" name={name} ref={uploadRef} />
        </label>
      </div>
    );
  }
}
export default UploadField;
// img.src = URL.createObjectURL(this.files[i])
{
  /* <input
  type="file"
  id="fileElem"
  multiple
  accept="image/*"
  style="display:none" />
<a href="#" id="fileSelect">Select some files</a>
<div id="fileList">
  <p>No files selected!</p>
</div> */
}
