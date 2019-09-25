module.exports = function zeros(expression) {
  // your solution
  let splitArray = expression.split('*');
  let twoCount = 0;
  let fiveCount = 0;
  splitArray.forEach(element => {

      let [value, counter] = [+(element.split('!')[0]), (element.length - element.indexOf('!'))];

      for(; 0 < value ; value -= counter) {
        let source = value;
        while (source % 5 == 0) {
            fiveCount++;
            source /= 5;
        }
        
        source = value;
        
        while (source % 2 == 0) {
            twoCount++;
            source /= 2;
        }
    }
  });
  
  return    twoCount > fiveCount ? fiveCount : twoCount;
}