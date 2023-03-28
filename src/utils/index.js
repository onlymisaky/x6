export function pascal(str) {
  if (typeof str !== 'string') {
    return str;
  }
  if (!/^[A-Za-z]/.test(str)) {
    return str;
  }
  const first = str.substring(0, 1);
  const rest = str.substring(1);
  return `${first.toUpperCase()}${rest.toLowerCase()}`;
}
