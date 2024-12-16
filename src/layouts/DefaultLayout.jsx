import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

export default function DefaultLayout() {
  return (
    <>
      <div className="page-wrapper">
        <header>
          <Navbar />
        </header>
        <main className="container mt-4">
          <Outlet />
        </main>
      </div>
    </>
  );
}
