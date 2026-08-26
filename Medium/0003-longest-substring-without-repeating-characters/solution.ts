function lengthOfLongestSubstring(s: string): number {
    const map = new Map();
    let left = 0, max = 0;

    for (let right = 0; right < s.length; right++) {
        const char = s[right];

        if (map.has(char)) {
            left = Math.max(left, map.get(char) + 1);
        }

        max = Math.max(max, right - left + 1);
        map.set(char, right);
    }

    return max;
};
