const obj = {
    name: "Parth",
    age: 19,
    "is-boolean": true,
    whoAmI: function() {
        console.log(`You are ${this.name}`);
    }
}

// To add
obj.hobby = "Programming";
console.log(obj);

// To delete using delete operator
delete obj.hobby;
console.log(obj);

// Accessing object entities usinng dot notation
console.log(obj.name);
console.log(obj.age);
obj.whoAmI();

// Accessing object entities using bracket notation
console.log(obj["is-boolean"]);

console.log(Object.keys(obj)); 
console.log(Object.values(obj)); 
console.log(Object.entries(obj)); 