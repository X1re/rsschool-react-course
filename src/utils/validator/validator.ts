import countries from '../../mockdata/countries.json';
export function validateAnimal(survAnimal: React.RefObject<HTMLInputElement>) {
  if (!survAnimal.current) return 'Invalid format';
  if (survAnimal.current.value === '') return 'Animal name field cannot be empty';
  if (survAnimal.current.value.length < 3) return 'More than 3 letter required in animal field';
  return '';
}
export function validateName(userName: React.RefObject<HTMLInputElement>) {
  if (!userName.current) return 'Invalid format';
  if (userName.current.value === '') return 'Name field cannot be empty';
  if (userName.current.value.length < 3) return 'More than 3 letter required in name field';
  return '';
}

export function validateDate(eventDate: React.RefObject<HTMLInputElement>) {
  if (!eventDate.current) return 'Invalid format';
  if (eventDate.current.value === '') return 'Please tell us your birthday date';
  return '';
}

export function validateSex(sex: React.RefObject<HTMLInputElement>[]) {
  let error = 'At least one should be selected';
  sex.forEach((s) => {
    if (s.current?.checked) {
      error = '';
    }
  });
  return error;
}

export function validateCountry(countrySelect: React.RefObject<HTMLSelectElement>) {
  const countryList = countries.map((c) => c.name);
  if (!countrySelect.current) return 'Invalid format';
  if (!countryList.includes(countrySelect.current.value)) {
    return 'Country should be selected';
  }
  return '';
}

export function validateAgreement(agreement: React.RefObject<HTMLInputElement>) {
  let error = 'You must agree to continue';
  if (agreement.current?.checked) {
    error = '';
  }
  return error;
}

export function validateImage(animalImage: React.RefObject<HTMLInputElement>) {
  if (!animalImage.current || !animalImage.current.files) return 'Invalid format';
  if (!animalImage.current.files[0]) return 'Please download a picture of animal.';
  if (!animalImage.current.files[0].type.includes('image')) return 'Image should be uploaded';
  return '';
}
