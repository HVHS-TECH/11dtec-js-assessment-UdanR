// The Inventory
console.log(JSON.parse(sessionStorage.getItem('Inventory')));
var foodItems = JSON.parse(sessionStorage.getItem('Inventory'));

// Getting the buying_Items stringed var form the sessionStorage and coverting it back into a js
console.log(JSON.parse(sessionStorage.getItem('buying_Items')));
var added_Buying_Items = JSON.parse(sessionStorage.getItem('buying_Items')) || [];
console.log(added_Buying_Items);
console.log(foodItems);

//Getting the place to write the scripts
const SCRIPTS_OUTPUT = document.getElementById("scripts");

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
                        <h2 class="Chosen_Item_Total" value="${quantity}"id="chosen_Item_Total_Price_${choice.id}">$${quantity}</h2>
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
                        <input min="1" type="number" value="${buying_items.quantity}" onclick="changing_Item_Quantity(${choice.id})" id="item_quantity_${choice.id}" class="item_quantity">
                    </div>
                    <div class="Item_Total">
                        <button value="${choice.id}" onclick="Remove_From_Cart_Function(this.value)" class="Remove_From_Cart_Button">Remove</button>
                        <h2 class="Chosen_Item_Total" value="${quantity}"id="chosen_Item_Total_Price_${choice.id}">$${quantity}</h2>
                    </div>
                </div>
                </div>`;

                const SCRIPTS_OUTPUT = document.getElementById("scripts")
                console.log(changing_Item_Quantity);
                function changing_Item_Quantity(value){
                    console.log(value);
                    //Value is the id of the item that is chaning


                    // Finding the item from the shopping bag
                    var Item = added_Buying_Items.find(product => product.id === String(value)); // The id is a string so that's why i am looking for a string id instead of a number id
                    console.log(Item);
                    //Updating the Quantity of the item



















                    var changing_Item_Quantity_Price = choice.price;
                    
                    // Getting the value of the input area
                    const ITEM_QUANTITY = document.getElementById(`item_quantity_${choice.id}`).value;
                    console.log(choice.id +": "+ITEM_QUANTITY);

                    // Finding the item from the shopping bag
                    var Item = added_Buying_Items.find(product => product.id === String(choice.id)); // The id is a string so that's why i am looking for a string id instead of a number id
                    console.log(Item);
                    //Updating the Quantity of the item
                    Item.quantity = Number(ITEM_QUANTITY);
                    console.log(ITEM_QUANTITY);
                    console.log(Item);

                    // Saving the new updated array
                    sessionStorage.setItem('buying_Items', JSON.stringify(added_Buying_Items));


                    // Getting the place to update the price
                    const ITEM_UPDATING_QUANTITY = document.getElementById("chosen_Item_Total_Price_"+choice.id);
                    // Getting the original price of the item
                    var Original_price = choice.price;
                    // Calculating the new price
                    var New_Item_Quantity = Original_price*Item.quantity;
                    console.log(New_Item_Quantity);
                    // Printing the new price in to the HTML
                    ITEM_UPDATING_QUANTITY.innerHTML = `$${New_Item_Quantity}`;

                    var updating_cart_ID = choice.id;

                    console.log ("updating_cart: "+ updating_cart_ID);
                }
}



//adding the total price next to the cart
const CART_TOTAL_PRICE = document.getElementById("Shopping-cart-price");
CART_TOTAL_PRICE.innerHTML = "$" + Total_Price;

//Check Area
// Showing the Total Price
const CHECKOUT_TOTAL_PRICE = document.getElementById("checkout_Total_Price");
CHECKOUT_TOTAL_PRICE.innerHTML = "$" + Total_Price;


const RECEIPT_OUTPUT = document.getElementById("Receipt_Area");
RECEIPT_OUTPUT.style.backgroundColor = "transparent";
RECEIPT_OUTPUT.style.borderColor = "transparet";
function Check_Out(){
    const USERNAME = document.getElementById("User_Name");
    var username = String(USERNAME.value);
    console.log(username);
    const MONEY = document.getElementById("Available_Money");
    var spending_money = Number(MONEY.value);
    console.log(MONEY);
    console.log(spending_money);
    console.log(Total_Price);
    // Checking if the user have enough money
    if (spending_money < Total_Price) {
        alert ("You don't have enough money");
        return;
    } else{
        // Getting the date
        const d = new Date();
        const RECEIPT_LOGO = document.getElementById("receipt_Logo");
        const HEADER = document.getElementById("header");
        const RECEIPT_TOP_OUTPUT = document.getElementById("receipt_Top_Area");
        const RECEIPT_CHOSEN_ITEMS_OUTPUT = document.getElementById("receipt_Chosen_Items_Area");
        const RECEIPT_BOTTOM_OUTPUT = document.getElementById("receipt_Bottom_Area");
        var change = spending_money-Total_Price;
        
        // making the background of the receipt background
        RECEIPT_OUTPUT.style.backgroundColor = "white";
        
        // Removing the checkout area
        const CHECKOUT_OUTPUT = document.getElementById("cart_Total_Output");
        CHECKOUT_OUTPUT.innerHTML = ""; 

        // Making the Header Receipt
        HEADER.innerHTML = "Receipt";
        
        // Adding the logo to the receipt
        RECEIPT_LOGO.innerHTML = "Street Bites";

        // Removing the items list
        CART_ITEM_OUTPUT.innerHTML = ""
        
        // Top of the Recipt
        RECEIPT_TOP_OUTPUT.innerHTML = `
            <div class="receipt_Top">
                <h2 class="receipt_date">${d}</h2>
                <h2 class="receipt_name">User: ${username}</h2>
            </div>`

        // Middle of the Recipt

        for (let i = 0; i < added_Buying_Items.length; i++){
            console.log("Item added to the receipt");
            var buying_items = added_Buying_Items[i];
            var cart_Id = Number(buying_items.id);
            var choice = foodItems.find(product => product.id === cart_Id);
            var Item_Total = buying_items.quantity * choice.price;
            RECEIPT_CHOSEN_ITEMS_OUTPUT.innerHTML += `
                <div class="receipt_Chosen_Items">
                <div class="receipt_Chosen_Items_Info">
                    <h2 class="receipt_Chosen_Items_Name">${choice.item}</h2>
                    <h2 class="receipt_Chosen_Items_Price">$${choice.price}</h2>
                </div>
                <div class="receipt_Chosen_Items_Quantity">
                    <h2 id="receipt_Chosen_Items_Quantity_Area">${buying_items.quantity}</h2>
                </div>
                <div class="receipt_Chosen_Items_Total_Outcome">
                    <h2 id="receipt_Chosen_Items_Total_Price">$${Item_Total}</h2>
                </div>
                </div>`
        }

        // Bottom of the Recipt
        RECEIPT_BOTTOM_OUTPUT.innerHTML =`
            <div class="receipt_Bottom">
                <div class="receipt_Total_Price">
                    <h2>Total:</h2>
                    <h2>$${Total_Price}</h2>
                </div>
                <div class="receipt_Chosen_Given_Amount">
                    <h2>Given Amount :</h2>
                    <h2>$${spending_money}</h2>
                </div>
                <div class="receipt_Chosen_Change">
                    <h2>Change :</h2>
                    <h2>$${change}</h2>
                </div>
            </div>`

    }
    // Emptying the cart and turning the total price zero
    CART_TOTAL_PRICE.innerHTML = "$" + Total_Price;
    added_Buying_Items = [{}];
}

// Pressing to clear the cart and start ordering again
function Clear() {
    added_Buying_Items = [{}];
    console.log(added_Buying_Items);
    sessionStorage.setItem('buying_Items', JSON.stringify(added_Buying_Items));
    console.log(JSON.parse(sessionStorage.getItem('buying_Items')));
    CART_ITEM_OUTPUT.innerHTML = "";
    Total_Price = 0;
    CART_TOTAL_PRICE.innerHTML = "$" + Total_Price;
    CHECKOUT_TOTAL_PRICE.innerHTML = "$" + Total_Price;
}

