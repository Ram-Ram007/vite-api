import "./style.css";

import { fetchRandomDogImage } from "./utils/dogApi";
import { fetchAllDogList } from "./utils/dogApi";

async function start(dog) {
  try {
    const res = await fetchRandomDogImage(dog);
    const dogImage = document.querySelector("#animals img");
    dogImage.src = res.data.message;
    const loadingElement = document.getElementById("loading");
    if (loadingElement) {
      loadingElement.parentNode.removeChild(loadingElement);
    }
  } catch (error) {
    console.log(error);
  }
}

async function getList() {
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

async function initialize() {
  const dogNamesList = await getList();
  appendToSelect(dogNamesList);
}

function appendToSelect(dogNamesList) {
  const selectBreed = document.getElementById("dog-list");
  for (let i = 0; i < dogNamesList.length; i++) {
    const item = dogNamesList[i];
    const option = document.createElement("option");
    option.textContent = item;
    selectBreed.appendChild(option);
  }
}


initialize();
document.getElementById("getImg").addEventListener("click", function () {
  const selectBreed = document.getElementById("dog-list");
  const loadDiv = document.getElementById("load-div");
  const loadingParagraph = document.createElement("p");
  loadingParagraph.id = "loading";
  loadingParagraph.textContent = "Loading ...";
  loadDiv.appendChild(loadingParagraph);

  const dogImage = document.querySelector("#animals img");

  start(selectBreed.value);
});
