# 347. Elementos Más Frecuentes (Top K)

[Enlace a LeetCode](https://leetcode.com/problems/top-k-frequent-elements/)

## Descripción

Dado un arreglo de enteros `nums` y un entero `k`, retorna los `k` elementos más frecuentes. Puedes retornar la respuesta en cualquier orden.

## Ejemplos

**Ejemplo 1:**

```text
Entrada: nums = [1,1,1,2,2,3], k = 2

Salida: [1,2]
```

**Ejemplo 2:**

```text
Entrada: nums = [1], k = 1

Salida: [1]
```

**Ejemplo 3:**

```text
Entrada: nums = [1,2,1,2,1,2,3,1,3,2], k = 2

Salida: [1,2]
```

## Restricciones

* `1 <= nums.length <= 10^5`
* `-10^4 <= nums[i] <= 10^4`
* `k` está en el rango `[1, la cantidad de elementos únicos en el arreglo]`.
* Se garantiza que la respuesta es única.

## Follow-up

La complejidad temporal de tu algoritmo debe ser mejor que `O(n log n)`, donde `n` es el tamaño del arreglo.
