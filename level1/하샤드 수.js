function solution(x) {
    let n = x.toString().split("").reduce((acc, curr) => acc + parseInt(curr), 0);
    return x % n === 0 ? true : false;
}