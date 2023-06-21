function isValidWalk(direction: string[]): boolean {
  let startingPoint = walkCount(direction);
  console.log(startingPoint.a, startingPoint.b);

  if (
    startingPoint.a === 0 &&
    startingPoint.b === 0 &&
    direction.length === 10
  ) {
    return true;
  } else {
    return false;
  }
}

interface Distances {
  a: number;
  b: number;
}

function walkCount(direction: string[]) {
  let sum = 0;

  let distances = { a: 0, b: 0 };

  for (let path of direction) {
    checkDistance(path, distances);
  }
  return distances;
}

function checkDistance(path: string, distances: Distances): object {
  if (path === "n") {
    distances.a += 1;
  } else if (path === "s") {
    distances.a -= 1;
  }

  if (path === "w") {
    distances.b += 1;
  } else if (path === "e") {
    distances.b -= 1;
  }
  return distances;
}

export default isValidWalk;
