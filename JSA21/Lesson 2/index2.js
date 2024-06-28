// let arr = [1, 2, 3, 4, 5, 6, 7]
// let newArr = arr.filter(function(item) {return item%2==0})
// console.log(newArr);

// // let arr = [1, 2, 3, 4, 5, 6, 7]
// let newfind = arr.find(function(item) {return item%2==0})
// console.log(newfind);


const data = [
    {
        id: 1,
        name: "product 1",
        image: 'https://inhat.vn/wp-content/uploads/2021/01/shop-quan-ao-nu-bien-hoa4.1.jpg',
        price: 200000
    },
    {
        id: 2,
        name: "product 2",
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzJgD7e3dkC0Y0YjKm7y1Ao2sj6669i7KFyg&usqp=CAU',
        price: 100
    }
]


const showProduct = (data, app) => {
    for (let product of data) {
        app.innerHTML += `
        <div class="item">
            <p>${product.id}</p>
            <p>${product.name}</p>
            <img src="${product.image}">
            <p>${product.price}</p>
        </div>`
    }
}
let hot = document.querySelector('.hot');
showProduct(data, hot)