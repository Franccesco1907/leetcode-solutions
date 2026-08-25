# 39. Combination Sum

[Enlace de LeetCode](https://leetcode.com/problems/combination-sum/)

## Descripción

Dada una matriz de enteros **distintos** "candidatos" y un entero objetivo "objetivo", devuelve una lista de todas las **combinaciones únicas** de "candidatos" donde los números elegidos suman "objetivo". Puedes devolver las combinaciones en **cualquier orden**.

El **mismo** número podrá ser elegido entre `candidatos` un **número ilimitado de veces**. Dos combinaciones son únicas si la frecuencia de al menos uno de los números elegidos es diferente.

Los casos de prueba se generan de manera que el número de combinaciones únicas que suman el "objetivo" sea inferior a "150" combinaciones para la entrada dada.

 

**Ejemplo 1:**

```texto

**Entrada:** candidatos = [2,3,6,7], objetivo = 7
**Salida:** [[2,2,3],[7]]
**Explicación:**
2 y 3 son candidatos, y 2 + 2 + 3 = 7. Tenga en cuenta que 2 se puede utilizar varias veces.
7 es candidato y 7 = 7.
Estas son las dos únicas combinaciones.

```

**Ejemplo 2:**

```texto

**Entrada:** candidatos = [2,3,5], objetivo = 8
**Salida:** [[2,2,2,2],[2,3,3],[3,5]]

```

**Ejemplo 3:**

```texto

**Entrada:** candidatos = [2], objetivo = 1
**Salida:** []

```

 

**Restricciones:**


* `1 <= candidatos.longitud <= 30`

* `2 <= candidatos[i] <= 40`

* Todos los elementos de "candidatos" son **distintos**.

* `1 <= objetivo <= 40`
