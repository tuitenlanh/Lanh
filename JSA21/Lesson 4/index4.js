// const product = "product",
// localStorage.setItem = ('products', product)


// const datalocal = localStorage.getItem('products')
// console.log(product);
// console.log(datalocal);

const product = {
    name: 'Le Anh',
    age: 15,
    email:'dakoifj'
}

localStorage.setItem('products', JSON.stringify(product))
// let data = localStorage.setItem('products')
let data = JSON.parse(localStorage.getItem('products'))
console.log(data);

const data1 = [
    {
        id: 1,
        name : 'product 1',
        price : 2000,
        image : 'https://tronhouse.com/assets/data/editor/source/nhung-cach-chup-hinh-quan-ao-duoc-uu-chuong-nhat/chup-hinh-sang-tao-1.jpg'
    },
    {
        id: 2,
        name : 'product 2',
        price : 1000,
        image : 'https://mabustudio.com/?attachment_id=3204'
    },
    {
        id: 3,
        name : 'product 3',
        price : 4000,
        image : 'https://htmediagroup.vn/wp-content/uploads/2021/12/Ao-pijama-11-min.jpg'
    },
    {
        id: 4,
        name : 'product 4',
        price : 5000,
        image : 'https://tcorder.vn/wp-content/uploads/2015/12/ao-thun-nam-ca-tinh-thoi-trang-2.jpg'
    }
]