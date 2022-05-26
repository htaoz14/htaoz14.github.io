// thuc hien cong viec thuc day trong luc 5:00 trong 30 ngay
// day++ la day + 1
// day = day + 1
// day += la day+1
for(let day = 1;day <=30; day = day +1){
console.log(`ngay ${day} thuc day luc 5:00`)
}
// thuc hien cong viec thuc day luc 5:00 sang trong 30 ngay vao cac ngay le
for ( let day = 1 ; day <=30 ; day ++){
    if (day % 2 == 1){
        console.log(`ngay ${day} thuc day luc 5h sang`)
    }
}
for ( let day =1 ; day <=30; day += 2 ){
    console.log(`ngay ${day} thuc day luc 5h sang`)
}
//  break : ngat
for ( let day = 1; day <=30 ; day++) {
    if (day ==20){
        console.log(`ngay ${day} chan qua nghi`)
        break;
    }
    console.log(`ngay ${day} thuc day luc 5h sang`)
}
// continue : tie tuc thuc hien nhung vao cuoi tuan
for ( let day = 1; day <=30 ; day++) {
    if (day %7 == 0){
        console.log(`ngay ${day} nghu xa hoi`)
        continue;
    }
    console.log(`ngay ${day} thuc day luc 5h sang`)
}
// tiet kiem tien
//  thuc hien tiet kiem 10 ngay moi ngay 100.000
// sau 10 ngay ci : 1.000.000
//thoi diem bat dau tiet kiem
// let money = 0; // vi
//for ( let day = 1 ; day <= 10 ; day ++){
    //money += 100000
//}
//console.log("tong tien sau 10 ngay tiet kiem la :"+ money)

//for ( let day = 1 ; day <= 10 ; day ++){
  //  if(day % 2 ==1 ) {
    //    money += 100000;
    //} else {
    //    money += 200000;
   // }
//}
//console.log("Money = " + money)
// den ngay so 8 het tien
//for ( let day = 1 ; day <= 10 ; day ++){
   // if(day ==8 ) {
    //    console.log(`het tien`)
    //    break;
  //  } else {
  //      money += 100000;
  //  }
//}
//console.log("money = " + money)
//continu
//for ( let day = 1 ; day <= 10 ; day ++){
 //   if(day % 7 == 1) {
   //     console.log(`het tien`)
  //      continue;
   // } else {
  //      money += 100000;
 //   }
//} console.log("money = " + money)
let day = 1;
for(;;){
    if (day>30){
        break;
    }
    console.log(`ngay ${day} thuc day luc 5h sang`)
    day++;
}


