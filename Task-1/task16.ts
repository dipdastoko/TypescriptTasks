type taskObject = {
    name: string,
    age: number,
    address: string
} 

function task16Function(obj: taskObject, keyValue:keyof taskObject) {
    return obj[keyValue];
}

const obj1: taskObject = {
    name: 'Dip',
    age: 232,
    address:'Narsingdi'
}

console.log(task16Function(obj1, 'name'));