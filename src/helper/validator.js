export default function validator(obj) {
  let errors = 0;
  let vals = Object.values(obj);
  for (const val of vals) {
    if (val.length === 0) {
      errors++;
    }
  }
  if (errors > 0) {
    return false;
  } else return true;
}
