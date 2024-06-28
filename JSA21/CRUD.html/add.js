// CREATE

// const add = ()=>{}

// tạo 1 sự kiện
// lấy 1 dữ liệu từ phía HTML(DOM)
// lấy giá trị: value
// thêm sản phẩm
// fetch(string, obj)
const addProduct = () => {
    let name = document.querySelector('.name').value;
    let price = document.querySelector('.price').value;
    const data = {
        name ,
        price
    };
    fetch('http://localhost:3000/comments', {
        method: 'POST',
        headers:   { 'Content-Type': 'application/json'},
        body : JSON.stringify(data)
    })
}