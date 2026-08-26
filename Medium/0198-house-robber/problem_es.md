# 198. House Robber

[Enlace de LeetCode](https://leetcode.com/problems/house-robber/)

## Descripción

Eres un ladrón profesional que planea robar casas en una calle. Cada casa tiene una cierta cantidad de dinero escondida, la única limitación que te impide robar en cada una de ellas es que las casas adyacentes tienen sistemas de seguridad conectados y automáticamente se comunicará con la policía si dos casas adyacentes fueron asaltadas la misma noche.

Dada una matriz de números enteros "nums" que representa la cantidad de dinero de cada casa, devuelve la cantidad máxima de dinero que puedes robar esta noche sin alertar a la policía.

 

**Ejemplo 1:**

```texto

**Entrada:** números = [1,2,3,1]
**Salida:** 4
**Explicación:** Roba la casa 1 (dinero = 1) y luego roba la casa 3 (dinero = 3).
Cantidad total que puedes robar = 1 + 3 = 4.

```

**Ejemplo 2:**

```texto

**Entrada:** números = [2,7,9,3,1]
**Salida:** 12
**Explicación:** Roba la casa 1 (dinero = 2), roba la casa 3 (dinero = 9) y roba la casa 5 (dinero = 1).
Cantidad total que puedes robar = 2 + 9 + 1 = 12.

```

 

**Restricciones:**


* `1 <= números.longitud <= 100`

* `0 <= números[i] <= 400`
