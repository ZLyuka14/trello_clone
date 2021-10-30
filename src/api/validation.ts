/**
 * This function helps me to validate inputs.
 * @param str - string to validate
 * @returns - boolean true if string is matches pattern, false if not
 */
export default function isValidData(str: string): boolean {
  if (str === null) {
    return false;
  }
  const pattern = new RegExp('[а-яА-Яa-zA-Z0-9. *_-]+');
  const newStr = str.match(pattern);
  if (newStr === null) {
    return false;
  }
  return str === newStr[0];
}
