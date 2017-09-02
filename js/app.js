var itemDB = [{
    image: "",
    product: "Diet Air",
    description: "Lose minimum 100lbs.",
    price: 145.11

}, {
    image: "https://i.ytimg.com/vi/qzOi4CP8QQI/maxresdefault.jpg",
    product: "Fried Water",
    description: "Gain weight without even knowing it!",
    price: 69.57
}, {
    image: "https://i0.wp.com/vitalityair.com/wp-content/uploads/2016/03/VA_Air_8L_3pack-1.jpg?fit=3475%2C2780&ssl=1",
    product: "Diet Air",
    description: "Lose a minimum of 100 lbs. with Diet Air!",
    price: 1240.58
}, {
    image: "https://i.ytimg.com/vi/ub5dKi0EiX8/hqdefault.jpg",
    product: "Balloon made from Pennywise",
    description: "Wanna balloon?",
    price: 93.46
}, {
    image: "http://puppyloveblog.com/scaled/600x450/taro-the-black-labrador-puppy-and-his-sad-puppy-dog-eyes-451.jpg",
    product: "Matches",
    description: "My owner force fed me carrots. Please adopt me.",
    price: 0.01
}, {
    image: "https://www.marijuanabreak.com/wp-content/uploads/2017/02/Special-Brownies-1.jpg",
    product: "Devleague Brownies",
    description: "Bring to any pot-luck....",
    price: 9.99
}];
console.log(itemDB);
var main = document.body;

var mainDiv = document.createElement('div');
mainDiv.className = "container";
main.appendChild(mainDiv);

for (var i = 0; i < itemDB.length; i++) {

var mediaDiv = document.createElement('div');
mediaDiv.className = "media";
mainDiv.appendChild(mediaDiv);

var img = document.createElement('img');
img.className = "img";
img.src = itemDB[i].image;
mediaDiv.appendChild(img);


var ChildDiv = document.createElement('div');
ChildDiv.className = "cartItem";
mediaDiv.appendChild(ChildDiv);



var productBox = document.createElement("div");
productBox.className = "product";
productBox.textContent =itemDB[i].product;
ChildDiv.appendChild(productBox);


// var productBox = document.createElement("div");
// productBox.className = "product";
// var h1 = document.createElement("h1");
// var t = document.createTextNode("name: " + itemDB[i].product);
//  h1.appendChild(t);
// ChildDiv.appendChild(productBox);


var descriptionBox = document.createElement("div");
descriptionBox.className = "description";
descriptionBox.textContent =  itemDB[i].description;
productBox.appendChild(descriptionBox);

var priceBox = document.createElement("div");
priceBox.className = "price";
priceBox.textContent = "$" + itemDB[i].price;
ChildDiv.appendChild(priceBox);



}
console.log(Object.keys(itemDB));

var product = document.getElementsByClassName("product");
console.log(product);
for (var i = 0; i < product.length; i++) {
    product[i].addEventListener('click', doSomething, false);
}

function doSomething(e) {
    var clickedItem = this.querySelectorAll(".description")[0];
     if(clickedItem.style.display === "none"){
    clickedItem.style.display = "block";
  }else{
    clickedItem.style.display = "none";
  }
}

//  pulls out the price and dumps into an array
function getFields(input, field) {
    // Function-level strict mode syntax
  'use strict';
    var output = [];
    for (var i=0; i < input.length ; ++i)
        output.push(input[i][field]);
    return output;
}
var result = getFields(itemDB, "price");

console.log(result);


// adds array
// var sum = result.reduce((a, b) => a + b, 0); this works too
var sum = result.reduce(add, 0);
function add(a, b) {
    return a + b;
}

console.log(sum);

var subtotal = document.createElement("div");
subtotal.id ="subtotal";
subtotal.textContent = "Subtotal: ";
mediaDiv.insertAdjacentElement("afterend",subtotal);


var priceAdded = document.createElement('span');
priceAdded.id = "priceAdded";
priceAdded.innerHTML ="$" + sum;
subtotal.appendChild(priceAdded);

// step by step break down of how to add an array

// function sumArray(array) {
//   for (
//     var
//       index = 0,              // The iterator
//       length = array.length,  // Cache the array length
//       sum = 0;                // The total amount
//       index < length;         // The "for"-loop condition
//       sum += array[index++]   // Add number on each iteration
//   );
//   return sum;
// }

// var totalPrice = sumArray(result);
// console.log(totalPrice);