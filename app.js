const catDiv = document.getElementById("cat");
let count = 0;
catDiv.addEventListener("click", () => {
  count += 1;
  document.getElementById("results").innerHTML = `<h1>Count: ${count} clicks.`;
});
