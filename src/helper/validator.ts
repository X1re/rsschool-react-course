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
