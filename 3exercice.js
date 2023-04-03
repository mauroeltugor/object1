const products = [
  {
    name: "Shirt",
    price: 25.99,
    discount: 0.2,
    stock: [10, 4, 23],
  },
  {
    name: "Pants",
    price: 55.99,
    discount: 0.1,
    stock: [48, 39, 15],
  },
  {
    name: "Jacket",
    price: 80.99,
    discount: 0.15,
    stock: [72, 82, 95],
  },
  {
    name: "Shoes",
    price: 60.99,
    discount: 0.25,
    stock: [68, 11, 2],
  },
  {
    name: "Cap",
    price: 15.99,
    discount: 0.05,
    stock: [5, 13, 10],
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

const inventory = (products) => {
  let expensive = [];
  let cheap = [];
  expensive = products.filter((product) => product.price > 50);
  cheap = products.filter((product) => product.price < 50);
  productWithDiscount = products.map((product) => ({
    name: product.name,
    price: product.price,
    newPrice: product.price - (product.discount * product.price),
    stock: product.stock,
  }));
  return productWithDiscount;
};

inventory(products);

const createBill = (userNameIn, productNameIn, productQuantityIn, storeId) => {
  const userName = (user) => user.name === userNameIn;
  const productName = (product) => product["name"] === productNameIn;
  let currentUser = customers.find(userName);
  let currentProductName = productWithDiscount.find(productName);
  if (currentUser === undefined || currentProductName === undefined) {
    return "error: user or product not found";
  }
  let storeIndex = storeId - 1;
  let availableStock = currentProductName.stock[storeIndex];
  if (productQuantityIn <= availableStock) {
    let totalPurchase = currentProductName.newPrice * productQuantityIn;
    let completeBill = {
      username: `${currentUser.name} ${currentUser.surname}`,
      address: `${currentUser.address.street}, ${currentUser.address.city}`,
      productName: currentProductName["name"],
      productQuantity: productQuantityIn,
      total: totalPurchase,
    };
    currentProductName.stock[storeIndex] -= productQuantityIn;
    return completeBill;
  } else {
    return "error: there is not enough product";
  }
};
console.log(createBill("Mary", "Cap", 7, 3))
console.log(createBill("Mary", "Cap", 11, 3));