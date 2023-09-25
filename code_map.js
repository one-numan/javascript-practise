let map = new Map();
let person = {
  name: "John",
};
let personAccount = {
  balance: 5000,
};

// Set the Values
map.set("1", "Str1");
map.set("2", "dhs");
map.set(1, 22);
map.set(122, 21);
map.set(122, 1);
console.log(map.entries());
console.log(...map.entries());

// Get the Value
console.log(map.get("1"));
console.log(map.get("2"));
console.log(map.get(1));
console.log(map.get(122));
console.log(map.get(122));

// length of the Map using Size
let mapLength = map.size;
console.log(mapLength);

// get All the Keys
let mapAllKeys = map.keys();
console.log(mapAllKeys);

//  get all the Keys in the Array using Separator Object
mapAllKeys = [...map.keys()];
console.log(mapAllKeys);

// get All the values
let mapAllVal = map.values();
console.log(mapAllVal);

//  get All the Values in the Array Using Values
mapAllVal = [...mapAllVal];
console.log(mapAllVal);
