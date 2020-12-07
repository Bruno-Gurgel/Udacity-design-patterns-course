const jambo = document.getElementById("cat__one");
const theCat = document.getElementById("cat__two");

let jamboCount = 0;
let catCount = 0;

jambo.addEventListener("click", () => {
  jamboCount += 1;
  // eslint-disable-next-line prettier/prettier
  document.getElementById("figCapOne").innerHTML = `Jambo: ${jamboCount} clicks.`;
});

theCat.addEventListener("click", () => {
  catCount += 1;
  document.getElementById("figCapTwo").innerHTML = `Cat: ${catCount} clicks.`;
});
