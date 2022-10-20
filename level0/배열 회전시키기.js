function solution(numbers, direction) {
  let change = "";
  if (direction === "right") {
      change = numbers[numbers.length - 1];
      numbers.splice(numbers.length -1, 1)
      numbers.splice(0, 0, change);
  } else if (direction === "left") {
      change = numbers[0];
      numbers.splice(0, 1);
      numbers.push(change);
  }
  return numbers;
  
}

//다른 사람 풀이
function solution(numbers, direction) {
  direction === 'right' ? numbers.unshift(numbers.pop()) : numbers.push(numbers.shift());
  return numbers;
}