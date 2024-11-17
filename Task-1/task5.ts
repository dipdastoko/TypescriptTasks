let reversedStringArray:string[] = [];
function reverseString(inp: string) {
    const inpArray:string[] = [...inp];
    inpArray.forEach(element => {
        reversedStringArray.unshift(element);
    });
    const reversedString = reversedStringArray.join("");
    console.log(reversedString);
}
reverseString("hello");