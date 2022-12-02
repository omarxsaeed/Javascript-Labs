/*********************************************** TASK 1 ***********************************************/
// var submitBtn = document.querySelector(".submit-btn");

// submitBtn.addEventListener("click", function(e){
//     e.preventDefault();
//     var userMail = document.querySelector("#email").value;
//     // console.log(userMail);
//     var userPassword = document.querySelector("#password").value;
//     // console.log(userPassword);

//     localStorage.setItem("email", JSON.stringify(userMail));
//     localStorage.setItem("password", JSON.stringify(userPassword));

//     document.cookie = "mail=" + userMail + ";password=" + userPassword + "expires=Thu, 18 Dec 2023 12:00:00 UTC";
//     document.cookie = "mail=; expires=Thu, 18 Dec 2013 12:00:00 UTC";
// });


/*********************************************** TASK 2 ***********************************************/

var productsHttpRequest = new XMLHttpRequest();
productsHttpRequest.open("GET", "https://dummyjson.com/products");
productsHttpRequest.send();
productsHttpRequest.onreadystatechange = function () {
    if (productsHttpRequest.readyState === XMLHttpRequest.DONE && productsHttpRequest.status === 200) {
        var products = JSON.parse(productsHttpRequest.responseText).products;
        // console.log(products);
        var productsContainer = document.querySelector(".products-container");
        if (productsContainer){
            for(var i = 0; i < products.length; i++) {
                // var product = JSON.stringify(products[i]);
                // console.log(products[i]);
                makeProduct(products[i], productsContainer);
            }
        }
    } else {
        console.log("There was a problem with the request.");
    }
};

function makeProduct(product, container){
    var newDiv = document.createElement("div");
    var productTitle = document.createElement("h2");
    var productThumbnail = document.createElement("img");
    var productDescription = document.createElement("p");
    var priceContainer = document.createElement("div");
    var productPrice = document.createElement("h3");
    var productDiscountPercentage = document.createElement("span");
    // var productRating = document.createElement("p");
        // var productStock = document.createElement("p");
    var productBrand = document.createElement("h5");
    // var productCategory = document.createElement("h4");
    var addToCartBtn = document.createElement("button");

    productTitle.innerText = product.title;
    productThumbnail.src = product.thumbnail;
    productDescription.innerText = product.description;
    productPrice.innerText = "$" + product.price;
    productDiscountPercentage.innerText = "-" + product.discountPercentage + "%";
    // productRating.innerText = product.rating;
        // productk.innerText = product.stock;
    productBrand.innerText = product.brand;
    // productCategory.innerText = product.category;
    
    addToCartBtn.innerText = "Add to cart";

    addToCartBtn.addEventListener("click", function() {
        console.log("clicked on", product.id)
        var cart = JSON.parse(localStorage.getItem("cart"))||[];
        cart.push(product);
        localStorage.setItem("cart", JSON.stringify(cart));
        alert("Item added to cart!");
    });


    newDiv.appendChild(productThumbnail);
    newDiv.appendChild(productTitle);
    newDiv.appendChild(productBrand);
    newDiv.appendChild(productDescription);
    priceContainer.appendChild(productPrice);
    priceContainer.appendChild(productDiscountPercentage);
    priceContainer.classList.add("price");
    newDiv.appendChild(priceContainer);
    // newDiv.appendChild(productRating);
        // newDiv.appendChild(productStock);
    // newDiv.appendChild(productCategory);
    newDiv.appendChild(addToCartBtn);
    newDiv.classList.add("card");
    container.appendChild(newDiv);
}

// function addToCart(product) {
//     console.log("clicked on", product.id)
//     var cart = JSON.parse(localStorage.getItem("cart"))||[];
//     cart.push(product);
//     localStorage.setItem("cart", JSON.stringify(cart));
// }

/*********************************************** TASK 3 ***********************************************/

// todoHttpRequest = new XMLHttpRequest();
// todoHttpRequest.open('GET', 'https://jsonplaceholder.typicode.com/todos');
// todoHttpRequest.send();

// todoHttpRequest.onreadystatechange = function(){
//     if(todoHttpRequest.readyState === XMLHttpRequest.DONE && todoHttpRequest.status === 200){
//         var todos = JSON.parse(todoHttpRequest.responseText);
//         todos.forEach(todo => {
//             if(todo.completed == true){
//                 var todoListContainer = document.querySelector(".todo-list-container");
//                 todolist = document.createElement("ul");
//                 todoListItem = document.createElement("li");

//                 todoListItem.innerText = todo.title;

//                 todolist.appendChild(todoListItem);
//                 todoListContainer.appendChild(todolist);

//                 document.body.appendChild(todoListContainer);
//             }
//         });
//         // console.log(todos);
//     }
// }