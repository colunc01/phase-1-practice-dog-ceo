console.log('%c HI', 'color: firebrick');

document.addEventListener('DOMContentLoaded', function() {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  const breedUrl = "https://dog.ceo/api/breeds/list/all";
  const breedDropdown = document.getElementById('breed-dropdown');
  const breedList = document.getElementById('dog-breeds');

  // Challenge 1: Fetch and display dog images
  fetch(imgUrl)
    .then(response => response.json())
    .then(data => {
      const imageContainer = document.getElementById('dog-image-container');
      data.message.forEach(imageUrl => {
        const imgElement = document.createElement('img');
        imgElement.src = imageUrl;
        imageContainer.appendChild(imgElement);
      });
    });

  // Challenge 2: Fetch and display dog breeds
  fetch(breedUrl)
    .then(response => response.json())
    .then(data => {
      const breeds = Object.keys(data.message);
      breeds.forEach(breed => {
        const listItem = document.createElement('li');
        listItem.textContent = breed;
        breedList.appendChild(listItem);
      });
    });

  // Challenge 3: Change font color on click
  breedList.addEventListener('click', function(event) {
    const clickedItem = event.target;
    clickedItem.style.color = 'red'; // Change the color to your preference
  });

  // Challenge 4: Filter breeds based on dropdown selection
  breedDropdown.addEventListener('change', function(event) {
    const selectedLetter = event.target.value;
    const breedItems = breedList.getElementsByTagName('li');
    for (let i = 0; i < breedItems.length; i++) {
      const breed = breedItems[i].textContent;
      if (breed.startsWith(selectedLetter)) 
      {
        breedItems[i].style.display = 'block';
      } 
      else {
        breedItems[i].style.display = 'none';
      }
    }
  });
});

