# 875. Koko Eating Bananas

[Enlace de LeetCode](https://leetcode.com/problems/koko-eating-bananas/)

## Descripción

A Koko le encanta comer plátanos. Hay "n" montones de plátanos, el montón "ith" tiene "montones [i]" de plátanos. Los guardias se han ido y volverán en horas `h`.

Koko puede decidir su velocidad de consumo de plátanos por hora de "k". Cada hora, elige un montón de plátanos y come "k" plátanos de ese montón. Si la pila tiene menos de "k" plátanos, se los come todos y no comerá más plátanos durante esta hora.

A Koko le gusta comer despacio pero aún quiere terminar de comerse todos los plátanos antes de que regresen los guardias.

Devuelve el entero mínimo "k" tal que pueda comerse todos los plátanos en "h" horas.

 

**Ejemplo 1:**

```texto

**Entrada:** montones = [3,6,7,11], h = 8
**Salida:** 4

```

**Ejemplo 2:**

```texto

**Entrada:** montones = [30,11,23,4,20], h = 5
**Salida:** 30

```

**Ejemplo 3:**

```texto

**Entrada:** montones = [30,11,23,4,20], h = 6
**Salida:** 23

```

 

**Restricciones:**


* `1 <= pilas.longitud <= 104`

* `pilas.longitud <= h <= 109`

* `1 <= montones[i] <= 109`
