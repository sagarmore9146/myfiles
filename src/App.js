// import logo from "./logo.svg";
// import "./App.css";

// import { Navigate, Route, Routes } from "react-router-dom";
// import { LoginComponent } from "./auth/LoginComponent";
// import { PagesComponent } from "./pages/PagesComponent";
import { Counter } from "./Counter/Counter";

function App() {
  return (
    <div className="App-component">
      {/* <Routes>
        <Route
          path="/"
          element={<Navigate to={"/login"} replace={true} />}
        ></Route>
        <Route path="login" element={<LoginComponent></LoginComponent>}></Route>
        <Route path="pages" element={<PagesComponent></PagesComponent>}></Route>
      </Routes> */}
      <br></br>
      <Counter></Counter>
    </div>
  );
}

export default App;
