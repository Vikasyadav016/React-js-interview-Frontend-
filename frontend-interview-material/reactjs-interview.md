For a senior React developer with ~5 years of experience, interviewers usually focus less on basic hooks and more on architecture, performance, rendering behavior, state management, scalability, testing, and real-world problem solving.

# Advanced React Theory Questions

## 1. Explain React's rendering lifecycle.

**Expected topics:**

* Render phase vs Commit phase
* Virtual DOM reconciliation
* Fiber architecture
* Scheduling and prioritization
* Concurrent rendering

**Senior-level answer:**
React first creates a work-in-progress tree during the render phase. After reconciliation determines changes, React updates the actual DOM during the commit phase.

---

## 2. What is React Fiber?

**Follow-up questions:**

* Why was Fiber introduced?
* How does it improve performance?

**Answer points:**

* Rewritten reconciliation engine
* Breaks rendering work into units
* Supports interruption and prioritization
* Enables Concurrent Features

---

## 3. Difference between useEffect and useLayoutEffect?

| useEffect        | useLayoutEffect   |
| ---------------- | ----------------- |
| Runs after paint | Runs before paint |
| Non-blocking     | Blocks paint      |
| API calls        | DOM measurements  |

Example:

```jsx
useLayoutEffect(() => {
  const width = ref.current.offsetWidth;
}, []);
```

Used when measuring DOM dimensions.

---

## 4. Explain Reconciliation Algorithm.

Questions:

* How does React detect changes?
* Why are keys important?

Expected answer:

* Tree comparison process
* O(n) heuristic algorithm
* Key-based diffing
* Component preservation

Bad:

```jsx
{items.map((item, index) => (
  <Item key={index} />
))}
```

Good:

```jsx
<Item key={item.id} />
```

---

## 5. What causes unnecessary re-renders?

Examples:

```jsx
const obj = {};
```

New reference every render.

```jsx
<MyComponent data={{ name: "John" }} />
```

Creates new object every render.

Optimization:

```jsx
const data = useMemo(() => ({
  name: "John"
}), []);
```

---

## 6. Explain React.memo.

```jsx
const UserCard = React.memo(UserCardComponent);
```

Questions:

* When does it help?
* When does it hurt?

Expected:

* Prevents unnecessary renders
* Shallow comparison
* Not useful for cheap components

---

## 7. useMemo vs useCallback

```jsx
const value = useMemo(() => compute(), [dep]);

const callback = useCallback(() => {}, [dep]);
```

Interview trap:
useCallback is basically:

```jsx
useMemo(() => fn, deps);
```

---

## 8. Explain Concurrent Rendering.

Topics:

* Interruptible rendering
* Non-blocking UI
* Time slicing
* startTransition

Example:

```jsx
startTransition(() => {
  setSearchResults(results);
});
```

---

## 9. What is Suspense?

Example:

```jsx
<Suspense fallback={<Loader />}>
  <Profile />
</Suspense>
```

Topics:

* Lazy loading
* Data fetching integration
* Streaming SSR

---

## 10. How does React Context impact performance?

Problem:

```jsx
<AppContext.Provider value={value}>
```

Every consumer re-renders when value changes.

Optimization:

```jsx
const value = useMemo(() => ({
  user,
  login
}), [user]);
```

---

# State Management Questions

## 11. Redux vs Context API

Expected discussion:

Context:

* Dependency injection
* Small-medium state

Redux:

* Complex state
* DevTools
* Middleware
* Predictable updates

---

## 12. Explain Redux Middleware.

Example:

```jsx
const logger = store => next => action => {
  console.log(action);
  return next(action);
};
```

Questions:

* Why thunk works?
* Why saga works?

---

## 13. Redux Thunk vs Redux Saga

Thunk:

* Simpler
* Promise-based

Saga:

* Generator functions
* Complex workflows
* Cancellation support

---

## 14. What is RTK Query?

Topics:

* Data fetching
* Caching
* Invalidation
* Optimistic updates

---

# Performance Questions

## 15. How would you optimize a slow React application?

Expected answer:

1. React Profiler
2. Memoization
3. Virtualization
4. Code splitting
5. Bundle analysis
6. Lazy loading
7. Prevent unnecessary renders

---

## 16. How would you render 100,000 rows?

Bad:

```jsx
data.map(...)
```

Good:

* Virtualization

Libraries:

* react-window
* react-virtualized

---

## 17. Explain Code Splitting.

```jsx
const Dashboard = React.lazy(() =>
  import("./Dashboard")
);
```

Benefits:

* Smaller bundles
* Faster initial load

---

# Architecture Questions

## 18. How would you structure a large React project?

Example:

```text
src/
 ├── features/
 │    ├── auth/
 │    ├── users/
 │
 ├── shared/
 ├── hooks/
 ├── services/
 ├── utils/
 ├── routes/
```

Feature-based structure preferred over type-based.

---

## 19. Explain Micro Frontends.

Topics:

* Independent deployment
* Team autonomy
* Module Federation

Pros:

* Scalability

Cons:

* Complexity

---

## 20. How would you implement Role-Based Access Control (RBAC)?

Example:

```jsx
if (!user.permissions.includes("admin")) {
  return <Navigate to="/403" />;
}
```

Expected:

* Route guards
* Permission-based rendering
* Backend validation

---

# Practical Coding Questions

## 21. Build a Debounced Search

```jsx
const [query, setQuery] = useState("");

useEffect(() => {
  const timer = setTimeout(() => {
    fetchData(query);
  }, 500);

  return () => clearTimeout(timer);
}, [query]);
```

Follow-up:

* Implement custom hook.

---

## 22. Implement useDebounce Hook

```jsx
function useDebounce(value, delay) {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounced(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return debounced;
}
```

---

## 23. Build Infinite Scroll

Expected:

* Intersection Observer
* Pagination
* Loading state

```jsx
const observer = new IntersectionObserver(...)
```

---

## 24. Implement usePrevious Hook

```jsx
function usePrevious(value) {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
}
```

---

## 25. Build a Custom useFetch Hook

Interviewers expect:

* Loading
* Error handling
* AbortController
* Cleanup

---

## 26. Design a Dynamic Form Builder

Requirements:

* JSON schema
* Dynamic validation
* Conditional fields

Example:

```json
{
  "field": "email",
  "type": "text",
  "required": true
}
```

---

## 27. Design a Reusable Data Table

Features:

* Sorting
* Pagination
* Filtering
* Server-side support
* Column configuration

---

# React Machine Coding Round Questions

### Build:

1. Multi-step form
2. Kanban board
3. Todo app with drag-drop
4. File explorer
5. Nested comments
6. Google Docs-like editor
7. E-commerce cart
8. Chat application
9. Real-time notifications
10. Dashboard with charts

---

# Senior-Level System Design Questions

## 28. Design a scalable React application for 1 million users.

Expected discussion:

* Folder structure
* State management
* API layer
* Error boundaries
* Authentication
* Caching
* Code splitting
* Monitoring
* CI/CD

---

## 29. How would you implement frontend caching?

Topics:

* Browser cache
* Memory cache
* Query cache
* Stale-while-revalidate

Tools often discussed:

* TanStack Query
* SWR

---

## 30. Explain SSR, CSR, SSG, and ISR.

Framework discussions often include:

* Next.js

Key comparison:

| Type | SEO       | Speed             |
| ---- | --------- | ----------------- |
| CSR  | Poor      | Slower first load |
| SSR  | Good      | Fast              |
| SSG  | Excellent | Very fast         |
| ISR  | Excellent | Fast + updated    |

---

# Questions Frequently Asked in Senior React Interviews (2025–2026)

1. How React Fiber works internally?
2. Explain Concurrent Rendering.
3. Why does React re-render?
4. How do you optimize large applications?
5. Design a custom state management library.
6. Implement React Query from scratch.
7. Build Suspense-based data fetching.
8. Explain hydration.
9. How would you debug memory leaks?
10. How would you migrate a legacy React application?

If you're preparing for product companies (Amazon, Walmart, Adobe, Microsoft, Atlassian, Razorpay, Flipkart, etc.), focus heavily on:

* React internals
* Rendering behavior
* Performance optimization
* Custom hooks
* Machine coding
* Frontend system design
* State management architecture
* SSR/CSR/Next.js concepts
* Testing with Jest and React Testing Library

These areas usually carry more weight than basic hook questions for a 5-year-experience React developer.
