// All Products
class Product {
    constructor(name, size, price, stock) {
        this.name = name;
        this.size  = size;
        this.price  = parseFloat(price);
        this.stock  = parseInt(stock);
    }
}

// All Transactions
class Cashier {

    constructor() {
        this.cardDiscount = 0.80;
        this.totalPurchase = 0;
    }

    scanProduct(product) {
        this.totalPurchase += product.price;
    }

    getTotalWithDiscount() {
        return this.totalPurchase * this.cardDiscount;
    }

    getProduct() {

        $.ajax({
           method: "GET",
           url: "test.json"
        })
    
        .done(function(response) {
            console.log(response);
        });
    }

    calculateChange(payment, subtotal) {
        return payment - this.totalPurchase;
    }

}

const productShirts = [
        shirt1 = new Product("Volunteer Now", "Small", 100, 5),
        shirt2 = new Product("Volunteer Now", "Medium", 100, 3),
        shirt3 = new Product("Get Involved", "Small", 120, 5),
    ]

const productHats = [
        hat1 = new Product("Join", "Only Size", 85, 4),
        hat2 = new Product("Just Us", "Only Size", 150, 4),
    ]

const cashier = new Cashier();

let insertShirts = $(() => {
    $("#shirts").on("click", () => {
        cashier.scanProduct(shirt1)
        console.log("Product added to the cart")
        localStorage.setItem('Product', JSON.stringify(productShirts))
    })
});

let insertHats = $(() => {
    $("#hats").on("click", () => {
        cashier.scanProduct(hat2);
        console.log("Product added to the cart")
    })
})

// Payment Methods

$("#goToCart").on("click", () => {
    let cardPayment = confirm("Do you wish to pay with a credit card and get 20% discount?");
    console.log("The total of your purchase is " + cashier.totalPurchase);
    
    if (cardPayment) { 
    // Card Method
        cashier.totalPurchase = cashier.getTotalWithDiscount();
        console.log("Su total es de " + cashier.totalPurchase);
    } else {
        // Cash Method
        console.log("The total of your purchase is " + cashier.totalPurchase);
        let newPayment = Number (prompt("Ingrese Pago"));
        cashier.totalPurchase = cashier.calculateChange(newPayment);
        console.log("Your change is " + cashier.totalPurchase);
    }
})

let priceList = $(() => {
    $("#priceList").on("click", () => {
    // const productList = productShirts.concat(productHats)
    const productList = cashier.getProduct();
    console.log(productList);
    })
})