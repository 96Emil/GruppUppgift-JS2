//den väntar på att dom-objektet ska ha laddats klar innan den tar resten av funktionerna. 
if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready);
} else {
    ready();
}
//hämtar json-data och parsar den för att kunna få den som ett objekt. 
var dbAsJson = window.localStorage.getItem("mydb");
var db = JSON.parse(dbAsJson);
//länk till enskild produktsida. 
function Redirect(x) {
    window.location = "product" + x + ".html";
}
//bekräftelse på att produkt har lagts till i varukorg. 
function addMessage() {
    alert('Product added to cart')

}
//deklarerar den tom array
let enArray = [];
//pushar in den specifika produkten till enArray
function addCartItem(ettId, namn, pris, bild, gendeer, farg, storlek, tema) {

    enArray.push({
        id: ettId,
        name: namn,
        price: pris,
        image: bild,
        gender: gendeer,
        color: farg,
        size: storlek,
        theme: tema,
    });


}
//dynamiskt bygger upp html:en för varje produkt i db.products
function ready() {
    text = "";
    for (i = 0; i < db.products.length; i++) {
        text +=
            "<div class='text'>" +
            "<img class='medium-img' src=" +
            db.products[i].image +
            ">" +
            "</img>" +
            "<div class='prod-text'>" +
            "<div class='name'>" +
            "Product: " +
            db.products[i].name +
            "</div>" +
            "<div class='price'>" +
            "Price: €" +
            db.products[i].price +
            "</div>" +
            "<div class='gender'>" +
            "Gender: " +
            db.products[i].gender +
            "</div>" +
            "<div class='color'>" +
            "Color: " +
            db.products[i].color +
            "</div>" +
            "<div class='size'>" +
            "Size: " +
            db.products[i].size +
            "</div>" +
            "<div class='theme'>" +
            "Theme: " +
            db.products[i].theme +
            "</div>" +
            "<br>" +
            "</div>" +
            "</div>" +
            "<div class='buttons'>" +
            "<button onclick='Redirect(" +
            db.products[i].id +
            ")'>Details</button>" +
            "<button onclick='addCartItem(" +
            db.products[i].id +
            "," +
            JSON.stringify(db.products[i].name) +
            "," +
            db.products[i].price +
            "," +
            JSON.stringify(db.products[i].image) +
            "," +
            JSON.stringify(db.products[i].gender) +
            "," +
            JSON.stringify(db.products[i].color) +
            "," +
            JSON.stringify(db.products[i].size) +
            "," +
            JSON.stringify(db.products[i].theme) +
            ");cartTotalPrice();showCart(); addMessage(); '>Add  to cart</button>" +


            "</div>";
    }
    //skriver ut produkten till sidan
    document.getElementById("stuff").innerHTML = text;
}