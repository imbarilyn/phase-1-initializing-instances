// Write your code here
class Breakfast {
    constructor (food, drink){
        this.food = food;
        this.drink = drink;
    }
}
const newBreakfast = new Breakfast('Nduma', 'Coffee');

class Lunch {
    constructor (salad, soup, drink){
        this.salad = salad;
        this.soup = soup;
        this.drink = drink;
    }
}
const firstLunch = new Lunch('fruit', 'pumpkin', 'soda');

class Dinner {
    #dessert;
    constructor(salad, soup, entree, dessert) {
        this.salad = salad;
        this.soup = soup;
        this.entree = entree;
        this.#dessert = dessert;
    }
}

const firstDinner = new Dinner('fruit', 'butternut', 'mukimo', 'cake');





