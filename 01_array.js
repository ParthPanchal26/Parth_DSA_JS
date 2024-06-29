let arr = [1, 2, 3, 'Parth'];

// To add element at the end of array
arr.push(4);

// To add element at the beginning of array
arr.unshift(0);

// To remove element at the end of array
arr.pop();

// To remove element from the beginning of array
arr.shift();

for (const item of arr) {
    console.log(item);
}