const km = prompt("Quanti km vuoi percorrere?");
const age = prompt("Quanti anni hai?");
let price = km * 0.21;
let discountUnder = ((price * 20) / 100);
let discountOver = ((price * 40) / 100);

console.log( km);
console.log( age);


if (age < 18) {
    const totalPrice = (price - discountUnder)
    console.log("sei minorenne, hai diritto a uno sconto del 20%")
    console.log (Math.round(totalPrice))
} else {
    totalPrice = price
    console.log (Math.round(totalPrice))
}

if (age > 65) {
    const totalPrice = (price - discountOver)
    console.log("sei over 65, hai diritto a uno sconto del 40%")
    console.log (Math.round(totalPrice))
}  else {
    totalPrice = price
    console.log (Math.round(totalPrice))
}


document.getElementById("totalPrice").innerHTML = totalPrice;
document.getElementById("sei minorenne, hai diritto a uno sconto del 20%").innerHTML = totalPrice;
