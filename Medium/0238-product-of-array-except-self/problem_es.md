# 238. Product of Array Except Self

[Enlace de LeetCode](https://leetcode.com/problems/product-of-array-except-self/)

## Descripción

Dada una matriz de enteros `nums`, devuelve una matriz `answer` tal que `answer[i]` sea igual al producto de todos los elementos de `nums` excepto `nums[i]`.

Está **garantizado** que el producto de cualquier prefijo o sufijo de `nums` cabe en un entero de **32 bits**.

Debes escribir un algoritmo que se ejecute en tiempo `O(n)` y sin utilizar la operación de división.

 

**Ejemplo 1:**

```texto
**Entrada:** números = [1,2,3,4]
**Salida:** [24,12,8,6]

```

**Ejemplo 2:**

```texto
**Entrada:** números = [-1,1,0,-3,3]
**Salida:** [0,0,9,0,0]

```

 

**Restricciones:**


* `2 <= números.longitud <= 105`

* `-30 <= números[i] <= 30`

* La entrada se genera de manera que se **garantiza** que `respuesta[i]` cabe en un entero de **32 bits**.

 

**Seguimiento:** ¿Puedes resolver el problema en `O(1)` complejidad de espacio adicional? (La matriz de salida **no** cuenta como espacio adicional para el análisis de complejidad espacial).
