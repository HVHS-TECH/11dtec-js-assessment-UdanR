// The Inventory
var foodItems = [
  { id: 101, category: 'main-dish', recommend: false ,item: 'Classic Burger', price: 12, img: 'Classic_Burger.jpeg'},
  { id: 102, category: 'main-dish', recommend: true ,item: 'BBQ Bacon Burger',  price: 15, img: 'BBQ_Bacon_Burger.jpeg'},
  { id: 103, category: 'main-dish', recommend: true ,item: 'Crispy Chicken Burger', price: 14, img: 'Crispy_Chicken_Burger_1.jpg'},
  { id: 104, category: 'main-dish', recommend: true ,item: 'Loaded Fries', price: 10, img: 'Loaded_Fries.jpeg'},
  { id: 105, category: 'main-dish', recommend: false ,item: 'Hot Dog', price: 9, img: 'Hot_Dog_2.jpg'},
  { id: 106, category: 'main-dish', recommend: false ,item: 'Taco Trio', price: 13, img: 'Taco_Trio.jpeg'},
  { id: 107, category: 'main-dish', recommend: false ,item: 'Kabab', price: 15, img: 'Kabab.jpeg'},
  { id: 108, category: 'Sides', recommend: true ,item: 'French Fries', price: 5, img: 'French_Fries.jpeg'},
  { id: 109, category: 'Sides', recommend: false ,item: '5Pcs Fried Chicken', price: 15, img: 'Fried_Chicken.jpeg'},
  { id: 110, category: 'Sides', recommend: false ,item: '5Pcs Hot Honey Fried Chicken', price: 20, img: 'Hot_Honey_Fried_Chicken.jpeg'},
  { id: 111, category: 'Sides', recommend: false ,item: 'Curly Fries', price: 6, img: 'Curly_Fries.jpeg'},
  { id: 112, category: 'Sides', recommend: true ,item: 'Onion Rings', price: 6, img: 'Onion_Rings.jpeg'},
  { id: 113, category: 'Sides', recommend: false ,item: 'Mozzarella Sticks', price: 7, img: 'Mozzarella_Sticks.jpeg'},
  { id: 114, category: 'Sides', recommend: true ,item: 'Garlic Bread', price: 5, img: 'Garlic_Bread.jpeg'},
  { id: 115, category: 'Drinks', recommend: false ,item: 'Cola', price: 4, img: 'Cola.jpeg'},
  { id: 116, category: 'Drinks', recommend: false ,item: 'Lemonade', price: 4, img: 'Lemonade.jpeg'},
  { id: 117, category: 'Drinks', recommend: true ,item: 'Iced Coffee', price: 4, img: 'Iced_Coffee.jpeg'},
  { id: 118, category: 'Drinks', recommend: true ,item: 'Hot Coffee', price: 3, img: 'Coffee.jpeg'},
  { id: 119, category: 'Drinks', recommend: false ,item: 'Milkshake', price: 7, img: 'Milkshake.jpeg'},
  { id: 120, category: 'Drinks', recommend: false ,item: 'Fruit Smoothie', price: 4, img: 'Fruit_Smoothie.jpeg'},
  { id: 121, category: 'Drinks', recommend: false ,item: 'Slushy', price: 4, img: 'Slushy.jpeg'},
  { id: 122, category: 'Desserts', recommend: false ,item: 'Brownie', price: 5, img: 'Brownie.jpeg'},
  { id: 123, category: 'Desserts', recommend: false ,item: 'Donut', price: 4, img: 'Donut.jpeg'},
  { id: 124, category: 'Desserts', recommend: true ,item: 'Churros', price: 6, img: 'Churros.jpeg'},
  { id: 125, category: 'Desserts', recommend: true ,item: 'Ice Cream Cup', price: 5, img: 'Ice_Cream_Cup.jpeg'},
  { id: 126, category: 'Desserts', recommend: false ,item: 'Strawberry Short Cake', price: 12, img: 'Strawberry_Short_Cake.jpeg'},
  { id: 127, category: 'Desserts', recommend: false ,item: 'Cake Roll', price: 12, img: 'Cake_Roll.jpeg'},
  { id: 128, category: 'Desserts', recommend: false ,item: 'Blueberry Cheese Cake', price: 14, img: 'Blueberry_Cake.jpeg'},
  { id: 129, category: 'Desserts', recommend: false ,item: 'Chocolate Mousse', price: 12, img: 'Chocolate_Mousse.jpeg'},
  { id: 130, category: 'Desserts', recommend: false ,item: 'Fruit Salad Cup', price: 10, img: 'Fruit_Salad_Cup.jpeg'},
  { id: 131, category: 'Desserts', recommend: false ,item: 'Cookie', price: 3, img: 'Cookie.jpeg'}
];

//------------------------------------------------------------------------------------------------------------//

// Saving the Inventory
sessionStorage.setItem('Inventory', JSON.stringify(foodItems));

var choice = foodItems.find(product => product.id === 101);

var Desserts = foodItems.filter(product => product.category === 'Desserts');

//------------------------------------------------------------------------------------------------------------//

// Recommended Food area
const RECOMMNEDED_ITEMS_OUTPUT = document.getElementById("Recommended_items_containor_output");
var Recommend = foodItems.filter(product => product.recommend === true);

//------------------------------------------------------------------------------------------------------------//

// Run the code below if recommended items needed
//Recommend.forEach(Recommended_print);

//------------------------------------------------------------------------------------------------------------//

//----------------
var reco_Item_Num = 1;
const CHOSEN_FOOD_ITEM_OUTPUT_AREA = document.getElementById("Chosen_Food_Item_Area");
for (let i = 0; i < foodItems.length; i++ ){
    var thisitem = foodItems[i];
        console.log ("not recommended");
        CHOSEN_FOOD_ITEM_OUTPUT_AREA.innerHTML += `<div class="_${i}">
            <img src="Items_IMG/${thisitem.img}" alt="${thisitem.img}">
            <div class="item_info">
                <h2 class="item_Name">${thisitem.item}</h2>
            <div class="item_Price_NumberinCart">
                <h2 class="item_Price" id="item_Price_${thisitem.id}">$ ${thisitem.price}</h2>
                <h2 class="item_NumberInCart" id="item_NumberInCart_${thisitem.id}">0</h2>
            </div>
        </div>
        <div class="Submit_Info">
            <input type="number" min="1" max="100" oninput="number_Cramping(${thisitem.id})" value=1 class="item_quantity_choosing" id="item_quantity_${thisitem.id}">
            <button value=${thisitem.id} onclick="Add_To_Cart_Function(this.value)" class="Add_To_Cart_Button" id="Add_To_Cart_Button_${thisitem.id}">Add To Cart</button>
        </div>
        </div>`        
}

// When All is pressed
function Menu_Item_Selecting_All (){
    CHOSEN_FOOD_ITEM_OUTPUT_AREA.innerHTML = "";

    for (let i = 0; i < foodItems.length; i++ ){
        var thisitem = foodItems[i];
                CHOSEN_FOOD_ITEM_OUTPUT_AREA.innerHTML += `<div class="_${i}">
        <img src="Items_IMG/${thisitem.img}" alt="${thisitem.img}">
        <div class="item_info">
            <h2 class="item_Name">${thisitem.item}</h2>
            <div class="item_Price_NumberinCart">
            <h2 class="item_Price" id="item_Price_${thisitem.id}">$ ${thisitem.price}</h2>
            <h2 class="item_NumberInCart" id="item_NumberInCart_${thisitem.id}">0</h2>
            </div>
        </div>
        <div class="Submit_Info">
        <input type="number" min="1" max="100" oninput="number_Cramping(${thisitem.id})" value=1 class="item_quantity_choosing" id="item_quantity_${thisitem.id}">
        <button value=${thisitem.id} onclick="Add_To_Cart_Function(this.value)" class="Add_To_Cart_Button" id="Add_To_Cart_Button_${thisitem.id}">Add To Cart</button>
        </div>
        </div>`

            
}
}

// When Main Dishes is pressed
function Menu_Item_Selecting_Main_Dishes (){
    CHOSEN_FOOD_ITEM_OUTPUT_AREA.innerHTML = "";

    var MainDish = foodItems.filter(product => product.category === 'main-dish');
    MainDish.forEach(MainDish_Print);

    var Item_Class_NUM = 0;
    function MainDish_Print(item, Item_Class_NUM){
                CHOSEN_FOOD_ITEM_OUTPUT_AREA.innerHTML += `<div class="_${Item_Class_NUM}">
        <img src="Items_IMG/${item.img}" alt="${item.img}">
        <div class="item_info">
            <h2 class="item_Name">${item.item}</h2>
            <div class="item_Price_NumberinCart">
            <h2 class="item_Price" id="item_Price_${item.id}">$ ${item.price}</h2>
            <h2 class="item_NumberInCart" id="item_NumberInCart_${item.id}">0</h2>
            </div>
        </div>
        <div class="Submit_Info">
        <input type="number" min="1" max="100" oninput="number_Cramping(${item.id})" value=1 class="item_quantity_choosing" id="item_quantity_${item.id}">
        <button value=${item.id} onclick="Add_To_Cart_Function(this.value)" class="Add_To_Cart_Button" id="Add_To_Cart_Button_${item.id}">Add To Cart</button>
        </div>
        </div>` 

        Item_Class_NUM = Item_Class_NUM + 1;
    }
}

// When Sides is pressed
function Menu_Item_Selecting_Sides (){
    CHOSEN_FOOD_ITEM_OUTPUT_AREA.innerHTML = "";

    var MainDish = foodItems.filter(product => product.category === 'Sides');
    MainDish.forEach(MainDish_Print);
    var Item_Class_NUM = 0;
    function MainDish_Print(item, Item_Class_NUM){
        CHOSEN_FOOD_ITEM_OUTPUT_AREA.innerHTML += `<div class="_${Item_Class_NUM}">
        <img src="Items_IMG/${item.img}" alt="${item.img}">
        <div class="item_info">
            <h2 class="item_Name">${item.item}</h2>
            <div class="item_Price_NumberinCart">
            <h2 class="item_Price" id="item_Price_${item.id}">$ ${item.price}</h2>
            <h2 class="item_NumberInCart" id="item_NumberInCart_${item.id}">0</h2>
            </div>
        </div>
        <div class="Submit_Info">
        <input type="number" min="1" max="100" oninput="number_Cramping(${item.id})" value=1 class="item_quantity_choosing" id="item_quantity_${item.id}">
        <button value=${item.id} onclick="Add_To_Cart_Function(this.value)" class="Add_To_Cart_Button" id="Add_To_Cart_Button_${item.id}">Add To Cart</button>
        </div>
        </div>`

        Item_Class_NUM = Item_Class_NUM + 1;
    }
}

// When Drinks is pressed
function Menu_Item_Selecting_Drinks (){
    CHOSEN_FOOD_ITEM_OUTPUT_AREA.innerHTML = "";

    var MainDish = foodItems.filter(product => product.category === 'Drinks');
    MainDish.forEach(MainDish_Print);
    var Item_Class_NUM = 0;
    function MainDish_Print(item, Item_Class_NUM){
        CHOSEN_FOOD_ITEM_OUTPUT_AREA.innerHTML += `<div class="_${Item_Class_NUM}">
        <img src="Items_IMG/${item.img}" alt="${item.img}">
        <div class="item_info">
            <h2 class="item_Name">${item.item}</h2>
            <div class="item_Price_NumberinCart">
            <h2 class="item_Price" id="item_Price_${item.id}">$ ${item.price}</h2>
            <h2 class="item_NumberInCart" id="item_NumberInCart_${item.id}">0</h2>
            </div>
        </div>
        <div class="Submit_Info">
        <input type="number" min="1" max="100" oninput="number_Cramping(${item.id})" value=1 class="item_quantity_choosing" id="item_quantity_${item.id}">
        <button value=${item.id} onclick="Add_To_Cart_Function(this.value)" class="Add_To_Cart_Button" id="Add_To_Cart_Button_${item.id}">Add To Cart</button>
        </div>
        </div>`

        Item_Class_NUM = Item_Class_NUM + 1;
    }
}

// When Desserts is pressed
function Menu_Item_Selecting_Desserts (){
    CHOSEN_FOOD_ITEM_OUTPUT_AREA.innerHTML = "";

    var MainDish = foodItems.filter(product => product.category === 'Desserts');
    MainDish.forEach(MainDish_Print);
    var Item_Class_NUM = 0;
    function MainDish_Print(item, Item_Class_NUM){
        CHOSEN_FOOD_ITEM_OUTPUT_AREA.innerHTML += `<div class="_${Item_Class_NUM}">
        <img src="Items_IMG/${item.img}" alt="${item.img}">
        <div class="item_info">
            <h2 class="item_Name">${item.item}</h2>
            <div class="item_Price_NumberinCart">
            <h2 class="item_Price" id="item_Price_${item.id}">$ ${item.price}</h2>
            <h2 class="item_NumberInCart" id="item_NumberInCart_${item.id}">0</h2>
            </div>
        </div>
        <div class="Submit_Info">
        <input type="number" min="1" max="100" oninput="number_Cramping(${item.id})" value=1 class="item_quantity_choosing" id="item_quantity_${item.id}">
        <button value=${item.id} onclick="Add_To_Cart_Function(this.value)" class="Add_To_Cart_Button" id="Add_To_Cart_Button_${item.id}">Add To Cart</button>
        </div>
        </div>`

        Item_Class_NUM = Item_Class_NUM + 1;
    }
}

const MAXIMUM_ORDERING_NUM = 100;
// When a number is bigger than 100 it is converted into a 100
function number_Cramping(value) {
    //Getting the inputbox
    const ITEM_QUENTITY_NUM_CRAMPING = document.getElementById("item_quantity_"+value);

    //Finding the item in the shopping bag
    var item_Quantity_Num_Check = Shopping_Bag.find(product => product.id === String(value));
    console.log(item_Quantity_Num_Check);

    // Checking if their is such a item added to the cart
    if (item_Quantity_Num_Check === undefined){
        console.log("not being added to the cart yet");

        // If they try to add more than 100 they will get an alert
        if (ITEM_QUENTITY_NUM_CRAMPING.value > MAXIMUM_ORDERING_NUM){
            alert("The maximum amount you can order for each is 100 itmes");
        }

        // If it's a new item the max is 100
        const ITEM_NUM_CRAMPING = Math.min(ITEM_QUENTITY_NUM_CRAMPING.value, 100);
        //Printing the value
        document.getElementById("item_quantity_"+value).value = ITEM_NUM_CRAMPING;

    } else {
        console.log("Has being added to the car");

        // If they try to add more than 100 they will get an alert
        if (ITEM_QUENTITY_NUM_CRAMPING.value > MAXIMUM_ORDERING_NUM - item_Quantity_Num_Check.quantity){
            alert("The maximum amount you can order for each is 100 itmes")
        }

        // If it has been already added the max it made to be totaled to a 100
        var item_Clamping_Num_Calc = MAXIMUM_ORDERING_NUM - item_Quantity_Num_Check.quantity;
        const ITEM_NUM_CRAMPING = Math.min(ITEM_QUENTITY_NUM_CRAMPING.value, item_Clamping_Num_Calc);
        //Printing value
        document.getElementById("item_quantity_"+value).value = ITEM_NUM_CRAMPING;
    }

}


// Cart Arrays
    var shopping_Bag_Check = (JSON.parse(sessionStorage.getItem('buying_Items')));
    if (shopping_Bag_Check === null) {
        console.log ("shopping_Bag_Check is null");
        console.log (shopping_Bag_Check);
        var Shopping_Bag = [];
    } else {
        console.log ("shopping_Bag_Check is not null");
        console.log (shopping_Bag_Check);
        var Shopping_Bag = shopping_Bag_Check;
        console.log(Shopping_Bag);
    }



// if their is a saved total price use it otherwise it is 0
var Total_Price = 0;
const CART_TOTAL_PRICE = document.getElementById("Shopping-cart-price");

var toal_price_check = (JSON.parse(sessionStorage.getItem('Total_price')));
if (toal_price_check === null){
    console.log ("toal_price_check is null");
    var total_Price_Check_Results = 0;
} else{
    Total_Price = Number(toal_price_check);
    CART_TOTAL_PRICE.innerHTML = "$" + Total_Price;
    var total_Price_Check_Results = Total_Price;
}


// Adding items to carts
function Add_To_Cart_Function (Button_ID) {
    // Item ID
    console.log(Button_ID); 

    // Getting Item Quantity
    const ITEM_QUANTITY = document.getElementById("item_quantity_"+Button_ID);

    // Rounding numbers
    var item_quantity_clean = Math.round(Number(ITEM_QUANTITY.value));
    var Quantity = Number(item_quantity_clean);
    console.log(ITEM_QUANTITY);

    document.getElementById("item_quantity_"+Button_ID).value = Quantity;
    // Checking if the item has be added to the cart before
    var excitingItem = Shopping_Bag.find(product => product.id === Button_ID);
    console.log(excitingItem);


    if (excitingItem){
        // Restrict the user from adding more than 100 of the same item to the cart
        if (excitingItem.quantity === MAXIMUM_ORDERING_NUM){
            alert("The maximum amount you can order for each is 100 itmes");
        return;
        }
        // If the number in the cart and the inputing number is bigger than 100 it gives an alert
        let item_Under_Max = Quantity + excitingItem.quantity
        if (item_Under_Max > MAXIMUM_ORDERING_NUM){
            alert("The maximum amount you can order for each is 100 itmes");
            return;
        }
    }


    // If the item excits in the cart it just adds the number to the quantity otherwsie make a new object
    if (excitingItem){
        excitingItem.quantity += Quantity;

    } else {
        Shopping_Bag.push({id: Button_ID, quantity: Quantity});
    }

    console.log(Shopping_Bag);

    const ADD_TO_CART_BUTTON = document.getElementById("Add_To_Cart_Button_"+Button_ID);
    ADD_TO_CART_BUTTON.style.backgroundColor = "rgb(154, 235, 32)";
    ADD_TO_CART_BUTTON.innerHTML = "Done";
    var originalColor = "rgb(214,40,40)";
    var originalText = "Add To Cart";

    setTimeout(() => {
        ADD_TO_CART_BUTTON.style.backgroundColor = originalColor;
        ADD_TO_CART_BUTTON.innerHTML = originalText;
    }, 1000); 

    // Made the total price 0
        Total_Price = 0;
    
// Adding the total number next to the Shopping cart icon
for (let i = 0; i < Shopping_Bag.length; i++){

    // Getting the things in the array
    let price_adding_item_object = Shopping_Bag[i];
    console.log(price_adding_item_object);

    //Getting the ID
    let price_adding_item_id = Number(price_adding_item_object.id)
    console.log(price_adding_item_id);

    //Finding the item from the inventory using the ID
    var choice = foodItems.find(product => product.id === price_adding_item_id);
    console.log(choice);

    // Adding the price
    Total_Price = Total_Price + (choice.price*price_adding_item_object.quantity)
    CART_TOTAL_PRICE.innerHTML = "$" + Total_Price;
    console.log("Total_Price = $" + Total_Price);


    const AMOUNT_IN_CART_OUTPUT = document.getElementById("item_NumberInCart_"+price_adding_item_id);
    if (AMOUNT_IN_CART_OUTPUT) {
        AMOUNT_IN_CART_OUTPUT.innerText = price_adding_item_object.quantity;
    }

    // Converting the Shopping_Bag Var to a string and storing it in a seesionStorgae
    sessionStorage.setItem('buying_Items', JSON.stringify(Shopping_Bag));
    console.log(JSON.parse(sessionStorage.getItem('buying_Items')));
}
}


// Adding amount of a item is in the cart
    for (let i = 0; i < Shopping_Bag.length; i++){
    let amount_In_Cart = Shopping_Bag[i];
    let amount_In_Card_ID = Number(amount_In_Cart.id);
    const AMOUNT_IN_CART_OUTPUT = document.getElementById("item_NumberInCart_"+amount_In_Cart.id);
    AMOUNT_IN_CART_OUTPUT.innerText = amount_In_Cart.quantity;
}






