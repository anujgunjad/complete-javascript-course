const promise1 = new Promise((resolve, reject) => {
    resolve(1);
})

const promise2 = promise1.then((response) => {
    return response;
})

promise2.then((data) => {
    console.log(data);
});

async function getData() {
    const data = await promise1;
    console.log(data);
}

getData();

//Fetch real API
let finalData;
fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(response => response.json())
.then(data => finalData = data);

console.log(finalData);