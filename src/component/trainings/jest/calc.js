export const add = (...numbers) => {
    let sum = 0;

    for(const number of numbers) {
        sum = sum + number;
    }

    return sum;
}

export const substract = (...numbers) => {
    let sum = 0;

    for(const number of numbers) {
        sum = sum - number;
    }

    return sum;
}