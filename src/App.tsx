// App.tsx
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/home/HomePage";

function App() {
  return (
    <Routes>
      <Route element={<HomePage />} path="/" />
      {/* Other routes will be added here */}
    </Routes>
  );
}

export default App;
