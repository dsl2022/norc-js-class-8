/*Coffee Machine Class demo*/
class CoffeeMachine {
  constructor(coffeeType, size, isHot) {
    this.coffeeType = coffeeType;
    this.size = size;
    this.isHot = isHot;
  }
  _addWater() {
    return "water is ready!";
  }
  _addCoffee() {
    return `\n${this.coffeeType} is selected`;
  }
  _grindCoffee() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`\n${this.coffeeType} is ground`);
      }, 5000);
    });
  }
  _brewing() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`\n${this.coffeeType} is brewed`);
      }, 8000);
    });
  }
  async _createCoffee() {
    const addWater = this._addWater();
    const addCoffee = this._addCoffee();
    console.log(addWater, addCoffee);
    const [groundCoffee, brewedCoffee] = await Promise.all([
      this._grindCoffee(),
      this._brewing(),
    ]);
    console.log(groundCoffee, brewedCoffee);
    return true;
  }
  async serve() {
    console.time();
    this.timer();
    await this._createCoffee();

    console.timeEnd();
    console.log("\nCoffee is ready, please enjoy");
  }
  tellTime() {
    setInterval(() => {
      console.log(new Date().toLocaleTimeString());
    }, 1000);
  }
}

const coffee1 = new CoffeeMachine("Latte", "large", true);
coffee1.serve();
