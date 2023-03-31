import { createRef, FormEvent, useState } from 'react';
import CheckBoxField from '../components/form/CheckBoxField';
import DateField from '../components/form/DateField';
import RadioField from '../components/form/RadioField';
import SelectField from '../components/form/SelectField';
import TextField from '../components/form/TextField';
import UploadField from '../components/form/UploadField';
import SurveyCard from '../components/ui/SurveyCard';
import '../styles/pages/Survey.css';
import validator from '../helper/validator';

export interface IdataArr {
  name: string;
  animalName: string;
  birthday: string;
  country: string;
  sex: string;
  agreement: string;
  img: string;
}

const Survey = () => {
  const nameRef = createRef<HTMLInputElement>();
  const animalNameRef = createRef<HTMLInputElement>();
  const birthdayRef = createRef<HTMLInputElement>();
  const countryRef = createRef<HTMLSelectElement>();
  const sexRef: React.RefObject<HTMLInputElement>[] = [
    createRef<HTMLInputElement>(),
    createRef<HTMLInputElement>(),
  ];
  const agreementRef = createRef<HTMLInputElement>();
  const imgRef = createRef<HTMLInputElement>();
  const [dataArr, setDataArr] = useState<Array<IdataArr>>([]);
  const [surveyData, setSurveyData] = useState({
    name: '',
    animalName: '',
    birthday: '',
    country: '',
    sex: '',
    agreement: '',
    img: '',
  });

  const resetInputs = (): void => {
    nameRef.current!.value = '';
    animalNameRef.current!.value = '';
    birthdayRef.current!.value = '';
    countryRef.current!.value = '';
    sexRef[0].current!.checked = false;
    sexRef[1].current!.checked = false;
    agreementRef.current!.checked = false;
    imgRef.current!.value = '';
  };

  const handleRadioChange = (): void => {
    const radio = sexRef[0].current?.checked ? 'male' : 'female';
    setSurveyData((prev) => ({
      ...prev,
      sex: radio,
    }));
  };

  const handleSubmit = (e: FormEvent<EventTarget>) => {
    e.preventDefault();
    const imgUrl = handleImgUpload();
    const newSurvey = {
      name: nameRef.current!.value,
      animalName: animalNameRef.current!.value,
      birthday: birthdayRef.current!.value,
      country: countryRef.current!.value,
      agreement: agreementRef.current!.value,
      sex: surveyData.sex,
      img: imgUrl,
    };

    if (validator(newSurvey)) {
      setDataArr((prev: Array<IdataArr>) => [...prev, newSurvey]);
      resetInputs();
      alert('thank you for submission!');
    } else return alert('please fill form fields complitely');
  };

  const handleImgUpload = (): string => {
    const img = imgRef.current;
    if (img && img.files && img.files.length) {
      return URL.createObjectURL(img.files[0]);
    } else {
      return '';
    }
  };

  return (
    <div className="survey">
      <div className="survey-content">
        <h1>Pls share with us your favorite animal</h1>
        <h4>But first tell a bit about yourself</h4>
        <form onSubmit={handleSubmit}>
          <TextField label="Your name" inputRef={nameRef} />
          <DateField label="Birthday" dateRef={birthdayRef} />
          <SelectField label="Country" selectRef={countryRef} />
          <RadioField
            label="Sex"
            options={[
              { name: 'Male', value: 'male' },
              { name: 'Female', value: 'female' },
            ]}
            radioRef={sexRef}
            onChange={handleRadioChange}
          />
          <CheckBoxField checkRef={agreementRef} />
          <h3>Fill the input to share</h3>
          <TextField label="What animal you want to share?" inputRef={animalNameRef} />
          <UploadField name="image" label="Upload picture of animal" uploadRef={imgRef} />
          <button type="submit">Submit</button>
        </form>
        {dataArr.length > 0 ? (
          <div className="survey-card__container">
            {dataArr.map((card: IdataArr, i: number) => (
              <SurveyCard key={card.name + i} {...card} />
            ))}
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default Survey;
