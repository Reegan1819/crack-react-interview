import CodingProblemsDemo from "./Examples/CodingProblemsDemo";
import EmployeeSearch from "./Examples/EmployeeSearch";
import UsersFetchDemo from "./Examples/UsersFetchDemo";

// Each item: { q, a, points?, code?, demo? }
// `demo` is a live component rendered under the answer.
const questions = [
  {
    title: "1. React Fundamentals",
    items: [
      {
        q: "What are keys in React lists?",
        a: "A key is a special string or number prop that gives each item in a list a stable identity among its siblings. React uses keys during reconciliation to work out which items were added, removed or moved, so it can update the DOM with the minimum amount of work and keep component state attached to the right item.",
        points: [
          "Keys must be unique among siblings and stable between renders.",
          "Use a real id from the data. Avoid the array index if the list can be reordered, filtered or edited, because state and DOM nodes get attached to the wrong item.",
          "Never generate keys during render (for example Math.random()), because every render would remount every item.",
          "Keys are not passed to the component as a prop.",
        ],
        code: `{todos.map((todo) => (
  <li key={todo.id}>{todo.text}</li>
))}`,
      },
      {
        q: "What are React Hooks?",
        a: "Hooks are functions (introduced in React 16.8) that let function components use state, lifecycle behaviour and other React features without writing a class. Built-in examples are useState, useEffect, useContext, useRef, useMemo, useCallback and useReducer. You can combine them into your own custom hooks to share stateful logic between components.",
      },
      {
        q: "What are the rules of Hooks and why do we follow them?",
        a: "There are two rules: (1) call hooks only at the top level of a component or custom hook, never inside loops, conditions or nested functions; (2) call hooks only from React function components or other custom hooks.",
        points: [
          "Why: React does not know hooks by name. It stores them in a list per component and matches them by call order on every render.",
          "If a hook is skipped on one render (for example inside an if), every later hook shifts position and gets the wrong state.",
          "The eslint-plugin-react-hooks package enforces both rules (and checks effect dependencies).",
        ],
        code: `// wrong: the hook is called conditionally
if (loggedIn) {
  const [name, setName] = useState("");
}

// right: hook at the top level, condition inside
const [name, setName] = useState("");
if (loggedIn) {
  // use name here
}`,
      },
      {
        q: "Can we directly modify React state?",
        a: "No. State must be treated as immutable. Mutating it directly does not trigger a re-render, and because the reference is unchanged, React.memo, useMemo and effect dependency checks see 'no change'. Always call the setter with a new object or array.",
        code: `// wrong: same reference, React bails out
user.name = "Sam";
setUser(user);

// right: create a new object / array
setUser({ ...user, name: "Sam" });
setItems([...items, newItem]);
setItems(items.filter((i) => i.id !== id));`,
      },
      {
        q: "What is useRef and why do we use it?",
        a: "useRef returns a mutable object { current } that React keeps for the whole life of the component. Changing ref.current does not cause a re-render. It is used to access DOM nodes (focus, scroll, measure) and to store values that must survive renders without being part of the UI, such as timer ids, the previous value, or a 'mounted' flag.",
        code: `const inputRef = useRef(null);
const timerId = useRef(null);

<input ref={inputRef} />
<button onClick={() => inputRef.current.focus()}>Focus</button>`,
      },
      {
        q: "What is an Error Boundary?",
        a: "An error boundary is a class component that catches JavaScript errors thrown while rendering its child tree, logs them, and shows a fallback UI instead of unmounting the whole app. It is defined with getDerivedStateFromError (to render the fallback) and componentDidCatch (to log).",
        points: [
          "It does NOT catch errors in event handlers, async code (setTimeout, promises), server-side rendering, or errors thrown by the boundary itself.",
          "There is no hook equivalent yet. The react-error-boundary library wraps the class for you.",
          "Place boundaries around independent widgets and at the route level so one failure does not blank the page.",
        ],
        code: `class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    logError(error, info.componentStack);
  }

  render() {
    if (this.state.hasError) return <h2>Something went wrong.</h2>;
    return this.props.children;
  }
}

<ErrorBoundary>
  <Dashboard />
</ErrorBoundary>`,
      },
      {
        q: "How can we avoid unnecessary re-renders in React?",
        a: "First measure with the React DevTools Profiler, then apply the cheapest fix that works.",
        points: [
          "Keep state as close as possible to where it is used (colocation) so a change does not re-render a big parent.",
          "React.memo on children that receive the same props often.",
          "useCallback / useMemo for function and object props passed to memoized children, so their references stay stable.",
          "Do not store derived data in state. Compute it during render (useMemo if expensive).",
          "Split context into smaller contexts, or keep fast-changing values out of context.",
          "Pass expensive subtrees as children so they are not re-created when the parent re-renders.",
          "Use stable keys and virtualize long lists.",
        ],
        code: `const Row = React.memo(function Row({ item, onSelect }) {
  return <li onClick={() => onSelect(item.id)}>{item.name}</li>;
});

const onSelect = useCallback((id) => setSelectedId(id), []);`,
      },
      {
        q: "What are the new features introduced in React 18?",
        a: "React 18 introduced concurrent rendering, which lets React prepare multiple versions of the UI and interrupt low-priority work.",
        points: [
          "createRoot replaces ReactDOM.render and opts in to the new behaviour.",
          "Automatic batching: state updates inside promises, timeouts and native events are batched into one render (previously only React event handlers were batched).",
          "Transitions: startTransition and useTransition mark an update as non-urgent so typing stays responsive.",
          "useDeferredValue: defers re-rendering with a value that changes quickly.",
          "Suspense improvements: streaming server-side rendering and selective hydration.",
          "New hooks: useId, useSyncExternalStore, useInsertionEffect.",
          "StrictMode in development now mounts, unmounts and re-mounts every component once to surface effects without proper cleanup.",
        ],
        code: `import { createRoot } from "react-dom/client";
createRoot(document.getElementById("root")).render(<App />);

const [isPending, startTransition] = useTransition();
startTransition(() => setFilter(value)); // low priority update

const deferredQuery = useDeferredValue(query);`,
      },
      {
        q: "What is React Compiler?",
        a: "React Compiler is a build-time tool (a Babel plugin) that analyses your components and hooks and automatically memoizes values and functions. It does the job of manually writing useMemo, useCallback and React.memo, so you can write plain code and still avoid unnecessary re-renders.",
        points: [
          "It reached a stable 1.0 release in October 2025.",
          "It relies on your code following the Rules of React (pure components, no mutating props or state). Code that breaks them is skipped or must be fixed.",
          "It works with React 19, and with 17 and 18 via a small runtime package.",
          "Manual useMemo / useCallback are still valid. They remain useful as escape hatches, for example to control effect dependencies.",
        ],
      },
      {
        q: "What is the difference between useMemo and useCallback?",
        a: "useMemo caches the result of a calculation. useCallback caches the function itself. useCallback(fn, deps) is equivalent to useMemo(() => fn, deps).",
        points: [
          "Use useMemo to avoid repeating an expensive calculation, or to keep an object / array reference stable.",
          "Use useCallback to keep a function reference stable, typically when passing it to a React.memo child or listing it in an effect's dependencies.",
          "Neither is free. Do not add them without a measured reason.",
        ],
        code: `const sorted = useMemo(() => sortRows(rows), [rows]);

const handleSave = useCallback(() => save(form), [form]);
// same as: useMemo(() => () => save(form), [form])`,
      },
    ],
  },
  {
    title: "2. JavaScript Concepts",
    items: [
      {
        q: "What is a Closure?",
        a: "A closure is a function together with the variables from the scope where it was created. The inner function keeps access to those variables even after the outer function has finished running.",
        points: [
          "Used for data privacy, factories, memoization, debounce / throttle, and every React hook callback.",
          "Pitfall in React: a stale closure. An effect or callback captures the state of the render it was created in, so a setInterval with [] deps keeps logging the first value. Fix it by adding the dependency or by using a functional update.",
        ],
        code: `function makeCounter() {
  let count = 0;
  return () => ++count; // closes over count
}
const next = makeCounter();
next(); // 1
next(); // 2

// stale closure in React
useEffect(() => {
  const id = setInterval(() => console.log(count), 1000); // always the first count
  return () => clearInterval(id);
}, []);

// fix: functional update, no stale value
useEffect(() => {
  const id = setInterval(() => setCount((c) => c + 1), 1000);
  return () => clearInterval(id);
}, []);`,
      },
      {
        q: "What is a Race Condition?",
        a: "A race condition is when the result of a program depends on the order or timing in which asynchronous operations finish, and that order is not guaranteed. Classic example: the user types 'ab' and then 'abc'. Two requests go out, but the response for 'ab' arrives last and overwrites the correct results for 'abc'.",
      },
      {
        q: "How do we handle race conditions in React?",
        a: "Make sure only the response for the latest request is used.",
        points: [
          "AbortController: cancel the previous request in the effect cleanup (best option, it also stops the network call).",
          "An ignore flag in the cleanup: the old response is still downloaded but not applied to state.",
          "Debounce the input so fewer requests are fired.",
          "Use a data library (React Query, SWR, RTK Query), which handles this for you.",
        ],
        code: `useEffect(() => {
  const controller = new AbortController();

  fetch("/api/search?q=" + query, { signal: controller.signal })
    .then((res) => res.json())
    .then(setResults)
    .catch((err) => {
      if (err.name !== "AbortError") setError(err.message);
    });

  return () => controller.abort(); // runs before the next effect
}, [query]);

// ignore-flag alternative
useEffect(() => {
  let ignore = false;
  fetchResults(query).then((data) => {
    if (!ignore) setResults(data);
  });
  return () => {
    ignore = true;
  };
}, [query]);`,
      },
    ],
  },
  {
    title: "3. React Performance & Optimization",
    items: [
      {
        q: "How do you optimize a slow React application?",
        a: "Measure first, then fix the biggest bottleneck. Do not guess.",
        points: [
          "Profile: React DevTools Profiler, Chrome Performance tab, Lighthouse.",
          "Reduce bundle size: code splitting with React.lazy and Suspense, route-level splitting, tree shaking, analyze the bundle, lighter libraries.",
          "Reduce renders: state colocation, React.memo, useMemo, useCallback, stable keys.",
          "Large data: pagination or virtualization (react-window, TanStack Virtual).",
          "Slow input: debounce, useTransition, useDeferredValue.",
          "Network: caching (React Query / SWR), request deduplication, compression, CDN.",
          "Assets: lazy-load and size images, modern formats, font loading.",
          "Move heavy computation out of render, or into a Web Worker.",
        ],
        code: `const Reports = React.lazy(() => import("./Reports"));

<Suspense fallback={<p>Loading...</p>}>
  <Reports />
</Suspense>`,
      },
      {
        q: "How do you handle a very large table?",
        a: "Never render every row. Render only what the user can see (virtualization / windowing) or only one page at a time (pagination).",
        points: [
          "Virtualization: render only the visible rows plus a small buffer, with a spacer for the rest. Use react-window or TanStack Virtual / Table.",
          "Server-side pagination, sorting and filtering for huge data sets.",
          "Memoize the row component (React.memo) and give it a stable id key.",
          "Keep selection and other per-row state in one parent (for example a Set of ids) rather than a state per row.",
          "Fixed row heights make windowing simple and fast.",
        ],
        code: `// windowing idea (what the libraries do for you)
const ROW_HEIGHT = 40;
const VIEWPORT = 400;
const BUFFER = 5;

const start = Math.max(0, Math.floor(scrollTop / ROW_HEIGHT) - BUFFER);
const end = start + Math.ceil(VIEWPORT / ROW_HEIGHT) + BUFFER * 2;
const visibleRows = rows.slice(start, end);

// translate the visible rows down by start * ROW_HEIGHT,
// and size the scroll container to rows.length * ROW_HEIGHT`,
      },
      {
        q: "How do you implement server-side pagination?",
        a: "The client sends the page number and page size; the server returns only that slice plus the total count. The client never holds the whole data set. Re-fetch whenever page, page size, sort or filters change.",
        points: [
          "Offset pagination (page + limit): simple, good for tables with page numbers.",
          "Cursor pagination (after=lastId): more efficient and stable for huge or fast-changing data, good for infinite scroll.",
          "Reset to page 1 when a filter or the search text changes.",
          "Keep the previous page visible while the next one loads to avoid flicker.",
          "Handle the race condition: abort the previous page request.",
        ],
        code: `const PAGE_SIZE = 10;
const [page, setPage] = useState(1);

// server responds with: { items: [...], total: 243 }
const { data, loading } = useFetch(
  "/api/employees?page=" + page + "&limit=" + PAGE_SIZE
);

const totalPages = data ? Math.ceil(data.total / PAGE_SIZE) : 0;

<button disabled={page === 1} onClick={() => setPage((p) => p - 1)}>Prev</button>
<span>{page} / {totalPages}</span>
<button disabled={page >= totalPages} onClick={() => setPage((p) => p + 1)}>Next</button>`,
      },
      {
        q: "How do you handle a large dropdown with thousands of records?",
        a: "Do not render thousands of <option>s. Either virtualize the list or fetch matching options from the server as the user types.",
        points: [
          "Virtualized list: render only the visible options (react-window, react-select with a windowed menu list).",
          "Async typeahead: the user types, the input is debounced, and the server returns the top 20 or so matches.",
          "Lazy load more on scroll (infinite scroll) if browsing is needed.",
          "Cache results and keep the selected option available even if it is not in the current page of results.",
          "Make it accessible: keyboard navigation and aria roles (combobox, listbox).",
        ],
        code: `function useDebounce(value, delay) {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const id = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(id);
  }, [value, delay]);
  return debounced;
}

const [text, setText] = useState("");
const search = useDebounce(text, 300);
const { data: options } = useFetch("/api/users?search=" + search + "&limit=20");`,
      },
      {
        q: "How do you disable selection for specific table rows?",
        a: "Decide eligibility from the row data, disable the checkbox for those rows, and make sure 'select all' only selects the eligible rows. Also guard the handler and validate on the server, because a disabled input is only a UI hint.",
        code: `const [selected, setSelected] = useState(new Set());
const selectable = rows.filter((r) => !r.locked);

const toggle = (row) => {
  if (row.locked) return; // guard in the handler too
  setSelected((prev) => {
    const next = new Set(prev);
    next.has(row.id) ? next.delete(row.id) : next.add(row.id);
    return next;
  });
};

const allSelected =
  selectable.length > 0 && selectable.every((r) => selected.has(r.id));

const toggleAll = () =>
  setSelected(allSelected ? new Set() : new Set(selectable.map((r) => r.id)));

<input type="checkbox" checked={allSelected} onChange={toggleAll} />

{rows.map((row) => (
  <tr key={row.id}>
    <td>
      <input
        type="checkbox"
        disabled={row.locked}
        checked={selected.has(row.id)}
        onChange={() => toggle(row)}
      />
    </td>
    <td>{row.name}</td>
  </tr>
))}`,
      },
      {
        q: "How do you prevent unnecessary API calls and re-renders?",
        a: "Fetch only when needed, share the result, and avoid triggering renders that change nothing.",
        points: [
          "Debounce typing and throttle scroll or resize handlers.",
          "Abort or ignore outdated requests (AbortController).",
          "Cache and deduplicate with React Query / SWR so many components share one request.",
          "Correct effect dependencies: do not create new objects or functions each render and list them as dependencies.",
          "Do not call fetch in render. Run it in an effect, an event handler, or a data library.",
          "Skip the call when the input is empty or unchanged.",
          "In development StrictMode runs effects twice on purpose, so always write cleanup.",
          "For re-renders: see 'How can we avoid unnecessary re-renders in React?'.",
        ],
      },
    ],
  },
  {
    title: "4. Architecture & Testing",
    items: [
      {
        q: "What is Micro Frontend Architecture?",
        a: "It extends the microservices idea to the front end. A large web app is split into smaller, independently developed, tested and deployed apps, usually owned by different teams and organised by business domain (checkout, search, profile). A shell or container app loads and composes them at runtime or build time.",
        points: [
          "Common techniques: Webpack Module Federation, single-spa, iframes, Web Components, build-time npm packages.",
          "Benefits: independent deployments, team autonomy, incremental upgrades or rewrites, different tech per team if needed.",
        ],
      },
      {
        q: "What are the disadvantages of Micro Frontends?",
        a: "The flexibility costs complexity.",
        points: [
          "Larger bundles: duplicated dependencies unless shared carefully.",
          "Inconsistent UX unless there is a shared design system.",
          "Communication and shared state between apps is harder (events, shared stores, contracts).",
          "Version compatibility and shared-library conflicts (for example two React versions).",
          "Harder end-to-end testing, debugging and observability across apps.",
          "More infrastructure and CI/CD to maintain, and a steeper learning curve.",
          "Overkill for small teams or small apps.",
        ],
      },
      {
        q: "What is React Testing Library?",
        a: "React Testing Library (RTL) is a testing utility that renders components into a DOM and lets you query and interact with them the way a user would: by role, label and text, rather than by implementation details like state or component instances. It works with Jest (or Vitest) as the test runner.",
        points: [
          "Guiding principle: the more your tests resemble how the software is used, the more confidence they give.",
          "Prefer getByRole, getByLabelText, getByText. Use test ids only as a last resort.",
          "getBy throws if missing, queryBy returns null (use it to assert absence), findBy waits (use it for async UI).",
          "user-event simulates real interactions (typing, clicking).",
        ],
      },
      {
        q: "How do you test React components?",
        a: "Use a mix of test types, with most tests at the cheaper levels (testing pyramid).",
        points: [
          "Unit: pure functions and custom hooks (renderHook).",
          "Component: render with RTL, interact with user-event, assert on what the user sees.",
          "Mock the network with jest.fn() on fetch or Mock Service Worker (MSW), not the component internals.",
          "Integration: several components together with providers (router, store).",
          "End-to-end: Cypress or Playwright against a running app for critical user flows.",
          "Cover loading, success, empty and error states.",
        ],
        code: `// EmployeeSearch.test.js (a real test lives in Examples/)
test("shows a message when nothing matches", () => {
  render(<EmployeeSearch />);
  fireEvent.change(screen.getByPlaceholderText("Search employees"), {
    target: { value: "zzz" },
  });
  expect(screen.getByText("No matching employees found")).toBeInTheDocument();
});
// user-event (userEvent.type) is the more realistic way to type, when installed`,
      },
      {
        q: "End to end testing",
        a: "End-to-end (E2E) tests drive a real browser against the running application (and usually a real or test backend) to verify complete user journeys such as login, search and checkout. They give the most confidence but are the slowest and flakiest, so keep them for the critical paths and cover the rest with unit and component tests.",
        points: [
          "Tools: Playwright, Cypress, Selenium.",
          "Use stable selectors (roles, labels, test ids) and built-in auto-waiting. Avoid fixed sleeps.",
          "Isolate test data and reset state between tests.",
          "Run in CI, and capture traces, screenshots or video on failure.",
        ],
        code: `import { test, expect } from "@playwright/test";

test("filters employees", async ({ page }) => {
  await page.goto("http://localhost:3000");
  await page.getByPlaceholder("Search employees").fill("john");
  await expect(page.getByRole("listitem")).toHaveCount(1);
});`,
      },
    ],
  },
  {
    title: "5. Real-Time Project & Production Scenarios",
    items: [
      {
        q: "Project discussion",
        a: "Prepare a 2-minute overview of your project, then be ready to go deep on one area. Cover: what the product does and who uses it, your role and team size, the tech stack, your biggest technical contribution, a challenge and how you solved it, and what you would improve.",
        points: [
          "Use STAR: Situation, Task, Action, Result. Put numbers on the result (load time down 40%, bundle down 300 KB).",
          "Know your own architecture: state management, data fetching, folder structure, testing, CI/CD, deployment.",
          "Only claim what you did. Interviewers drill into details.",
        ],
      },
      {
        q: "What is the hardest production issue you faced in your last project?",
        a: "This is a personal question. Prepare your own real story using the structure below. The example is only a template.",
        points: [
          "Situation: what broke and what the impact was (for example, the page crashed for users with large accounts).",
          "Investigation: how you reproduced it, which logs / monitoring / DevTools you used.",
          "Root cause: the actual cause (for example, a memory leak from an event listener that was never removed).",
          "Fix: what you changed, and how you rolled it out safely.",
          "Prevention: tests, alerts, lint rules, code-review checklist.",
          "Learning: what you would do differently.",
        ],
      },
      {
        q: "What performance issues did you face in your last project?",
        a: "Pick one or two real examples. Typical ones to choose from: slow initial load (big bundle), laggy search or filter input, a very large table or list, too many re-renders from context or props, duplicate API calls, large images, memory leaks from missing cleanup.",
      },
      {
        q: "How did you identify and resolve performance issues?",
        a: "Describe a measure, fix, re-measure loop.",
        points: [
          "Identify: React DevTools Profiler (why did this render), Chrome Performance and Network tabs, Lighthouse and Web Vitals, bundle analyzer, production monitoring.",
          "Resolve: apply the targeted fix (code splitting, virtualization, memoization, debounce, caching, pagination).",
          "Verify: measure again and report the improvement with numbers.",
          "Prevent: performance budgets in CI and monitoring.",
        ],
      },
      {
        q: "How do you use AI coding tools like Codex in development?",
        a: "Personalise this with how you really work. A solid answer shows that you use the tool to go faster while still owning the result.",
        points: [
          "Good uses: boilerplate and scaffolding, writing and extending tests, explaining unfamiliar code, refactoring, generating mock data, debugging hints, writing documentation.",
          "Always review the output: read the diff, run the tests, check security and edge cases. The generated code is my responsibility.",
          "Give clear context and constraints (stack, conventions, expected behaviour) and work in small steps.",
          "Never paste secrets or confidential customer data, and follow the company's policy for AI tools.",
          "Do not accept code I cannot explain.",
        ],
      },
    ],
  },
  {
    title: "6. Practical Coding Questions",
    items: [
      {
        q: "Build a React employee list with a search box (useMemo, keys, empty state)",
        a: "Show all employees first, filter as the user types, show 'No matching employees found' when nothing matches, show everything again when the box is cleared, use the employee id as the key, and use useMemo for the filtering. Because the filtered list is derived from the query, compute it during render with useMemo instead of keeping it in state and syncing it in useEffect (which causes an extra render and a frame of stale UI).",
        points: [
          "Declare the employees array outside the component so its reference is stable.",
          "An empty or whitespace-only query returns the full list.",
          "useMemo is an optimisation, not a necessity for four items. A plain variable would also be correct.",
        ],
        code: `const employees = [ /* outside the component */ ];

const EmployeeSearch = () => {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const search = query.trim().toLowerCase();
    if (!search) return employees;
    return employees.filter(
      (e) =>
        e.name.toLowerCase().includes(search) ||
        e.role.toLowerCase().includes(search)
    );
  }, [query]);

  return (
    <div>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
      {filtered.length === 0 ? (
        <p>No matching employees found</p>
      ) : (
        <ul>
          {filtered.map((e) => (
            <li key={e.id}>{e.name} - {e.role}</li>
          ))}
        </ul>
      )}
    </div>
  );
};`,
        demo: EmployeeSearch,
      },
      {
        q: "Write a custom hook for fetch",
        a: "A useFetch hook returns { data, loading, error } for a url. It must handle: checking res.ok (fetch does not reject on HTTP errors), cancelling the request on unmount or when the url changes (AbortController, which also prevents race conditions), and ignoring the AbortError.",
        code: `const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    setError(null);

    (async () => {
      try {
        const res = await fetch(url, { signal: controller.signal });
        if (!res.ok) throw new Error("Request failed with status " + res.status);
        setData(await res.json());
        setLoading(false);
      } catch (err) {
        if (err.name === "AbortError") return;
        setError(err.message);
        setLoading(false);
      }
    })();

    return () => controller.abort();
  }, [url]);

  return { data, loading, error };
};

// usage
const { data: users, loading, error } = useFetch("https://jsonplaceholder.typicode.com/users");`,
        demo: UsersFetchDemo,
      },
      {
        q: "Convert an array of objects to an object (name as the key, other fields as the value)",
        a: "Use Object.fromEntries with map. Destructure the key field out of each item and keep everything else with the rest operator, so any extra fields (like color) are preserved without being listed. If the key field has a different name in your data, destructure that name instead (the destructured name must match the property).",
        points: [
          "Input: [{ name: 'bob', type: 'human' }, { name: 'sparkling', type: 'water', color: 'white' }, ...]",
          "Output: { bob: { type: 'human' }, sparkling: { type: 'water', color: 'white' }, ... }",
        ],
        code: `const output = Object.fromEntries(
  test.map(({ name, ...rest }) => [name, rest])
);

// 1. destructure: { name, ...rest } takes name out; rest holds everything else
// 2. map: each item becomes a [key, value] pair
// 3. Object.fromEntries: array of pairs -> object

// reduce alternative
const output2 = test.reduce((acc, { name, ...rest }) => {
  acc[name] = rest;
  return acc;
}, {});`,
        demo: CodingProblemsDemo,
      },
      {
        q: "Convert [{ Item: 'A', Quantity: 2 }, ...] to { A: 2, B: 7, C: 10 }",
        a: "Same pattern. Here the value is a single field, so there is no rest to keep.",
        code: `const result = Object.fromEntries(
  arr.map(({ Item, Quantity }) => [Item, Quantity])
);
// { A: 2, B: 7, C: 10 }

// reduce
const result2 = arr.reduce((acc, { Item, Quantity }) => {
  acc[Item] = Quantity;
  return acc;
}, {});`,
        points: [
          "Use fromEntries when each item maps to exactly one unique key.",
          "Use reduce when you need grouping, counting or summing (several items share a key).",
        ],
      },
    ],
  },
  {
    title: "7. CSS and Scenario-Based Questions",
    items: [
      {
        q: "Flex box",
        a: "Flexbox is a one-dimensional CSS layout model that arranges items along a main axis (row or column) and a cross axis, distributing space and aligning items. Set display: flex on the container and the children become flex items.",
        points: [
          "Container: flex-direction, flex-wrap, justify-content (main axis), align-items (cross axis), gap.",
          "Items: flex-grow, flex-shrink, flex-basis (shorthand: flex), align-self, order.",
          "Flexbox is 1D (a row or a column). CSS Grid is 2D (rows and columns together).",
          "justify-content: space-between puts the first and last item at the edges and shares the remaining space between items.",
        ],
        code: `/* center anything horizontally and vertically */
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* responsive row of cards */
.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}
.card {
  flex: 1 1 200px; /* grow, shrink, min width 200px */
}`,
      },
      {
        q: "Scenario: the search box fires an API call on every keystroke and results flicker or arrive in the wrong order",
        a: "Debounce the input (300 ms) so fewer requests are sent, and abort the previous request (AbortController in the effect cleanup) so a slow, older response can never overwrite a newer one. A data library such as React Query handles both and adds caching.",
      },
      {
        q: "Scenario: the page freezes after loading 10,000 rows",
        a: "Rendering 10,000 DOM rows is the problem. Use server-side pagination or virtualization, memoize the row component, keep selection state in one place, and move any sorting or filtering heavy work to the server or into useMemo.",
      },
      {
        q: "Scenario: one broken widget turns the whole page white",
        a: "An error thrown during render unmounts the whole React tree. Wrap independent widgets and routes in error boundaries with a fallback UI, and log the error to a monitoring service. Remember that boundaries do not catch event handler or async errors, so use try / catch there.",
      },
      {
        q: "Scenario: many components need the same API data",
        a: "Fetching it in each component duplicates requests. Fetch once and share it: lift the state up, use context, or (best) use a data-fetching cache such as React Query / SWR / RTK Query, which dedupes requests, caches responses, and handles loading, error and refetching.",
      },
      {
        q: "Scenario: a value shown on screen is out of date after a fast interaction",
        a: "Usually a stale closure (an effect or callback captured an old render's value) or a race condition between two requests. Fix the dependency array or use a functional state update, and cancel or ignore outdated requests.",
      },
    ],
  },
];

export default questions;
