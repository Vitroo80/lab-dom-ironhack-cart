// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
    
    const price = product.querySelector('.price span')
    const quantity = product.querySelector('.quantity input')
    const priceProd = price.innerText
    const quantProd = quantity.valueAsNumber
    const subtotalPrice = priceProd * quantProd
    product.querySelector('.subtotal span').innerText = subtotalPrice
    return subtotalPrice
  
  
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

 
  let subtotal = 0;

  const allProducts = document.querySelectorAll('tbody tr');

  for (i of allProducts) {
    updateSubtotal(i);
    subtotal += updateSubtotal(i);
  }

  const total = document.querySelector('#total-value span');

  total.textContent = subtotal;

  
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
