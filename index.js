var Person = function(first, last, middle) {
  this.first = first;
  this.middle = middle;
  this.last = last;
};

Person.prototype = {

  whoAreYou : function() {
    return this.first + (this.middle ? ' ' + this.middle: '') + ' ' + this.last;
  }
   
};

var angle = (angle>= startAngle && angle <= endAngle);
export function example1() {
  const array = [1, 2, 3];
array.map(console.log);
  return array;
}
export function example2() {
  const number = [1, 2, 3];
number.forEach(number => console.log(number));
return true;
}


var anything = "nothing"
var p1 = Person("Michiel", "Mulders", "", 23);


