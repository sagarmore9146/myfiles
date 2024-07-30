// import logo from "./logo.svg";
// import "./App.css";

import { Navigate, Route, Routes } from "react-router-dom";
import { LoginComponent } from "./auth/LoginComponent";
import { PagesComponent } from "./pages/PagesComponent";

function App() {
  return (
    <div className="App-component">
      <Routes>
        <Route
          path="/"
          element={<Navigate to={"/login"} replace={true} />}
        ></Route>
        <Route path="login" element={<LoginComponent></LoginComponent>}></Route>
        <Route path="pages" element={<PagesComponent></PagesComponent>}></Route>
      </Routes>
    </div>
  );
}

export default App;
