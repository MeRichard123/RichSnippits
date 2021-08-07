# React JS

### Calling Functions in useEffect:

_useEffect has missing dependency x either add it to the dependency array or remove the dependency array entirely_.

One way to solve this is to move the whole function inside of useEffect, but I think it's cleaner if it says outside:

```javascript
import { useRef, useState } from "react";

// Inside my component
const [data, setData] = useState([]);
// Define an empty ref
const getUserData = useRef(() => {});

getUserData.current = async () => {
  const res = await axios.get("https://someendpoint.io/data");
  setData(res.data);
};

useEffect(() => {
  getUserData.current();
  //   Empty dependency array: only call on mount
}, []);
```

### Make Scrollable Fixed Navbar:

When scrolling down navbar gets a new background Color and change it height.
make sure you return in useEffect before you change your component.
[Live link](https://codesandbox.io/s/react-scroll-navbar-z76ig)

```jsx
import React, { useState, useEffect } from "react";
export default function App() {
  const [navSize, setnavSize] = useState("10rem");
  const [navColor, setnavColor] = useState("transparent");
  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("#252734") : setnavColor("transparent");
    window.scrollY > 10 ? setnavSize("5rem") : setnavSize("10rem");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <div>
      <nav
        style={{
          backgroundColor: navColor,
          height: navSize,
          transition: "all 1s",
        }}
      >
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Project</li>
          <li>Skills</li>
          <li>Contact </li>
        </ul>
      </nav>
    </div>
  );
}
```

### useCallback for onChange state changes

We can memoize the state function and hold on to the value rather than recreating the value.
This could have some performance advantages however there really isn't much difference whether your
handlers are inline or not.

```jsx
import {useState, useCallback} from "react";

const App = () => {
  const [search, updateSearch] = useState("");
  const onSearchChange = useCallback((evt)=> updateSearch(evt.target.value), [])

  return(
    <input
      value={search}
      placeholder="Enter a value"
      onChange={onSearchChange}
    />
  )
}
```

### Using Styled Components with Framer Motion
We can use styled components with framer motion by using the styled() function.

```jsx
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AnimContainer = styled(motion.div)`
  position: absolute;
  inset: 0;
  background: green;
`;

const Component = () => {
  return (
    <AnimContainer
        initial={{ y: -250 }}
        animate={{ y: -10 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
    >
      Content
    </AnimContainer>
  )
}
```