//1st problem

function seerToMon(seer) {
    if (typeof seer != "number") {
        return "please enter a number";
    }
    var Mon = seer / 40;
    return Mon;
}
//console.log(seerToMon(40.5));

//2nd Problem
const shirtPrice = 100;
const pantPrice = 200;
const shoesPrice = 500;
function totalSales(shirt, pant, shoes) {
    if (
        typeof shirt == "undefined" ||
        typeof pant == "undefined" ||
        typeof shoes == "undefined"
    ) {
        return "enter all the 3 parameter....";
    }
    if (
        typeof shirt != "number" ||
        shirt < 0 ||
        shirt - Math.ceil(shirt) != 0 ||
        shirt - Math.floor(shirt) != 0
    ) {
        return "Shirt quantity is not valid! Please enter a positive integer number.";
    }
    if (
        typeof pant != "number" ||
        pant < 0 ||
        pant - Math.ceil(pant) != 0 ||
        pant - Math.floor(pant) != 0
    ) {
        return "pant quantity is not valid! Please enter a positive integer number.";
    }
    if (
        typeof shoes != "number" ||
        shoes < 0 ||
        shoes - Math.ceil(shoes) != 0 ||
        shoes - Math.floor(shoes) != 0
    ) {
        return "shoes quantity is not valid! Please enter a positive integer number.";
    }
    var total = shirt * shirtPrice + pant * pantPrice + shoes * shoesPrice;
    return total;
}
//console.log(totalSales(1, 2, 1));

//problem 3
function deliveryCost(delivaryNumber) {
    if (
        typeof delivaryNumber != "number" ||
        delivaryNumber < 0 ||
        delivaryNumber - Math.ceil(delivaryNumber) != 0 ||
        delivaryNumber - Math.floor(delivaryNumber) != 0
    ) {
        return "Delivary Quantity is not valid! Please enter a positive integer number.";
    }
    let cost = 0;
    if (delivaryNumber <= 100) {
        cost += delivaryNumber * 100;
    } else if (delivaryNumber > 100 && delivaryNumber <= 200) {
        cost += (delivaryNumber - 100) * 80 + 100 * 100;
    } else {
        cost += (delivaryNumber - 200) * 50 + 100 * 100 + 50 * 100;
    }
    return cost;
}
/*
console.log(deliveryCost(100.6));
console.log(deliveryCost(1));
console.log(deliveryCost(105));
console.log(deliveryCost(200));
console.log(deliveryCost(1000));
*/

// problem - 4
function perfectFriend(friendsArray) {
    let i;
    if (typeof friendsArray != "object") return "It should be an arrey!!!";
    for (i = 0; i < friendsArray.length; i++) {
        if (friendsArray[i].length == 5) {
            return friendsArray[i];
        }
    }
    if (i == friendsArray.length) return "Perfect Friend does not exist!!!";
}
var array = ["safa", "saba", "suma", "shova", "fhsdfslfkjdf"];

  // console.log(perfectFriend(array));