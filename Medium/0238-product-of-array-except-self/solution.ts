function productExceptSelf(nums: number[]): number[] {
    const n = nums.length;
    const answers = new Array(n).fill(1);

    let prefix = 1;
    let suffix = 1;

    for (let i = 0; i < n; i++) {
        answers[i] *= prefix;
        prefix *= nums[i];

        answers[n - i - 1] *= suffix;
        suffix *= nums[n - i - 1];
    }

    return answers;
};
