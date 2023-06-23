import "./App.css";
import { TrackerPage } from "./pages/TrackerPage";
import { ExpensePage } from "./pages/ExpensePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TrackerPage />} />
          <Route path="/expenses" element={<ExpensePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
