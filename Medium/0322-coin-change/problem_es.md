# 322. Coin Change

[Enlace de LeetCode](https://leetcode.com/problems/coin-change/)

## Descripción

Se le proporciona una matriz de números enteros "monedas" que representa monedas de diferentes denominaciones y una "cantidad" entera que representa una cantidad total de dinero.

Devuelve la menor cantidad de monedas que necesites para completar esa cantidad. Si esa cantidad de dinero no se puede compensar con ninguna combinación de monedas, devuelve "-1".

Puedes suponer que tienes un número infinito de cada tipo de moneda.

 

**Ejemplo 1:**

```texto

**Entrada:** monedas = [1,2,5], cantidad = 11
**Salida:** 3
**Explicación:** 11 = 5 + 5 + 1

```

**Ejemplo 2:**

```texto

**Entrada:** monedas = [2], cantidad = 3
**Salida:** -1

```

**Ejemplo 3:**

```texto

**Entrada:** monedas = [1], cantidad = 0
**Salida:** 0

```

 

**Restricciones:**


* `1 <= monedas.longitud <= 12`

* `1 <= monedas[i] <= 231 - 1`

* `0 <= monto <= 104`
