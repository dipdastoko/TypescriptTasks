type Role = 'admin' | 'user' | 'guest';

function taskFunction(name: string, age: number, role: Role) {
    console.log(name);
    console.log(age);
    console.log(role);
}

taskFunction('Dip', 123, 'admin');