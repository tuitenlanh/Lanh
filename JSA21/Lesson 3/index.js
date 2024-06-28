const data = [
    {
        id: 0,
        name: "product 1",
        image: 'https://i.pinimg.com/originals/3a/f1/cc/3af1cc2e440012b9a79255b4f19190fc.gif',
        price: 200000
    },
    {
        id: 1,
        name: "product 2",
        image: 'https://i.pinimg.com/originals/3a/f1/cc/3af1cc2e440012b9a79255b4f19190fc.gif',
        price: 100
    }
]


const showProduct = (data, app) => {
    for (let product of data) {
        app.innerHTML += `
        <div class="card" style="width: 18rem;">
        <img src="${product.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${product.id}</h5>
          <p class="card-text">${product.name}</p>
          <a href="#" class="btn btn-primary">${product.price}</a>
        </div>`
    }
}


// let hot = document.querySelector('.app');
// showProduct(data, hot)
// const arrayA = [1,2,3,4]
// arrayA.push({
//     name: "cương",
//     price:100
// })
// console.log(arrayA)

const addProduct = () => {
    let name = document.querySelector('.name').value
    let price = document.querySelector('.price').value; 
    data.push({id: length, name: name, price: price})
    let hot = document.querySelector('.app')
    showProduct(data, hot)
}