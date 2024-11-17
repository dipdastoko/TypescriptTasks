function processData(data: unknown) {
    if (typeof data === 'string') {
        return data.toUpperCase();
    }
    if (typeof data === "number") {
        return data * data;
    }
}

console.log(processData(true));