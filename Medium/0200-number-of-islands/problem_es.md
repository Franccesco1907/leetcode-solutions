# 200. Number of Islands

[Enlace de LeetCode](https://leetcode.com/problems/number-of-islands/)

## Descripción

Dada una cuadrícula binaria 2D `m x n` que representa un mapa de ``1'' (tierra) y ``0'' (agua), devuelve el número de islas.

Una **isla** está rodeada de agua y se forma conectando tierras adyacentes horizontal o verticalmente. Puedes asumir que los cuatro bordes de la cuadrícula están rodeados de agua.

 

**Ejemplo 1:**

```texto

**Entrada:** cuadrícula = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
**Salida:** 1

```

**Ejemplo 2:**

```texto

**Entrada:** cuadrícula = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
**Salida:** 3

```

 

**Restricciones:**


* `m == cuadrícula.longitud`

* `n == cuadrícula[i].longitud`

* `1 <= metro, n <= 300`

* `grid[i][j]` es `'0'` o `'1'`.
