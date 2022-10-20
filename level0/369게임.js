function solution(order) {
  let num = Array.from(order.toString())
  return num.filter(n => n === "3" || n === "6" || n === "9").length;
}

//다른 사람 풀이
function solution(order) {
  return Array.from(order.toString()).filter(t => ['3', '6', '9'].includes(t)).length;
}
