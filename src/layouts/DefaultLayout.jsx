import { Outlet } from "react-router-dom";

export default function DefaultLayout() {
  return (
    <>
      <div className="wrapper">
        <header>
          <h1>ciao</h1>
        </header>

        <main>
          <Outlet></Outlet>
        </main>
      </div>
    </>
  );
}
