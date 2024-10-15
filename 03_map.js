const map = new Map([
    ['Name', 'Parth'], 
    ['Surname', 'Panchal'], 
    ['Age', 19]
])

console.log(`\n`);
for (const [key, values] of map) {
    console.log(`${key}: ${values}`);
}
console.log(`\n`);

map.set('Hobby', 'Coding')

console.log(`Map contains 'Age' key: ${map.has('Age')}`)
console.log(`Deleting the 'Age' key: ${map.delete('Age')}`)
console.log(`Map size is: ${map.size}`)
console.log(`Clearing the map`)
map.clear()
console.log(`\n`);

for (const [key, values] of map) {
    console.log(`${key}: ${values}`);
}