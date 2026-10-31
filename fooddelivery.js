/* =====================================================
                    RESTAURANT DATA
===================================================== */

const restaurants = [

    {
        name: "Spice Kitchen",
        category: "South Indian",
        rating: "4.6",
        time: "25-30 min",
        price: "₹250 for two",
        image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=700&q=80"
    },

    {
        name: "Royal Biryani House",
        category: "Biryani",
        rating: "4.7",
        time: "30-35 min",
        price: "₹350 for two",
        image: "https://images.unsplash.com/photo-1563379091339-03246963d29c?auto=format&fit=crop&w=700&q=80"
    },

    {
        name: "Pizza Palace",
        category: "Pizza",
        rating: "4.5",
        time: "20-25 min",
        price: "₹450 for two",
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=700&q=80"
    },

    {
        name: "Burger Street",
        category: "Burger",
        rating: "4.4",
        time: "20-25 min",
        price: "₹300 for two",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=80"
    },

    {
        name: "Dragon Wok",
        category: "Chinese",
        rating: "4.5",
        time: "25-30 min",
        price: "₹400 for two",
        image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=700&q=80"
    },

    {
        name: "Tandoori Flames",
        category: "North Indian",
        rating: "4.6",
        time: "30-35 min",
        price: "₹450 for two",
        image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=700&q=80"
    },

    {
        name: "Dosa Corner",
        category: "South Indian",
        rating: "4.3",
        time: "15-20 min",
        price: "₹180 for two",
        image: "https://images.unsplash.com/photo-1630383249896-424e482df921?auto=format&fit=crop&w=700&q=80"
    },

    {
        name: "Creamy Desserts",
        category: "Desserts",
        rating: "4.8",
        time: "15-20 min",
        price: "₹250 for two",
        image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=700&q=80"
    }

];


/* =====================================================
                    MENU DATA
===================================================== */

const menus = {

    "Spice Kitchen": [

        {
            name: "Masala Dosa",
            price: 90,
            category: "Main Course",
            image: "https://images.unsplash.com/photo-1630383249896-424e482df921?auto=format&fit=crop&w=500&q=80",
            description: "Crispy dosa served with potato masala, sambar and chutney."
        },

        {
            name: "Idli Sambar",
            price: 70,
            category: "Main Course",
            image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=500&q=80",
            description: "Soft steamed idlis served with hot sambar and chutney."
        },

        {
            name: "Pongal",
            price: 80,
            category: "Main Course",
            image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=500&q=80",
            description: "Traditional South Indian ven pongal with ghee and cashews."
        },

        {
            name: "Poori Masala",
            price: 85,
            category: "Main Course",
            image: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=500&q=80",
            description: "Fluffy puris served with delicious potato masala."
        },

        {
            name: "Paneer Tikka",
            price: 160,
            category: "Starters",
            image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=500&q=80",
            description: "Grilled paneer cubes marinated with Indian spices."
        },

        {
            name: "Chicken 65",
            price: 180,
            category: "Starters",
            image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=500&q=80",
            description: "Crispy spicy chicken pieces served hot."
        },

        {
            name: "Chicken Biryani",
            price: 190,
            category: "Main Course",
            image: "https://images.unsplash.com/photo-1563379091339-03246963d29c?auto=format&fit=crop&w=500&q=80",
            description: "Aromatic basmati rice cooked with tender chicken."
        },

        {
            name: "Mutton Biryani",
            price: 250,
            category: "Main Course",
            image: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d7e?auto=format&fit=crop&w=500&q=80",
            description: "Tender mutton with fragrant biryani rice."
        },

        {
            name: "Gulab Jamun",
            price: 80,
            category: "Desserts",
            image: "https://images.unsplash.com/photo-1601303516534-5d2a2c8f2b8f?auto=format&fit=crop&w=500&q=80",
            description: "Soft gulab jamun soaked in sweet sugar syrup."
        },

        {
            name: "Mango Lassi",
            price: 90,
            category: "Drinks",
            image: "https://images.unsplash.com/photo-1577805947697-89e18249d767?auto=format&fit=crop&w=500&q=80",
            description: "Refreshing creamy mango lassi."
        }

    ],


    "Pizza Palace": [

        {
            name: "Margherita Pizza",
            price: 199,
            category: "Pizza",
            image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=500&q=80",
            description: "Classic tomato, mozzarella and basil pizza."
        },

        {
            name: "Farmhouse Pizza",
            price: 299,
            category: "Pizza",
            image: "https://images.unsplash.com/photo-1566843972142-a7fcb70de55a?auto=format&fit=crop&w=500&q=80",
            description: "Loaded with onions, capsicum, mushrooms and tomatoes."
        },

        {
            name: "Chicken Pizza",
            price: 329,
            category: "Pizza",
            image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?auto=format&fit=crop&w=500&q=80",
            description: "Cheesy pizza topped with juicy chicken."
        },

        {
            name: "Paneer Tikka Pizza",
            price: 319,
            category: "Pizza",
            image: "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=500&q=80",
            description: "Indian style pizza with spicy paneer tikka."
        },

        {
            name: "Garlic Bread",
            price: 120,
            category: "Starters",
            image: "https://images.unsplash.com/photo-1573140401552-388e54b76358?auto=format&fit=crop&w=500&q=80",
            description: "Freshly baked garlic bread with herbs."
        },

        {
            name: "Cheese Burst Pizza",
            price: 349,
            category: "Pizza",
            image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=500&q=80",
            description: "Extra cheesy pizza with a cheese-filled crust."
        },

        {
            name: "Chocolate Cake",
            price: 130,
            category: "Desserts",
            image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=500&q=80",
            description: "Rich chocolate cake served with chocolate sauce."
        },

        {
            name: "Cold Coffee",
            price: 110,
            category: "Drinks",
            image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=500&q=80",
            description: "Chilled creamy coffee topped with chocolate."
        }

    ],


    "Burger Street": [

        {
            name: "Classic Chicken Burger",
            price: 149,
            category: "Burgers",
            image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=80",
            description: "Juicy chicken patty with lettuce, cheese and sauce."
        },

        {
            name: "Cheese Burger",
            price: 169,
            category: "Burgers",
            image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&w=500&q=80",
            description: "Classic burger loaded with melted cheese."
        },

        {
            name: "Veg Burger",
            price: 119,
            category: "Burgers",
            image: "https://images.unsplash.com/photo-1520072959219-c595dc870360?auto=format&fit=crop&w=500&q=80",
            description: "Crispy vegetable patty with fresh vegetables."
        },

        {
            name: "Double Chicken Burger",
            price: 229,
            category: "Burgers",
            image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=500&q=80",
            description: "Double chicken patties with cheese and special sauce."
        },

        {
            name: "French Fries",
            price: 99,
            category: "Starters",
            image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=500&q=80",
            description: "Crispy golden French fries."
        },

        {
            name: "Peri Peri Fries",
            price: 119,
            category: "Starters",
            image: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&w=500&q=80",
            description: "French fries with spicy peri peri seasoning."
        },

        {
            name: "Chocolate Shake",
            price: 139,
            category: "Drinks",
            image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=500&q=80",
            description: "Thick and creamy chocolate milkshake."
        },

        {
            name: "Brownie",
            price: 109,
            category: "Desserts",
            image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=500&q=80",
            description: "Soft chocolate brownie served warm."
        }

    ],


    "Dragon Wok": [

        {
            name: "Chicken Noodles",
            price: 160,
            category: "Main Course",
            image: "https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=500&q=80",
            description: "Stir fried noodles with chicken and vegetables."
        },

        {
            name: "Veg Noodles",
            price: 130,
            category: "Main Course",
            image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=500&q=80",
            description: "Hakka noodles tossed with fresh vegetables."
        },

        {
            name: "Chicken Fried Rice",
            price: 170,
            category: "Main Course",
            image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=500&q=80",
            description: "Fried rice with chicken and Chinese sauces."
        },

        {
            name: "Veg Fried Rice",
            price: 140,
            category: "Main Course",
            image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=500&q=80",
            description: "Classic vegetable fried rice."
        },

        {
            name: "Spring Rolls",
            price: 120,
            category: "Starters",
            image: "https://images.unsplash.com/photo-1548507200-dc5d9c9a0eaf?auto=format&fit=crop&w=500&q=80",
            description: "Crispy vegetable spring rolls."
        },

        {
            name: "Momos",
            price: 130,
            category: "Starters",
            image: "https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?auto=format&fit=crop&w=500&q=80",
            description: "Steamed dumplings served with spicy chutney."
        },

        {
            name: "Schezwan Noodles",
            price: 180,
            category: "Main Course",
            image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=500&q=80",
            description: "Spicy noodles tossed in Schezwan sauce."
        },

        {
            name: "Mango Drink",
            price: 90,
            category: "Drinks",
            image: "https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=500&q=80",
            description: "Refreshing chilled mango drink."
        }

    ]

};


/* =====================================================
                    GLOBAL VARIABLES
===================================================== */

let cart = [];

let currentRestaurant = "Spice Kitchen";

let currentFoodCategory = "All";


/* =====================================================
                    PAGE NAVIGATION
===================================================== */

function hideAllPages() {

    document
        .querySelectorAll(".page")
        .forEach(function(page) {

            page.classList.add("hidden");

        });

}


/* HOME */

function showHome() {

    hideAllPages();

    document
        .getElementById("homePage")
        .classList.remove("hidden");

    loadHomeRestaurants();

    loadHomeFood();

    window.scrollTo(0, 0);
}


/* RESTAURANTS */

function showRestaurants() {

    hideAllPages();

    document
        .getElementById("restaurantsPage")
        .classList.remove("hidden");

    loadRestaurants();

    window.scrollTo(0, 0);
}


/* MENU */

function showMenuPage() {

    showRestaurantMenu("Spice Kitchen");

}


/* OFFERS */

function showOffers() {

    hideAllPages();

    document
        .getElementById("offersPage")
        .classList.remove("hidden");

    window.scrollTo(0, 0);
}


/* CART */

function showCart() {

    hideAllPages();

    document
        .getElementById("cartPage")
        .classList.remove("hidden");

    renderCart();

    window.scrollTo(0, 0);
}


/* ORDERS */

function showOrders() {

    hideAllPages();

    document
        .getElementById("ordersPage")
        .classList.remove("hidden");

    window.scrollTo(0, 0);
}


/* =====================================================
                    LOAD HOME RESTAURANTS
===================================================== */

function loadHomeRestaurants() {

    const container =
        document.getElementById("homeRestaurants");

    container.innerHTML = "";


    restaurants.slice(0, 4)
        .forEach(function(restaurant) {

            container.innerHTML += createRestaurantCard(restaurant);

        });

}


/* =====================================================
                    RESTAURANT CARD
===================================================== */

function createRestaurantCard(restaurant) {

    return `

        <div class="restaurant-card"
             onclick="showRestaurantMenu('${restaurant.name}')">

            <img
                class="restaurant-photo"
                src="${restaurant.image}"
                alt="${restaurant.name}"
            >

            <div class="restaurant-card-info">

                <h3>
                    ${restaurant.name}
                </h3>

                <p>
                    ${restaurant.category}
                </p>

                <div class="restaurant-bottom">

                    <span class="rating">
                        ⭐ ${restaurant.rating}
                    </span>

                    <span class="delivery-time">
                        ${restaurant.time}
                    </span>

                </div>

            </div>

        </div>

    `;
}


/* =====================================================
                    LOAD ALL RESTAURANTS
===================================================== */

function loadRestaurants() {

    const container =
        document.getElementById("restaurantList");

    container.innerHTML = "";


    restaurants.forEach(function(restaurant) {

        container.innerHTML +=
            createRestaurantCard(restaurant);

    });

}


/* =====================================================
                    FILTER RESTAURANTS
===================================================== */

function filterRestaurant(category, button) {

    document
        .querySelectorAll(".category")
        .forEach(function(btn) {

            btn.classList.remove("active");

        });


    button.classList.add("active");


    const container =
        document.getElementById("restaurantList");

    container.innerHTML = "";


    restaurants.forEach(function(restaurant) {

        if (
            category === "All" ||
            restaurant.category === category
        ) {

            container.innerHTML +=
                createRestaurantCard(restaurant);

        }

    });

}


/* =====================================================
                    RESTAURANT MENU
===================================================== */

function showRestaurantMenu(name) {

    currentRestaurant = name;

    currentFoodCategory = "All";


    hideAllPages();


    document
        .getElementById("menuPage")
        .classList.remove("hidden");


    document
        .getElementById("menuRestaurantName")
        .textContent = name;


    const restaurant =
        restaurants.find(function(item) {

            return item.name === name;

        });


    if (restaurant) {

        document
            .getElementById("menuRestaurantInfo")
            .textContent =
            restaurant.category +
            " • " +
            restaurant.time;

    }


    document
        .getElementById("foodSearch")
        .value = "";


    document
        .querySelectorAll(".food-category")
        .forEach(function(button) {

            button.classList.remove("active");

        });


    document
        .querySelector(".food-category")
        .classList.add("active");


    renderMenu();


    window.scrollTo(0, 0);

}


/* =====================================================
                    RENDER MENU
===================================================== */

function renderMenu() {

    const container =
        document.getElementById("menuList");


    container.innerHTML = "";


    let menu =
        menus[currentRestaurant] || menus["Spice Kitchen"];


    if (currentFoodCategory !== "All") {

        menu =
            menu.filter(function(item) {

                return item.category === currentFoodCategory;

            });

    }


    document
        .getElementById("menuItemCount")
        .textContent =
        menu.length + " items";


    menu.forEach(function(item, index) {

        container.innerHTML += `

            <div class="menu-item">

                <img
                    class="menu-item-image"
                    src="${item.image}"
                    alt="${item.name}"
                >

                <div class="menu-item-details">

                    <h3>
                        ${item.name}
                    </h3>

                    <div class="price">
                        ₹${item.price}
                    </div>

                    <p class="description">
                        ${item.description}
                    </p>

                    <div class="menu-item-bottom">

                        <span class="veg">
                            ● VEG
                        </span>

                        <button
                            class="add-btn"
                            onclick="addToCart('${currentRestaurant}', ${index})">

                            ADD +

                        </button>

                    </div>

                </div>

            </div>

        `;

    });

}


/* =====================================================
                    FILTER FOOD
===================================================== */

function filterFood(category, button) {

    currentFoodCategory = category;


    document
        .querySelectorAll(".food-category")
        .forEach(function(btn) {

            btn.classList.remove("active");

        });


    button.classList.add("active");


    renderMenu();

}


/* =====================================================
                    ADD TO CART
===================================================== */

function addToCart(restaurantName, index) {

    const menu =
        menus[restaurantName];


    let item;


    /*
        If filtering is active, the index in the
        displayed array can differ from original.
    */

    if (
        currentFoodCategory === "All"
    ) {

        item = menu[index];

    } else {

        const filtered =
            menu.filter(function(food) {

                return food.category ===
                    currentFoodCategory;

            });

        item = filtered[index];

    }


    if (!item) {
        return;
    }


    const existing =
        cart.find(function(cartItem) {

            return cartItem.name === item.name;

        });


    if (existing) {

        existing.quantity++;

    } else {

        cart.push({

            name: item.name,

            price: item.price,

            image: item.image,

            restaurant: restaurantName,

            quantity: 1

        });

    }


    updateCartCount();

}


/* =====================================================
                    CART COUNT
===================================================== */

function updateCartCount() {

    let count = 0;


    cart.forEach(function(item) {

        count += item.quantity;

    });


    document
        .getElementById("headerCartCount")
        .textContent = count;

}


/* =====================================================
                    RENDER CART
===================================================== */

function renderCart() {

    const container =
        document.getElementById("cartItems");


    container.innerHTML = "";


    if (cart.length === 0) {

        container.innerHTML = `

            <div class="empty-order">

                <i class="fa-solid fa-cart-shopping"></i>

                <h2>
                    Your cart is empty
                </h2>

                <p>
                    Add delicious food to continue.
                </p>

                <button onclick="showRestaurants()">
                    Browse Restaurants
                </button>

            </div>

        `;


        updateBill();

        return;

    }


    document
        .getElementById("cartRestaurant")
        .textContent =
        cart[0].restaurant;


    cart.forEach(function(item, index) {

        container.innerHTML += `

            <div class="cart-item">

                <img
                    src="${item.image}"
                    alt="${item.name}"
                >

                <div class="cart-item-info">

                    <h4>
                        ${item.name}
                    </h4>

                    <span>
                        ₹${item.price}
                    </span>

                </div>


                <div class="quantity">

                    <button
                        onclick="changeQuantity(${index}, -1)">
                        −
                    </button>

                    <span>
                        ${item.quantity}
                    </span>

                    <button
                        onclick="changeQuantity(${index}, 1)">
                        +
                    </button>

                </div>


                <div class="cart-item-price">

                    ₹${item.price * item.quantity}

                </div>

            </div>

        `;

    });


    updateBill();

}


/* =====================================================
                    CHANGE QUANTITY
===================================================== */

function changeQuantity(index, amount) {

    cart[index].quantity += amount;


    if (cart[index].quantity <= 0) {

        cart.splice(index, 1);

    }


    updateCartCount();

    renderCart();

}


/* =====================================================
                    UPDATE BILL
===================================================== */

function updateBill() {

    let subtotal = 0;


    cart.forEach(function(item) {

        subtotal +=
            item.price * item.quantity;

    });


    const delivery =
        subtotal > 0 ? 40 : 0;


    const taxes =
        Math.round(subtotal * 0.05);


    const total =
        subtotal +
        delivery +
        taxes;


    document
        .getElementById("subtotal")
        .textContent =
        "₹" + subtotal;


    document
        .getElementById("delivery")
        .textContent =
        "₹" + delivery;


    document
        .getElementById("taxes")
        .textContent =
        "₹" + taxes;


    document
        .getElementById("total")
        .textContent =
        "₹" + total;

}


/* =====================================================
                    CHECKOUT
===================================================== */

function checkout() {

    if (cart.length === 0) {

        alert("Your cart is empty!");

        return;

    }


    let subtotal = 0;


    cart.forEach(function(item) {

        subtotal +=
            item.price * item.quantity;

    });


    const delivery = 40;

    const taxes =
        Math.round(subtotal * 0.05);

    const total =
        subtotal + delivery + taxes;


    document
        .getElementById("successRestaurant")
        .textContent =
        cart[0].restaurant;


    document
        .getElementById("successTotal")
        .textContent =
        "₹" + total;


    /* Save order */

    localStorage.setItem(
        "lastOrder",
        JSON.stringify(cart)
    );


    cart = [];


    updateCartCount();


    hideAllPages();


    document
        .getElementById("successPage")
        .classList.remove("hidden");


    window.scrollTo(0, 0);

}


/* =====================================================
                    SEARCH RESTAURANTS
===================================================== */

document
    .getElementById("restaurantSearch")
    .addEventListener(
        "input",
        function() {

            const search =
                this.value.toLowerCase();


            const cards =
                document.querySelectorAll(
                    "#restaurantList .restaurant-card"
                );


            cards.forEach(function(card) {

                const text =
                    card.textContent.toLowerCase();


                if (text.includes(search)) {

                    card.style.display = "";

                } else {

                    card.style.display = "none";

                }

            });

        }
    );


/* =====================================================
                    SEARCH FOOD
===================================================== */

document
    .getElementById("foodSearch")
    .addEventListener(
        "input",
        function() {

            const search =
                this.value.toLowerCase();


            const items =
                document.querySelectorAll(
                    ".menu-item"
                );


            items.forEach(function(item) {

                const text =
                    item.textContent.toLowerCase();


                if (text.includes(search)) {

                    item.style.display = "flex";

                } else {

                    item.style.display = "none";

                }

            });

        }
    );


/* =====================================================
                    HOME FOOD
===================================================== */

function loadHomeFood() {

    const container =
        document.getElementById("homeFood");


    container.innerHTML = "";


    const foods = [

        menus["Spice Kitchen"][0],

        menus["Spice Kitchen"][6],

        menus["Pizza Palace"][0],

        menus["Burger Street"][0],

        menus["Dragon Wok"][0]

    ];


    foods.forEach(function(food) {

        container.innerHTML += `

            <div class="food-card">

                <img
                    src="${food.image}"
                    alt="${food.name}"
                >

                <div class="food-card-content">

                    <h3>
                        ${food.name}
                    </h3>

                    <p>
                        ${food.description}
                    </p>

                    <div class="food-price-row">

                        <span class="food-price">
                            ₹${food.price}
                        </span>

                        <button
                            class="small-add"
                            onclick="quickAdd('${food.name}')">

                            ADD

                        </button>

                    </div>

                </div>

            </div>

        `;

    });

}


/* =====================================================
                    QUICK ADD
===================================================== */

function quickAdd(foodName) {

    let found = null;


    for (const restaurantName in menus) {

        const item =
            menus[restaurantName].find(
                function(food) {

                    return food.name === foodName;

                }
            );


        if (item) {

            found = {
                ...item,
                restaurant: restaurantName
            };

            break;

        }

    }


    if (!found) {
        return;
    }


    const existing =
        cart.find(function(item) {

            return item.name === found.name;

        });


    if (existing) {

        existing.quantity++;

    } else {

        cart.push({

            name: found.name,

            price: found.price,

            image: found.image,

            restaurant: found.restaurant,

            quantity: 1

        });

    }


    updateCartCount();


    alert(
        found.name +
        " added to cart!"
    );

}


/* =====================================================
                    START APPLICATION
===================================================== */

showHome();