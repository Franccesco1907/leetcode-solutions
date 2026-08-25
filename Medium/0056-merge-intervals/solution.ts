function merge(intervals: number[][]): number[][] {
    const result: number[][] = []

    intervals.sort((a, b) => a[0] - b[0]);

    let current = intervals[0];

    for (let i = 1; i < intervals.length; i++) {
        if (current[1] >= intervals[i][0]) {
            current = [current[0], Math.max(current[1], intervals[i][1])];
        } else {
            result.push(current);
            current = intervals[i];
        }
    }

    result.push(current);

    return result;
};
