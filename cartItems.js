//skriver ut alla värden från enArray
function purchaseItems() {
    //tömmer arrayen och visar totala priset 
    enArray = [];
    showCart();
    cartTotalPrice();
    alert("Thank you for your purchase!");
}
//en funktion som visar totala priset
function cartTotalPrice() {
    text1 = 0;
    for (i = 0; i < enArray.length; i++) {
        text1 += enArray[i].price;
    }
    document.getElementById("cart-total-price").innerHTML = text1;
}
//tar bort en produkt
function removeCartItem(u) {
    enArray.splice(u, 1);
}
//skriver ut alla värden från enArray
function showCart() {
    text = "";
    for (i = 0; i < enArray.length; i++) {
        text +=
            "<div class='text'>" +
            "<img class='medium-img' src=" +
            enArray[i].image +
            ">" +
            "</img>" +
            "<div class='prod-text'>" +
            "<div class='name'>" +
            "Product: " +
            enArray[i].name +
            "</div>" +
            "<div class='price'>" +
            "Price: €" +
            enArray[i].price +
            "</div>" +
            "<div class='gender'>" +
            "Gender: " +
            enArray[i].gender +
            "</div>" +
            "<div class='color'>" +
            "Color: " +
            enArray[i].color +
            "</div>" +
            "<div class='size'>" +
            "Size: " +
            enArray[i].size +
            "</div>" +
            "<div class='theme'>" +
            "Theme: " +
            enArray[i].theme +
            "</div>" +
            "<br>" +
            "</div>" +
            "</div>" +
            "<div class='removeButton' >" +
            "<button class='remove-cart-item' onclick='removeCartItem(" +
            i +
            ");showCart();cartTotalPrice()'>Remove item</button>" +
            "</div>" +
            "</div>";
    }
    document.getElementById("shopping-cart").innerHTML = text;
}