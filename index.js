function writeCards(array,events) {
const  Sam =[]
for (let i of array) {
    Sam.push(`Thank you, ${i}, for the wonderful ${events} gift!`) 
}
return Sam
}
function countDown() {
    let countDown =10;
    while (countDown >= 0) {
        console.log(countDown--) ;
    }
}