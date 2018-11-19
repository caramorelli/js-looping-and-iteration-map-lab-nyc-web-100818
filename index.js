// Code your solution in this file.
// ## Use `map` to work with `String`s as well as `Object`s

// This lab contains an array of drivers with various information. We need to
// write methods using the `map` method so that Scuber employees can easily change
// the data into the format their various business rules require. Be sure to run
// the tests to get a feel for the types of problems this lab is asking you to
// solve _before_ you start writing JavaScript code.

// ## Use `map` to perform a set of `String` transformations

// Write `lowerCaseDrivers` - this function takes an array of drivers, and returns
// an array of the drivers names in lowercase. Write `nameToAttributes` - this
// function takes an array of drivers with their first and last name separated by a
// space, and returns an array of JavaScript objects with `firstName` and
// `lastName` attributes.

function lowerCaseDrivers(list) {
  return list.map(function(driver) {
    return driver.toLowerCase();
  });
}


function nameToAttributes(array) {
  var name_hash = {};
  for ( var i = 0; i < array.length; i++) {
    var name_split = (array[i]).toLowerCase().split(' ');
    name_hash['firstName'] = name_split[0];
    name_hash['lastName'] = name_split[-1]
  }
  return name_hash
}

function attributesToPhrase(drivers) {
  return drivers.map(function(driver) {
    return `${driver.name} is from ${driver.hometown}`;
  });
}