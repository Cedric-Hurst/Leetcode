/*Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.*/
 var isValid = (s, stack = []) => {
    for (const bracket of s.split('')) {/* Time O(N) */
        const isParenthesis = bracket === '(';
        if (isParenthesis) stack.push(')');  /* Space O(N) */

        const isCurlyBrace = bracket === '{';
        if (isCurlyBrace) stack.push('}');   /* Space O(N) */

        const isSquareBracket = bracket === '[';
        if (isSquareBracket) stack.push(']');/* Space O(N) */

        const isOpenPair = isParenthesis || isCurlyBrace || isSquareBracket;
        if (isOpenPair) continue;

        const isEmpty = !stack.length;
        const isWrongPair = stack.pop() !== bracket;
        const isInvalid = isEmpty || isWrongPair;
        if (isInvalid) return false;
    }

    return (stack.length === 0);
};