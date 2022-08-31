const products = [
  {
    id: "redshoe",
    description: "Red Shoe",
    price: 42.12,
    reviews: []
  },
  {
    id: "bluejean",
    description: "Blue Jeans",
    price: 55.55,
    reviews: []
  }
];

function getAllProducts() {
  return products;
}

function getProductsByPrice(min, max) {
  return products.filter((p) => p.price >= min && p.price <= max);
}

function getProductById(id) {
  return products.find((p) => p.id === id);
}

function addNewProduct(id, description, price) {
  let newProduct = {
    id,
    description,
    price,
    reviews: []
  };
  products.push(newProduct);
  return newProduct;
}

function addNewProductReview(productId, rating, comment) {
  let product = getProductById(productId);
  if (!product) {
    return null;
  }

  let review = {
    rating,
    comment
  };

  // NOTE assuming brand new product has blank array of reviews. Otherwise this will fail if reviews is undefined
  product.reviews.push(review);

  return product;
}

module.exports = {
  getAllProducts,
  getProductsByPrice,
  getProductById,
  addNewProduct,
  addNewProductReview
};
