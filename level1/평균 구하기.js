function solution(arr) {
    let ans = 0;
    for (let i = 0; i < arr.length; i++) {
        ans += arr[i];
    }
    return ans / arr.length;
}

//풀이
function solution(arr) {
    return arr.reduce((a, b) => a + b) / arr.length;
}