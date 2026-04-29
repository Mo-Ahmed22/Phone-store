var searchInput = document.getElementById('searchid');
var priceInput = document.getElementById('price-filter');

var Products = [
    {PName: "Samsung Galaxy A36 5G", PPrice: "17,599", PDescription: "Black - 8GB RAM - 256GB", PImage: "./images/Samsung Galaxy A36 5G Black.jpg"},
    {PName: "Samsung Galaxy A17 4G", PPrice: "8,599", PDescription: "Black - 6GB RAM - 128GB", PImage: "./images/Samsung Galaxy A17 4G Black.jpg"},
    {PName: "Samsung Galaxy A07", PPrice: "11,999", PDescription: "Black - 8GB RAM - 256GB", PImage: "./images/Samsung Galaxy A07 Black.jpg"},
    {PName: "Realme C85 Pro", PPrice: "11,999", PDescription: "Purple - 8GB RAM - 128GB", PImage: "./images/Realme C85 Pro Purple.jpg"},
    {PName: "Motorola G35", PPrice: "7,699", PDescription: "Black - 8GB RAM - 256GB", PImage: "./images/Motorola G35 5G Black.jpg"},
    {PName: "Honor 400 Lite", PPrice: "13,199", PDescription: "Gray - 8GB RAM - 256GB", PImage: "./images/Honor 400 Lite Gray.jpg"},
    {PName: "Honor 400", PPrice: "23,139", PDescription: "Silver - 12GB RAM - 512GB", PImage: "./images/Honor 400 Silver.jpg"},
    {PName: "Samsung Galaxy A17 4G", PPrice: "10,299", PDescription: "Gray - 8GB RAM - 256GB", PImage: "./images/Samsung Galaxy A17 4G Gray.jpg"},
    {PName: "Samsung Galaxy A17 4G", PPrice: "10,299", PDescription: "Black - 8GB RAM - 256GB", PImage: "./images/Samsung Galaxy A17 4G Black.jpg"},
    {PName: "Apple Iphone 16 Plus", PPrice: "60,999", PDescription: "Pink - 8GB RAM - 128GB", PImage: "./images/Apple Iphone 16 Plus Pink.jpg"},
    {PName: "Apple Iphone 16 Plus", PPrice: "69,999", PDescription: "Pink - 8GB RAM - 256GB", PImage: "./images/Apple Iphone 16 Plus Pink.jpg"},
    {PName: "Apple Iphone 16 Pro", PPrice: "88,999", PDescription: "White - 8GB RAM - 512GB", PImage: "./images/Apple Iphone 16 Pro White.jpg"},
    {PName: "Apple Iphone 16 Pro", PPrice: "88,999", PDescription: "Black - 8GB RAM - 512GB", PImage: "./images/Apple Iphone 16 Pro Black.jpg"},
    {PName: "Samsung Galaxy Tab S9 Ultra", PPrice: "41,499", PDescription: "Beige - 12GB RAM - 256GB", PImage: "./images/Samsung Galaxy Tab S9 Ultra Begie.jpg"},
    {PName: "Apple Iphone 16", PPrice: "52,599", PDescription: "Black - 8GB RAM - 128GB", PImage: "./images/Apple Iphone 16 Black.jpg"}
];

function displayproduct(arr){
    var container = '';
    for (var i = 0; i < arr.length; i++) {
        container += ` <div class="item">
            <img src="${arr[i].PImage}" alt="Product Image">
            <h2>${arr[i].PName}</h2>
            <p>${arr[i].PDescription}</p>
            <div class="more-info">
                <span class="pPrice">${arr[i].PPrice} <strong>EGP</strong></span>
                <span><i class="fa-solid fa-bag-shopping"></i></span>
            </div>
        </div>`
    }

    document.getElementById('products-data').innerHTML = container;
}

displayproduct(Products);

function searchProduct(){
    var term = searchInput.value;
    var cartona = "";
    for(var i = 0; i < Products.length; i++){
        if (Products[i].PName.toLowerCase().includes(term.toLowerCase()) == true) {
            cartona += ` <div class="item">
            <img src="${Products[i].PImage}" alt="Product Image">
            <h2>${Products[i].PName}</h2>
            <p>${Products[i].PDescription}</p>
            <div class="more-info">
                <span>${Products[i].PPrice} <strong>EGP</strong></span>
                <span><i class="fa-solid fa-bag-shopping"></i></span>
            </div>
        </div>`
        }
    }
    document.getElementById('products-data').innerHTML = cartona;
}

function priceFilter(){
    var term = priceInput.value;
    var container;

    if (term == "5,000 - 10,000") {
        container = Products.filter(p => Number(p.PPrice.replaceAll(',', "")) <= 10000)
    }else if (term == "10,000 - 20,000"){
        container = Products.filter(product => (Number(product.PPrice.replaceAll(',', "")) > 10000) && (Number(product.PPrice.replaceAll(',', "")) <= 20000))
    }else if (term == "20,000 - 40,000"){
        container = Products.filter(product => (Number(product.PPrice.replaceAll(',', "")) > 20000) && (Number(product.PPrice.replaceAll(',', "")) <= 40000))
    }else if (term == "40,000 - 60,000"){
        container = Products.filter(product => (Number(product.PPrice.replaceAll(',', "")) > 40000) && (Number(product.PPrice.replaceAll(',', "")) <= 60000))
    }else if (term == "60,000 - 80,000"){
        container = Products.filter(product => (Number(product.PPrice.replaceAll(',', "")) > 60000) && (Number(product.PPrice.replaceAll(',', "")) <= 80000))
    }else if (term == "80,000 - 100,000"){
        container = Products.filter(product => (Number(product.PPrice.replaceAll(',', "")) > 80000) && (Number(product.PPrice.replaceAll(',', "")) <= 100000))
    }else{
        container = Products;
    }
    displayproduct(container);
}