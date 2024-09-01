// const year = document.getElementById("year") as HTMLElement;
// const thisYear = new Date().getFullYear() as number;
// year.setAttribute("datetime", thisYear.toString());
// year.textContent = thisYear.toString();

// 1st veriation
// let year : HTMLElement | null;
// year = document.getElementById("year") ;
// let thisYear : string 
// thisYear = new Date().getFullYear().toString();
// if(year){
//     year.setAttribute("datetime", thisYear.toString());
//     year.textContent = thisYear.toString();
// }

// 2nd veriation
const year = document.getElementById("year") as HTMLSpanElement;
let thisYear = new Date().getFullYear().toString();
year.setAttribute("datetime", thisYear.toString());
year.textContent = thisYear.toString();
