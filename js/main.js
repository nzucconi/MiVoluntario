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

    calculateChange(payment, subtotal) {
        return payment - this.totalPurchase;
    }

}

const productShirts = [
    hat1 = new Product("Volunteer Now", "Small", 100, 5),
    hat2 = new Product("Volunteer Now", "Medium", 100, 3),
    hat3 = new Product("Get Involved", "Small", 120, 5),
]

const cashier = new Cashier();

let inserthat1 = $(() => {
    $("#hat1").on("click", () => {
        cashier.scanProduct(hat1);
        alert("Product added to the cart")
        sessionStorage.setItem('Product', JSON.stringify(hat1))
    })
});

let inserthat2 = $(() => {
    $("#hat2").on("click", () => {
        cashier.scanProduct(hat2);
        alert("Product added to the cart")
        sessionStorage.setItem('Product', JSON.stringify(hat2))
    })
})

let inserthat3 = $(() => {
    $("#hat3").on("click", () => {
        cashier.scanProduct(hat3);
        alert("Product added to the cart")
        sessionStorage.setItem('Product', JSON.stringify(hat3))
    })
})

// Payment Methods

$("#cart").on("click", () => {
    let cardPayment = confirm("Do you wish to pay with a credit card and get 20% discount?");
    alert("The total of your purchase is " + cashier.totalPurchase);
    
    if (cardPayment) { 
    // Card Method
        cashier.totalPurchase = cashier.getTotalWithDiscount();
        alert("Su total es de " + cashier.totalPurchase);
    } else {
        // Cash Method
        alert("The total of your purchase is " + cashier.totalPurchase);
        let newPayment = Number (prompt("Ingrese Pago"));
        cashier.totalPurchase = cashier.calculateChange(newPayment);
        alert("Your change is " + cashier.totalPurchase);
    }
    
    alert("Thank you for trusting us");
})