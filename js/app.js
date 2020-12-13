/* ======= Model ======= */
const model = {
  currentCat: null,
  cats: [
    {
      name: "Jambo",
      count: 0,
      imagePath: "../img/cat.jpg",
      imageAlt: "Grey cat with a blue mask",
      figCaptionID: "fig-caption-jambo",
    },
    {
      name: "The Cat",
      count: 0,
      imagePath: "../img/cat_2.jpg",
      imageAlt: "Yellow sleepy cat",
      figCaptionID: "fig-caption-cat",
    },
    {
      name: "Pudim",
      count: 0,
      imagePath: "../img/cat_3.jpg",
      imageAlt: "Yellow baby cat showing half face looking suspicious",
      figCaptionID: "fig-caption-pudim",
    },
    {
      name: "Lulu",
      count: 0,
      imagePath: "../img/cat_4.jpg",
      imageAlt:
        "Grey cat with a face that looks like he or she wants something",
      figCaptionID: "fig-caption-lulu",
    },
    {
      name: "Milka",
      count: 0,
      imagePath: "../img/cat_5.jpg",
      imageAlt: "Cat and a pug dog riding a bicycle",
      figCaptionID: "fig-caption-milka",
    },
  ],
};

/* ======= Octopus ======= */
const octopus = {
  init: () => {
    // Initially, the current cat is the first on the list.
    model.currentCat = model.cats[0];
    // Initializing views.
    catListView.init();
    catView.init();
  },
  getCurrentCat: () => {
    return model.currentCat;
  },
  getCats: () => {
    return model.cats;
  },
  setCurrentCat: (cat) => {
    model.currentCat = cat;
  },
  incrementCounter: () => {
    model.currentCat.count++;
    catView.render();
  },
};

/* ======= View ======= */
const catView = {
  init: function () {
    // store pointers to our DOM elements for easy access later
    this.catImageElem = document.getElementById("cat-image");
    this.figCaption = document.getElementById("fig-caption");

    // on click, increment the current cat's counter
    this.catImageElem.addEventListener("click", () => {
      octopus.incrementCounter();
    });

    // render this view (update the DOM elements with the right values)
    this.render();
  },
  render: function () {
    const currentCat = octopus.getCurrentCat();
    this.catImageElem.src = currentCat.imagePath;
    this.catImageElem.alt = currentCat.imageAlt;
    this.figCaption.textContent = `${currentCat.name}: ${currentCat.count} clicks!`;
  },
};

const catListView = {
  init: function () {
    this.catListElem = document.getElementById("cat-list");

    this.render();
  },
  render: function () {
    const cats = octopus.getCats();
    let listItem = "";
    // empty the cat list
    this.catListElem.innerHTML = "";
    for (const cat of cats) {
      listItem = document.createElement("li");
      listItem.textContent = cat.name;

      listItem.addEventListener(
        "click",
        ((catCopy) => {
          return () => {
            octopus.setCurrentCat(catCopy);
            catView.render();
          };
        })(cat)
      );
      this.catListElem.appendChild(listItem);
    }
  },
};

octopus.init();
