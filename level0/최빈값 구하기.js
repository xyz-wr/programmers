function solution(array) {
  const count = array.reduce((pv, cv) => {
      pv[cv] = (pv[cv] || 0) + 1;
      return pv;
  }, {});
  
  const max = Math.max(...Object.values(count));
  let mode = Object.keys(count).filter(key => count[key] === max);
  if (mode.length === 1) return Number(mode);
  else return -1;
  
}