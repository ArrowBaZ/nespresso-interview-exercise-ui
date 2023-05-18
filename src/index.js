import "@/styles/index.scss";

// Your code here

const API_URL = "https://dummyjson.com/products";
const PRODUCT_KEYS_OMITTED = ["thumbnail", "images"];

const capsuleAnchor = document.getElementById("fetch-json");
const fetchedDataContainer = document.getElementById("fetched-data");

const fetchProductData = async (productId) => {
  const response = await fetch(`${API_URL}/${productId}`);
  const data = await response.json();

  return data;
};

const getRandomIntInclusive = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min); //MDN

const getRandomProductId = () => getRandomIntInclusive(1, 50);

const createKeyValueElement = (key, value) => {
  const keyContainer = document.createElement("b");
  keyContainer.innerHTML = `${key}:`;

  const valueContainer = document.createElement("span");
  valueContainer.innerHTML = value;

  const container = document.createElement("p");

  container.appendChild(keyContainer);
  container.appendChild(document.createTextNode(" "));
  container.appendChild(valueContainer);

  return container;
};

const renderProductSpecs = (data, omitKeys) => {
  fetchedDataContainer.innerHTML = "";

  for (let key in data) {
    if (omitKeys.includes(key)) continue;

    const keyValueElement = createKeyValueElement(key, data[key]);
    fetchedDataContainer.appendChild(keyValueElement);
  }
};

const createFetchingFunction = (fetchingFn, holdingTime = 1000) => {
  let status = "idle";

  return async () => {
    if (status === "idle") {
      status = "fetching";
      try {
        await fetchingFn();
      } catch (err) {
        console.error(err);
      } finally {
        setTimeout(() => {
          status = "idle";
        }, holdingTime);
      }
    }
  };
};

const handleFetchProductData = createFetchingFunction(async () => {
  const productId = getRandomProductId();
  console.log(`Fetching data for product ${productId}.`);
  const productData = await fetchProductData(productId);
  console.log(productData);
  renderProductSpecs(productData, PRODUCT_KEYS_OMITTED);
});

capsuleAnchor.addEventListener("click", handleFetchProductData);
