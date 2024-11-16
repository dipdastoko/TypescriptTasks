interface Book{
    name: string;
    author: string;
}
interface Magazine{
    type: string,
    version:number
}

type BookMagazineUnion = Book | Magazine;
const bookMag: BookMagazineUnion = {
    type: 'slfj',
    name: 'sldfkj',
    version:2
    
}

type BookMagIntersection = Book & Magazine;
const bookMagIntersection: BookMagIntersection = {
    name: 'slkf',
    author: 'sldkfj',
    type: 'slfd',
    version:2
}