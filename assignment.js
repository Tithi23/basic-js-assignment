// Problem 1 (seerToMon)

var mySeer = 142;
function seerToMon(seers) {
    // if (typeof seers == 'number') {
    //     console.log(seers);
    //     return 'please give a valid input';
    // }
    var mon = seers / 40;
    // console.log(mon);
    return mon;
}
var mon = seerToMon(mySeer);
console.log(mon);


// Problem 2 (totalSales)
/*
shirtprice= 100 tk
pantprice = 200 tk
shoeprice = 500 tk
*/

function totalSales(shirtQuantity, pantQuantity, shoeQuantity) {
    const parShirtPrice = 100;
    const parPantPrice = 200;
    const parShoePrice = 500;
    // Price calculation
    const shirtPriceQuantity = shirtQuantity * parShirtPrice;
    const pantPriceQuantity = pantQuantity * parPantPrice;
    const shoePriceQuantity = shoeQuantity * parShoePrice;
    // total calculation
    const totalPrice = shirtPriceQuantity + pantPriceQuantity + shoePriceQuantity;
    return totalPrice;
}
const firstDay = totalSales(3, 4, 5);
console.log(firstDay);


// Problem 3 (deliveryCost)
// tshirt = 100 tk (1-100), 80 tk (101-200), 50 tk (200+)

const items = [
    { name: 'tshirt', price: 20600, Quantity: 240 }
];

function deliveryCost(tshirt) {
    const itemTotal = 240;
    for (const product of items) {
        // console.log(product);
        const productTotal = product.price / product.Quantity;
        // console.log(productTotal);
        itemtTotalPrice = productTotal + itemTotal;
        // console.log(itemtTotalPrice);
        /*  if (typeof (items) != 'number') {
            return 'please give me a number';
         } */
    }
    return itemtTotalPrice;
}
const firstDelivery = deliveryCost(items);
console.log(firstDelivery);


// Problem 4 (perfectFriend)
const friends = ['Mahi', 'Ome', 'Kona', 'Shova', 'Nico', 'Ratry'];

function perfectFriend(text) {
    let perfect = [];
    for (let i = 0; i < text.length; i++) {
        // console.log(i);
        const element = text[i];
        if (element > perfect) {
            perfect = element;
        }
        /* else if (typeof (friends) != 'string') {
            return 'please give me a string';
        } */
    }
    return perfect;
}
const myPerfectFriend = perfectFriend(friends);
console.log(myPerfectFriend);
