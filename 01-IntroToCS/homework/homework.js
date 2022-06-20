'use strict'
// num = '0010' --> 2
function BinarioADecimal(num) {
  // tu codigo aca
  // combierte el string en un arreglo de numeros
  num = num.split("");
  
  // combierte el arreglo de numeros en un numero decimal
  let res = 0;
  let exp = num.length - 1;
  for(let i = 0; i < num.length; i++){
 		res += num[i] * (2**exp);
    exp --;
  }
  return res;
}

function DecimalABinario(num) {
  // tu codigo aca
  let res = [];
  while(num > 0){
    res.unshift(num % 2);
    num = parseInt(num / 2);
  }

  return res.join("");
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}