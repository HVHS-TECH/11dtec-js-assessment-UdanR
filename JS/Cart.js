// The Inventory
console.log(JSON.parse(sessionStorage.getItem('Inventory')));
var foodItems = JSON.parse(sessionStorage.getItem('Inventory'));

// Getting the buying_Items stringed var form the sessionStorage and coverting it back into a js
console.log(JSON.parse(sessionStorage.getItem('buying_Items')));
var added_Buying_Items = (JSON.parse(sessionStorage.getItem('buying_Items')));
console.log(added_Buying_Items);
console.log(foodItems);
for (let i = 0; i < added_Buying_Items.length; i++) {
    console.log("hello World!");
    

}