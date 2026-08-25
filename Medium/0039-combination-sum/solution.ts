function combinationSum(candidates: number[], target: number): number[][] {
    const result: number[][] = [];
    const current: number[] = [];

    backtrack(candidates, 0, target, current, result);

    return result;
};

function backtrack(
    candidates: number[],
    start: number,
    target: number,
    current: number[],
    result: number[][],
): void {
    if (target === 0) {
        result.push([...current]);
        return;
    }

    if (target < 0) {
        return;
    }

    for (let i = start; i < candidates.length; i++) {
        current.push(candidates[i]);

        backtrack(candidates, i, target - candidates[i], current, result);

        current.pop();
    }
}
