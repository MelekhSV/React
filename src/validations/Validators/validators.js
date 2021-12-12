export const requiredField = (value) => {
    if (value) {
        return undefined;
    }
    return 'Field is required'
}


export const maxLenghtCreator = (maxLenght) => (value) => {
    if (value && value.length >maxLenght) {
        return `Max lenght ${maxLenght} symbols`;
    }
    return undefined
}



//
//
//
// export const maxLenght30 = (value) => {
//     if (value && value.length >30) {
//         return 'Max lenght 30 symbols';
//     }
//     return undefined
// }

