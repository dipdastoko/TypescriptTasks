// const neverFunction = ((message: string): never => {
//     throw new Error(message)
// })

function neverFunction(message: string):never {
    throw new Error(message);
}