if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

var dbAsJson = window.localStorage.getItem("mydb");
//console.log(dbAsJson);
var db = JSON.parse(dbAsJson);
//console.log(db);

function Redirect(x) {
  window.location = "product" + x + ".html";
}

let enArray = [];

function addCartItem(ettId, namn, pris, bild, gendeer, farg, storlek, tema) {
  //enArray.push(c)
  /*enArray.push({ id: "1", theme: "Winter", color: "White" })
    enArray.push({ id: "2", theme: "Summer", color: "Green" })
    enArray.push({ id: "3", theme: "Winter", color: "Blue" })
    enArray.push({ id: "4", theme: "Winter", color: "Orange" })
    enArray.push({ id: "5", theme: "Winter", color: "Turqoise" })
    */
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

  //console.log(db.products[0])
  //console.log(enArray)
}
function ready() {
  text = "";
  for (i = 0; i < db.products.length; i++) {
    //console.log(db.products[i])
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
      ");cartTotalPrice();showCart() '>Add  to cart</button>" +
      //"<button onclick='enArray.push(" + db.products[i].theme + "," + db.products[i].theme + ")'>Add  to cart</button>"
      //"<br><br><br><br><br><br>" +

      "</div>";
  }
  document.getElementById("stuff").innerHTML = text;
}
