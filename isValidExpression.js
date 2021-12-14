function isValidExpression(input) {
    if (input.length === 0) {
        return true
    }

    const arr = []

    const expression = {
        '(': ')',
        '{': '}',
        '[': ']'
    }

    for (let i = 1; i < input.length; i++) {
        if (input[i] === '(' || input[i] === '{' || input[i] === '[') {
            arr.push(input[i])
        } else {
            if (arr[arr.length - 1] === expression[input[i]]) {
                arr.pop()
            } else {
                return false
            }
        }
        return arr.length === 0;
    }
}

console.log(isValidExpression("({[]})"))