For a **5+ years experienced JavaScript / Frontend Developer (Senior Frontend, SDE-I, SDE-II)**, interviewers usually focus on:

* JavaScript internals
* Browser behavior
* Async programming
* Event Loop
* Closures
* Prototype & Inheritance
* Memory Management
* Performance Optimization
* Design Patterns
* ES6+ Features
* DOM & Rendering
* React fundamentals (if frontend role)
* System Design basics for frontend

Below are advanced interview questions with theory, practical examples, and simple explanations.

---

# 1. What is Execution Context?

## Answer

Execution Context is the environment where JavaScript code executes.

JavaScript creates:

1. Global Execution Context
2. Function Execution Context
3. Eval Execution Context (rare)

### Example

```javascript
var name = "John";

function greet() {
  var age = 25;
  console.log(name);
}

greet();
```

### Behind the scenes

Global Context:

```javascript
name -> undefined
greet -> function
```

Then code executes:

```javascript
name = "John"
```

When `greet()` runs:

New Function Execution Context is created.

```javascript
age -> undefined
```

Then:

```javascript
age = 25
```

### Interview Follow-up

Execution Context has two phases:

1. Memory Creation Phase
2. Execution Phase

---

# 2. Explain Hoisting Deeply

## Answer

Hoisting means moving declarations to the top during memory creation.

### Example

```javascript
console.log(a);

var a = 10;
```

Output:

```javascript
undefined
```

Internally:

```javascript
var a;

console.log(a);

a = 10;
```

---

### Function Hoisting

```javascript
greet();

function greet() {
  console.log("Hello");
}
```

Output:

```javascript
Hello
```

Functions are fully hoisted.

---

### let and const

```javascript
console.log(a);

let a = 10;
```

Output:

```javascript
ReferenceError
```

Reason:

Temporal Dead Zone (TDZ)

---

# 3. What is Temporal Dead Zone (TDZ)?

TDZ is the period between variable declaration hoisting and initialization.

```javascript
{
  console.log(a);

  let a = 10;
}
```

Until initialization:

```javascript
let a = 10;
```

variable exists but cannot be accessed.

---

# 4. Explain Closures with Real Example

## Answer

Closure = Function + Lexical Environment.

Inner function remembers outer variables even after outer function finishes.

### Example

```javascript
function outer() {
  let count = 0;

  return function inner() {
    count++;
    return count;
  };
}

const counter = outer();

console.log(counter());
console.log(counter());
```

Output:

```javascript
1
2
```

---

### Real-world Example

Private variables

```javascript
function createBankAccount() {
  let balance = 0;

  return {
    deposit(amount) {
      balance += amount;
    },

    getBalance() {
      return balance;
    }
  };
}
```

Used heavily in:

* React Hooks
* Event Handlers
* Debouncing
* Currying

---

# 5. What is Lexical Scope?

Scope is determined where function is written, not where called.

```javascript
let name = "Global";

function outer() {
  let name = "Outer";

  function inner() {
    console.log(name);
  }

  return inner;
}

outer()();
```

Output:

```javascript
Outer
```

Because scope is lexical.

---

# 6. Explain Event Loop in Detail

Most asked question for 5+ years.

JavaScript is:

```text
Single Threaded
```

But handles async tasks using:

```text
Call Stack
Web APIs
Callback Queue
Microtask Queue
Event Loop
```

---

Example

```javascript
console.log(1);

setTimeout(() => {
  console.log(2);
}, 0);

Promise.resolve().then(() => {
  console.log(3);
});

console.log(4);
```

Output:

```javascript
1
4
3
2
```

---

### Why?

Step 1

```javascript
1
```

Step 2

setTimeout → Web API

Step 3

Promise → Microtask Queue

Step 4

```javascript
4
```

Step 5

Microtasks execute first

```javascript
3
```

Step 6

Macrotasks

```javascript
2
```

Final:

```javascript
1 4 3 2
```

---

# 7. Difference Between Microtask and Macrotask

## Microtasks

Higher priority

Examples:

```javascript
Promise.then()
queueMicrotask()
MutationObserver
```

---

## Macrotasks

Lower priority

Examples:

```javascript
setTimeout
setInterval
setImmediate
MessageChannel
```

Event loop always executes:

```text
Call Stack
↓
All Microtasks
↓
One Macrotask
↓
Repeat
```

---

# 8. What is Debouncing?

Used for search input optimization.

Without debouncing:

```javascript
a
ab
abc
abcd
```

4 API calls

---

With Debouncing:

Only final API call.

### Implementation

```javascript
function debounce(fn, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}
```

Usage

```javascript
const search = debounce(() => {
  console.log("API Call");
}, 500);
```

---

# 9. What is Throttling?

Limits execution rate.

Example:

Scroll event

Without throttle:

```javascript
500 calls/sec
```

With throttle:

```javascript
1 call / second
```

Implementation

```javascript
function throttle(fn, delay) {
  let last = 0;

  return function (...args) {
    let now = Date.now();

    if (now - last >= delay) {
      last = now;
      fn.apply(this, args);
    }
  };
}
```

---

# 10. Explain call(), apply(), bind()

### call

```javascript
user.say.call(admin, "Hello");
```

Arguments individually.

---

### apply

```javascript
user.say.apply(admin, ["Hello"]);
```

Arguments array.

---

### bind

Returns new function.

```javascript
const fn = user.say.bind(admin);

fn();
```

---

# 11. Difference Between Arrow Function and Normal Function

### Normal Function

Has own:

```javascript
this
arguments
prototype
```

---

### Arrow Function

Does not have own:

```javascript
this
arguments
prototype
```

Example

```javascript
const obj = {
  name: "John",

  greet() {
    setTimeout(() => {
      console.log(this.name);
    });
  }
};
```

Output:

```javascript
John
```

Arrow inherits parent's this.

---

# 12. Explain Prototype and Prototype Chain

JavaScript uses prototypal inheritance.

```javascript
function Person(name) {
  this.name = name;
}

Person.prototype.sayHi = function () {
  console.log("Hi");
};

const p = new Person("John");
```

Lookup order:

```text
p
↓
Person.prototype
↓
Object.prototype
↓
null
```

Called Prototype Chain.

---

# 13. Deep Copy vs Shallow Copy

### Shallow Copy

```javascript
const obj1 = {
  user: {
    name: "John"
  }
};

const obj2 = { ...obj1 };

obj2.user.name = "Mike";
```

Both changed.

---

### Deep Copy

```javascript
const obj2 = structuredClone(obj1);
```

or

```javascript
JSON.parse(JSON.stringify(obj1))
```

(With limitations)

---

# 14. Explain Memory Leak

When unused memory cannot be garbage collected.

Common causes:

### Global Variables

```javascript
data = [];
```

---

### Event Listeners

```javascript
button.addEventListener("click", fn);
```

Not removed.

---

### Closures

Holding large objects.

---

### Timers

```javascript
setInterval(...)
```

Never cleared.

---

# 15. Promise vs Async/Await

### Promise

```javascript
fetchData()
  .then(data => process(data))
  .catch(err => console.log(err));
```

---

### Async/Await

```javascript
async function getData() {
  try {
    const data = await fetchData();
    process(data);
  } catch (err) {
    console.log(err);
  }
}
```

Cleaner syntax.

Internally still uses Promises.

---

# 16. Implement Promise.all()

### Polyfill

```javascript
function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    const results = [];
    let completed = 0;

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then(value => {
          results[index] = value;
          completed++;

          if (completed === promises.length) {
            resolve(results);
          }
        })
        .catch(reject);
    });
  });
}
```

Senior-level favorite question.

---

# 17. Explain Event Delegation

Instead of multiple listeners:

```javascript
li1.addEventListener(...)
li2.addEventListener(...)
li3.addEventListener(...)
```

Use parent.

```javascript
ul.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    console.log(e.target.textContent);
  }
});
```

Benefits:

* Better performance
* Less memory
* Dynamic elements supported

---

# 18. Explain Browser Rendering Process

```text
HTML
 ↓
DOM
 ↓
CSSOM
 ↓
Render Tree
 ↓
Layout
 ↓
Paint
 ↓
Composite
```

Interview Question:

### Reflow

Layout recalculation.

Expensive.

### Repaint

Only visual update.

Cheaper.

---

# 19. What is Currying?

Transform:

```javascript
add(1,2,3)
```

into

```javascript
add(1)(2)(3)
```

Implementation

```javascript
function add(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
```

Output:

```javascript
add(1)(2)(3)
```

6

---

# 20. Output Based Question (Very Common)

```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  });
}
```

Output

```javascript
3
3
3
```

Why?

`var` is function scoped.

Loop finishes first.

i becomes 3.

---

Fix

```javascript
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  });
}
```

Output

```javascript
0
1
2
```

---

# Senior-Level Interview Questions (SDE-II)

1. Implement debounce with leading & trailing options.
2. Implement throttle from scratch.
3. Create Promise.all polyfill.
4. Create Promise.race polyfill.
5. Implement deepClone.
6. Design LRU Cache.
7. Explain Event Loop internals.
8. How React batching works.
9. Difference between MutationObserver and ResizeObserver.
10. How browser rendering affects React performance.
11. Explain Virtual DOM vs Real DOM.
12. How React Fiber works.
13. Design an infinite scrolling component.
14. How would you optimize a dashboard rendering 10,000 rows?
15. Explain memory profiling and performance debugging in Chrome DevTools.

These are the most frequently asked advanced JavaScript topics for Senior Frontend Developer, SDE-I, and SDE-II interviews at companies such as Amazon, Flipkart, Walmart Global Tech, Adobe, Paytm, and Microsoft.

A strong 5-year frontend candidate should be comfortable explaining not only "what" a concept is, but also "how it works internally", "performance implications", and "real-world use cases".
