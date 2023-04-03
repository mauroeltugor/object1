const products = [
  {
    name: "Shirt",
    price: 25.99,
  },
  {
    name: "Pants",
    price: 55.99,
  },
  {
    name: "Jacket",
    price: 80.99,
  },
  {
    name: "Shoes",
    price: 60.99,
  },
  {
    name: "cap",
    price: 15.99,
  },
];

const customers = [
  {
    name: "John",
    surname: "Perez",
    age: 25,
    address: {
      street: "Av. freedom",
      number: 123,
      city: "Buenos Aires",
      country: "Argentina",
    },
  },
  {
    name: "Mary",
    surname: "Garcia",
    age: 30,
    address: {
      street: "Calle 10",
      number: 456,
      city: "Mexico City",
      country: "Mexico",
    },
  },
  {
    name: "Peter",
    surname: "Martinez",
    age: 40,
    address: {
      street: "Rua Augusta",
      number: 789,
      city: "São Paulo",
      country: "Brazil",
    },
  },
];

let productWithDiscount = [];

const inventory = (products, country) => {
  let expensive = [];
  let chep = [];
  expensive = products.filter((product) => product.price > 50);
  chep = products.filter((product) => product.price < 50);
  productWithDiscount = products.map((product) => {
    let discount = 0;
    switch (country) {
      case "Brazil":
        discount = 0.5;
        break;
      case "Mexico":
        discount = 0.2;
        break;
      default:
        discount = 0;
    }
    return {
      name: product.name,
      price: product.price,
      newPrice: product.price - (discount * product.price)
    };
  });
  return productWithDiscount;
};

const createBill = (userNameIn, productNameIn, productQuantityIn) => {
  const userName = (user) => user.name === userNameIn;
  const productName = (product) => product["name"] === productNameIn;
  let currentUser = customers.find(userName);
  if (currentUser === undefined) {
    return "error: user not found";
  }
  inventory(products, currentUser.address.country);
  let currentProductName = productWithDiscount.find(productName);
  if (currentProductName === undefined) {
    return "error: product not found";
  }
  let totalPurchase = currentProductName.newPrice * productQuantityIn;
  let completeBill = {
    username: `${currentUser.name} ${currentUser.surname}`,
    address: `${currentUser.address.street}, ${currentUser.address.city}`,
    productName: currentProductName["name"],
    productQuantity: productQuantityIn,
    total: totalPurchase,
  };
  return completeBill;
};


console.log(createBill("Mary", "cap", 3));