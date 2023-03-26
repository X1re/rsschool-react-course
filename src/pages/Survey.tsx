import { Component, createRef, FormEvent, ReactNode } from 'react';
import CheckBoxField from '../components/form/CheckBoxField';
import DateField from '../components/form/DateField';
import RadioField from '../components/form/RadioField';
import SelectField from '../components/form/SelectField';
import TextField from '../components/form/TextField';
import UploadField from '../components/form/UploadField';
import { withRouter, WithRouterProps } from '../HOC/withRouter';

interface SurveyState {
  name: string;
  animalName: string;
  birthday: string;
  country: string;
  sex: string;
  agreement: string;
  img: string | null;
}

class Survey extends Component<WithRouterProps, SurveyState> {
  private nameRef = createRef<HTMLInputElement>();
  private animalName = createRef<HTMLInputElement>();
  private birthdayRef = createRef<HTMLInputElement>();
  private countryRef = createRef<HTMLSelectElement>();
  private sexRef: React.RefObject<HTMLInputElement>[] = [
    createRef<HTMLInputElement>(),
    createRef<HTMLInputElement>(),
  ];
  private agreementRef = createRef<HTMLInputElement>();
  private imgRef = createRef<HTMLInputElement>();

  state: SurveyState = {
    name: this.nameRef.current?.value || '',
    animalName: this.animalName.current?.value || '',
    birthday: this.birthdayRef.current?.value || '',
    country: this.countryRef.current?.value || '',
    sex: '',
    agreement: this.agreementRef.current?.value || '',
    img: this.imgRef.current?.value || '',
  };
  data: Array<typeof this.state> = [];

  handleRadioChange = (): void => {
    const radio = this.sexRef[0].current?.checked ? 'male' : 'female';
    this.setState((prev) => ({
      ...prev,
      sex: radio,
    }));
  };

  resetForm = () => {
    this.setState((prev) => ({
      ...prev,
      name: '',
      animalName: '',
      birthday: '',
      country: '',
      sex: '',
      agreement: '',
      img: '',
    }));
  };

  handleSubmit = (e: FormEvent<EventTarget>): void => {
    e.preventDefault();
    const imgUrl = this.handleImgUpload();
    this.setState((prev: SurveyState) => ({
      ...prev,
      name: this.nameRef.current!.value,
      animalName: this.animalName.current!.value,
      birthday: this.birthdayRef.current!.value,
      country: this.countryRef.current!.value,
      agreement: this.agreementRef.current!.value,
      img: imgUrl,
    }));
    this.data.push(this.state);
    this.resetForm();
    console.log(this.data);
  };

  handleImgUpload = (): string | null => {
    const img = this.imgRef.current;
    if (img && img.files && img.files.length) {
      return URL.createObjectURL(img.files[0]);
    } else {
      return null;
    }
  };

  render(): ReactNode {
    return (
      <div className="survey">
        <h1>Pls share with us your favorite animal</h1>
        <h4>But first tell a bit about yourself</h4>
        <form onSubmit={this.handleSubmit}>
          <TextField label="Your name" inputRef={this.nameRef} />
          <DateField label="Birthday" dateRef={this.birthdayRef} />
          <SelectField label="Country" selectRef={this.countryRef} />
          <RadioField
            label="Sex"
            options={[
              { name: 'Male', value: 'male' },
              { name: 'Female', value: 'female' },
            ]}
            radioRef={this.sexRef}
            onChange={this.handleRadioChange}
          />
          <CheckBoxField checkRef={this.agreementRef} />
          <h3>Fill the input to share</h3>
          <TextField label="What animal you want to share?" inputRef={this.animalName} />
          <UploadField name="image" label="Upload picture of animal" uploadRef={this.imgRef} />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default withRouter(Survey);
