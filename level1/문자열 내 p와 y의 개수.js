function solution(s){
    let str = s.toUpperCase();
    let p = 0;
    let y = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "P") {
            p++;
        }
        if (str[i] === "Y") {
            y++;
        }
    }
    return p === y ? true : false;
}

//풀이
function solution(s) {
    return s.toUpperCase().split('P').length === s.toUpperCase().split("Y").length;
}