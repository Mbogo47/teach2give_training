import axios from "axios";
const photoBtn = document.querySelector(".photos-btn");
const factsBtn = document.querySelector(".facts-btn");
const resultBox = document.querySelector(".output");
const factsLimit = document.getElementById("fact-limit");
const photosLimit = document.getElementById("photo-limit");

async function fetchCatFacts() {
  try {
    const response = await axios.get(
      "https://meowfacts.herokuapp.com/?count=5"
    );
    console.log(response.data);
  } catch (error) {
    console.error("Error fetching data");
  }
}

async function fetchCatPhotos() {
  try {
    const response = await axios.get(
      "https://api.thecatapi.com/v1/images/search?limit=2"
    );
    console.log(response.data);
  } catch (error) {
    console.error("Error fetching data");
  }
}

fetchCatFacts();
fetchCatPhotos();
