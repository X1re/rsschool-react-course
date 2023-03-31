// export function validateName(name: React.RefObject<HTMLInputElement>) {
//   if (!name.current) return 'Invalid format';
//   if (name.current.value === '') return `${name} cannot be empty`;
//   if (name.current.value.length < 3) return `${name}Name should contain at least 3 symbols`;
//   return '';
// }

// export function validateDate(birthday: React.RefObject<HTMLInputElement>) {
//   if (!birthday.current) return 'Invalid format';
//   if (birthday.current.value === '') return 'please fill birthday field';
//   return '';
// }

// export function validateTheme(country: React.RefObject<HTMLInputElement>[]) {
//   let error = 'Select your country from dropdown';
//   country.forEach((c) => {
//     if (c.current?.checked) {
//       error = '';
//     }
//   });
//   return error;
// }

// export function validateLang(eventLang: React.RefObject<HTMLSelectElement>, options: string[]) {
//   if (!eventLang.current) return 'Invalid format';
//   if (!options.includes(eventLang.current.value)) {
//     return 'Language should be selected';
//   }
//   return '';
// }

// export function validateType(eventType: React.RefObject<HTMLInputElement>[]) {
//   let error = 'Type should be selected';
//   eventType.forEach((type) => {
//     if (type.current?.checked) {
//       error = '';
//     }
//   });
//   return error;
// }

// export function validatePlace(eventPlace: React.RefObject<HTMLInputElement>) {
//   if (!eventPlace.current) return 'Invalid format';
//   if (eventPlace.current.value === '') return 'Event Place cannot be empty';
//   if (eventPlace.current.value.length <= 3) return 'Event Place should contain at least 3 symbols';
//   return '';
// }

// export function validatePoster(eventPoster: React.RefObject<HTMLInputElement>) {
//   if (!eventPoster.current || !eventPoster.current.files) return 'Invalid format';
//   if (!eventPoster.current.files[0]) return 'Event Poster should be uploaded';
//   if (!eventPoster.current.files[0].type.includes('image')) return 'Image should be uploaded';
//   return '';
// }

import { IdataArr } from './../pages/Survey';
export default function validator(obj: IdataArr) {
  let errors = 0;
  const vals = Object.values(obj);
  for (const val of vals) {
    if (val.length === 0) {
      errors++;
    }
  }
  if (errors > 0) {
    return false;
  } else {
    return true;
  }
}
