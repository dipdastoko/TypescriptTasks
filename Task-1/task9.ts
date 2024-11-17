type Employee = {
    name: string;
    id: number;
    address: {
        city?: string;
        country: string;
    }
}
const employee: Employee = {
    name: 'Dip',
    id: 123,
    address: {
        city: 'Narsingdi',
        country:'Bangladesh'
    }
}

function getEmployeeCity(employee:Employee) {
    console.log(employee.address?.city);
}

getEmployeeCity(employee);

