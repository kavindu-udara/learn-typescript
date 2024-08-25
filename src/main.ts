let myName: string = 'udara' ;
let meaningOgLife: number;
let isLoading: boolean;

// union type
let album: any;

myName = 'kavindu';
meaningOgLife = 40;
isLoading = true;
album = 'Van Gogh';
album = 10;
album = true;

const sum = (a: number, b:number) : number => {
    return a+b;
}

let postId : string | number;
let isActive : boolean | number;

// regular expression
let re: RegExp = /\w+/g;