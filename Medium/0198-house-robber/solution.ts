function rob(nums: number[]): number {
    const dp = new Array(nums.length + 2).fill(0);

    for (let i = 0; i < nums.length; i++) {
        dp[i + 2] = Math.max(dp[i] + nums[i], dp[i + 1]);
    }

    return dp[nums.length + 1];
};
