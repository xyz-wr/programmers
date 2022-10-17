function solution(cipher, code) {
  let decode = "";
  for (let i = 0; i < cipher.length; i++) {
      if ((i+1) % code === 0) decode += cipher[i];
  }
  return decode;
}

//다른 사람 풀이
function solution(cipher, code) {
  return cipher.split('').filter((x, index) => (index + 1) % code === 0).join('');
}