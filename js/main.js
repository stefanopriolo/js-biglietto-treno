const km = prompt("Quanti km vuoi percorrere?");
const age = prompt("Quanti anni hai?");
let price = km * 0.21;
let discountUnder = ((price * 20) / 100);
let discountOver = ((price * 40) / 100);

console.log (totalPrice)
console.log( typeof km);
console.log( typeof age);
console.log( typeof discountUnder);
console.log( typeof discountOver);
console.log( typeof totalPrice);

if age < 18 {
    const totalPrice = price - discountUnder
    console.log("sei minorenne, hai diritto a uno sconto del 20%")
}

if age > 65 {
    const totalPrice = price - discountOver
    console.log("sei over 65, hai diritto a uno sconto del 40%")
}

document.getElementById("totalPrice").innerHTML = totalPrice;
