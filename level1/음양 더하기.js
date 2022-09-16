function solution(absolutes, signs) {
    let sum = 0;
    for (let i = 0; i < absolutes.length; i++) {
        if (signs[i] === true) {
            sum += absolutes[i];
        } else {
            sum -= absolutes[i];
        }
    }
    return sum;
}

//풀이 
function solution(absolutes, signs) {
    let ans = 0;
    absolutes.forEach((v, i) => {
        if (signs[i]) {
            ans += v;
        } else {
            ans -= v;
        }
    })
    return ans;
}