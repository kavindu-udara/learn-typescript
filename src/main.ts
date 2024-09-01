// ! Index Signatures

// interface TransactionObj {
//     readonly [index: string]: number;
// }

interface TransactionObj {
    readonly [index: string]: number;
    Pizza: number,
    Books: number,
    Job: number
}

const todayTransactions: TransactionObj = {
    Pizza: -10,
    Books: -5,
    Job: 50,
    Kavindu: 50
}

console.log(todayTransactions.Pizza);
console.log(todayTransactions['Pizza']);

let prop: string = 'Pizza';
console.log(todayTransactions[prop]);

const todaysNet = (transactions: TransactionObj): number => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
}

console.log(todaysNet(todayTransactions));

// todayTransactions.Pizza = 40;

console.log(todayTransactions['Kavindu']);

interface Student {
    // [key: string] : string | number | number[] | undefined;
    name: string,
    GPA: number,
    classes?: number[]
}

const student: Student = {
    name: "Doug",
    GPA: 3.5,
    classes: [100, 200]
}

for (const key in student){
    console.log(`${key}: ${student[key as keyof Student]}`);
}

Object.keys(student).map(key => {
    console.log(student[key as keyof typeof student]);
})

const logStudentKey = (student: Student, key: keyof Student) : void => {
    console.log(`Student ${key}: ${student[key]}`);
}

logStudentKey(student, 'GPA');
logStudentKey(student, 'name');

//  ###########################3
// interface Incomes{
//     [key: string] : number
// }

type Streams = 'salary' | 'bonus' | 'sidehustle'

type Incomes = Record<Streams,number | string>;

const monthlyIncomes: Incomes = {
    salary: 500,
    bonus : 100,
    sidehustle: 250
}

for(const revenue in monthlyIncomes){
    console.log(monthlyIncomes[revenue as keyof Incomes]);
}