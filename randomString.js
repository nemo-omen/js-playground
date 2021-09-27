export function randomString(length) {
  let chars = [];
  for(let i = 0; i < length; i++) {
    chars.push(String.fromCharCode((Math.floor(Math.random() * 26)) + 65));
  }
  return chars.join('');
}