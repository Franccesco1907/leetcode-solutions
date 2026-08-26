# 56. Merge Intervals

[Enlace de LeetCode](https://leetcode.com/problems/merge-intervals/)

## Descripción

Dada una matriz de `intervalos` donde `intervalos[i] = [starti, endi]`, fusiona todos los intervalos superpuestos y devuelve una matriz de intervalos no superpuestos que cubre todos los intervalos en la entrada.

 

**Ejemplo 1:**

```texto

**Entrada:** intervalos = [[1,3],[2,6],[8,10],[15,18]]
**Salida:** [[1,6],[8,10],[15,18]]
**Explicación:** Dado que los intervalos [1,3] y [2,6] se superponen, combínelos en [1,6].

```

**Ejemplo 2:**

```texto

**Entrada:** intervalos = [[1,4],[4,5]]
**Salida:** [[1,5]]
**Explicación:** Los intervalos [1,4] y [4,5] se consideran superpuestos.

```

**Ejemplo 3:**

```texto

**Entrada:** intervalos = [[4,7],[1,4]]
**Salida:** [[1,7]]
**Explicación:** Los intervalos [1,4] y [4,7] se consideran superpuestos.

```

 

**Restricciones:**


* `1 <= intervalos.longitud <= 104`

* `intervalos[i].longitud == 2`

* `0 <= inicio <= final <= 104`
