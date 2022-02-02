var dbAsJson = window.localStorage.getItem("mydb");
console.log(dbAsJson);
var db = JSON.parse(dbAsJson);
console.log(db);


function Redirect2(x) {
    console.log("TEST: " + x);
    window.location = "product" + x + ".html";
    console.log(window.location);
}

//koppla en variable till ett element
var ul = document.getElementById("products-list");
//funktion för skriva ut sökresultat
function render_lists(result) {
    var li = "";
    for (index in result) {
        li +=
            "<div class='prod'>" +
            "<img class='small-img' src=" +
            db.products[index].image +
            ">" +
            "</img>" +
            "<div class='prod-text'>" +
            "<div class='name'>" +
            result[index].name +
            "</div>" +
            "<div class='price'>€" +
            result[index].price +
            "</div>" +
            "<div class='gender'>" +
            result[index].gender +
            "</div>" +
            "<div class='color'>" +
            result[index].color +
            "</div>" +
            "<div class='theme'>" +
            result[index].theme +
            "</div>" +
            "</div>" +
            "<br>" +
            "<button onmousedown='Redirect(" +
            result[index].id +
            ");'>Details</button>" +
            "</div>";
    }
    ul.innerHTML = li;
}

//kopplar variabel till sökfältselementet
var input = document.getElementById("search-product");
//funktion för att matcha en sökord mot databasen och skriva ut resultatet
function filterProd(event) {

    //variabel som kopplats till inskrivet värde. Trim = tar bort mellanslag
    var searchVal = input.value.toLowerCase().trim();

    //tom array
    var results = [];
    //for loop som tittar igenom databasen. Varje if statement matchar inskrivet värde mot ett produktattribut
    for (var i = 0; i < db.products.length; i++) {
        if (db.products[i].name.toLowerCase().trim().includes(searchVal)) {
            results.push(db.products[i]);
        }
        if (db.products[i].color.toLowerCase().trim().includes(searchVal)) {
            results.push(db.products[i]);
        }
        if (db.products[i].theme.toLowerCase().trim().includes(searchVal)) {
            results.push(db.products[i]);
        }
    }
    //alla produkter ska vara utskrivna som default. Sökningen begränsar.
    if (searchVal.length == 0) {
        results = db.products;
    }
    //säkerställer att det inte är några dubbletter i ett sökresultat
    results = [...new Set(results)];

    console.log(results);
    //skriver ut resultat på sidan
    render_lists(results);
}
//anropar filterprod varje gång jag skriver något i sökfältet
input.addEventListener("keyup", filterProd);

//visar alla produkter innan jag börjar söka.
render_lists(db.products);

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}