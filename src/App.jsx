import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NetflixProvider } from "./contex/NetflixContext";
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <NetflixProvider>
        <BrowserRouter>
          <Routes>
            <Route Component={DefaultLayout}>
              <Route path="/" element={<HomePage />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </NetflixProvider>
    </>
  );
}

export default App;
