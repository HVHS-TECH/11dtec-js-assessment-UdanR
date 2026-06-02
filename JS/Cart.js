// The Inventory
console.log(JSON.parse(sessionStorage.getItem('Inventory')));
var foodItems = JSON.parse(sessionStorage.getItem('Inventory'));

// Getting the buying_Items stringed var form the sessionStorage and coverting it back into a js
console.log(JSON.parse(sessionStorage.getItem('buying_Items')));
var added_Buying_Items = JSON.parse(sessionStorage.getItem('buying_Items')) || [];
console.log(added_Buying_Items);
console.log(foodItems);

const CART_ITEM_OUTPUT = document.getElementById("choosen_Cart_Output");

// Adding the items to the HTML
for (let i = 0; i < added_Buying_Items.length; i++) {
    console.log("hello World!");
    var buying_items = added_Buying_Items[i];
    var choice = foodItems.find(product => product.id === buying_items.id);
    console.log(choice.id);
    console.log(choice.price);
    console.log(choice.img);
    var Item_Num = 1;
        console.log("hi")

}

