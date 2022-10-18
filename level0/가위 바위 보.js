function solution(rsp) {
  let arr = rsp.split("");
  let ans = "";
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] === "2") ans += "0";
      else if (arr[i] === "0") ans += "5";
      else if (arr[i] === "5") ans += "2";
  }
  return ans;
}
