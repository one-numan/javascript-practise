console.log("Start Iterables 1");

let iterator = {
  i: 0,
  next: function () {
    return {
      value: this.i,
      done: this.i++ > 5,
    };
  },
};

let iterable = {
  name: "John",
  age: 34,
  [Symbol.iterator]() {
    return iterator;
  },
};

for (let a of iterable) {
  console.log(a);
}
console.log("End Iterables 1");
