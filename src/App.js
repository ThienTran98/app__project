import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import LayoutInvestor from "./HOC/LayoutInvestor";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <LayoutInvestor title="Danh sách các ý tưởng" decs="Danh sách các ý tưởng startup đang gọi vốn">
                <HomePage />
              </LayoutInvestor>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
