let products = [
    {
        name: "Iphone 13 Pro Max", // Tên sản phẩm
        price: 30000000, // Giá mỗi sản phẩm
        brand: "Apple", // Thương hiệu
        count: 2, // Số lượng sản phẩm trong giỏ hàng
    },
    {
        name: "Samsung Galaxy Z Fold3",
        price: 41000000,
        brand: "Samsung",
        count: 1,
    },
    {
        name: "IPhone 11",
        price: 15500000,
        brand: "Apple",
        count: 1,
    },
    {
        name: "OPPO Find X3 Pro",
        price: 19500000,
        brand: "OPPO",
        count: 3,
    },
]
// 1. In ra thông tin các sản phẩm trong giỏ hàng theo cấu trúc sau
// Tên - Giá - Thương Hiệu - Số lượng
// Ví dụ : OPPO Find X3 Pro - 19500000 - OPPO - 3
const showinFoproduct =  arr => {
    arr.forEach(product => {
    console.log(`${product.name} - ${product.price} - ${product.brand} - ${product.count}`)
    })
}
console.log(showinFoproduct(products))

// 2. Tính tổng tiền tất cả sản phẩm trong giỏ hàng
// Tổng tiền mỗi sản phẩm = price * count
const getTotal = arr => {
    let total = 0
    arr.forEach(products => {
        total += products.price * products.count
    })
    return total;
   // return arr.reduce((total , products) => total + (products.price * products.count) , 0)
} 
console.log(getTotal(products))

// 3. Tìm các sản phẩm của thuơng hiệu "Apple"
const findProductbybrand = (arr,brand) => {
    return arr.filter(products => products.brand == brand)
}
console.log(findProductbybrand(products , "Apple"))
// 4. Tìm các sản phẩm có giá > 20000000
const timMoney= (arr,money) => {
    return arr.filter(products => products.price > money)
}
console.log(timMoney(products , "20000000"))

// 5. Tìm các sản phẩm có chữ "pro" trong tên (Không phân biệt hoa thường)
const findName = ( arr , name) => {
    return arr.filter(product => product.name.toLowerCase().includes(name.toLowerCase()))
}
console.log(findName(products, "pro"))
// 6. Thêm 1 sản phẩm bất kỳ vào trong mảng product
const themSp = {
     name : "redme k40 pro ",
     price: 21000000,
     brand: "realme",
     count: 10,
}
  products.push(themSp)
  console.log(products)
  
// 7. Xóa tất cả sản phẩm của thương hiệu "Samsung" trong giỏ hàng
const Samsung1 = { name: "Samsung Galaxy Z Fold3",
price: 41000000,
brand: "Samsung",
count: 1,

}
delete Samsung1.product
console.log(products)
// 8. Sắp xếp giỏ hàng theo price tăng dần

 let xapXep = p => 
 p.sort((a,b) => a.price - b.price)
 console.log(xapXep(products))


   
// 9. Sắp xếp giỏ hàng theo count giảm dần
let sapXep = p => p.sort((a,b) => b.count - a.count)
console.log(sapXep(products))
// 10. Lấy ra 2 sản phẩm bất kỳ trong giỏ hàng
function get2Products(products) {
    let index1 = Math.floor(Math.random() * products.length);
    console.log(products[index1]);
    let a1 = products.slice(0, index1);
    let a2 = products.slice(index1 + 1 , products.length)
    let newProduct = a1.concat(a2)
    let index2 = Math.floor(Math.random() * newProduct.length);
    console.log(newProduct[index2])
}
get2Products(products)