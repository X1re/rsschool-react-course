import { Component, createRef, FormEvent, ReactNode } from 'react';
import CheckBoxField from '../components/form/CheckBoxField';
import DateField from '../components/form/DateField';
import RadioField from '../components/form/RadioField';
import SelectField from '../components/form/SelectField';
import TextField from '../components/form/TextField';
import UploadField from '../components/form/UploadField';
import SurveyCard from '../components/ui/SurveyCard';
import { withRouter, WithRouterProps } from '../HOC/withRouter';
import '../styles/pages/Survey.css';

export interface SurveyState {
  name: string;
  animalName: string;
  birthday: string;
  country: string;
  sex: string;
  agreement: string;
  img: string | undefined;
  dataArr: Array<{
    name: string;
    animalName: string;
    birthday: string;
    country: string;
    sex: string;
    agreement: string;
    img: string | null | undefined;
  }>;
}

class Survey extends Component<WithRouterProps, SurveyState> {
  private nameRef = createRef<HTMLInputElement>();
  private animalNameRef = createRef<HTMLInputElement>();
  private birthdayRef = createRef<HTMLInputElement>();
  private countryRef = createRef<HTMLSelectElement>();
  private sexRef: React.RefObject<HTMLInputElement>[] = [
    createRef<HTMLInputElement>(),
    createRef<HTMLInputElement>(),
  ];
  private agreementRef = createRef<HTMLInputElement>();
  private imgRef = createRef<HTMLInputElement>();

  state = {
    name: '',
    animalName: '',
    birthday: '',
    country: '',
    sex: '',
    agreement: '',
    img: '',
    dataArr: [],
  };

  resetInputs = (): void => {
    this.nameRef.current!.value = '';
    this.animalNameRef.current!.value = '';
    this.birthdayRef.current!.value = '';
    this.countryRef.current!.value = '';
    this.sexRef[0].current!.checked = false;
    this.sexRef[1].current!.checked = false;
    this.agreementRef.current!.checked = false;
    this.imgRef.current!.value = '';
  };

  handleRadioChange = (): void => {
    const radio = this.sexRef[0].current?.checked ? 'male' : 'female';
    this.setState((prev) => ({
      ...prev,
      sex: radio,
    }));
  };

  handleSubmit = (e: FormEvent<EventTarget>) => {
    e.preventDefault();
    const imgUrl = this.handleImgUpload();
    const newSurvey = {
      name: this.nameRef.current!.value,
      animalName: this.animalNameRef.current!.value,
      birthday: this.birthdayRef.current!.value,
      country: this.countryRef.current!.value,
      agreement: this.agreementRef.current!.value,
      sex: this.state.sex,
      img: imgUrl,
    };

    this.setState((prev: SurveyState) => ({
      ...prev,
      dataArr: [...prev.dataArr, newSurvey],
    }));
    this.resetInputs();
    alert('thank you for submission!');
  };

  handleImgUpload = (): string | null => {
    const img = this.imgRef.current;
    if (img && img.files && img.files.length) {
      return URL.createObjectURL(img.files[0]);
    } else {
      return '';
    }
  };

  render(): ReactNode {
    return (
      <div className="survey">
        <div className="survey-content">
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
            <TextField label="What animal you want to share?" inputRef={this.animalNameRef} />
            <UploadField name="image" label="Upload picture of animal" uploadRef={this.imgRef} />
            <button type="submit">Submit</button>
          </form>
          {this.state.dataArr.length > 0 ? (
            <div className="survey-card__container">
              {this.state.dataArr.map((card: SurveyState, i: number) => (
                <SurveyCard key={card.name + i} {...card} />
              ))}
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    );
  }
}

export default withRouter(Survey);
