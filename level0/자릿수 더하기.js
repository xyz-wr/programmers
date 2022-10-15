function solution(n) { 
  return Array.from(n.toString()).map(Number).reduce((a, b) => a + b, 0);
}