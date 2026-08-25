function isValid(s: string): boolean {
    const stack = [];

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (
            char === '('
            || char === '['
            || char === '{'
        ) {
            stack.push(char);
        } else {
            const poppedChar = stack.pop();
            if (
                (poppedChar === '(' && char === ')')
                || (poppedChar === '[' && char === ']')
                || (poppedChar === '{' && char === '}')
            ) continue;

            return false;
        }
    }

    return stack.length === 0;
};
