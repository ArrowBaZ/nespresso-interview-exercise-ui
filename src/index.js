import '@/styles/index.scss'

// Your code here

const randomProductGenerator = document.getElementById('fetch-json');
const randomProductData = document.getElementById('fetched-data');

// Set up a timer to prevent fetching data too frequently
let timer;

// Set up a counter to keep track of which product to show
let counter = 1;

// Add an event listener to the element to handle clicks
randomProductGenerator.addEventListener('click', () => {
  // Clear the timer if it is set
  if (timer) {
    clearTimeout(timer);
  }

  // Fetch the data for the next product
  fetch(`https://dummyjson.com/products/${counter}`)
    .then(response => response.json())
    .then(data => {
      // Update the element with the fetched data
      randomProductData.innerHTML = '<dl>';
      randomProductData.innerHTML += '<dt>ID:</dt><dd>' + data.id + '</dd><br>';
      randomProductData.innerHTML += '<dt>Title:</dt><dd>' + data.title + '</dd><br>';
      randomProductData.innerHTML += '<dt>Description:</dt><dd>' + data.description + '</dd><br>';
      randomProductData.innerHTML += '<dt>Price:</dt><dd>' + data.price + '</dd><br>';
      randomProductData.innerHTML += '<dt>Discount percentage:</dt><dd>' + data.discountPercentage + '</dd><br>';
      randomProductData.innerHTML += '<dt>Rating:</dt><dd>' + data.rating + '</dd><br>';
      randomProductData.innerHTML += '<dt>Stock:</dt><dd>' + data.stock + '</dd><br>';
      randomProductData.innerHTML += '<dt>Brand:</dt><dd>' + data.brand + '</dd><br>';
      randomProductData.innerHTML += '<dt>Category:</dt><dd>' + data.category + '</dd><br>';
      randomProductData.innerHTML += '</dl>';
    });

  // Generate a random number between 1 and 50
  counter = Math.floor(Math.random() * 50) + 1;

  // Set a timer to prevent fetching data again for at least 1 second
  timer = setTimeout(() => {
    timer = null;
  }, 1000);
});