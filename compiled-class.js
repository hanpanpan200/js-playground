console.log('1. ES6 class')
class A {
	constructor(name) {
    	this.name = name
    }
	static staticProperty = 'someValue';  
  	sayHello() {
    	console.log(this.name)
    }
}

console.log('2. After compile, it will generate the code below:');

"use strict";

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps); 
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var A = function () {
  function A(name) {
    _classCallCheck(this, A);

    this.name = name;
  }

  _createClass(A, [{
    key: "sayHello",
    value: function sayHello() {
      console.log(this.name);
    }
  }]);

  return A;
}();

A.staticProperty = 'someValue';