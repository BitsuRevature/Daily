let todo = fetch("https://jsonplaceholder.typicode.com/todos/1")
todo.then( res => {
    return res.json();
}).then(data => {
    console.log(data);
}).catch(error => {
    console.log(error)
})

const getSomething = () => {
    return new Promise((resolve, reject) =>{
        resolve("Hooray")
        reject("Boo")
    })
}

let test = getSomething();
test.then(res => {
    console.log(res);
}).cat

let todo2Res = await fetch("https://jsonplaceholder.typicode.com/todos/2")
let todo2Json = await todo2Res.json();
console.log(todo2Json)

