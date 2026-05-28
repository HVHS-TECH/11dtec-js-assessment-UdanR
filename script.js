console.log("Hello world!")
// The Inventory
var foodItems = [
  { id: 101, category: 'main-dish', recommend: false ,item: 'Classic Burger', price: 12, img: 'Classic_Burger.png'},
  { id: 102, category: 'main-dish', recommend: true ,item: 'BBQ Bacon Burger',  price: 15, img: 'BBQ_Bacon_Burger.png'},
  { id: 103, category: 'main-dish', recommend: true ,item: 'Crispy Chicken Burger', price: 14, img: 'Crispy_Chicken_Burger.png'},
  { id: 104, category: 'main-dish', recommend: true ,item: 'Loaded Fries', price: 10, img: 'Loaded_Fries.png'},
  { id: 105, category: 'main-dish', recommend: false ,item: 'Hot Dog', price: 9, img: 'Hot_Dog.png'},
  { id: 106, category: 'main-dish', recommend: false ,item: 'Taco Trio', price: 13, img: 'Taco_Trio.png'},
  { id: 107, category: 'Sides', recommend: true ,item: 'French Fries', price: 5, img: 'French_Fries.png'},
  { id: 108, category: 'Sides', recommend: false ,item: 'Curly Fries', price: 6, img: 'Curly_Fries.png'},
  { id: 109, category: 'Sides', recommend: true ,item: 'Onion Rings', price: 6, img: 'Onion_Rings.png'},
  { id: 110, category: 'Sides', recommend: false ,item: 'Mozzarella Sticks', price: 7, img: 'Mozzarella_Sticks.png'},
  { id: 111, category: 'Sides', recommend: true ,item: 'Garlic Bread', price: 5, img: 'Garlic_Bread.png'},
  { id: 112, category: 'Drinks', recommend: false ,item: 'Cola', price: 4, img: 'Cola.png'},
  { id: 113, category: 'Drinks', recommend: false ,item: 'Lemonade', price: 4, img: 'Lemonade.png'},
  { id: 114, category: 'Drinks', recommend: true ,item: 'Iced Coffee', price: 6, img: 'Iced_Coffee.png'},
  { id: 115, category: 'Drinks', recommend: true ,item: 'Milkshake', price: 7, img: 'Milkshake.png'},
  { id: 116, category: 'Drinks', recommend: false ,item: 'Fruit Smoothie', price: 4, img: 'Fruit_Smoothie.png'},
  { id: 117, category: 'Desserts', recommend: false ,item: 'Brownie', price: 5, img: 'Brownie.png'},
  { id: 118, category: 'Desserts', recommend: false ,item: 'Donut', price: 4, img: 'Donut.png'},
  { id: 119, category: 'Desserts', recommend: true ,item: 'Churros', price: 6, img: 'Churros.png'},
  { id: 120, category: 'Desserts', recommend: true ,item: 'Ice Cream Cup', price: 5, img: 'Ice_Cream_Cup.png'},
  { id: 121, category: 'Desserts', recommend: false ,item: 'Cookie', price: 3, img: 'Cookie.png'}
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
        console.log (`<div class="_${reco_Item_Num}">
                <img src="Images/${item.img}" alt="${item.img}">
                <div class="item_info">
                    <h2 class="item_Name">${item.item}</h2>
                    <h2 class="item_Price">${item.price}</h2>
                </div>
                <button value=${item.id} onclick="Adding price to kart" class=" Add_To_Cart_Button">Add To Cart</button>
            </div>`);
    RECOMMNEDED_ITEMS_OUTPUT.innerHTML += `<div class="_${reco_Item_Num}">
                <img src="Images/${item.img}" alt="${item.img}">
                <div class="item_info">
                    <h2 class="item_Name">${item.item}</h2>
                    <h2 class="item_Price">${item.price}</h2>
                </div>
                <button value=${item.id} onclick="Adding price to kart" class=" Add_To_Cart_Button">Add To Cart</button>
            </div>`
            reco_Item_Num = reco_Item_Num + 1;
}



// Cart Array
var Shopping_Bag = [];

// Adding items to carts
function Add_To_Cart_Function (Button_ID) {
    console.log(Button_ID);
    Shopping_Bag.push (Button_ID);
}

// Adding the total number next to the Shopping cart icon
const CART_TOTAL_PRICE = document.getElementById("Shopping-cart-price");
CART_TOTAL_PRICE.innerHTML = "$ " + Total_Price;