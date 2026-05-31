// The Inventory
console.log(JSON.parse(sessionStorage.getItem('Inventory')));
var foodItems = JSON.parse(sessionStorage.getItem('Inventory'));

// Getting the buying_Items stringed var form the sessionStorage and coverting it back into a js
console.log(JSON.parse(sessionStorage.getItem('buying_Items')));
var added_Buying_Items = (JSON.parse(sessionStorage.getItem('buying_Items')));
console.log(added_Buying_Items);
console.log(foodItems);

// Adding the items to the HTML
for (let i = 0; i < added_Buying_Items.length; i++) {
    console.log("hello World!");
    var buying_items = added_Buying_Items[i];
    var choice = foodItems.find(product => product.id === added_Buying_Items.id);
    choice.forEach(choice_Print);
    var Item_Num = 1;
    function choice_Print(item, Item_Num){
        console.log (`<div class="item-${Item_Num}">                
                <div class="chosen_Item_IMG">
                    <img src="Items_IMG/${item.img}" alt="${item.img}">
                </div>
                <div class="chosen_Item_Info">
                    <div class="Item_Details">
                        <h2 class="item_Name">${item.item}</h2>
                        <h2 class="item_Price">$${item.price}</h2>
                    </div>
                    <div class="Item_Quantity">
                        <input min="1" type="number" value="${buying_items.quantity}" id="item_quantity_${item.id}" class="item_quantity">
                    </div>
                    <div class="Item_Total">
                        <button value="${item.id}" onclick="Remove_From_Cart_Function(this.value)" class="Remove_From_Cart_Button">Remove</button>
                        <h2 class="Chosen_Item_Total" id="chosen_Item_Total_Price">$10</h2>
                    </div>
                </div>
                </div>`);
        RECOMMNEDED_ITEMS_OUTPUT.innerHTML += `<div class="item-${Item_Num}">                
                <div class="chosen_Item_IMG">
                    <img src="Items_IMG/${item.img}" alt="${item.img}">
                </div>
                <div class="chosen_Item_Info">
                    <div class="Item_Details">
                        <h2 class="item_Name">${item.item}</h2>
                        <h2 class="item_Price">$${item.price}</h2>
                    </div>
                    <div class="Item_Quantity">
                        <input min="1" type="number" value="${buying_items.quantity}" id="item_quantity_${item.id}" class="item_quantity">
                    </div>
                    <div class="Item_Total">
                        <button value="${item.id}" onclick="Remove_From_Cart_Function(this.value)" class="Remove_From_Cart_Button">Remove</button>
                        <h2 class="Chosen_Item_Total" id="chosen_Item_Total_Price">$10</h2>
                    </div>
                </div>
                </div>`;
            Item_Num = Item_Num +1;
}
}

