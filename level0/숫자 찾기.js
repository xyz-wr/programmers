function solution(num, k) {
  let idx = num.toString().indexOf(k);
  return idx === -1 ? -1 : idx +1;
}