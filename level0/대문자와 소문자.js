function solution(my_string) {
  let answer = ""
  for (let x of my_string) {
      if (x === x.toUpperCase()) answer += x.toLowerCase();
      else answer+= x.toUpperCase();
  }
  return answer;
}

//다른 사람의 풀이
function solution(my_string) {
  return [...my_string].map(char => (char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase())).join('');
}