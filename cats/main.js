import axios from "axios";
const photoBtn = document.querySelector(".photos-btn");
const factsBtn = document.querySelector(".facts-btn");
const resultBox = document.querySelector(".output");
const factsLimit = document.getElementById("fact-limit");
const photosLimit = document.getElementById("photo-limit");
const loader = document.getElementById("loader");

factsBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  const inputValue = factsLimit.value.trim();

  if (inputValue === "" || inputValue > 50 || inputValue < 1) {
    resultBox.innerHTML = "<p>Please enter a number between 1 and 50.</p>";
    return;
  }

  resultBox.innerHTML = ""; 
  loader.style.display = "block"; 

  try {
    const response = await axios.get(
      `https://meowfacts.herokuapp.com/?count=${inputValue}`
    );
    const facts = response.data.data;
    const ol = document.createElement("ol");
    facts.forEach((fact) => {
      const li = document.createElement("li");
      li.textContent = fact;
      ol.appendChild(li);
    });
    resultBox.appendChild(ol);
  } catch (error) {
    resultBox.innerHTML =
      "<p>Something went wrong while fetching cat facts.</p>";
  } finally {
    loader.style.display = "none"; 
  }
});

photoBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  const inputValue = photosLimit.value.trim();
  if (inputValue === "" || inputValue > 10 || inputValue < 1) {
    resultBox.innerHTML = "<p>Please enter a number between 1 and 10.</p>";
    return;
  }

  loader.style.display = "block";
  resultBox.innerHTML = "";

  try {
    const response = await axios.get(
      `https://api.thecatapi.com/v1/images/search?limit=${inputValue}`
    );
    const images = response.data;
    images.forEach((imageData) => {
      const image = document.createElement("img");
      image.src = imageData.url;
      image.alt = "A cute cat";
      image.style.width = "200px";
      image.style.margin = "10px";
      resultBox.appendChild(image);
      console.log(image);
    });
    console.log(images)
    
  } catch (error) {
    console.error("Error fetching data", error);
    resultBox.innerHTML =
      "<p>Something went wrong while fetching cat photos.</p>";
  } finally {
    loader.style.display = "none"; 
  }
});



