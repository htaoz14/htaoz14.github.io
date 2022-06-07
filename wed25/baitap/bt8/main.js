// Bài 1. Viết function vào 1 mảng tên học viên, sắp xếp lại mảng này theo chiều ngược của bảng chữ cái.

// sortStudents([‘Nam’, ‘Hoa’, ‘Tuấn’]) => [‘Tuấn’, ‘Nam’, ‘Hoa’]
function sortStudents(array){
    //       let arr = array.sort()
    //    return arr.reverse()
    return array.sort((a,b) => b.localeCompare(a, 'vi')
)
}

console.log(sortStudents([ 'Nam', 'Hoa', 'Tuấn' , 'Duong' , 'Đức' ]))
// Bài 2: Viết function đổi chỗ ngẫu nhiên vị trí của các phần tử trong mảng

// shuffle([1,2,3,4,5]) => [2,3,4,1,5]
 // shuffle([1,2,3,4,5]) => [4,2,3,5,1]
 //let ran =  array1[Math.floor(Math.random() * array1.length)];
 function shuffle(array1){
     let num = array1.sort(function (a,b){
       return 0.5 - Math.random();

     } ) 
      return num;
 }
 let num1 = [1,2,3,4,5]
 console.log(shuffle(num1))
//Bài 3: Viết function để lấy sự phần tử không xuất hiện ở cả 2 mảng

// symmetricDifference([1, 2, 3], [1, 2, 4]) => [3,4] 


 function symmetricDifference(arr2,arr3){
   let num3 = []
   for ( i = 0 ; i < arr2.length ; i++){
      
     if (arr3.indexOf(arr2[i] == -1)) {
       num3.push(arr2[i]);
     }
   }
   for ( i = 0 ; i < arr3.length;i++){
     if ( arr2.indexOf(arr3[i] == -1)){
       num3.push(arr3[i])
     }
   } 
   return num3
 }
 const num4 = [1, 2, 3]
 const num5 = [1, 2, 4]
 console.log(symmetricDifference(num4,num5 ))