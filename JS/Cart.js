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
    var choice = foodItems.filter(product => product.id === buying_items.id);
    var Item_Num = 1;
        console.log("hi")
        console.log (`<div class="item-${Item_Num}">                
                <div class="chosen_Item_IMG">
                    <img src="Items_IMG/${choice.img}" alt="${choice.img}">
                </div>
                <div class="chosen_Item_Info">
                    <div class="Item_Details">
                        <h2 class="item_Name">${choice.item}</h2>
                        <h2 class="item_Price">$${choice.price}</h2>
                    </div>
                    <div class="Item_Quantity">
                        <input min="1" type="number" value="${buying_items.quantity}" id="item_quantity_${choice.id}" class="item_quantity">
                    </div>
                    <div class="Item_Total">
                        <button value="${choice.id}" onclick="Remove_From_Cart_Function(this.value)" class="Remove_From_Cart_Button">Remove</button>
                        <h2 class="Chosen_Item_Total" id="chosen_Item_Total_Price">$10</h2>
                    </div>
                </div>
                </div>`);
        CART_ITEM_OUTPUT.innerHTML += `<div class="item-${Item_Num}">                
                <div class="chosen_Item_IMG">
                    <img src="Items_IMG/${choice.img}" alt="${choice.img}">
                </div>
                <div class="chosen_Item_Info">
                    <div class="Item_Details">
                        <h2 class="item_Name">${choice.item}</h2>
                        <h2 class="item_Price">$${choice.price}</h2>
                    </div>
                    <div class="Item_Quantity">
                        <input min="1" type="number" value="${buying_items.quantity}" id="item_quantity_${choice.id}" class="item_quantity">
                    </div>
                    <div class="Item_Total">
                        <button value="${choice.id}" onclick="Remove_From_Cart_Function(this.value)" class="Remove_From_Cart_Button">Remove</button>
                        <h2 class="Chosen_Item_Total" id="chosen_Item_Total_Price">$10</h2>
                    </div>
                </div>
                </div>`;
            Item_Num = Item_Num +1;
}

