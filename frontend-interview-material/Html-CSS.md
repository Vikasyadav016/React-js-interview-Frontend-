If you're preparing for an experienced Frontend Developer interview, expect a mix of **theoretical concepts**, **practical coding tasks**, **CSS architecture**, **browser behavior**, **performance**, and **real-world problem solving**.

---

# HTML Interview Questions

## 1. What is the difference between HTML and HTML5?

### Theory

HTML5 introduced:

* Semantic elements (`<header>`, `<article>`, `<section>`, etc.)
* Native audio/video support
* Canvas API
* Local Storage
* Geolocation
* Improved forms

### Example

```html
<header>
  <h1>My Website</h1>
</header>

<article>
  <h2>Blog Post</h2>
  <p>Content...</p>
</article>
```

---

## 2. What are semantic HTML elements?

### Theory

Semantic elements describe their meaning to browsers and screen readers.

Examples:

```html
<header>
<nav>
<main>
<section>
<article>
<aside>
<footer>
```

### Practical Question

Convert:

```html
<div class="header"></div>
<div class="menu"></div>
<div class="content"></div>
```

Into semantic HTML:

```html
<header></header>
<nav></nav>
<main></main>
```

---

## 3. Difference between localStorage, sessionStorage, and cookies?

| Feature        | localStorage | sessionStorage | Cookies      |
| -------------- | ------------ | -------------- | ------------ |
| Size           | 5-10 MB      | 5-10 MB        | 4 KB         |
| Expiry         | Never        | Tab close      | Configurable |
| Sent to server | No           | No             | Yes          |

### Example

```javascript
localStorage.setItem("theme", "dark");

sessionStorage.setItem("token", "123");
```

---

## 4. What is the difference between id and class?

### Example

```html
<div id="header"></div>

<div class="card"></div>
<div class="card"></div>
```

### Theory

* `id` must be unique
* `class` can be reused

---

## 5. What are data attributes?

```html
<button data-user-id="123">
  Edit
</button>
```

Access:

```javascript
const btn = document.querySelector("button");

console.log(btn.dataset.userId);
```

---

# CSS Interview Questions

---

## 6. Explain CSS Specificity

### Example

```css
p {
  color: blue;
}

.text {
  color: green;
}

#title {
  color: red;
}
```

```html
<p id="title" class="text">
 Hello
</p>
```

Result:

```css
red
```

Because:

```text
Inline > ID > Class > Element
```

---

## 7. Difference between relative, absolute, fixed, and sticky

### Relative

```css
.box {
  position: relative;
  left: 20px;
}
```

Moves relative to original position.

---

### Absolute

```css
.child {
  position: absolute;
  top: 0;
}
```

Positioned relative to nearest positioned parent.

---

### Fixed

```css
.navbar {
  position: fixed;
  top: 0;
}
```

Stays fixed during scroll.

---

### Sticky

```css
.header {
  position: sticky;
  top: 0;
}
```

Acts normal until reaching top.

---

## 8. Flexbox vs Grid

### Flexbox

1-dimensional

```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

Best for:

* Navbar
* Row layouts

---

### Grid

2-dimensional

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
```

Best for:

* Dashboard
* Complex layouts

---

## 9. Explain Box Model

```css
div {
  width: 200px;
  padding: 20px;
  border: 5px solid;
}
```

Total Width:

```text
200 + 40 + 10
= 250px
```

Using:

```css
box-sizing: border-box;
```

keeps width fixed.

---

## 10. Difference between visibility:hidden and display:none

### display:none

```css
display: none;
```

* Removed from layout

---

### visibility:hidden

```css
visibility: hidden;
```

* Space remains

---

## 11. What is z-index?

```css
.modal {
  position: fixed;
  z-index: 9999;
}
```

Works only on positioned elements.

---

# Practical CSS Questions

---

## 12. Center a div horizontally and vertically

### Flexbox

```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
```

---

## 13. Create a responsive card grid

```css
.cards {
  display: grid;
  grid-template-columns:
    repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}
```

---

## 14. Create a CSS triangle

```css
.triangle {
  width: 0;
  height: 0;

  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-bottom: 100px solid red;
}
```

---

# Advanced CSS Questions

---

## 15. Difference between em, rem, %, vw, vh

### Example

```css
font-size: 2rem;
width: 50%;
height: 100vh;
```

| Unit | Relative To     |
| ---- | --------------- |
| em   | Parent          |
| rem  | Root html       |
| %    | Parent          |
| vw   | Viewport width  |
| vh   | Viewport height |

---

## 16. What is CSS BEM?

```html
<div class="card">
  <h2 class="card__title"></h2>

  <button class="card__btn card__btn--primary">
    Save
  </button>
</div>
```

### BEM

```text
Block
Element
Modifier
```

Used for scalable CSS.

---

## 17. How does browser render a webpage?

### Theory

1. Parse HTML
2. Create DOM
3. Parse CSS
4. Create CSSOM
5. Build Render Tree
6. Layout
7. Paint
8. Composite

Interviewers often ask this for senior roles.

---

# Real-World Frontend Practical Questions

---

## 18. Build a responsive navbar

Requirements:

* Desktop menu
* Mobile hamburger
* Smooth transition

Expected:

```html
<nav>
  <button>☰</button>
</nav>
```

```css
@media (max-width:768px) {
  .menu {
    display:none;
  }
}
```

---

## 19. Implement a modal

Questions:

* Prevent background scroll
* Close on ESC
* Close on outside click
* Focus trapping

Example:

```javascript
document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    closeModal();
  }
});
```

---

## 20. Create a tooltip

```html
<div class="tooltip">
 Hover me
 <span>Tooltip text</span>
</div>
```

```css
.tooltip span {
  opacity: 0;
}

.tooltip:hover span {
  opacity: 1;
}
```

---

# Senior-Level CSS Questions

### Explain stacking context.

### Why does z-index sometimes not work?

### What causes layout shifts?

### Difference between repaint and reflow?

### How would you optimize CSS for performance?

### How do CSS variables work?

Example:

```css
:root {
  --primary: #3498db;
}

button {
  background: var(--primary);
}
```

---

# Common Coding Round Question

Create this layout:

```text
+----------------------+
| Header               |
+----------------------+
| Sidebar | Content    |
|         |            |
+----------------------+
| Footer               |
+----------------------+
```

Using CSS Grid:

```css
.container {
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar content"
    "footer footer";

  grid-template-columns: 250px 1fr;
}
```

---

# Frequently Asked Experienced Frontend Questions

1. Explain Critical Rendering Path.
2. What is CLS, LCP, and FID?
3. What is lazy loading?
4. Difference between Flexbox and Grid.
5. Explain accessibility (ARIA).
6. How would you build a responsive design system?
7. How do you debug CSS issues?
8. What is CSS containment?
9. What are container queries?
10. How do you improve Core Web Vitals?

These are the kinds of questions commonly asked for **3–10+ years experienced Frontend Developer** interviews, especially in product companies and senior frontend roles.
