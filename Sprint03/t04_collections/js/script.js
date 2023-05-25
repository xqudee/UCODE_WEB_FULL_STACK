const guestList = new WeakSet;
let guest1 = {name: 'Den'};
let guest2 = {name: 'John'};
let guest3 = {name: 'Alice'};
let guest4 = {name: 'Jane'};
let guest5 = {name: 'Mark'};
guestList.add(guest1).add(guest2).add(guest3).add(guest4).add(guest5);
console.log(guestList);
console.log(guestList.has(guest3)); // Output: true
guestList.delete(guest3);
console.log(guestList);
console.log(guestList.has(guest3)); // Output: false


const menu = new Map;
menu.set('Salad', 15);
menu.set('Chicken', 35);
menu.set('Spaghetti', 30);
menu.set('Beef', 38);
menu.set('Pizza', 30);
console.log(menu);
console.log(menu.has('Beef'));
menu.delete('Chicken');
for (let dish of menu) console.log(dish);
console.log(menu.size);
console.log(menu.get('Spaghetti'));


const bankVault = new WeakMap;
let key1 = {name: '1'};
let key2 = {name: '2'};
let key3 = {name: '3'};
let key4 = {name: '4'};
let key5 = {name: '5'};
bankVault.set(key1, "info").set(key2, "info").set(key3, "info").set(key4, "info").set(key5, "info");
console.log(bankVault);
bankVault.delete(key3);
console.log(bankVault);
console.log(bankVault.get(key1));


const coinCollection = new Set;
coinCollection.add("Coin1").add("Coin2").add("Coin3").add("Coin4").add("Coin5").add('Coin5');
console.log(coinCollection);
console.log(coinCollection.has('Coin2')); // Output: true
console.log(coinCollection);
coinCollection.delete("Coin2");
console.log(coinCollection);
console.log(coinCollection.has('Coin2')); // Output: false
coinCollection.clear();
console.log(coinCollection.size);