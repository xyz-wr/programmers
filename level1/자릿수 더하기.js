function solution(n){
    let num = n.toString();
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        sum += Number(num[i]);
    }
    return sum;
}

//쉬운 방법 
function solution(n) {
    return (n+"").split("").reduce((acc, curr) => acc + parseInt(curr), 0)
}