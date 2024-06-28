// cách lấy giữ liệu ở API
// cách 1: lấy toàn bộ
// cách 2: lấy từng cái
// vd 1: get all API
fetch('http://localhost:3000/product')
    .then((response) => response.json())
    .then((dataall) => {
        console.log(dataall);
        }
    )
//vd 2: get id API
fetch(`http://localhost:3000/category/2`)
    .then((response) => response.json())
    .then(
        (data) =>
        {
            console.log("data", data)
        }
    )
//post
const data1 = {
    name: "product post"
}
const add = () => {
    fetch('http://localhost:3000/product', {
        method : 'POST',
        headers: {
            "Content-Type": "application/json",
    },
    body: JSON.stringify(data1)
})
}
//put | patch: sửa
const dataupdate = {
    name: "product update123"
}
const update = () => {
    fetch('http://localhost:3000/product/3', {
        method : 'PUT',
        headers: {
            "Content-Type": "application/json",
    },
    body: JSON.stringify(dataupdate)
})
}
//delete
const deleteP = () => {
    fetch('http://localhost:3000/product/1', {
        method: 'DELETE',
    })
}