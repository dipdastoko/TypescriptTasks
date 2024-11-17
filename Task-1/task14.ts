const taskPromise = () => {
   return new Promise((resolve, reject) => {
       const userData: { name: string, age: number } = {
            name: 'Dip',
            age: 23
        }

        if (userData) {
            resolve(userData)
        } else {
            reject('failed to load data')
        }
    })
}
const showData = async () => {
    const data = await taskPromise();
    console.log(data);
}

showData();