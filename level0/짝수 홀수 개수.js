function solution(num_list) {
  let answer = [];
  let cnt1 = cnt2 = 0;
  num_list.forEach(n => {
      if (n % 2 === 0) {
          cnt1++;
      } else {
          cnt2++;
      }
  })
  return [cnt1, cnt2];
}