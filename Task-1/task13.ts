function genericFunction<T>(arrayInput: Array<T>): Array<T> {
    let newArray: T[] = []; 
    arrayInput.forEach(e => {
        if (!newArray.includes(e)) {
            newArray.push(e);
        }
    })

    return newArray;
}

console.log(genericFunction(['a', 'a', 'b', 'b']));