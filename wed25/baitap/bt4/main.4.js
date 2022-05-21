function namNhuan(n){
if (n % 100 == 0){
    if (n % 400 == 0){
        console.log(`Năm nhuận`)
    }
    else  {
        console.log(`Năm không nhuận`)
    }
    
}
if ( n % 4 == 0){
    console.log(`Năm nhuận`)
}
else {
    console.log(`Năm không nhuận`)
}
}
console.log(namNhuan(2024))
console.log(namNhuan(2001))