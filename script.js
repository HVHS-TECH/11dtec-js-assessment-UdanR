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
  { id: 117, category: 'Drinks', recommend: true ,item: 'Iced Coffee', price: 6, img: 'Iced_Coffee.jpeg'},
  { id: 118, category: 'Drinks', recommend: true ,item: 'Hot Coffee', price: 6, img: 'Coffee.jpeg'},
  { id: 119, category: 'Drinks', recommend: true ,item: 'Milkshake', price: 7, img: 'Milkshake.jpeg'},
  { id: 120, category: 'Drinks', recommend: false ,item: 'Fruit Smoothie', price: 4, img: 'Fruit_Smoothie.jpeg'},
  { id: 121, category: 'Drinks', recommend: false ,item: 'Slushy', price: 4, img: 'Slushy.jpeg'},
  { id: 122, category: 'Desserts', recommend: false ,item: 'Brownie', price: 5, img: 'Brownie.jpeg'},
  { id: 123, category: 'Desserts', recommend: false ,item: 'Donut', price: 4, img: 'Donut.jpeg'},
  { id: 124, category: 'Desserts', recommend: true ,item: 'Churros', price: 6, img: 'Churros.jpeg'},
  { id: 125, category: 'Desserts', recommend: true ,item: 'Ice Cream Cup', price: 5, img: 'Ice_Cream_Cup.jpeg'},
  { id: 126, category: 'Desserts', recommend: false ,item: 'Strawberry Short Cake', price: 12, img: 'Strawberry_Short_Cake.jpeg'},
  { id: 127, category: 'Desserts', recommend: false ,item: 'Cake Roll', price: 12, img: 'Cake_Roll.jpeg'},
  { id: 128, category: 'Desserts', recommend: false ,item: 'Blueberry Cake', price: 14, img: 'Blueberry_Cake.jpeg'},
  { id: 129, category: 'Desserts', recommend: false ,item: 'Chocolate Mousse', price: 12, img: 'Chocolate_Mousse.jpeg'},
  { id: 130, category: 'Desserts', recommend: false ,item: 'Fruit Salad Cup', price: 10, img: 'Fruit_Salad_Cup.jpeg'},
  { id: 131, category: 'Desserts', recommend: false ,item: 'Cookie', price: 3, img: 'Cookie.jpeg'}
];

sessionStorage.setItem('Inventory', JSON.stringify(foodItems));

var choice = foodItems.find(product => product.id === 101);

var Desserts = foodItems.filter(product => product.category === 'Desserts');


// Recommended Food area
const RECOMMNEDED_ITEMS_OUTPUT = document.getElementById("Recommended_items_containor_output");
var Recommend = foodItems.filter(product => product.recommend === true);

Recommend.forEach(Recommended_print);

var reco_Item_Num = 1;
function Recommended_print(item, reco_Item_Num){
    RECOMMNEDED_ITEMS_OUTPUT.innerHTML += `<div class="_${reco_Item_Num}">
                <img src="Items_IMG/${item.img}" alt="${item.img}">
                <div class="item_info">
                    <h2 class="item_Name">${item.item}</h2>
                    <h2 class="item_Price" id="item_Price_${item.id}">$ ${item.price}</h2>
                </div>
                <div class="Submit_Info">
                <input type="number" min="1" max="100"  value=1 class="item_quantity_choosing" id="item_quantity_${item.id}">
                <button value=${item.id} onclick="Add_To_Cart_Function(this.value)" class="Add_To_Cart_Button" id="Add_To_Cart_Button_${item.id}">Add To Cart</button>
                </div>
            </div>`
            reco_Item_Num = reco_Item_Num +1;
}

const CHOSEN_FOOD_ITEM_OUTPUT_AREA = document.getElementById("Chosen_Food_Item_Area");
for (let i = 0; i < foodItems.length; i++ ){
    var thisitem = foodItems[i];
        CHOSEN_FOOD_ITEM_OUTPUT_AREA.innerHTML += `<div class="_${i}">
        <img src="Items_IMG/${thisitem.img}" alt="${thisitem.img}">
        <div class="item_info">
            <h2 class="item_Name">${thisitem.item}</h2>
            <h2 class="item_Price" id="item_Price_${thisitem.id}">$ ${thisitem.price}</h2>
        </div>
        <div class="Submit_Info">
        <input type="number" min="1" max="100"  value=1 class="item_quantity_choosing" id="item_quantity_${thisitem.id}">
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
            <h2 class="item_Price" id="item_Price_${thisitem.id}">$ ${thisitem.price}</h2>
        </div>
        <div class="Submit_Info">
        <input type="number" min="1" max="100"  value=1 class="item_quantity_choosing" id="item_quantity_${thisitem.id}">
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
            <h2 class="item_Price" id="item_Price_${item.id}">$ ${item.price}</h2>
        </div>
        <div class="Submit_Info">
        <input type="number" min="1" max="100"  value=1 class="item_quantity_choosing" id="item_quantity_${item.id}">
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
            <h2 class="item_Price" id="item_Price_${item.id}">$ ${item.price}</h2>
        </div>
        <div class="Submit_Info">
        <input type="number" min="1" max="100"  value=1 class="item_quantity_choosing" id="item_quantity_${item.id}">
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
            <h2 class="item_Price" id="item_Price_${item.id}">$ ${item.price}</h2>
        </div>
        <div class="Submit_Info">
        <input type="number" min="1" max="100"  value=1 class="item_quantity_choosing" id="item_quantity_${item.id}">
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
            <h2 class="item_Price" id="item_Price_${item.id}">$ ${item.price}</h2>
        </div>
        <div class="Submit_Info">
        <input type="number" min="1" max="100"  value=1 class="item_quantity_choosing" id="item_quantity_${item.id}">
        <button value=${item.id} onclick="Add_To_Cart_Function(this.value)" class="Add_To_Cart_Button" id="Add_To_Cart_Button_${item.id}">Add To Cart</button>
        </div>
        </div>`
        Item_Class_NUM = Item_Class_NUM + 1;
    }
}


// Cart Arrays
var Shopping_Bag = [];

// if their is a saved total price use it otherwise it is 0
var Total_Price = 0;
const CART_TOTAL_PRICE = document.getElementById("Shopping-cart-price");

var toal_price_check = (JSON.parse(sessionStorage.getItem('Total_price')));
if (toal_price_check === null){
    console.log ("toal_price_check is null");
} else{
    Total_Price = Number(toal_price_check);
    CART_TOTAL_PRICE.innerHTML = "$" + Total_Price;
}


// Adding items to carts
function Add_To_Cart_Function (Button_ID) {
    // Item ID
    console.log(Button_ID); 

    // Getting Item Quantity
    const ITEM_QUANTITY = document.getElementById("item_quantity_"+Button_ID);
    var Quantity = Number(ITEM_QUANTITY.value);
    console.log(ITEM_QUANTITY);

    // Checking if the item has be added to the cart before
    var excitingItem = Shopping_Bag.find(product => product.id === Button_ID);
    console.log(excitingItem);

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

    
    Total_Price = Total_Price + (choice.price*price_adding_item_object.quantity)
    CART_TOTAL_PRICE.innerHTML = "$" + Total_Price;
    console.log("Total_Price = $" + Total_Price);

    // Converting the Shopping_Bag Var to a string and storing it in a seesionStorgae
    sessionStorage.setItem('buying_Items', JSON.stringify(Shopping_Bag));
    console.log(JSON.parse(sessionStorage.getItem('buying_Items')));
}
}


