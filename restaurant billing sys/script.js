class MenuItem {
    constructor(name, type, price) {
        this.name = name;
        this.type = type;
        this.price = price;
    }
}

class Order {
    constructor() {
        this.itemName = "";
        this.quantity = 0;
        this.tableNumber = 0;
    }

    setItemName(name) {
        this.itemName = name;
    }

    setQuantity(quantity) {
        this.quantity = quantity;
    }

    setTableNumber(tableNumber) {
        this.tableNumber = tableNumber;
    }

    getTotalBill(menu) {
        let totalBill = 0;
        for (let i = 0; i < menu.length; i++) {
            if (menu[i].name.toLowerCase() === this.itemName.toLowerCase()) {
                totalBill = this.quantity * menu[i].price;
                break;
            }
        }
        return totalBill;
    }
}

const menu = [
    new MenuItem("Expresso", "Beverage", 180),
    new MenuItem("Americano", "Beverage", 209),
    new MenuItem("Tea", "Beverage", 99),
    new MenuItem("Cafe Latte", "Beverage", 245),
    new MenuItem("Pasta", "Italian", 235),
    new MenuItem("Sizzler", "Vegetarian", 260),
    new MenuItem("Aloo Tikki", "Appetizer", 160),
    new MenuItem("Kabab", "Veg Appetizer", 190),
    new MenuItem("Corn Soup", "Soup", 130),
    new MenuItem("Hot and Sour Soup", "Soup", 170),
    new MenuItem("Baked Spaghetti", "Italian", 295),
    new MenuItem("Baked Macaroni", "Italian", 269),
    new MenuItem("Paneer Masala", "Indian", 185),
    new MenuItem("Veg Kadhai", "Indian", 220),
    new MenuItem("Roti", "Indian Bread", 28),
    new MenuItem("Naan", "Indian Bread", 35),
    new MenuItem("Paratha", "Indian Bread", 80),
    new MenuItem("Rice", "Indian", 160),
    new MenuItem("Cold drink", "Beverage", 49),
    new MenuItem("Buttermilk", "Beverage", 25),
    new MenuItem("Mojito", "Beverage", 110),
    new MenuItem("Fruit Punch", "Beverage", 90),
];

const menuElement = document.getElementById("menu");
menu.forEach((item, index) => {
    const menuItem = document.createElement("div");
    menuItem.textContent = `${index + 1}. ${item.name} - Rs ${item.price}`;
    menuElement.appendChild(menuItem);
});

const orderForm = document.getElementById("orderForm");
orderForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const order = new Order();
    const itemNameInput = document.getElementById("itemName").value.toLowerCase();
    order.setItemName(itemNameInput);
    order.setQuantity(parseInt(document.getElementById("quantity").value));
    order.setTableNumber(parseInt(document.getElementById("tableNumber").value));
    const menuItem = menu.find(item => item.name.toLowerCase() === itemNameInput);
    if (menuItem) {
        const totalBill = order.getTotalBill(menu);
        const billElement = document.getElementById("bill");
        billElement.innerHTML = `<p>--------------------------------------</p><p>Your Order Details are:</p><p>Item: ${order.itemName}</p><p>Quantity: ${order.quantity}</p><p>Table Number: ${order.tableNumber}</p><p>--------------------------------------</p><p>Total Bill: Rs ${totalBill}</p><p>--------------------------------------</p><p>Thank you for visiting :)</p>`;
    } else {
        alert("Invalid item selection. Please choose a valid item from the menu.");
    }
});
