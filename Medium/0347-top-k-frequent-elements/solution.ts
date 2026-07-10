// Approach 1 — O(n log n)
// Count frequencies, sort the entries by frequency descending, take the first k.
// Simple and readable, but the .sort() makes it O(n log n), so it does NOT satisfy
// the problem's follow-up ("better than O(n log n)").
function topKFrequent(nums: number[], k: number): number[] {
  const frequency = new Map<number, number>();

  for (const num of nums) {
    frequency.set(num, (frequency.get(num) ?? 0) + 1);
  }

  const sorted = [...frequency.entries()].sort((a, b) => b[1] - a[1]);

  return sorted.slice(0, k).map((entry) => entry[0]);
}

// Approach 2 — O(n)
// Bucket sort. Index = frequency, value = numbers that appear that many times.
// Building the buckets is O(n); reading them back from highest frequency to lowest
// is also O(n). No .sort() involved, so this meets the follow-up requirement.
function topKFrequentBucket(nums: number[], k: number): number[] {
  const n = nums.length;

  const frequency = new Map<number, number>();
  for (const num of nums) {
    frequency.set(num, (frequency.get(num) ?? 0) + 1);
  }

  const buckets: number[][] = Array.from({ length: n + 1 }, () => []);
  for (const [num, freq] of frequency) {
    buckets[freq].push(num);
  }

  const result: number[] = [];
  for (let freq = n; freq >= 0 && result.length < k; freq--) {
    result.push(...buckets[freq]);
  }

  return result;
}
