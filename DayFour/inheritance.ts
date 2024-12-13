class Person {

    private _firstname: string;
    private _lastname: string;

    constructor(firstname: string, lastname: string){
        this._firstname = firstname;
        this._lastname = lastname;
    }

    public get firstname(){
        return this._firstname;
    }

    public set firstname(firstname: string){
        this._firstname = firstname;
    }

    public get lastname(){
        return this._lastname;
    }

    public set lastname(lastname: string){
        this._lastname = lastname;
    }

    public displayName(): void{
        console.log(`${this.firstname} ${this.lastname}`);
        
    }

}

class Employee extends Person{

    constructor(firstname: string, lastname:string){
        super(firstname, lastname);
    }

    public displayName(): void {
        console.log(`Employee: ${this.firstname} ${this.lastname}`);
    }

}

let emp = new Employee("B", "M");
emp.displayName();

let per = new Person("B", "M");
per.displayName();

let or: Employee = new Person("B", "M") as Employee;
let or2: Employee =<Employee> new Person("B", "M");
function testh(a: number){
    if(a == 1){
        return "1";
    }
    return 1;
}

function getNetPrice(price: number, discount: number, format: boolean): number | string{
    let netPrice = price - discount;
    return format ? `$${netPrice}` : netPrice;
}

let netPriceString = getNetPrice(20, 10, true) as number;
let netPrice = getNetPrice(20, 10, false) as string;

netPrice
netPriceString

function add<T> (a: T, b: T): T[]{
    return [a, b];
}

console.log(add<number>(1, 2));




console.log(or.constructor.name);
console.log(or2.constructor.name);
