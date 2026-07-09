# 1. Two Sum

[Enlace a LeetCode](https://leetcode.com/problems/two-sum/)

## Descripción

Dado un arreglo de enteros `nums` y un entero `target`, retorna *los índices de los dos números tales que sumen* `target`.

Puedes asumir que cada entrada tiene exactamente una solución, y no puedes usar el mismo elemento dos veces.

Puedes retornar la respuesta en cualquier orden.

## Ejemplos

**Ejemplo 1:**

```text
Entrada: nums = [2,7,11,15], target = 9
Salida: [0,1]
Explicación: Porque nums[0] + nums[1] == 9, retornamos [0, 1].
```

**Ejemplo 2:**

```text
Entrada: nums = [3,2,4], target = 6
Salida: [1,2]
```

**Ejemplo 3:**

```text
Entrada: nums = [3,3], target = 6
Salida: [0,1]
```

## Restricciones

* `2 <= nums.length <= 10^4`
* `-10^9 <= nums[i] <= 10^9`
* `-10^9 <= target <= 10^9`
* Solo existe una respuesta válida.

## Desafío adicional

¿Puedes idear un algoritmo con complejidad temporal menor a `O(n^2)`?
