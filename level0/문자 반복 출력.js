function solution(my_string, n) {
  let answer = "";
  for (let i = 0; i < my_string.length; i++) {
      answer += my_string[i].repeat(n);
  }
  return answer;
}

//다른 사람 풀이
function solution(my_string, n) {
  return my_string.split("").reduce((acc, cur) => acc + cur.repeat(n), '');
}