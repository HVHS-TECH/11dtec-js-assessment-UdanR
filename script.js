console.log("Hello world!")
// The Inventory
var foodItems = [
  { id: 101, category: 'main-dish', recommend: false ,item: 'Classic Burger', price: 12, img: 'Classic_Burger.jpeg'},
  { id: 102, category: 'main-dish', recommend: true ,item: 'BBQ Bacon Burger',  price: 15, img: 'BBQ_Bacon_Burger.jpeg'},
  { id: 103, category: 'main-dish', recommend: true ,item: 'Crispy Chicken Burger', price: 14, img: 'Crispy_Chicken_Burger.jpeg'},
  { id: 104, category: 'main-dish', recommend: true ,item: 'Loaded Fries', price: 10, img: 'Loaded_Fries.jpeg'},
  { id: 105, category: 'main-dish', recommend: false ,item: 'Hot Dog', price: 9, img: 'Hot_Dog.jpeg'},
  { id: 106, category: 'main-dish', recommend: false ,item: 'Taco Trio', price: 13, img: 'Taco_Trio.jpeg'},
  { id: 107, category: 'Sides', recommend: true ,item: 'French Fries', price: 5, img: 'French_Fries.jpeg'},
  { id: 108, category: 'Sides', recommend: false ,item: 'Curly Fries', price: 6, img: 'Curly_Fries.jpeg'},
  { id: 109, category: 'Sides', recommend: true ,item: 'Onion Rings', price: 6, img: 'Onion_Rings.jpeg'},
  { id: 110, category: 'Sides', recommend: false ,item: 'Mozzarella Sticks', price: 7, img: 'Mozzarella_Sticks.jpeg'},
  { id: 111, category: 'Sides', recommend: true ,item: 'Garlic Bread', price: 5, img: 'Garlic_Bread.jpeg'},
  { id: 112, category: 'Drinks', recommend: false ,item: 'Cola', price: 4, img: 'Cola.jpeg'},
  { id: 113, category: 'Drinks', recommend: false ,item: 'Lemonade', price: 4, img: 'Lemonade.jpeg'},
  { id: 114, category: 'Drinks', recommend: true ,item: 'Iced Coffee', price: 6, img: 'Iced_Coffee.jpeg'},
  { id: 115, category: 'Drinks', recommend: true ,item: 'Milkshake', price: 7, img: 'Milkshake.jpeg'},
  { id: 116, category: 'Drinks', recommend: false ,item: 'Fruit Smoothie', price: 4, img: 'Fruit_Smoothie.jpeg'},
  { id: 117, category: 'Desserts', recommend: false ,item: 'Brownie', price: 5, img: 'Brownie.jpeg'},
  { id: 118, category: 'Desserts', recommend: false ,item: 'Donut', price: 4, img: 'Donut.jpeg'},
  { id: 119, category: 'Desserts', recommend: true ,item: 'Churros', price: 6, img: 'Churros.jpeg'},
  { id: 120, category: 'Desserts', recommend: true ,item: 'Ice Cream Cup', price: 5, img: 'Ice_Cream_Cup.jpeg'},
  { id: 121, category: 'Desserts', recommend: false ,item: 'Cookie', price: 3, img: 'Cookie.jpeg'}
];

var choice = foodItems.find(product => product.id === 101);
console.log(choice);

var Desserts = foodItems.filter(product => product.category === 'Desserts');

console.log(Desserts);

// Recommended Food area
const RECOMMNEDED_ITEMS_OUTPUT = document.getElementById("Recommended_items_containor_output");
var Recommend = foodItems.filter(product => product.recommend === true);
console.log(Recommend);

Recommend.forEach(Recommended_print);

var reco_Item_Num = 1;
function Recommended_print(item, reco_Item_Num){
        console.log (`<div class="itme-${reco_Item_Num}">
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
                    <h2 class="item_Price_${item.id}">$ ${item.price}</h2>
                </div>
                <div class="Submit_Info">
                <input type="number" value=1 class="item_quantity_choosing" id="item_quantity_${item.id}">
                <button value=${item.id} onclick="Add_To_Cart_Function(this.value)" class="Add_To_Cart_Button">Add To Cart</button>
                </div>
            </div>`
            reco_Item_Num = reco_Item_Num +1;
}

const CHOSEN_FOOD_ITEM_OUTPUT_AREA = document.getElementById("Chosen_Food_Item_Area");
for (let i = 0; i < foodItems.length; i++ ){
    var thisitem = foodItems[i];
        console.log (`<div class="itme-${i}">
        <img src="Items_IMG/${thisitem.img}" alt="${thisitem.img}">
        <div class="item_info">
            <h2 class="item_Name">${thisitem.item}</h2>
            <h2 class="item_Price">$ ${thisitem.price}</h2>
        </div>
        <button value=${thisitem.id} onclick="Add_To_Cart_Function(this.value)" class="Add_To_Cart_Button">Add To Cart</button>
        </div>`);
        CHOSEN_FOOD_ITEM_OUTPUT_AREA.innerHTML += `<div class="_${i}">
        <img src="Items_IMG/${thisitem.img}" alt="${thisitem.img}">
        <div class="item_info">
            <h2 class="item_Name">${thisitem.item}</h2>
            <h2 class="item_Price_${thisitem.id}">$ ${thisitem.price}</h2>
        </div>
        <div class="Submit_Info">
        <input type="number" value=1 class="item_quantity_choosing" id="item_quantity_${thisitem.id}">
        <button value=${thisitem.id} onclick="Add_To_Cart_Function(this.value)" class="Add_To_Cart_Button">Add To Cart</button>
        </div>
        </div>`
            
}

// When All is pressed
function Menu_Item_Selecting_All (){
    CHOSEN_FOOD_ITEM_OUTPUT_AREA.innerHTML = "";


    for (let i = 0; i < foodItems.length; i++ ){
        var thisitem = foodItems[i];
        console.log (`<div class="itme-${i}">
        <img src="Items_IMG/${thisitem.img}" alt="${thisitem.img}">
        <div class="item_info">
            <h2 class="item_Name">${thisitem.item}</h2>
            <h2 class="item_Price">$ ${thisitem.price}</h2>
        </div>
        <button value=${thisitem.id} onclick="Add_To_Cart_Function(this.value)" class="Add_To_Cart_Button">Add To Cart</button>
        </div>`);
        CHOSEN_FOOD_ITEM_OUTPUT_AREA.innerHTML += `<div class="_${i}">
        <img src="Items_IMG/${thisitem.img}" alt="${thisitem.img}">
        <div class="item_info">
            <h2 class="item_Name">${thisitem.item}</h2>
            <h2 class="item_Price_${thisitem.id}">$ ${thisitem.price}</h2>
        </div>
        <div class="Submit_Info">
        <input type="number" value=1 class="item_quantity_choosing" id="item_quantity_${thisitem.id}">
        <button value=${thisitem.id} onclick="Add_To_Cart_Function(this.value)" class="Add_To_Cart_Button">Add To Cart</button>
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
        console.log (`<div class="itme-${Item_Class_NUM}">
        <img src="Items_IMG/${item.img}" alt="${item.img}">
        <div class="item_info">
            <h2 class="item_Name">${item.item}</h2>
            <h2 class="item_Price">$ ${item.price}</h2>
        </div>
        <button value=${item.id} onclick="Add_To_Cart_Function(this.value)" class="Add_To_Cart_Button">Add To Cart</button>
        </div>`);
        CHOSEN_FOOD_ITEM_OUTPUT_AREA.innerHTML += `<div class="_${Item_Class_NUM}">
        <img src="Items_IMG/${item.img}" alt="${item.img}">
        <div class="item_info">
            <h2 class="item_Name">${item.item}</h2>
            <h2 class="item_Price_${item.id}">$ ${item.price}</h2>
        </div>
        <div class="Submit_Info">
        <input type="number" value=1 class="item_quantity_choosing" id="item_quantity_${item.id}">
        <button value=${item.id} onclick="Add_To_Cart_Function(this.value)" class="Add_To_Cart_Button">Add To Cart</button>
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
        console.log (`<div class="itme-${Item_Class_NUM}">
        <img src="Items_IMG/${item.img}" alt="${item.img}">
        <div class="item_info">
            <h2 class="item_Name">${item.item}</h2>
            <h2 class="item_Price">$ ${item.price}</h2>
        </div>
        <button value=${item.id} onclick="Add_To_Cart_Function(this.value)" class="Add_To_Cart_Button">Add To Cart</button>
        </div>`);
        CHOSEN_FOOD_ITEM_OUTPUT_AREA.innerHTML += `<div class="_${Item_Class_NUM}">
        <img src="Items_IMG/${item.img}" alt="${item.img}">
        <div class="item_info">
            <h2 class="item_Name">${item.item}</h2>
            <h2 class="item_Price_${item.id}">$ ${item.price}</h2>
        </div>
        <div class="Submit_Info">
        <input type="number" value=1 class="item_quantity_choosing" id="item_quantity_${item.id}">
        <button value=${item.id} onclick="Add_To_Cart_Function(this.value)" class="Add_To_Cart_Button">Add To Cart</button>
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
        console.log (`<div class="itme-${Item_Class_NUM}">
        <img src="Items_IMG/${item.img}" alt="${item.img}">
        <div class="item_info">
            <h2 class="item_Name">${item.item}</h2>
            <h2 class="item_Price">$ ${item.price}</h2>
        </div>
        <button value=${item.id} onclick="Add_To_Cart_Function(this.value)" class="Add_To_Cart_Button">Add To Cart</button>
        </div>`);
        CHOSEN_FOOD_ITEM_OUTPUT_AREA.innerHTML += `<div class="_${Item_Class_NUM}">
        <img src="Items_IMG/${item.img}" alt="${item.img}">
        <div class="item_info">
            <h2 class="item_Name">${item.item}</h2>
            <h2 class="item_Price_${item.id}">$ ${item.price}</h2>
        </div>
        <div class="Submit_Info">
        <input type="number" value=1 class="item_quantity_choosing" id="item_quantity_${item.id}">
        <button value=${item.id} onclick="Add_To_Cart_Function(this.value)" class="Add_To_Cart_Button">Add To Cart</button>
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
        console.log (`<div class="itme-${Item_Class_NUM}">
        <img src="Items_IMG/${item.img}" alt="${item.img}">
        <div class="item_info">
            <h2 class="item_Name">${item.item}</h2>
            <h2 class="item_Price">$ ${item.price}</h2>
        </div>
        <button value=${item.id} onclick="Add_To_Cart_Function(this.value)" class="Add_To_Cart_Button">Add To Cart</button>
        </div>`);
        CHOSEN_FOOD_ITEM_OUTPUT_AREA.innerHTML += `<div class="_${Item_Class_NUM}">
        <img src="Items_IMG/${item.img}" alt="${item.img}">
        <div class="item_info">
            <h2 class="item_Name">${item.item}</h2>
            <h2 class="item_Price_${item.id}">$ ${item.price}</h2>
        </div>
        <div class="Submit_Info">
        <input type="number" value=1 class="item_quantity_choosing" id="item_quantity_${item.id}">
        <button value=${item.id} onclick="Add_To_Cart_Function(this.value)" class="Add_To_Cart_Button">Add To Cart</button>
        </div>
        </div>`
        Item_Class_NUM = Item_Class_NUM + 1;
    }
}


// Cart Arrays
var Shopping_Bag = [];


// Adding items to carts
function Add_To_Cart_Function (Button_ID) {
    
    const ITEM_QUANTITY = document.getElementById("item_quantity_"+Button_ID);
    const ITEM_Price = document.getElementById("item_Price_"+Button_ID);
    var Quantity = Number(ITEM_QUANTITY.value);
    var Price = Number(ITEM_Price.value);
    console.log(ITEM_QUANTITY);
    console.log(Button_ID);
    console.log(Price);
    
    Shopping_Bag.push({id: Button_ID, quantity: Quantity, item_price: Price});
    console.log(Shopping_Bag);
}

// Adding the total number next to the Shopping cart icon
var Total_Price = 0;
for (let i = 0; i < Shopping_Bag.length; i++){
    let price_adding = Shopping_Bag[i];

    Total_Price = Total_Price + (thisitem.price*thisitem.quantity)
    CART_TOTAL_PRICE.innerHTML = "$" + Total_Price;
    console.log("Total_Price = $" + Total_Price);
}
const CART_TOTAL_PRICE = document.getElementById("Shopping-cart-price");
CART_TOTAL_PRICE.innerHTML = "$" + Total_Price;