type User = {
    name: string;
    email: string;
}

type Admin = {
    adminLevel: string;
}

type AdminUser = User & Admin;
function describeAdmin(user: AdminUser) : string{
    return `Name: ${user.name} Email: ${user.email} AdminLevel: ${user.adminLevel}`;
}

const description = describeAdmin({ name: 'Dip', email: 'lsdkjf', adminLevel: 'sldkfj' });
console.log(description);