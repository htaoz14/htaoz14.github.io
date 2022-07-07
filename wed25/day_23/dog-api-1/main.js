/*
 1. khái niệm Api LÀ GÌ?
 Appication  Programming Interface (gio diện lập trình)
 tập hợp các quy tác mà qua đó cho phép các thành phần,hoặc các ứng kết tương tác với nhau như thế nào


2. demo ví dụ thực tế: 
 đi ăn nhà hàng
 khách hàng : client ( front-end)
 nhà bếp : sever (back end)
 khách hàng -> gọi món -> nhà bếp nấu
 nhà bếp -> nấu món ăn -> khách hàng
 nhân viên : lấy thực đơn từ khách hàng sau đó -> gửi cho nhà bếp
 sau khi nhà bếp nấu xong thì -> nhân viên sẽ bưng món ăn lên cho khách hàng

 3. Cấu trúc như thế nào
API = Http method + URL
 Http method  
GET  ; lấy thông tin : lấy thông tin từ menu
 POST : tạo  : đặt món
 PUT : cập nhật : thay đổi món ăn
DELETE : xóa : hủy món ăn


URL(danh từ - resouce)
GET/users -> lấy danh sách tất cả user
GET/users/1 : lấy thông tin có id là 1
GET/users/1/blogs : lấy danh sách tất cả blog của user có id là 1
GET/users/1/blogs/2 : lấy thông tin blogs có id =2 và user =1
POST / users -> tạo user mới (/user/crate -> hợp lệ nhưng không chuẩn restful API)
{
    name :
    email:
    ...
}
POST /users/1/blogs -> tạo blogs mới cho user có id =1
{ title :
    content;
    ...

}
PUT/users/1/blogs -> capaj nhật thông tin cho user có id =1 

{
    name :
    email :
}
delete / users/1 -> xóa user có id 1


4. thực hiện API như thế nào
 -axios ( thư viện bên thứ 3 , cần phải nối link vào để thực hiện) ( khuyên dùng)
 -fetch API ( có sẵn của javascipt)
 -AJAX ( có trong Jquery , cũng cần nối link để sử dụng)
 5. test API như thế nào
 - postman
 -extension VScode : REST Client
 -Test trực tiếp trên browser ( chỉ sử dụng với API GET)
*/