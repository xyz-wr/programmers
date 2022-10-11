function solution(denum1, num1, denum2, num2) {
  let answer = [];
  let num = num1 * num2;
  let denum = denum1 * num2 + denum2 * num1;
  const GCD = gcd(num, denum);
  answer.push(denum / GCD);
  answer.push(num / GCD);
  return answer;
}

function gcd(m, n) {
  if (m > n) m, n = n, m;
  if (n === 0) return m;
  if (m % n === 0) return n;
  else return gcd(n, m%n);
  
}