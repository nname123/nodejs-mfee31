function sum(n) {
    // 回傳 1+2+3+4+...+n 的結果

    // if (n < 0) {
    //     n = -n
    //     result = (1 + n) * n / 2 * -1
    // } else {
    //     result = (1 + n) * n / 2
    // }

    result = 0
    if (n < 0) {
        n = -n
        for (let i = 1; i <= n; i++) {
            result += i
        }
        result = -result
    } else {
        for (let i = 1; i <= n; i++) {
            result += i
        }
    }

    return result
}

console.log(sum(1)); // 1
console.log(sum(2)); // 3
console.log(sum(3)); // 6
console.log(sum(10)); // 55