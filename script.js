// The Constructor Pattern
/* Used to create specific types of objects */

// Ways to create an object
var newObject = {};
var newObject = Object.create(Object.prototype);
var newObject = new Object();
console.log(newObject); // {}

// Add keys and values to the object
// Set
newObject.someKey = "Hello World";
newObject["someKey2"] = "Bye World";
//Get
var value = newObject.someKey;
var value2 = newObject["someKey2"];
console.log(value); // Hello World
console.log(value2); // Bye World

// Object.defineProperty
var defineProp = function (obj, key, value) {
  var config = {
    value: value,
    writable: true,
    enumerable: true,
    configurable: true,
  };
  Object.defineProperty(obj, key, config);
};

// To use, we then create a new empty "person" object
var person = Object.create(Object.prototype);

// Populate the object with properties
defineProp(person, "car", "Delorean");
defineProp(person, "dateOfBirth", "1981");
defineProp(person, "hasBeard", false);

console.log(person);
// Outputs: Object {car: "Delorean", dateOfBirth: "1981", hasBeard: false}

function Car(model, year, miles) {
  this.model = model;
  this.year = year;
  this.miles = miles;

  this.toString = function () {
    return this.model + " has done " + this.miles + " miles";
  };
}

// Usage:

// We can create new instances of the car
var civic = new Car("Honda Civic", 2009, 20000);
var mondeo = new Car("Ford Mondeo", 2010, 5000);

// Modules
var myModule = {
  myProperty: "someValue",

  // object literals can contain properties and methods.
  // e.g we can define a further object for module configuration:
  myConfig: {
    useCaching: true,
    language: "en",
  },

  // a very basic method
  saySomething: function () {
    console.log("Where in the world is Paul Irish today?");
  },

  // output a value based on the current configuration
  reportMyConfig: function () {
    console.log(
      "Caching is: " + (this.myConfig.useCaching ? "enabled" : "disabled")
    );
  },

  // override the current configuration
  updateMyConfig: function (newConfig) {
    if (typeof newConfig === "object") {
      this.myConfig = newConfig;
      console.log(this.myConfig.language);
    }
  },
};

// Outputs: Where in the world is Paul Irish today?
myModule.saySomething();

// Outputs: Caching is: enabled
myModule.reportMyConfig();

// Outputs: fr
myModule.updateMyConfig({
  language: "fr",
  useCaching: false,
});

// Outputs: Caching is: disabled
myModule.reportMyConfig();

// Self contained module for shopping
var basketModule = (function () {
  // privates

  var basket = [];

  function doSomethingPrivate() {
    //...
  }

  function doSomethingElsePrivate() {
    //...
  }

  // Return an object exposed to the public
  return {
    // Add items to our basket
    addItem: function (values) {
      basket.push(values);
    },

    // Get the count of items in the basket
    getItemCount: function () {
      return basket.length;
    },

    // Public alias to a private function
    doSomething: doSomethingPrivate,

    // Get the total value of items in the basket
    getTotal: function () {
      var q = this.getItemCount(),
        p = 0;

      while (q--) {
        p += basket[q].price;
      }

      return p;
    },
  };
})();
