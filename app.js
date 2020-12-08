const jambo = document.getElementById("cat__one");
const theCat = document.getElementById("cat__two");

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
catClick(theCat, "figCapTwo", "Cat");
