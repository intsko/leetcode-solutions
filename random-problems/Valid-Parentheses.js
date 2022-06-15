/*
Input: s = "()"
Output: true

Input: s = "()[]{}"
Output: true
*/

function isValid(s) {
    const stack = []

    for (const str of s) {
        switch (str) {

            case ')': {
                if (stack.at(-1) === '(') stack.pop()
                else return false
                break
            }

            case '}': {
                if (stack.at(-1) === '{') stack.pop()
                else return false
                break
            }

            case ']': {
                if (stack.at(-1) === '[') stack.pop()
                else return false
                break
            }
         
            default: stack.push(str)
        }
    }

    return stack.length === 0
}

console.log(
    isValid('(}')
);