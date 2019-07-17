const restaurant = {
    name: "Bob's Burgers",
    orders: [],
    placeOrder: function (meal) {
        this.orders.push(meal)
    }
}

const chickenComboMeal = {
    sandwhichType: "Chicken",
    fries: true,
    drinkSize: "medium"
}

const cheeseburger = {
    sandwhichType: "Burger",
    fries: false,
    drinkSize: "none"
}

const burgerOfTheDay = {
    sandwhichType: "Burger",
    fries: true,
    drinkSize:"medium"
}



// Place an order
restaurant.placeOrder(chickenComboMeal)
console.log(restaurant.orders)

// Invoke the function to return the list of all orders

// Output all orders to the console using console.table()