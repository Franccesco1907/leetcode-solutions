# 62. Unique Paths

[Enlace de LeetCode](https://leetcode.com/problems/unique-paths/)

## Descripción

Hay un robot en una cuadrícula `m x n`. El robot se encuentra inicialmente en la **esquina superior izquierda** (es decir, `cuadrícula[0][0]`). El robot intenta moverse a la **esquina inferior derecha** (es decir, `cuadrícula[m - 1][n - 1]`). El robot sólo puede moverse hacia abajo o hacia la derecha en cualquier momento.

Dados los dos números enteros `m` y `n`, devuelve el número de caminos únicos posibles que el robot puede tomar para llegar a la esquina inferior derecha.

Los casos de prueba se generan de modo que la respuesta sea menor o igual a `2 * 109`.

 

**Ejemplo 1:**

```texto

**Entrada:** m = 3, n = 7
**Salida:** 28

```

**Ejemplo 2:**

```texto

**Entrada:** m = 3, n = 2
**Salida:** 3
**Explicación:** Desde la esquina superior izquierda, hay un total de 3 formas de llegar a la esquina inferior derecha:
1. Derecha -> Abajo -> Abajo
2. Abajo -> Abajo -> Derecha
3. Abajo -> Derecha -> Abajo

```

 

**Restricciones:**


* `1 <= metro, n <= 100`
