"use strict";

const locStoreKeyName = "johnnybizzel_RecipeBook";
// TODO : use has-danger to highligh error on a form-group
class App extends React.Component {
  constructor() {
    super();
    let recipeData = [
      {
        id: 0,
        name: "Spiced Roast Roots",
        servings: "2",
        ingredients: [
          {
            food: "mixed root veg - sweet potatoes, parsnips, carrots, swede",
            quantity: "700g"
          },
          {
            food: "olive oil",
            quantity: "4 tsp"
          },
          {
            food: "hot chilli powder",
            quantity: "0.5 tbsp"
          },
          {
            food: "ground cumin",
            quantity: "0.5 tbsp"
          },
          {
            food: "ground coriander",
            quantity: "0.5 tbsp"
          },
          {
            food: "garlic clove - optional",
            quantity: "1"
          },
          {
            food: "sunflower/pumpkin seeds",
            quantity: "1 tbsp"
          },
          {
            food: "black pepper, ground",
            quantity: "to taste"
          },
          {
            food: "fresh coriander - optional",
            quantity: "2-3 tsp"
          }
        ],
        instructions: [
          "Pre heat oven to 200C/fan 180C/ gas mk 6. Peel and dice veg",
          "Whisk together olive oil & spices",
          "Place veg in a non-stick roasting tin",
          "Drizzle oil mixture over veg. Mix well",
          "Cook at 200 degrees for 30-40 mins. (fan assisted oven cooks quicker) During last 5-10 mins sprinkle over seeds",
          "Season with black pepper"
        ]
      },
      {
        id: 1,
        name: "Cabbage stir fry",
        servings: "2",
        ingredients: [
          {
            food: "diced cabbage",
            quantity: "150g"
          },
          {
            food: "spring onion",
            quantity: "25 g"
          },
          {
            food: "grated carrot",
            quantity: "50 g"
          },
          {
            food: "nut oil",
            quantity: "0.5 tbsp"
          },
          {
            food: "butter",
            quantity: "1 tbsp"
          },
          {
            food: "garlic clove",
            quantity: "1"
          },
          {
            food: "cider vinegar",
            quantity: "1 tbsp"
          },
          {
            food: "brown sugar",
            quantity: "0.5 tbsp"
          }
        ],
        instructions: [
          "Heat the oil and butter in a large wok or frying pan on medium heat. ",
          "Add the garlic. Stir fry for about 1-2 minutes, stirring constantly until garlic is fragrant. DO NOT burn!",
          "Increase heat to high. Once the heat is to temperature, add the cabbage, carrots, green onions, cider vinegar, and brown sugar. Stir fry for about 3 minutes or until the cabbage is tender-crisp.",
          "Season with salt and pepper if required."
        ]
      },
      {
        id: 2,
        name: "Pizza Margherita",
        servings: "4",
        ingredients: [
          {
            food: "strong bread flour",
            quantity: "300g"
          },
          {
            food: "instant yeast",
            quantity: "1 tsp"
          },
          {
            food: "salt",
            quantity: "1sp"
          },
          {
            food: "passata",
            quantity: "100ml"
          },
          {
            food: "fresh basil",
            quantity: "1 tsp"
          },
          {
            food: "garlic clove",
            quantity: "1"
          },
          {
            food: "cheese",
            quantity: "handful"
          },
          {
            food: "mozzarella ball - sliced",
            quantity: "125g"
          },
          {
            food: "cherry tomatoes - halved",
            quantity: "handful"
          }
        ],
        instructions: [
          "Make the base: Put the flour into a large bowl, then stir in the yeast and salt. Make a well, pour in 200ml warm water and the olive oil and bring together with a wooden spoon until you have a soft, fairly wet dough. Turn onto a lightly floured surface and knead for 5 mins until smooth. Cover with a tea towel and set aside. ",
          "Mix the passata, basil and crushed garlic together, then season to taste. Leave to stand at room temperature while you get on with shaping the base",
          "Roll out the dough: If you’ve let the dough rise, give it a quick knead, then split into two balls. On a floured surface, roll out the dough into large rounds, about 25cm across, using a rolling pin. The dough needs to be very thin as it will rise in the oven. Lift the rounds onto two floured baking sheets.",
          "Top and bake: Heat oven to 240C/fan 220C /gas 8. Put another baking sheet or an upturned baking tray in the oven on the top shelf. Smooth sauce over bases with the back of a spoon. Scatter with cheese and tomatoes, drizzle with olive oil and season. Put one pizza, still on its baking sheet, on top of the preheated sheet or tray. Bake for 8-10 mins until crisp. Serve with a little more olive oil, and basil leaves if using. Repeat step for remaining pizza."
        ]
      }
    ];
    this.state = {
      recipes: recipeData,
      addMode: false,
      message: "",
      newIngredientsArray: [],
      recpNameValid: true,
      recpServingsValid: true,
      recpNewIngredients: [],
      showAreYouSure: false
    };
    this.updateRecipe = this.updateRecipe.bind(this);
    this.addNewClick = this.addNewClick.bind(this);
    this.saveNewRecipe = this.saveNewRecipe.bind(this);
    this.remove = this.remove.bind(this);
    this.returnClick = this.returnClick.bind(this);
    this.addIngredient = this.addIngredient.bind(this);
    //this.addNewRecipeIngredient =  this.addNewRecipeIngredient.bind(this);
    this.updateIngredient = this.updateIngredient.bind(this);
    this.removeIngredient = this.removeIngredient.bind(this);
    // Validation - add new recipe
    this.rcpNameChange = this.rcpNameChange.bind(this);
    this.rcpServingsChange = this.rcpServingsChange.bind(this);

    // check local storage:
    //if localStorage is available and it is the FIRST run, save default recipes in localStorage
    if (this._storageAvailable("localStorage")) {
      if (!window.localStorage.getItem(locStoreKeyName)) {
        // cehck
        this._saveToLocalStorage(locStoreKeyName, JSON.stringify(recipeData));
      }
    } else {
      alert("You need a modern browser for properly viewing this application!");
    }
  }

  // check if local storage works. credit:  https://codepen.io/Roky/pen/rrmppw
  _storageAvailable(type) {
    try {
      var storage = window[type],
        x = "__storage_test__";
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    } catch (e) {
      return false;
    }
  }

  // save to local storage (c/o https://codepen.io/Roky/pen/rrmppw)
  _saveToLocalStorage(storage, propObj) {
    try {
      window.localStorage.setItem(storage, propObj);
      return true;
    } catch (e) {
      return false;
    }
  }

  componentWillMount() {
    if (window.localStorage.getItem(locStoreKeyName)) {
      const res = JSON.parse(window.localStorage.getItem(locStoreKeyName));
      this.setState({ recipes: res });
    }
  }

  addNewClick() {
    this.setState({
      addMode: true
    });
  }

  saveNewRecipe(
    recipeName,
    recipeServings,
    recipeIngredients,
    recipeInstructions
  ) {
    console.log("saving new recipe");
    const newState = { ...this.state };
    let allIds = newState.recipes.map(r => {
      return r.id;
    });

    let highestId = Math.max.apply(null, allIds);

    let highId = highestId + 1;
    newState.recipes.push({
      id: highId,
      name: recipeName,
      servings: recipeServings,
      ingredients: recipeIngredients,
      instructions: recipeInstructions
    });
    this.setState(newState);
    this.setState({ addMode: false });

    this._saveToLocalStorage(locStoreKeyName, JSON.stringify(newState.recipes));
  }

  rcpNameChange(e) {
    e.preventDefault();

    if (!this.refs.recipeName.value) {
      this.setState({
        recpNameValid: false
      });
    } else {
      this.setState({
        recpNameValid: true
      });
    }
  }

  rcpServingsChange(e) {
    e.preventDefault();

    if (!this.refs.servings.value) {
      this.setState({
        recpServingsValid: false
      });
    } else {
      this.setState({
        recpServingsValid: true
      });
    }
  }

  updateRecipe(newText, newServings, newInstructions, id) {
    // TODO ; save to local storage
    const newState = { ...this.state }; //Object.assign({}, this.state.recipes);

    newState.recipes.forEach(s => {
      if (s.id === id) {
        s.name = newText;
        s.servings = newServings;
        s.instructions = newInstructions;
      }
    });
    this.setState(newState);
    this._saveToLocalStorage(locStoreKeyName, JSON.stringify(newState.recipes));
  }

  remove(recipeID) {
    console.log("REMOVE", recipeID);
    let remaining = this.state.recipes;
    remaining = remaining.filter(recp => recp.id != recipeID);
    this.setState({
      recipes: remaining
    });
  }

  returnClick() {
    this.setState({
      addMode: false,
      message: ""
    });
  }

  addIngredient(newIngredient, id) {
    const newState = { ...this.state };
    // todo - some sort of check for same name ingredient
    newState.recipes.forEach(s => {
      if (s.id === id) {
        s.ingredients.push(newIngredient);
      }
    });
    this.setState(newState);
  }

  /*  When editing a recipe this function updates the state for that recipe */
  updateIngredient(oldIngredient, newIngredient, id) {
    const newState = { ...this.state };
    // todo - some sort of check for same name ingredient
    newState.recipes.forEach(rcp => {
      if (rcp.id === id) {
        rcp.ingredients.forEach(ing => {
          if (ing.food == oldIngredient.food) {
            ing.food = newIngredient.food;
            ing.quantity = newIngredient.quantity;
          }
        });
      }
    });

    this.setState(newState);
  }

  /*  When deleting an ingredient from a recipe this function updates the state for that recipe */
  removeIngredient(oldIngredient, id) {
    const newState = { ...this.state };
    newState.recipes.forEach(s => {
      if (s.id === id) {
        const newList = s.ingredients.filter(x => {
          return x.food != oldIngredient;
        });
        s.ingredients = newList;
      }
    });
    this.setState(newState);
  }

  renderAddNewRecipe() {
    return (
      <NewRecipe saveNew={this.saveNewRecipe} returnClick={this.returnClick} />
    );
  }
  renderDisplay() {
    var thisContext = this;
    console.log("rendering display");

    return (
      <div className="container">
        <header>
          <h1 className="text-center">Online Recipe Book</h1>
          <button onClick={this.addNewClick}>ADD RECIPE</button>
        </header>
        <div className="recipe-container">
          {this.state.recipes.map(function(r, i) {
            return (
              <Recipe
                onChange={thisContext.updateRecipe}
                addIngredient={thisContext.addIngredient}
                updateIngredient={thisContext.updateIngredient}
                removeIngredient={thisContext.removeIngredient}
                deleteRecipe={thisContext.remove}
                id={r.id}
                key={i}
                name={r.name}
                servings={r.servings}
                ingredients={r.ingredients}
                instructions={r.instructions}
              />
            );
          })}
        </div>
      </div>
    );
  }
  render() {
    return this.state.addMode
      ? this.renderAddNewRecipe()
      : this.renderDisplay();
  }
}

// =================================================
//
//                RECIPE COMPONENT
//
// =================================================

class Recipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      name: "",
      servings: "",
      ingredients: [],
      instructions: [],
      editMode: false,
      editIngredientMode: false,
      addIngredientNameOK: true,
      addIngredientQtyOK: true,
      messageBox: "",
      oldIngredientName: "",
      oldIngredientQty: "",
      showAreYouSure: false
    };
    this.editClick = this.editClick.bind(this);
    this.save = this.save.bind(this);
    this.cancel = this.cancel.bind(this);
    this.delete = this.delete.bind(this);
    this.cancelDelete = this.cancelDelete.bind(this);
    this.addIngredient = this.addIngredient.bind(this);
    this.editIngredient = this.editIngredient.bind(this);
    this.editIngredientMode = this.editIngredientMode.bind(this);
    this.onIngredientChange = this.onIngredientChange.bind(this);
    this.removeIngredient = this.removeIngredient.bind(this);
    this.beginDelete = this.beginDelete.bind(this);
  }

  editClick(e) {
    this.setState({
      editMode: true
    });
  }
  save() {
    let invalidForm = false;
    let errorMessage = "";
    if (!this.refs.newRecipeName.value) {
      invalidForm = true;
      errorMessage += "*Recipe name missing*  ";
    }
    if (!this.refs.cookingInstr.value) {
      invalidForm = true;
      errorMessage += "*Cooking instructions missing*";
    }
    if (invalidForm) {
      this.setState({ messageBox: errorMessage });
      return;
    }

    this.props.onChange(
      this.refs.newRecipeName.value,
      this.refs.newServings.value,
      this.refs.cookingInstr.value.split(";"),
      this.props.id
    );
    this.setState({
      editMode: false
    });
  }
  cancel() {
    this.setState({
      editMode: false
    });
  }
  delete(e) {
    e.preventDefault();
    this.props.deleteRecipe(this.props.id);
    this.setState({
      showAreYouSure: false
    });
  }
  beginDelete(e) {
    e.preventDefault();
    // showAreYouSure confirm btn
    console.log("Deleting...");
    this.setState({ showAreYouSure: true });
  }
  cancelDelete(e) {
    console.log("cancel delete...");
    e.preventDefault();
    this.setState({ showAreYouSure: false });
  }
  onIngredientChange(e) {
    if (!this.refs.newIngredient.value) {
      this.setState({ addIngredientNameOK: false });
    } else {
      this.setState({ addIngredientNameOK: true });
    }
  }
  addIngredient() {
    // read in new ingredient from text boxes.
    // TODO: if name, serves has changed, detect changes.
    if (this.refs.newRecipeName.value && this.refs.newQuantity.value) {
      let newIngr = {
        food: this.refs.newIngredient.value,
        quantity: this.refs.newQuantity.value
      };
      this.props.addIngredient(newIngr, this.props.id);
      this.setState({
        editMode: false,
        addIngredientNameOK: true,
        addIngredientQtyOK: true,
        messageBox: ""
      });
    } else {
      if (!this.refs.newIngredient.value)
        this.setState({ addIngredientNameOK: false });

      if (!this.refs.newQuantity.value)
        this.setState({ addIngredientQtyOK: false });

      this.setState({ messageBox: "*Add ingredient and quantity" });
    }
  }
  editIngredient() {
    // read in new ingredient from text boxes.
    if (this.refs.newRecipeName.value && this.refs.newQuantity.value) {
      let newIngr = {
        food: this.refs.newIngredient.value,
        quantity: this.refs.newQuantity.value
      };
      const oldIngr = {
        food: this.state.oldIngredientName,
        quantity: this.state.oldIngredientQty
      };
      this.props.updateIngredient(oldIngr, newIngr, this.props.id);
      this.setState({
        editMode: false,
        addIngredientNameOK: true,
        addIngredientQtyOK: true,
        messageBox: ""
      });
    } else {
      if (!this.refs.newIngredient.value)
        this.setState({ addIngredientNameOK: false });

      if (!this.refs.newQuantity.value)
        this.setState({ addIngredientQtyOK: false });

      this.setState({ messageBox: "*Add ingredient and quantity" });
    }
    this.setState({
      editIngredientMode: false
    });
  }

  editIngredientMode(oldIngr) {
    // read in new ingredient from text boxes.
    this.refs.newIngredient.value = oldIngr.food;
    this.refs.newQuantity.value = oldIngr.quantity;
    this.setState({
      editIngredientMode: true,
      oldIngredientName: oldIngr.food,
      oldIngredientQty: oldIngr.quantity
    });
  }

  removeIngredient(selectedFood) {
    // get old ingredient details
    //let oldIngr = { food: this.refs.newIngredient.value, quantity: this.refs.newQuantity.value }
    this.props.removeIngredient(selectedFood, this.props.id);
    this.setState({
      editMode: false,
      editIngredientMode: false
    });
  }

  componentDidUpdate() {
    if (this.state.editMode) {
      this.refs.newRecipeName.value = this.props.name;
      this.refs.newServings.value = this.props.servings;
      // format instructions with semi-colon rather than comma (default)
      let instrString = "";
      this.props.instructions.forEach(ins => (instrString += ins + ";"));
      this.refs.cookingInstr.value = instrString.substring(
        0,
        instrString.length - 1
      );
    }
  }

  renderDisplay() {
    let sure = "";
    if (this.state.showAreYouSure) {
      var classNames = "sureModal text-center show";
      sure = (
        <div>
          <div className={classNames}>
            Are you sure?
            <br />
            <button onClick={this.delete}>OK</button>
            <button className="remove" onClick={this.cancelDelete}>
              NO
            </button>
          </div>

          <div className="modal-overlay" id="modal-overlay" />
        </div>
      );
    }
    return (
      <div className="recipe">
        <div className="recipe-header">
          <h3>{this.props.name}</h3>

          <p>
            <span className="heading">Serves:</span> {this.props.servings}
          </p>
          {sure}
        </div>
        <div className="recipe-header" />
        <div className="recipe-ingredients-list">
          <ul className="list-group">
            {this.props.ingredients.map((ingredient, i) => (
              <li key={i} className="list-group-item-warning">
                {" "}
                {ingredient.food}{" "}
                <span className="float-right">{ingredient.quantity}</span>{" "}
              </li>
            ))}
          </ul>
        </div>

        <div className="cooking-instructions">
          <Instructions details={this.props.instructions} />
        </div>
        <div id="recipe-edit-btns">
          <button onClick={this.editClick}>EDIT</button>
          <button className="remove" onClick={this.beginDelete}>
            X
          </button>
        </div>
      </div>
    );
  }
  renderEditForm() {
    //const thisContext = this;
    return (
      <div className="recipe">
        <div className="recipe-header border-bottom">
          <label className="heading" htmlFor="recipeName">
            Name:
          </label>
          <input type="text" name="recipeName" ref="newRecipeName" />
          <p className="text-danger message">{this.state.messageBox}</p>
        </div>
        <div className="recipe-header border-bottom">
          <label className="heading" htmlFor="servings">
            Serves:
          </label>
          <input type="text" name="servings" ref="newServings" />
        </div>

        <div className="ingredientFields">
          <h5>Ingredients</h5>
          <input
            type="text"
            className={this.state.addIngredientNameOK ? "" : "error"}
            ref="newIngredient"
            onChange={this.onIngredientChange}
            placeholder="Ingredient"
          />
          <input
            type="text"
            className={this.state.addIngredientQtyOK ? "" : "error"}
            ref="newQuantity"
            placeholder="Quantity"
          />
          <div className="ingredientBtn">
            {this.state.editIngredientMode ? (
              ""
            ) : (
              <button onClick={this.addIngredient}>ADD</button>
            )}
            {this.state.editIngredientMode ? (
              <button onClick={this.editIngredient}>SAVE</button>
            ) : (
              <br />
            )}
          </div>
        </div>

        <br />
        {this.props.ingredients.map((ingredient, i) => {
          return (
            <div className="clearfix border-bottom" key={i}>
              <span className="float-left">
                {ingredient.food}, {ingredient.quantity}
              </span>
              <span className="float-right">
                <button onClick={e => this.editIngredientMode(ingredient)}>
                  EDIT
                </button>
                <button
                  className="remove"
                  onClick={() => this.removeIngredient(ingredient.food)}
                >
                  X
                </button>
              </span>
            </div>
          );
        })}
        <br />

        <div className="col-xs-8 col-sm-12 col-md-10">
          <h5 htmlFor="instructions">Instructions</h5>
          <textarea
            className="form-control form-control-danger textbox"
            id="cookInstr"
            placeholder="Cooking instructions separated by semi-colons (;)"
            ref="cookingInstr"
          />
        </div>

        <div className="recipe-edit-btns">
          <button onClick={this.save}>SAVE</button>
          <button onClick={this.cancel}>CANCEL</button>
        </div>
      </div>
    );
  }
  render() {
    return this.state.editMode ? this.renderEditForm() : this.renderDisplay();
  }
}

Recipe.defaultProps = {
  name: "Toast",
  servings: "1-2",
  ingredients: [
    {
      food: "bread",
      quantity: "1-4 slices"
    },
    {
      food: "butter",
      quantity: ""
    },
    {
      food: "topping of choice",
      quantity: "1 tbsp"
    }
  ],
  instructions: [
    "put the bread in the toaster for 3 mins",
    "add butter and toppings"
  ]
};

// =================================================
//
//              INSTRUCTIONS COMPONENT
//
// =================================================
class Instructions extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h5>Instructions</h5>
        <div className="cooking-instructions">
          <ol>
            {this.props.details.map(function(det, i) {
              return <li key={i}>{det}</li>;
            })}
          </ol>
        </div>
      </div>
    );
  }
}

// ================================================
//
//           ADD NEW RECIPE FORM COMPONENT
//
// ================================================

class NewRecipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      visible: false,
      newRecipeName: "",
      newRecipeServes: "",
      recpNewIngredients: [],
      cookInstructions: [],
      recpNameValid: true,
      recpServingsValid: true,
      recpIngredientsValid: true,
      recpInstructionsValid: true
    };
    this.addNewRecipeIngredient = this.addNewRecipeIngredient.bind(this);
    this.saveNewRecipe = this.saveNewRecipe.bind(this);
    //      this.cancel = this.cancel.bind(this);
    this.onRecpNameChange = this.onRecpNameChange.bind(this);
    this.onRecpServingsChange = this.onRecpServingsChange.bind(this);
    this.onCookInstrChange = this.onCookInstrChange.bind(this);
    this.returnClick = this.returnClick.bind(this);
  }

  /* New Recipe */
  addNewRecipeIngredient(e) {
    e.preventDefault();
    let invalidIngr = false;
    // Validate form - check if ingredient exists
    if (!this.refs.newRecipeIngredient.value) {
      console.log("invalid");
      this.setState({
        recpIngredientsValid: false
      });
      invalidIngr = true;
      alert("ingredient not specified");
      return;
    }
    if (this.state.recpNewIngredients.length > 0) {
      for (let idx in this.state.recpNewIngredients) {
        if (
          this.state.recpNewIngredients[idx].food.toLowerCase() ==
          this.refs.newRecipeIngredient.value.toLowerCase()
        ) {
          this.setState({
            recpIngredientsValid: false
          });

          invalidIngr = true;

          alert("ingredient already exists");
          return;
        }
      }
    }

    if (
      this.state.recpNewIngredients.indexOf(
        this.refs.newRecipeIngredient.value
      ) > 0
    ) {
      console.log("invalid");
      invalidIngr = true;
    }
    // if (this.state.recpNewIngredients.length == 0) {
    //   invalidForm = true;
    //   alert('No ingreds');
    // }
    if (invalidIngr) {
      alert("invalid ingredient");
      return;
    }

    const newState = { ...this.state };

    let newIngred = {
      food: this.refs.newRecipeIngredient.value,
      quantity: this.refs.newRcpIngrQty.value
    };
    let newAry = newState.recpNewIngredients;
    // check for existing ingredients
    newAry.push(newIngred);

    this.setState({
      message: "Add ingredient and quantity",
      recpNewIngredients: newAry
    });
    this.refs.newRecipeIngredient.value = "";
    this.refs.newRcpIngrQty.value = "";
  }

  saveNewRecipe(e) {
    e.preventDefault();
    // Validate form
    var invalidForm = false;
    if (!this.refs.recipeName.value) {
      console.log("invalid");
      this.setState({
        recpNameValid: false
      });
      invalidForm = true;
    }
    if (!this.refs.servings.value) {
      console.log("invalid");
      this.setState({
        recpServingsValid: false
      });
      invalidForm = true;
    }
    if (this.state.recpNewIngredients.length == 0) {
      this.setState({
        recpIngredientsValid: false
      });
      invalidForm = true;
    }
    if (!this.refs.cookInstr.value) {
      this.setState({
        recpInstructionsValid: false
      });
      invalidForm = true;
    } else {
      const instructions = this.refs.cookInstr.value.split(";");
      this.setState({ cookInstructions: instructions });
    }
    if (invalidForm) {
      this.setState({
        message: "The recipe is incomplete. Fix the errors in order to save it."
      });
      console.log("invalid form - cannot save");
      return;
    }

    console.log("save new recipe");
    this.props.saveNew(
      this.refs.recipeName.value,
      this.refs.servings.value,
      this.state.recpNewIngredients,
      this.state.cookInstructions
    );
  }

  onRecpNameChange() {
    this.setState({ newRecipeName: this.refs.recipeName.value });
  }

  onRecpServingsChange() {
    this.setState({ newRecipeServes: this.refs.servings.value });
  }

  onCookInstrChange() {
    if (!this.refs.cookInstr.value) {
      this.setState({
        recpInstructionsValid: false
      });
    } else {
      const instructions = this.refs.cookInstr.value.split(";");
      this.setState({ cookInstructions: instructions });
    }
  }

  returnClick() {
    this.props.returnClick();
  }

  render() {
    var addRecipeNameCSS = this.state.recpNameValid
      ? "form-group row"
      : "form-group row has-danger";
    var addRecipeServesCSS = this.state.recpServingsValid
      ? "form-group row"
      : "form-group row has-danger";
    var addRecipeIngredients = this.state.recpIngredientsValid
      ? "col-sm-6 offset-sm-2 "
      : "col-sm-6 offset-sm-2 red-text";
    var addCookInstructions = this.state.recpInstructionsValid
      ? "form-group row"
      : "form-group row has-danger";
    return (
      <div className="container">
        <h1 className="text-center">Online Recipe Book</h1>
        <p>Add the details of your recipe:</p>
        <p className="red-text">{this.state.message}</p>

        <form className="form-horizontal">
          <div className={addRecipeNameCSS}>
            <label
              className="col-xs-12 col-sm-2 col-form-label form-control-label"
              htmlFor="rcpName"
            >
              Recipe
            </label>
            <div className="col-xs-8 col-sm-6">
              <input
                className="form-control form-control-danger"
                type="text"
                id="rcpName"
                placeholder="Name"
                ref="recipeName"
                onChange={this.onRecpNameChange}
              />
              <div className="form-control-feedback" />
            </div>
          </div>
          <div className={addRecipeServesCSS}>
            <label
              className="col-xs-12 col-sm-2 col-form-label"
              htmlFor="noServings"
            >
              Servings
            </label>
            <div className="col-xs-8 col-sm-6">
              <input
                className="form-control form-control-danger"
                type="text"
                id="noServings"
                placeholder="Number of portions"
                ref="servings"
                onChange={this.onRecpServingsChange}
              />
            </div>
            <div className="col-xs-4 col-sm-2" />
          </div>
          <div className="row">
            <p className="col-sm-6 offset-sm-2">
              <span className="heading">List of ingredients</span>
            </p>
          </div>
          <div className="row">
            <ul className={addRecipeIngredients}>
              {this.state.recpNewIngredients.length > 0 ? (
                this.state.recpNewIngredients.map(newIng => {
                  return (
                    <li key={newIng.food}>
                      {" "}
                      {newIng.food}, {newIng.quantity}
                    </li>
                  );
                })
              ) : (
                <li> None yet </li>
              )}
            </ul>
          </div>
          <div className="form-group row">
            <label
              htmlFor="ingredients"
              className="col-xs-12 col-sm-2 col-form-label"
            >
              Add Ingredient
            </label>
            <div className="col-xs-8 col-sm-6">
              <input
                type="text"
                id="ingredients"
                placeholder="Ingredient type"
                className="form-control form-control-danger"
                ref="newRecipeIngredient"
              />
              <input
                type="text"
                id="quantity"
                placeholder="Quantity and unit"
                className="form-control form-control-danger"
                ref="newRcpIngrQty"
              />
            </div>
            <div className="col-xs-8 col-sm-2">
              <button onClick={this.addNewRecipeIngredient}>ADD</button>
            </div>
          </div>
          <div className={addCookInstructions}>
            <label
              htmlFor="instructions"
              className="col-xs-12 col-sm-2 col-form-label"
            >
              Instructions
            </label>
            <div className="col-xs-8 col-sm-6">
              <textarea
                className="form-control form-control-danger"
                id="cookInstr"
                placeholder="Add the cooking instructions separated by semi-colons (;)"
                ref="cookInstr"
                onChange={this.onCookInstrChange}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-10 col-sm-offset-2">
              <button className="btn-success" onClick={this.saveNewRecipe}>
                SAVE
              </button>
            </div>
          </div>
        </form>

        <button onClick={this.returnClick}>RETURN</button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
