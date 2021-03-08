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
