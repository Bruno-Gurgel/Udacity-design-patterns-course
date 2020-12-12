/**
 * Function to show a cat image when the respective link is clicked.
 * @param {string} event The event itself.
 * @async
 * @event
 */
document.getElementById("cat-list").addEventListener("click", (event) => {
  event.preventDefault();
  const images = document.getElementsByTagName("FIGURE");
  for (const image of images) {
    document.getElementById("intro-click").style.display = "none";
    image.style.display = "none";
    const currentSelection = event.target.id;
    const imageID = currentSelection.substring(5);
    document.getElementById(imageID).style.display = "block";
  }
});

const jambo = document.getElementById("cat1");
const theCat = document.getElementById("cat2");
const pudim = document.getElementById("cat3");
const lulu = document.getElementById("cat4");
const milka = document.getElementById("cat5");

/**
 * Function to count the clicks on a cat.
 * @param {string} element The element that is going to listen to the event.
 * @param {string} figcaption Which 'figcaption' element to show the count.
 * @param {string} name The cat's name.
 */
const catClick = (element, figcaption, name) => {
  let count = 0;
  element.addEventListener("click", () => {
    count++;
    document.getElementById(figcaption).innerHTML = `${name}: ${count} clicks.`;
  });
};

catClick(jambo, "figCapOne", "Jambo");
catClick(theCat, "figCapTwo", "The Cat");
catClick(pudim, "figCapThree", "Pudim");
catClick(lulu, "figCapFour", "Lulu");
catClick(milka, "figCapFive", "Milka");
