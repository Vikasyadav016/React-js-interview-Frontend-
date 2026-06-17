If you're preparing for JavaScript interviews or learning arrays deeply, here is a complete guide to **JavaScript Array Questions + All Important Array Methods with Simple Explanations and Examples**.

# 1. What is an Array?

An array is a special variable that can store multiple values in a single variable.

```javascript
let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits);
```

Output:

```javascript
["Apple", "Banana", "Mango"]
```

---

# Basic Array Interview Questions

## Q1. How to create an array?

```javascript
let arr = [1, 2, 3];
```

or

```javascript
let arr = new Array(1, 2, 3);
```

---

## Q2. How to access array elements?

```javascript
let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits[0]);
```

Output:

```javascript
Apple
```

---

## Q3. How to find array length?

```javascript
let arr = [10, 20, 30];

console.log(arr.length);
```

Output:

```javascript
3
```

---

# Important Array Methods

---

## 1. push()

Adds element at the end.

```javascript
let arr = [1, 2];

arr.push(3);

console.log(arr);
```

Output:

```javascript
[1, 2, 3]
```

---

## 2. pop()

Removes last element.

```javascript
let arr = [1, 2, 3];

arr.pop();

console.log(arr);
```

Output:

```javascript
[1, 2]
```

---

## 3. unshift()

Adds element at the beginning.

```javascript
let arr = [2, 3];

arr.unshift(1);

console.log(arr);
```

Output:

```javascript
[1, 2, 3]
```

---

## 4. shift()

Removes first element.

```javascript
let arr = [1, 2, 3];

arr.shift();

console.log(arr);
```

Output:

```javascript
[2, 3]
```

---

## 5. includes()

Checks whether value exists.

```javascript
let arr = [10, 20, 30];

console.log(arr.includes(20));
```

Output:

```javascript
true
```

---

## 6. indexOf()

Returns index of value.

```javascript
let arr = [10, 20, 30];

console.log(arr.indexOf(20));
```

Output:

```javascript
1
```

---

## 7. lastIndexOf()

Finds last occurrence.

```javascript
let arr = [10, 20, 30, 20];

console.log(arr.lastIndexOf(20));
```

Output:

```javascript
3
```

---

## 8. concat()

Combines arrays.

```javascript
let a = [1, 2];
let b = [3, 4];

let result = a.concat(b);

console.log(result);
```

Output:

```javascript
[1, 2, 3, 4]
```

---

## 9. join()

Converts array to string.

```javascript
let arr = ["A", "B", "C"];

console.log(arr.join("-"));
```

Output:

```javascript
A-B-C
```

---

## 10. reverse()

Reverses array.

```javascript
let arr = [1, 2, 3];

arr.reverse();

console.log(arr);
```

Output:

```javascript
[3, 2, 1]
```

---

## 11. sort()

Sorts array.

```javascript
let arr = [5, 2, 8, 1];

arr.sort((a, b) => a - b);

console.log(arr);
```

Output:

```javascript
[1, 2, 5, 8]
```

---

## 12. slice()

Returns a portion of array.

```javascript
let arr = [1, 2, 3, 4, 5];

console.log(arr.slice(1, 4));
```

Output:

```javascript
[2, 3, 4]
```

---

## 13. splice()

Add/remove elements.

```javascript
let arr = [1, 2, 3, 4];

arr.splice(1, 2);

console.log(arr);
```

Output:

```javascript
[1, 4]
```

---

## 14. forEach()

Loops through array.

```javascript
let arr = [1, 2, 3];

arr.forEach(item => {
  console.log(item);
});
```

Output:

```javascript
1
2
3
```

---

## 15. map()

Creates new array after modification.

```javascript
let arr = [1, 2, 3];

let result = arr.map(num => num * 2);

console.log(result);
```

Output:

```javascript
[2, 4, 6]
```

---

## 16. filter()

Filters elements.

```javascript
let arr = [1, 2, 3, 4, 5];

let result = arr.filter(num => num > 3);

console.log(result);
```

Output:

```javascript
[4, 5]
```

---

## 17. find()

Returns first matching element.

```javascript
let arr = [10, 20, 30];

let result = arr.find(num => num > 15);

console.log(result);
```

Output:

```javascript
20
```

---

## 18. findIndex()

Returns index of matching element.

```javascript
let arr = [10, 20, 30];

console.log(arr.findIndex(num => num > 15));
```

Output:

```javascript
1
```

---

## 19. some()

Checks if at least one element matches.

```javascript
let arr = [1, 2, 3];

console.log(arr.some(num => num > 2));
```

Output:

```javascript
true
```

---

## 20. every()

Checks if all elements match.

```javascript
let arr = [1, 2, 3];

console.log(arr.every(num => num > 0));
```

Output:

```javascript
true
```

---

## 21. reduce()

Reduces array to single value.

```javascript
let arr = [1, 2, 3, 4];

let sum = arr.reduce((acc, curr) => acc + curr, 0);

console.log(sum);
```

Output:

```javascript
10
```

---

## 22. flat()

Flattens nested arrays.

```javascript
let arr = [1, [2, [3]]];

console.log(arr.flat(2));
```

Output:

```javascript
[1, 2, 3]
```

---

## 23. flatMap()

Map + Flat together.

```javascript
let arr = [1, 2, 3];

let result = arr.flatMap(num => [num, num * 2]);

console.log(result);
```

Output:

```javascript
[1, 2, 2, 4, 3, 6]
```

---

## 24. Array.from()

Creates array from iterable.

```javascript
let str = "hello";

console.log(Array.from(str));
```

Output:

```javascript
["h", "e", "l", "l", "o"]
```

---

## 25. Array.isArray()

Checks if variable is array.

```javascript
let arr = [1, 2];

console.log(Array.isArray(arr));
```

Output:

```javascript
true
```

---

# Frequently Asked Interview Questions

## Reverse Array

```javascript
let arr = [1, 2, 3, 4];

let reversed = arr.reverse();

console.log(reversed);
```

---

## Find Maximum Number

```javascript
let arr = [5, 10, 20, 30];

console.log(Math.max(...arr));
```

Output:

```javascript
30
```

---

## Find Minimum Number

```javascript
let arr = [5, 10, 20, 30];

console.log(Math.min(...arr));
```

Output:

```javascript
5
```

---

## Remove Duplicates

```javascript
let arr = [1, 2, 2, 3, 3, 4];

let unique = [...new Set(arr)];

console.log(unique);
```

Output:

```javascript
[1, 2, 3, 4]
```

---

## Sum of Array

```javascript
let arr = [1, 2, 3, 4];

let sum = arr.reduce((a, b) => a + b, 0);

console.log(sum);
```

Output:

```javascript
10
```

---

## Merge Two Arrays

```javascript
let a = [1, 2];
let b = [3, 4];

let merged = [...a, ...b];

console.log(merged);
```

Output:

```javascript
[1, 2, 3, 4]
```

---

# Most Important Methods for Interviews

1. `push()`
2. `pop()`
3. `shift()`
4. `unshift()`
5. `slice()`
6. `splice()`
7. `map()`
8. `filter()`
9. `reduce()`
10. `find()`
11. `findIndex()`
12. `some()`
13. `every()`
14. `sort()`
15. `forEach()`
16. `includes()`
17. `flat()`
18. `flatMap()`

These are the array methods most commonly asked in JavaScript interviews for beginners to advanced levels.
