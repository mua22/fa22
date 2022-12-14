import { Route, Routes } from "react-router-dom";
import CheckLogin from "./components/auth/CheckLogin";
import Login from "./components/auth/Login";
import Cars from "./components/cars/Cars";
import EditCar from "./components/cars/EditCar";
import Dashboard from "./components/views/Dashboard";
import NavBar from "./components/views/NavBar";

function App() {
  return (
    <div className="page-heading">
      <div style={{ float: "left", width: "30%" }}>
        <NavBar />
      </div>
      <div style={{ float: "right", width: "65%" }}>
        <h1 style={{ borderBottom: "5px dashed blue" }}>Hello B Section</h1>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/cars/:id"
            element={
              <CheckLogin>
                <EditCar />
              </CheckLogin>
            }
          />
          <Route
            path="/cars"
            element={
              <CheckLogin>
                <Cars />
              </CheckLogin>
            }
          />
          <Route path="/" element={<Dashboard />}>
            <Route path="*" element={<h1>Page Not Found</h1>} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
