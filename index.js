// Write your solution here!
const drivers = ['Milo', 'Otis', 'Garfield'];
function destructivelyAppendDriver(name) {
  drivers.push(name);
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver() {
  drivers.pop();
}

function destructivelyRemoveFirstDriver() {
  drivers.shift();
}

function appendDriver(name) {
  let append_drivers = [...drivers, name];
  return append_drivers;
}

function prependDriver(name) {
  let prepend_drivers = [name, ...drivers];
  return prepend_drivers;
}
 function removeLastDriver() {
   let remove_driver = drivers.slice(-1);
   return remove_driver;
 }
