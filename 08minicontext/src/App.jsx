import React, { useState } from "react";
import UserContextProvider from "./context/UserContextProvider";
import Profile from "./components/Profile";
import Login from "./components/login";


function App() {
  const [count, setCount] = useState(0);

  return (
    <UserContextProvider>
      <h1>React With Gram Paneer and Neembu</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
