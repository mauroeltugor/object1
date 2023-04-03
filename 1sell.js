/*In this exercise we create a sales receipt for discounted products.
The receipt is customized as it shows the customer's full name, address,
the name of the product purchased, the quantity of the product and the total
price to be paid for the discounted products.*/


const products = [
    {
        "name": "Shirt",
        "price": 25.99,
        "discount": 0.2,
    },
    {
        "name": "Pants",
        "price": 55.99,
        "discount": 0.1
    },
    {
        "name": "Jacket",
        "price": 80.99,
        "discount": 0.15
    },
    {
        "name": "Shoes",
        "price": 60.99,
        "discount": 0.25
    },
    {
        "name": "cap",
        "price": 15.99,
        "discount": 0.05
    }
]

const customers = [
    {
        name: 'John',
        surname: 'Perez',
        age: 25,
        address: {
            street: 'Av. freedom',
            number: 123,
            city: 'Buenos Aires',
            country: 'ARGENTINA'
            }
    },
    {
        name: 'Mary',
        surname: 'Garcia',
        age: 30,
        address: {
            street: 'Calle 10',
            number: 456,
            city: 'Mexico City',
            country: 'MEXICO'
            }
    },
    {
        name: 'Peter',
        surname: 'Martinez',
        age: 40,
        address: {
            street: 'Rua Augusta',
            number: 789,
            city: 'São Paulo',
            country: 'BRAZIL'
        }
    }
]

let productWithDiscount = [];

const inventory = (products) => {
    let expensive = [];
    let chep = [];
    expensive = products.filter(product => product.price > 50);
    chep = products.filter(product => product.price < 50);
    productWithDiscount = products.map( product =>({name: product.name , price: product.price, newPrice: product.price-(product.discount*product.price)}))
    return productWithDiscount
}

inventory(products)

const createBill = (userNameIn, productNameIn, productQuantityIn) => {
    const userName = (user) => user.name === userNameIn;
    const productName = (product) => product['name'] === productNameIn;
    let currentUser = customers.find(userName);
    let currentProductName = productWithDiscount.find(productName);
    if (currentUser === undefined || currentProductName === undefined) {
        return "error: user not found"
    }
    let totalPurchase = currentProductName.newPrice * productQuantityIn;
    let completeBill = {
        username: `${currentUser.name} ${currentUser.surname}`,
        address: `${currentUser.address.street}, ${currentUser.address.city}`, 
        productName: currentProductName['name'],
        productQuantity: productQuantityIn,
        total: totalPurchase
    }
    return completeBill 
}

console.log(createBill('John', 'Shoes', 2));
