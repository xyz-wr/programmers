function solution(arr) {
    let min = 2147000000;
    let idx = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
            idx = i;
        }
    }
    arr.splice(idx, 1);
    return arr.length === 0 ?  [-1] : arr;
}

//풀이
function solution(arr) {
    arr.splice(arr.indexOf(Math.min(...arr)), 1);
    return arr.length < 1 ? [-1] : arr;
}