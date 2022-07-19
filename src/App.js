import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import PageNotFound from "./components/PageNotFound";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/ALL-IN-ONE-PROJECT-CRUD-OPERATION-WITHOUT-API"
          element={<Home />}
          exact={true}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
