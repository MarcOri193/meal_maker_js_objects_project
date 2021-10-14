const menu = {  // main obj
  _courses: {
    appetizers:[ ],
    mains: [ ],
    desserts: [ ],
  },
  // properties inside the courses prop/obj of the menu obj

  get appetizers() {
    return this._courses.appetizers;
  },

  set appetizers(appetizers){
    return this._courses.appetizers = appetizers;
  },

  get mains(){
    return this._courses.mains;
  },

  set mains(mains){
    return this._courses.mains = mains;
  },

  get desserts(){
    return this._courses.desserts;
  },

  set desserts(desserts){
    return this._courses.desserts = desserts;
  },
  // getter and setter methods for appetizers, mains and desserts properties

  get courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts,
    }; // returned prop/obj containing key/value pairs
  },
  // getter method for _courses prop/obj

  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice,
    };
    return this._courses[courseName].push(dish);  // pushing the dish obj into the appropriate array in _courses prop/obj based on what courseName passed in
  },
  // method to add a new dish to the specified course on the menu


  getRandomDishFromCourse(courseName){
    const dishes = this.courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },
  // random dish from a course

  generateRandomMeal(){
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;
    return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name} and the total price is ${totalPrice}`;
  }
  // random meal from three courses

};
// main obj END


menu.addDishToCourse('appetizers', 'salad', 4.00);
menu.addDishToCourse('appetizers', 'wings', 5.00);
menu.addDishToCourse('appetizers', 'fries', 6.00);

menu.addDishToCourse('mains', 'steak', 10.00);
menu.addDishToCourse('mains', 'salmon', 12.00);
menu.addDishToCourse('mains', 'tofu', 13.50);

menu.addDishToCourse('desserts', 'ice cream', 4.00);
menu.addDishToCourse('desserts', 'coffee', 3.00);
menu.addDishToCourse('desserts', 'cake', 3.50);


const meal = menu.generateRandomMeal();
console.log(meal);
