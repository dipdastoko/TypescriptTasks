function assertion(value: string | number) {
    if (typeof value === 'string') {
        return (value as string).length;
    }
    if (typeof value === 'number') {
        return value;
    }
}

console.log(assertion("Hello"));