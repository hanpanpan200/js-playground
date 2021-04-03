function Human() {
  this.species = 'Human';
}

Human.prototype.getSpecies = function() {
  return this.species;
}

const human1 = new Human();

console.info('1. 任何情况下，prototype 的值都是一个对象')
console.log('Human.prototype =' ,Human.prototype);
console.log('human1.__proto__ =', human1.__proto__);

function Woman() {
  this.sex = 'Woman';
}

const woman1 = new Woman();

console.log('Woman.prototype =', Woman.prototype);
console.log('woman1.__proto__ =', woman1.__proto__);

Woman.prototype = human1;
const woman2 = new Woman();

console.log('Woman.prototype =', Woman.prototype);
console.log('woman1.__proto__ =', woman1.__proto__);
console.log('woman2.__proto__ =', woman2.__proto__);

console.log('2. 原型属性查找机制');
console.log('woman2.__proto__.__proto__ === Human.prototype', woman2.__proto__.__proto__ === Human.prototype)

// 对象属性的查找路径：先从实例自身属性上找，若找不到，从本层原型对象的属性上找，若还找不到，且还有下一级原型对象，继续在嵌套更深的一层原型对象上找。直到原型链末端才会停下来。
console.log(woman1.species) // woman1.species 查找路径： woman1 ownProperty -> Woman.__proto__
console.log(woman2.species) // woman2.species 查找路径：woman2 ownProperty -> Woman.__proto__ -> Woman.__proto__.__proto__

console.log('3. 通过 instanceof 判断实例和原型的关系');
console.log(woman1 instanceof Human)
console.log(woman2 instanceof Human);

console.log('4. 演示原型链层次');
console.log('Woman.prototype instanceof Human =', Woman.prototype instanceof Human); 
