export function truncateString(string: string, maxLength: number) {
  if (string.length > maxLength) {
    return string.slice(0, maxLength - 3) + ' ...';
  } else {
    return string;
  }
}
