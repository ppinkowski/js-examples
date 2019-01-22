const base = {
  name: 'steve',
  addOne: num => num + 1
};

const foo = Object.create(base);
foo.bar = 123;

console.log(`foo.name: ${foo.name}`);
console.log(`addOne Result: ${foo.addOne(2)}`);
console.log(`foo.bar: ${foo.bar}`);

const bar = Object.create(foo);

console.log(`bar.name: ${bar.name}`);
