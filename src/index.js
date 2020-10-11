module.exports = function check(str, bracketsConfig) {
  const bracketsLeftArr = [];
  const bracketsRightArr = [];
  let currPairEl;
  for(let symb of str){
    if(bracketsLeftArr.length === 0 || !currPairEl || symb!==currPairEl){
      bracketsLeftArr.push(symb);

      if(currPairEl && symb!==currPairEl){
        bracketsRightArr.push(currPairEl);
      }
      currPairEl = bracketsConfig.find((item) => item[0] === symb);

      if(currPairEl === undefined){
         return false;
      }else{
        currPairEl = currPairEl[1];
      }
    }else if( symb === currPairEl ){
      bracketsLeftArr.pop();
      currPairEl = bracketsRightArr.pop();
    }
  }
  return bracketsLeftArr.length<1 ? true : false;
}
