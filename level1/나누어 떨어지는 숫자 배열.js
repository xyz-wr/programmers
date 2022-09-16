function solution(arr, divisor) {
    let ans = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % divisor === 0) {
            ans.push(arr[i]);
        }
    }
    if (ans.length === 0) {
        ans.push(-1);
        return ans;
    } 
    return ans.sort(function(a, b) {
        return a - b;
    });
}

//풀이
function solution(arr, divisor) {
    let answer = arr.filter(v => v % divisor === 0);
    return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b);
}