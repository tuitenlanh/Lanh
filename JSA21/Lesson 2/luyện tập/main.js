const data = [
    {
        id: 1,
        name: "leanh",
        class: "A11",
        age: "15",
        
    },
    {
        id: 2,
        name: "leduc",
        class: "A11",
        age: "15",
    }
]

const showProduct = (data, app) => {
    for (let product of data) {
        app.innerHTML += `
        <div class="item">
            <p>${product.id}</p>
            <p>${product.name}</p>
            <p>${product.class}</p>
            <p>${product.age}</p>
        </div>`
    }
}
let huhu = document.querySelector('.huhu');
showProduct(data, huhu)