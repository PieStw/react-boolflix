import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";

export default function DefaultLayout() {
  return (
    <>
      <div className="wrapper">
        <Header></Header>

        <main>
          <Outlet></Outlet>
        </main>
      </div>
    </>
  );
}
