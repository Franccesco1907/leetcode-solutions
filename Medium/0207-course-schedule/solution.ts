function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    const dependencies = new Map<number, number[]>();
    for (const [course, prerequisite] of prerequisites) {
        const current = dependencies.get(course) ?? [];
        current.push(prerequisite);
        dependencies.set(course, current);
    }

    const visiting = new Set<number>(), visited = new Set<number>();

    for (let course = 0; course < numCourses; course++) {
        if (hasCycle(course, dependencies, visiting, visited)) return false;
    }

    return true;
};

function hasCycle(course: number, dependencies: Map<number, number[]>, visiting: Set<number>, visited: Set<number>) {
    if (visiting.has(course)) return true;

    if (visited.has(course)) return false;

    const prerequisites = dependencies.get(course) ?? [];

    visiting.add(course);

    for (const prerequisite of prerequisites) {
        if (hasCycle(prerequisite, dependencies, visiting, visited)) return true;
    }

    visiting.delete(course)
    visited.add(course);

    return false;
}
