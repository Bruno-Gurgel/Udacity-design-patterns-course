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
  /**
   * Function to initiate all the code.
   */
  init: () => {
    // Initially, the current cat is the first on the list.
    model.currentCat = model.cats[0];
    // Initializing views.
    catListView.init();
    catView.init();
    adminView.init();
  },
  /**
   * Function to get the current cat from the model object.
   * @return {object} The current cat.
   */
  getCurrentCat: () => {
    return model.currentCat;
  },
  /**
   * Function to get the the cats array from the model object.
   * @return {object} The cats array.
   */
  getCats: () => {
    return model.cats;
  },
  /**
   * Function to get the current cat from the model object.
   * @param {object} cat The cat object within the cats array that will be the new current cat.
   */
  setCurrentCat: (cat) => {
    model.currentCat = cat;
  },
  /**
   * Function that increments the counter for the currently-selected cat when its image is clicked.
   */
  incrementCounter: () => {
    model.currentCat.count++;
    catView.render();
    adminView.render();
  },

  openAdminView: () => {
    adminView.adminButton.addEventListener("click", () => {
      adminView.adminDiv.style.display = "block";
      adminView.render();
    });
  },

  closeAdminView: () => {
    adminView.cancelButton.addEventListener("click", () => {
      adminView.adminDiv.style.display = "none";
    });
  },

  updateAdminView: () => {
    adminView.saveButton.addEventListener("click", () => {
      model.currentCat.name = adminView.adminName.value;
      model.currentCat.imagePath = adminView.adminPath.value;
      catView.render();
      catListView.render();
      adminView.adminDiv.style.display = "none";
    });
  },
};

/* ======= View ======= */
const catView = {
  /**
   * Function to initiate the view relative to the cat image.
   */
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
  /**
   * Function that renders the content in the screen.
   */
  render: function () {
    const currentCat = octopus.getCurrentCat();
    this.catImageElem.src = currentCat.imagePath;
    this.catImageElem.alt = currentCat.imageAlt;
    this.figCaption.textContent = `${currentCat.name}: ${currentCat.count} clicks!`;
  },
};

const catListView = {
  /**
   * Function to initiate the view relative to the list of cats.
   */
  init: function () {
    this.catListElem = document.getElementById("cat-list");

    this.render();
  },
  /**
   * Function that renders the content in the screen.
   */
  render: function () {
    const cats = octopus.getCats();
    let listItem = "";
    // empty the cat list
    this.catListElem.innerHTML = "";
    for (const cat of cats) {
      listItem = document.createElement("li");
      listItem.textContent = cat.name;

      /**
       * Adding an event listener to the recently created items.
       * @return {function} When an item of the list is clicked, changes the current cat and renders the cat view.
       */
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

const adminView = {
  init: function () {
    this.adminDiv = document.querySelector(".admin");
    this.adminName = document.getElementById("form-name");
    this.adminPath = document.getElementById("form-path");
    this.adminClicks = document.getElementById("form-clicks");
    this.adminButton = document.getElementById("admin-button");
    this.cancelButton = document.getElementById("cancel-button");
    this.saveButton = document.getElementById("save-button");

    octopus.openAdminView();
    octopus.closeAdminView();
    octopus.updateAdminView();

    this.render();
  },
  render: function () {
    const currentCat = octopus.getCurrentCat();

    this.adminName.value = `${currentCat.name}`;
    this.adminPath.defaultValue = `${currentCat.imagePath}`;
    this.adminClicks.value = `${currentCat.count}`;
  },
};

// Initializing the code
octopus.init();
