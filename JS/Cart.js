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
    var choice = foodItems.find(product => product.id === added_Buying_Items.id);
    choice.forEach(choice_Print);
    var Item_Num = 1;
    function choice_Print(item, Item_Num){
        console.log (`<div class="item-${Item_Num}">
                <img src="Items_IMG/${item.img}" alt="${item.img}">
                <div class="item_info">
                    <h2 class="item_Name">${item.item}</h2>
                    <h2 class="item_Price">$${item.price}</h2>
                </div>
                <button value=${item.id} onclick="Add_To_Cart_Function(this.value)" class=" Add_To_Cart_Button">Add To Cart</button>
            </div>`);
        RECOMMNEDED_ITEMS_OUTPUT.innerHTML += `<div class="_${reco_Item_Num}">
                <img src="Items_IMG/${item.img}" alt="${item.img}">
                <div class="item_info">
                    <h2 class="item_Name">${item.item}</h2>
                    <h2 class="item_Price" id="item_Price_${item.id}">$ ${item.price}</h2>
                </div>
                <div class="Submit_Info">
                <input type="number" value=1 class="item_quantity_choosing" id="item_quantity_${item.id}">
                <button value=${item.id} onclick="Add_To_Cart_Function(this.value)" class="Add_To_Cart_Button">Add To Cart</button>
                </div>
            </div>`
            Item_Num = Item_Num +1;
}
}

