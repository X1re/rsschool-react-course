import { createRef, FormEvent, useState } from 'react';
import CheckBoxField from '../components/form/CheckBoxField';
import DateField from '../components/form/DateField';
import RadioField from '../components/form/RadioField';
import SelectField from '../components/form/SelectField';
import TextField from '../components/form/TextField';
import UploadField from '../components/form/UploadField';
import SurveyCard from '../components/ui/SurveyCard';
import '../styles/pages/Survey.css';
import {
  validateAgreement,
  validateAnimal,
  validateCountry,
  validateDate,
  validateImage,
  validateName,
  validateSex,
} from '../utils/validator/validator';

export interface IdataArr {
  name: string;
  animalName: string;
  birthday: string;
  country: string;
  sex: string;
  agreement: boolean;
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
  const formRef = createRef<HTMLFormElement>();
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
  const [errors, setErrors] = useState({
    name: '',
    animalName: '',
    birthday: '',
    country: '',
    sex: '',
    agreement: '',
    image: '',
  });

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
      agreement: agreementRef.current!.checked,
      sex: surveyData.sex,
      img: imgUrl,
    };

    const validate = () => {
      setErrors((prev) => ({ ...prev, animalName: validateAnimal(animalNameRef) }));
      setErrors((prev) => ({ ...prev, name: validateName(nameRef) }));
      setErrors((prev) => ({ ...prev, birthday: validateDate(birthdayRef) }));
      setErrors((prev) => ({ ...prev, sex: validateSex(sexRef) }));
      setErrors((prev) => ({ ...prev, country: validateCountry(countryRef) }));
      setErrors((prev) => ({ ...prev, agreement: validateAgreement(agreementRef) }));
      setErrors((prev) => ({ ...prev, image: validateImage(imgRef) }));
    };
    validate();
    if (Object.values(newSurvey).some((v) => v === '')) return;
    setDataArr((prev: Array<IdataArr>) => [...prev, newSurvey]);
    formRef.current?.reset();
    setErrors({
      name: '',
      animalName: '',
      birthday: '',
      country: '',
      sex: '',
      agreement: '',
      image: '',
    });
    alert('thank you for submission!');
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
        <form onSubmit={handleSubmit} ref={formRef}>
          <TextField label="Your name" inputRef={nameRef} error={errors.name} />
          <DateField label="Birthday" dateRef={birthdayRef} error={errors.birthday} />
          <SelectField label="Country" selectRef={countryRef} error={errors.country} />
          <RadioField
            error={errors.sex}
            label="Sex"
            options={[
              { name: 'Male', value: 'male' },
              { name: 'Female', value: 'female' },
            ]}
            radioRef={sexRef}
            onChange={handleRadioChange}
          />
          <CheckBoxField checkRef={agreementRef} error={errors.agreement} />
          <h3>Fill the input to share</h3>
          <TextField
            label="What animal you want to share?"
            inputRef={animalNameRef}
            error={errors.animalName}
          />
          <UploadField
            name="image"
            label="Upload picture of animal"
            uploadRef={imgRef}
            error={errors.image}
          />
          <button type="submit">Submit</button>
        </form>
        {dataArr && (
          <div className="survey-card__container">
            {dataArr.map((card: IdataArr, i: number) => (
              <SurveyCard key={card.name + i} {...card} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Survey;
