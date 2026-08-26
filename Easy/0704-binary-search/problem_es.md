# 704. Binary Search

[Enlace de LeetCode](https://leetcode.com/problems/binary-search/)

## Descripción

Dada una matriz de números enteros "nums" que está ordenada en orden ascendente y un número entero "objetivo", escriba una función para buscar "objetivo" en "nums". Si el "objetivo" existe, devuelva su índice. De lo contrario, devuelve `-1`.

Debe escribir un algoritmo con complejidad de tiempo de ejecución `O(log n)`.

 

**Ejemplo 1:**

```texto

**Entrada:** números = [-1,0,3,5,9,12], objetivo = 9
**Salida:** 4
**Explicación:** 9 existe en números y su índice es 4

```

**Ejemplo 2:**

```texto

**Entrada:** números = [-1,0,3,5,9,12], objetivo = 2
**Salida:** -1
**Explicación:** 2 no existe en números, así que devuelve -1

```

 

**Restricciones:**


* `1 <= números.longitud <= 104`

* `-104 <números[i], objetivo <104`

* Todos los números enteros en `nums` son **únicos**.

* `nums` está ordenado en orden ascendente.
