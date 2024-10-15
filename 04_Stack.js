class Stack {

    constructor() {
        this.stack = [];
        this.top = -1;
        this.max = 4;
        this.poppedElement = "\nNo popped elements found!"
    }

    push(ele) {
        if (this.top === this.max - 1) {
            return `\nStack Overflow!!! ${this.max} elements added to stack! Can not push '${ele}'`
        }
        else {
            this.top++;
            this.stack[this.top] = ele;
            return `'${ele}' Pushed in Stack!`
        }
    }

    pop() {
        if (this.top === -1) return `\nStack Underflow!!! Empty Stack! Can not delete Element!!!`;

        this.poppedElement = this.stack[this.top];
        this.top--;
        return `${this.top + 1}: ${this.poppedElement}`;
    }

    peek() {
        if (this.top === -1) return `Empty Stack!!!`

        return `${this.stack[this.top]}`
    }

    isEmpty() {
        if (this.top === -1) {
            return `Empty`
        } else {
            return `${this.top + 1} ${typeof this.stack[this.top]} Elements`
        }
    }

    display() {
        if (this.top === -1) {
            return `\n\nEmpty Stack!! No Elements Found! 404!!!`
        } else {
            let elements = `\n\nStack Elements: `;
            let i = this.top;
            while (i >= 0) {
                elements += `\n${i}: ${this.stack[i]}`;
                i--;
            }
            return elements;
        }
    }

}

const stack = new Stack();

console.log(`\n\nStack Status: ${stack.isEmpty()}\n`)

let myProps = ['Parth', 'Panchal', 19, 'Coding', 'BMW R9T Scrambller'];
myProps.map((ele) => console.log(`\n${stack.push(ele)}`))

console.log(`${stack.display()}`);

console.log(`\n\nPopped Elements`)
console.log(`${stack.pop()}`);
console.log(`${stack.pop()}`);
console.log(`${stack.pop()}`);

console.log(`\n\nPeek Element: ${stack.peek()}`)

console.log(`${stack.display()}`);

console.log(`\n\nStack Status: ${stack.isEmpty()}\n`)