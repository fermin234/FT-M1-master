'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:  
if(array.length <= 1) return array;
let arrayLeft = [];
let arrayRight = [];
let pivote = array[0];
let i = 1;

while(i < array.length){
  if(pivote > array[i]) arrayLeft.push(array[i]);
  else arrayRight.push(array[i]);
  i++;
}

return quickSort(arrayLeft).concat(pivote).concat(quickSort(arrayRight));

}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if(array.length <= 1) return array;
  let midel = Math.floor(array.length /2);
  let left = array.slice(0, midel);
  let right = array.slice(midel);

  return merge(mergeSort(left), mergeSort(right));
  }

  function merge(left, right){
    let leftIndex = 0,
    rightIndex = 0,
    merge = [];

    while(leftIndex < left.length && rightIndex < right.length){
      if(left[leftIndex] < right[rightIndex]){
        merge.push(left[leftIndex]);
        leftIndex++;
      } else {
        merge.push(right[rightIndex]);
        rightIndex++;
      }
    }
    return merge.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  }

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
