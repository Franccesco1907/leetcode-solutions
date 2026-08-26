function subsets(nums: number[]): number[][] {
    const result: number[][] = [];
    const current: number[] = [];

    backtrack(nums, 0, current, result);

    return result;
};

function backtrack(
    nums: number[],
    start: number,
    current: number[],
    result: number[][],
) {
    result.push([...current]);

    for (let i = start; i < nums.length; i++) {
        current.push(nums[i]);

        backtrack(nums, i + 1, current, result);

        current.pop();
    }
}
