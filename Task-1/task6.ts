function numericArguments(...numbers: number[]) {
    let sum = 0;
    numbers.forEach(e => {
        sum=sum + e;
    })
    console.log(sum);
}

numericArguments(1, 2, 3, 4, 5);