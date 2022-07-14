"use strict";

/*
Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
- size: retorna la cantidad total de nodos del árbol
- insert: agrega un nodo en el lugar correspondiente
- contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
- depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
- breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(num){
  this.value = num;
  this.left = null;
  this.right = null;
} 

BinarySearchTree.prototype.insert = function(value){
  // comparar
  // si el valor a ingresar el mayor
  if(value > this.value){
    //lo mando a la der
    if(!this.right) return this.right = new BinarySearchTree(value);
    this.right.insert(value);
  }else{
    if(!this.left) return this.left = new BinarySearchTree(value);
    this.left.insert(value);
  }
}

BinarySearchTree.prototype.size = function(){
  //caso de corte, (nodo hoja)
  if(!this.left && !this.right) return 1;
  //si tiene un solo hijo
  if(!this.left) return 1 + this.right.size();
  if(!this.right) return 1 + this.left.size();
  //si tiene dos hijos
  return 1 + this.left.size() + this.right.size();
}

BinarySearchTree.prototype.contains = function(value){
  if(this.value === value) return true;
  //si value es > lo busco por la derecha
  if(value > this.value && this.right){
    return this.right.contains(value);
  }else{
    if(value < this.value && this.left){
      return this.left.contains(value);
    }
  }
  return false;
}

BinarySearchTree.prototype.depthFirstForEach = function(cb, metodo){
  if(!metodo || metodo === "in-order"){
    this.left && this.left.depthFirstForEach(cb, metodo);
    cb(this.value)
    this.right && this.right.depthFirstForEach(cb, metodo);
  }
  else if(metodo === "pre-order"){
    cb(this.value)
    this.left && this.left.depthFirstForEach(cb, metodo);
    this.right && this.right.depthFirstForEach(cb, metodo);
  }
  else{
    this.left && this.left.depthFirstForEach(cb, metodo);
    this.right && this.right.depthFirstForEach(cb, metodo);
    cb(this.value)
  }
}


BinarySearchTree.prototype.breadthFirstForEach = function(cb, arr){
  if(!arr){
    let arr = [];
  }
  cb(this.value);
  // this.left && arr.push(this.left);
  // this.right && arr.push(this.right); 
  if(this.left !== null) arr.push(this.left);
  if(this.right !== null) arr.push(this.right);
  if(arr.length) arr.shift().breadthFirstForEach(cb, arr);
}


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};