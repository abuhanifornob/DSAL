function factorial(number){
    if (number ===1  || number ===0 ) return 1
    return number*factorial(number-1)
}

function isStrongNumber(num){
    let sum=0;
    let temp=num;
    while(temp>0){
        let digit=temp%10;
        sum+=factorial(digit);
        temp=Math.floor(temp/10);
    }
    return num == sum;
}
const number=145
if (isStrongNumber(number)) {
    console.log(`${number} একটি Strong Number।`);
} else {
    console.log(`${number} Strong Number নয়।`);
}