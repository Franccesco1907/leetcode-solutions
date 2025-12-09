const mazeExample = [
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0],
  [1, 1, 0, 1, 1],
  [0, 0, 0, 0, 0]
];
const startPos = [0, 0];
const destPos = [4, 4];

const solution = (maze, startPos, destPos) => {
  const rows = maze.length;
  const cols = maze[0].length;
  const directions = [
    [0, 1], // right
    [0, -1], // left
    [1, 0], // down
    [-1, 0] // up
  ];

  const visitedStopPositions = new Set();
  const queueStopPositions = [startPos];
  visitedStopPositions.add(`${startPos[0]},${startPos[1]}`);

  while (queueStopPositions.length > 0) {
    let [rowPosition, columnPosition] = queueStopPositions.shift();

    if (rowPosition === destPos[0] && columnPosition === destPos[1]) return true;

    for (direction of directions) {
      let currentRowPosition = rowPosition, currentColumnPosition = columnPosition;
      const [rowDirection, columnDirection] = direction;

      while (
        currentRowPosition + rowDirection >= 0
        && currentRowPosition + rowDirection < rows
        && currentColumnPosition + columnDirection >= 0
        && currentColumnPosition + columnDirection < cols
        && maze[currentRowPosition + rowDirection][currentColumnPosition + columnDirection] === 0
      ) {
        currentRowPosition += rowDirection;
        currentColumnPosition += columnDirection;
      }

      if (!visitedStopPositions.has(`${currentRowPosition},${currentColumnPosition}`)) {
        visitedStopPositions.add(`${currentRowPosition},${currentColumnPosition}`);
        queueStopPositions.push([currentRowPosition, currentColumnPosition]);
      }
    }

  }

  return false;

}

console.log(solution(mazeExample, startPos, destPos));

