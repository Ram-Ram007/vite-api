import "./style.css";
import { fetchRandomDogImage } from "./utils/dogApi";
import { fetchAllDogList } from "./utils/dogApi";

function showLoading() {
  const loadingElement = document.querySelector("#loading");
  if (loadingElement) {
    loadingElement.style.display = "block";
  }
}

function hideLoading() {
  const loadingElement = document.querySelector("#loading");
  if (loadingElement) {
    loadingElement.style.display = "none";
  }
}

async function fetchDogList() {
  try {
    const response = await fetchAllDogList();
    const dogList = response.data.message;
    const dogNames = Object.keys(dogList);
    console.log(dogNames);
    return dogNames;
  } catch (error) {
    console.log(error);
  }
}

async function displayRandomDogImage(dogBreed) {
  try {
    showLoading(); // Show loading before making the API request

    const res = await fetchRandomDogImage(dogBreed);
    const dogImage = document.querySelector("#img");
    dogImage.src = res.data.message;
  } catch (error) {
    console.log(error);
  } finally {
    hideLoading(); // Hide loading after the API request completes (whether success or error)
  }
}

async function start() {
  const dogNamesList = await fetchDogList();
  appendDogNamesToSelect(dogNamesList);
}

function appendDogNamesToSelect(dogNamesList) {
  const selectBreed = document.querySelector("#dog-list");
  for (let i = 0; i < dogNamesList.length; i++) {
    const item = dogNamesList[i];
    const option = document.createElement("option");
    option.textContent = item;
    selectBreed.appendChild(option);
  }
}

start();

document.querySelector("#button").addEventListener("click", function () {
  const selectBreed = document.querySelector("#dog-list");
  const dogImage = document.querySelector("#img");

  displayRandomDogImage(selectBreed.value);
});
