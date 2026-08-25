# 20. Valid Parentheses

[Enlace de LeetCode](https://leetcode.com/problems/valid-parentheses/)

## Descripción

Dada una cadena `s` que contiene solo los caracteres `'('`, `')'`, `'{'`, `'}'`, `'['` y `']'`, determine si la cadena de entrada es válida.

Una cadena de entrada es válida si:


*Los corchetes abiertos deben estar cerrados por el mismo tipo de corchetes.

* Los corchetes abiertos deben cerrarse en el orden correcto.

* Cada corchete cerrado tiene un corchete abierto correspondiente del mismo tipo.

 

**Ejemplo 1:**

**Entrada:** s = "()"

**Salida:** verdadero

**Ejemplo 2:**

**Entrada:** s = "()[]{}"

**Salida:** verdadero

**Ejemplo 3:**

**Entrada:** s = "(]"

**Salida:** falso

**Ejemplo 4:**

**Entrada:** s = "([])"

**Salida:** verdadero

**Ejemplo 5:**

**Entrada:** s = "([)]"

**Salida:** falso

 

**Restricciones:**


* `1 <= s.longitud <= 104`

* `s` consta solo de paréntesis `'()[]{}'`.
