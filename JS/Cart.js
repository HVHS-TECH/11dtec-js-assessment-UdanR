// The Inventory
console.log(JSON.parse(sessionStorage.getItem('Inventory')));
var foodItems = JSON.parse(sessionStorage.getItem('Inventory'));

// Getting the buying_Items stringed var form the sessionStorage and coverting it back into a js
console.log(JSON.parse(sessionStorage.getItem('buying_Items')));
var added_Buying_Items = JSON.parse(sessionStorage.getItem('buying_Items')) || [];
console.log(added_Buying_Items);
console.log(foodItems);

const CART_ITEM_OUTPUT = document.getElementById("choosen_Cart_Output");
var Total_Price = 0;
// Adding the items to the HTML
for (let i = 0; i < added_Buying_Items.length; i++) {
    var buying_items = added_Buying_Items[i];
    console.log(buying_items);
    var cart_Id = Number(buying_items.id);
    var choice = foodItems.find(product => product.id === cart_Id);
    console.log(choice);
    var Item_Num = 1;
    var quantity = buying_items.quantity*choice.price;
    Total_Price = Total_Price + quantity;
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
                CART_ITEM_OUTPUT.innerHTML +=`<div class="item-${Item_Num}">                
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
                        <h2 class="Chosen_Item_Total" id="chosen_Item_Total_Price">$${quantity}</h2>
                    </div>
                </div>
                </div>`;
}

//adding the total price next to the cart
const CART_TOTAL_PRICE = document.getElementById("Shopping-cart-price");
CART_TOTAL_PRICE.innerHTML = "$" + Total_Price;

//Check Area
// Showing the Total Price
const CHECKOUT_TOTAL_PRICE = document.getElementById("checkout_Total_Price");
CHECKOUT_TOTAL_PRICE.innerHTML = "$" + Total_Price;




function Check_Out(){
    const USERNAME = document.getElementById("User_Name");
    const MONEY = document.getElementById("Available_Money");
    var spending_money = Number(MONEY.value);
    console.log(MONEY);
    console.log(spending_money);
    console.log(Total_Price);
    if (spending_money < Total_Price) {
        alert ("You don't have enough money");
        return;
    } else{
        const d = new Date();
document.getElementById("demo").innerHTML = d;
        const RECEIPT_OUTPUT = document.getElementById("Receipt_Area");
        RECEIPT_OUTPUT.innerHTML = `<h1 class="receipt_logo">Street Bites</h1>
            <div class="receipt_Top">
                <h2 class="receipt_date">${d}</h2>
                <h2 class="receipt_name">${USERNAME}</h2>
            </div>
            <div class="receipt_Chosen_Items" id="receipt_Chosen_Items_Area">
                <div class="receipt_Chosen_Items_Info">
                    <h2 class="receipt_Chosen_Items_Name">${choice.item}</h2>
                    <h2 class="receipt_Chosen_Items_Price">${choice.price}</h2>
                </div>
                <div class="receipt_Chosen_Items_Quantity">
                    <h2 id="receipt_Chosen_Items_Quantity_Area">${buying_items.quantity}</h2>
                </div>
                <div class="receipt_Chosen_Items_Total_Outcome">
                    <h2 id="receipt_Chosen_Items_Total_Price">$10</h2>
                </div>
            </div>
            <div class="receipt_Bottom">
                <div class="receipt_Total_Price">
                    <h2>Total:</h2>
                    <h2>$10</h2>
                </div>
                <div class="receipt_Chosen_Given_Amount">
                    <h2>Given Amount :</h2>
                    <h2>$20</h2>
                </div>
                <div class="receipt_Chosen_Change">
                    <h2>Change :</h2>
                    <h2>$10</h2>
                </div>
            </div>`

    }
}

