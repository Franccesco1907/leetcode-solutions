function isPalindrome(x: number): boolean {
    if (x < 0) return false;

    let n = Math.floor(Math.log10(x) + 1);

    while (x > 0) {
        const q = Math.floor(x / (10 ** (n - 1)));
        const r = x % 10;

        if (q !== r) return false;

        x = Math.floor((x - r - q * 10 ** (n - 1)) / 10);

        n -= 2;
    }

    return true;
};
