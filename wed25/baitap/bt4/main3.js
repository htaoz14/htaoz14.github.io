function phuongTrinh2(a,b,c){
    if (a == 0){
        console.log(`phương trình vô nghiệm`);
    } 
    else {
        let delta = Math.pow(b,2) - (4 * a * c); 
        if ( delta == 0) {
            const x = -b / 2*a
            console.log(`phương trình có nghiệm kép: x = ${x} `);
    }
    else if ( delta < 0){
        console.log(`Phương trình vô nghiệm`);
    }
    else if (delta >0){
        console.log(`Phương trình có 2 nghiệm phân biệt`);
        const x1 = (-b -Math.sqrt(delta)) / (2*a);
        const x2 = (-b +Math.sqrt(delta)) / (2*a);
        console.log(`nghiệm x1 là : ${x1}`)
        console.log(`nghiệm x2 là : ${x2}`)
    }

}
}
console.log(phuongTrinh2(0,4,5))
console.log(phuongTrinh2(2,9,8))
 