let nextId=0;

export function createPluOrProduct(text){
    return{
        id: nextId++,
        text,
    };

}