function solution(array, height) {
  let answer = 0;
  array.forEach(arr => {
      if (arr > height) answer++;
  })
  return answer;
}