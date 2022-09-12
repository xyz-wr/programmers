function solution(n) {
    let str = n.toString();
    let arr = [];
    for (let i = str.length - 1; i >= 0; i--) {
        arr.push(Number(str[i]));
    }
    return arr;
}

//풀이
function solution(n) {
    return (n+"").split("").reverse().map(v => parseInt(v));
}