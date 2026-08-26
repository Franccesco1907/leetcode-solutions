# 207. Course Schedule

[Enlace de LeetCode](https://leetcode.com/problems/course-schedule/)

## Descripción

Hay un total de cursos `numCourses` que debes tomar, etiquetados desde `0` hasta `numCourses - 1`. Se le proporciona una matriz `prerrequisitos` donde `prerrequisitos[i] = [ai, bi]` indica que **debe** tomar el curso `bi` primero si desea tomar el curso `ai`.


* Por ejemplo, el par `[0, 1]`, indica que para tomar el curso `0` primero debes tomar el curso `1`.

Devuelve "verdadero" si puedes terminar todos los cursos. De lo contrario, devuelve "falso".

 

**Ejemplo 1:**

```texto

**Entrada:** número de cursos = 2, requisitos previos = [[1,0]]
**Salida:** verdadero
**Explicación:** Hay un total de 2 cursos a realizar.
Para realizar el curso 1 deberías haber terminado el curso 0. Entonces es posible.

```

**Ejemplo 2:**

```texto

**Entrada:** número de cursos = 2, requisitos previos = [[1,0],[0,1]]
**Salida:** falso
**Explicación:** Hay un total de 2 cursos a realizar.
Para tomar el curso 1 deberías haber terminado el curso 0, y para tomar el curso 0 también deberías haber terminado el curso 1. Entonces es imposible.

```

 

**Restricciones:**


* `1 <= numCursos <= 2000`

* `0 <= requisitos previos.longitud <= 5000`

* `requisitos previos[i].longitud == 2`

* `0 <= ai, bi < numCursos`

* Todos los requisitos previos de los pares[i] son **únicos**.
