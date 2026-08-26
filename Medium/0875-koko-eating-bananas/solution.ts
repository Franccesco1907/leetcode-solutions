function minEatingSpeed(piles: number[], h: number): number {
    let left = 1, right = Math.max(...piles);

    while(left <= right) {
        const mid = left + Math.floor((right - left) / 2);

        let hours = 0;

        for (const pile of piles) {
            hours += Math.ceil(pile / mid);
        }

        if (hours > h) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return left;
};
