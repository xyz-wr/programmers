function solution(num) {
    let cnt = 0;
    while(num !== 1) {
        if (cnt === 500) {
            return -1;
        }
        if (num % 2 === 0) {
            num /= 2;
            cnt++;
        } else if  (num % 2 === 1) {
            num = num * 3 + 1;
            cnt++;
        }
    }
        return cnt;
    
}