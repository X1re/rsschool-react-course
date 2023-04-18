import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import CheckBoxField from '../components/form/CheckBoxField';
import DateField from '../components/form/DateField';
import RadioField from '../components/form/RadioField';
import SelectField from '../components/form/SelectField';
import TextField from '../components/form/TextField';
import UploadField from '../components/form/UploadField';
import Modal from '../components/ui/Modal';
import SurveyCard from '../components/ui/SurveyCard';
import { useAppDispatch, useAppSelector } from '../hooks/typedHooks';
import { addFormCard } from '../store/formSlice';
import '../styles/pages/Survey.css';

export interface IdataArr {
  name: string;
  animalName: string;
  birthday: string;
  country: string;
  sex: string;
  agreement: string;
  img: string;
}
export interface IFormValues {
  userName: string;
  'Your name': string;
  Birthday: string;
  Country: string;
  Sex: string;
  Agreement: string;
  'What animal you want to share?': string;
  animalName: string;
  'Upload picture of animal': string;
  image: string;
  open: () => void;
}

const Survey = () => {
  const [modal, setModal] = useState(false);
  const cards = useAppSelector((state) => state.form.formCards);
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormValues>();
  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    const newData = {
      name: data.userName,
      animalName: data.animalName,
      birthday: data.Birthday,
      country: data.Country,
      sex: data.Sex,
      agreement: data.Agreement,
      img: URL.createObjectURL(data.image[0] as unknown as Blob),
    };
    dispatch(addFormCard(newData));
    reset();
    setModal(true);
  };

  return (
    <div className="survey">
      {modal && <Modal modalType="submit" open={modal} onClose={setModal} />}
      <div className="survey-content">
        <h1>Pls share with us your favorite animal</h1>
        <h4>But first tell a bit about yourself</h4>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField name="userName" label="Your name" register={register} errors={errors} />
          <DateField label="Birthday" register={register} errors={errors} />
          <SelectField
            label="Country"
            {...register('Country', { required: true })}
            errors={errors}
          />
          <RadioField
            errors={errors}
            label="Sex"
            options={[
              { name: 'Male', value: 'male' },
              { name: 'Female', value: 'female' },
            ]}
            {...register('Sex', { required: true })}
          />
          <CheckBoxField label="Agreement" register={register} />
          <h3>Fill the input to share</h3>
          <TextField
            name="animalName"
            label="What animal you want to share?"
            register={register}
            errors={errors}
          />
          <UploadField
            name="image"
            label="Upload picture of animal"
            register={register}
            imageError={errors.image}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      {cards && (
        <div className="survey-card__container">
          {cards.map((card: IdataArr, i: number) => (
            <SurveyCard key={card.name + i} {...card} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Survey;
