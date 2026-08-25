# 98. Validate Binary Search Tree

[Enlace de LeetCode](https://leetcode.com/problems/validate-binary-search-tree/)

## Descripción

Dada la "raíz" de un árbol binario, determine si es un árbol de búsqueda binaria (BST) válido.

Un **BST válido** se define de la siguiente manera:


* El subárbol izquierdo de un nodo contiene solo nodos con claves **estrictamente menores que** la clave del nodo.

* El subárbol derecho de un nodo contiene solo nodos con claves **estrictamente mayores que** la clave del nodo.

* Tanto el subárbol izquierdo como el derecho también deben ser árboles de búsqueda binarios.

 

**Ejemplo 1:**

```texto

**Entrada:** raíz = [2,1,3]
**Salida:** verdadero

```

**Ejemplo 2:**

```texto

**Entrada:** raíz = [5,1,4,nulo,nulo,3,6]
**Salida:** falso
**Explicación:** El valor del nodo raíz es 5 pero el valor de su hijo derecho es 4.

```

 

**Restricciones:**


* El número de nodos en el árbol está en el rango `[1, 104]`.

* `-231 <= Nodo.val <= 231 - 1`
