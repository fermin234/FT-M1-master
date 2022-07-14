"use strict";

/*
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; 

  
  en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  Ejemplo: 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
  */
 

 function Node(arg){
  this.value = arg;
  this.next = null;

 }
 
function LinkedList(){
  this.head = null;
}

LinkedList.prototype.add = function (data){
  let nodo = new Node(data);
  let current = this.head;
  if(!current){
    this.head = nodo;
    return nodo;
  }
  while(current.next){
    current = current.next;
  }
  current.next = nodo;
  return nodo;
}

LinkedList.prototype.remove = function(){
  let current = this.head;
  let a;
  if(!this.head) return null;
  if(!this.head.next){
    this.head = null;
    return current.value;
  }
  while(current.next.next){ 
    current = current.next
  }
  a = current.next;
  current.next = null;
  return a.value;
}


LinkedList.prototype.search = function(arg){
  let current = this.head;
  // if(typeof (arg) === 'function'){

  // }
  //mientras(c.value sea != que el argumento y c sea distinto que nulo)
  if(!current) return null;
  // if(current.value === arg){
  //   return current.value;
  // }
  while(current){
    if(current.value === arg) return current.value;
    if(typeof arg === 'function'){
      if(arg(current.value)) return current.value;
    }
    current = current.next;
  }
  return null
}


// LinkedList.prototype.removeAll = function(){
//   while(this.head){
//     this.remove();
//   }
//   return "La lista se limpio por completo."
// }

// let lista = new LinkedList();
// lista.add('1');
// lista.add('2');
// lista.add('3');
// lista.add('4');

/*
Implementar la clase HashTable.

Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/

function HashTable(){
  this.array = [];
  this.numBuckets = 35;
}

HashTable.prototype.hash = function(arg){
  let code = 0;
  for(let i = 0; i < arg.length; i++){
    code += arg[i].charCodeAt();
  }
  return code % this.numBuckets;
}

HashTable.prototype.set = function(key, value){ // 
  if(typeof(key) !== 'string') throw new TypeError('Error');  //[     {key: 'value'}, {}, {}, {}, ...     ]
  let contador = 0;
  let code = this.hash(key);
  //primera asignacion a los indices, en caso de que ese indice no tenga nada asignado
  if(!this.array[code]){
    this.array[code] = {};
    this.array[code][key] = value;
  }
  //si el objeto esta creado, pero no tiene la propiedad, se le agrega
  if(!this.array[code].hasOwnProperty(key) || this.array[code].hasOwnProperty(key)) return this.array[code][key] = value;
  //mientras que el objeto este creado y tiene la propiedad que entre al mientras
  while(this.array[code].hasOwnProperty(key)){
    while(this.array[code].hasOwnProperty(key)){
      key = contador + key;
      contador++
    }
    if(!this.array[code].hasOwnProperty(key)) return this.array[code][key] = value;
  }
  return key; 
}

HashTable.prototype.get = function(key){
  for(let i = 0; i < this.array.length; i++){
    if(this.array[i]){
      if(this.array[i].hasOwnProperty(key)) return this.array[i][key];
    }
  }
  return null;
}

HashTable.prototype.hasKey = function(clave){
  if(this.array[this.hash(clave)].hasOwnProperty(clave)) return true;
  return false;
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};
