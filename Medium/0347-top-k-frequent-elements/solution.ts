function topKFrequent(nums: number[], k: number): number[] {
  const frequency = new Map<number, number>();

  for (const num of nums) {
    frequency.set(num, (frequency.get(num) ?? 0) + 1);
  }

  const sorted = [...frequency.entries()].sort((a, b) => b[1] - a[1]);

  return sorted.slice(0, k).map((entry) => entry[0]);
}
