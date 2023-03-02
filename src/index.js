// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = +product.querySelector('.price span').innerHTML;
  const quantity = +product.querySelector('.quantity input').value;
  const productResult = price * quantity;
  let subtotal = product.querySelector('.subtotal span'); 
  subtotal.innerHTML = productResult;
  return productResult; 
  //... your code goes here
}

function calculateAll() {

  // ITERATION 2
  const allProducts = document.querySelectorAll('.product');
  let total = 0;
  allProducts.forEach((product) => {
    const subtotal = updateSubtotal(product);
    total += subtotal;
  });
  // ITERATION 3
  document.querySelector('#total-value span').innerText = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  const row = target.parentNode.parentNode;
  row.innerHTML = '';
  }
const removeButtons = document.querySelectorAll('.btn-remove');
removeButtons.forEach((button) => {
  button.addEventListener('click', removeProduct);
  })



// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
