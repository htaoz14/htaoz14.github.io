let arrEmpty = "" // mang rong

// khai bao mang sau do chen cac du lieu cho mang nay
let names = [];
names[0] = "An";
names[1] = "Hoa"
names[2] = "Tuan";
console.log(names);
// vua khai bap , vua khoi tao gia tri
let numbers = [1,2,3,4,5];
console.log(numbers);

//lay ra gia tri cua mang thong   qua chi so
console.log(numbers[1]);
console.log(numbers[numbers.length -1])
//set lai gia tri
numbers[0] = 10;
console.log(numbers);
//tao bien oi roi gan gia tri cu
 let number0ther = numbers;
 console.log(number0ther);
 //thay doi gia tri cua ang nuber0ther
 number0ther[1] = 20;
 console.log(numbers);
 console.log(number0ther);
 // vd
 let arr = [1,2,3];
 let arr1 = [1,2,3];
 let arr2 = arr1;
 let arr3 = arr1.sort().reverse();
 let text = "1,2,3";

 console.log(arr = arr1);
 console.log(arr == arr2);
 console.log(arr2 == arr3);
 console.log(arr == text );
 console.log(arr3 == text);
 //duyet mang
  for ( let i = 0; i < numbers.length; i++){
 console.log(numbers[i])
  }
//tinh tong
let total = 0
for (let i =  0; i < numbers.length; i++){
    total += numbers[i];
}
console.log(total)
// tinh tong so le

let total0dd = 0;
for (let i = 0; i < numbers.length; i ++){
    if(numbers[i] % 2 == 1){
        total0dd += numbers[i]
    }
}
console.log(total0dd)
//lay ra mang so chan
// [ 10 , 20 , 3 ,4 5] => [10 2 4]
//pop,push,unshift , shift , splice
let newArr= [];
for ( let i = 0; i < numbers.length;i++){
    if(number0ther[i] % 2 ==0){
        newArr.push(numbers[i]);
    }
}
console.log(newArr)


function ckeckArr(arr){
    
   for ( let i = 0 ; i < number.length - 1; i++) {
       if ( arr[i] < arr[i + 1]) {
           return false;
       }
      } return true;
}
console.log(ckeckArr([2,3,4,5,6]))