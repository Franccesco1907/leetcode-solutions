# 33. Search in Rotated Sorted Array

[Enlace de LeetCode](https://leetcode.com/problems/search-in-rotated-sorted-array/)

## Descripción

Hay una matriz de números enteros `nums` ordenada en orden ascendente (con valores **distintos**).

Antes de pasar a su función, `nums` se **posiblemente gira a la izquierda** en un índice desconocido `k` (`1 <= k < nums.length`) de manera que la matriz resultante sea `[nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]` (**0-indexado**). Por ejemplo, "[0,1,2,4,5,6,7]" podría rotarse a la izquierda en "3" índices y convertirse en "[4,5,6,7,0,1,2]".

Dada la matriz `nums` **después** de la posible rotación y un número entero `target`, devuelve el índice de `target` si está en `nums`, o `-1` si no está en `nums`.

Debe escribir un algoritmo con complejidad de tiempo de ejecución `O(log n)`.

 

**Ejemplo 1:**

```texto
**Entrada:** números = [4,5,6,7,0,1,2], objetivo = 0
**Salida:** 4

```

**Ejemplo 2:**

```texto
**Entrada:** números = [4,5,6,7,0,1,2], objetivo = 3
**Salida:** -1

```

**Ejemplo 3:**

```texto
**Entrada:** números = [1], objetivo = 0
**Salida:** -1

```

 

**Restricciones:**


* `1 <= números.longitud <= 5000`

* `-104 <= números[i] <= 104`

* Todos los valores de `nums` son **únicos**.

* `nums` es una matriz ascendente que posiblemente esté rotada.

* `-104 <= objetivo <= 104`
