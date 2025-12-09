function hasPath(maze: number[][], start: number[], destination: number[]): boolean {
  if (maze.length === 0 || maze[0].length === 0) return false;

  const rows = maze.length;
  const cols = maze[0].length;
  const [destR, destC] = destination;

  const visited = new Set<string>();

  const queue: number[][] = [start];

  visited.add(`${start[0]},${start[1]}`);

  const directions = [
    [-1, 0], [1, 0], [0, -1], [0, 1]
  ];

  while (queue.length > 0) {
    const [currR, currC] = queue.shift()!;

    if (currR === destR && currC === destC) {
      return true;
    }

    for (const [dr, dc] of directions) {
      let newR = currR;
      let newC = currC;

      while (
        newR + dr >= 0 && newR + dr < rows &&
        newC + dc >= 0 && newC + dc < cols &&
        maze[newR + dr][newC + dc] === 0
      ) {
        newR += dr;
        newC += dc;
      }

      const stopPosStr = `${newR},${newC}`;

      if (!visited.has(stopPosStr)) {
        visited.add(stopPosStr);
        queue.push([newR, newC]);
      }
    }
  }

  return false;
}

const maze = [
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0],
  [1, 1, 0, 1, 1],
  [0, 0, 0, 0, 0]
];
const start = [0, 0];
const dest = [4, 4];

console.log(hasPath(maze, start, dest));
