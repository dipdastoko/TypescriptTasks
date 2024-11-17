function isString(value: unknown):boolean{
    return (typeof value === 'string' ? true : false);
}

function printUpperCase(value: any){
    const isStringValue = isString(value);
    if (isStringValue) {
        console.log((value as string).toUpperCase());
    } else {
        console.log('value is not string')
    }
}

printUpperCase("dip das toko");